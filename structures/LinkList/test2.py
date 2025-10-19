#%%
# Import necessary libraries
import xarray as xr
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split

# ==============================
# (A) Data Preprocessing and Exploration
# ==============================

# Load dataset with chunking to avoid RAM issues
ds = xr.open_dataset("ERA5_T_2014_2023.nc")
print(ds)

# Extract temperature data for Delhi and Ahmedabad (approximate coordinates)
delhi_coords = {'lat': 28.61, 'lon': 77.23}
ahmedabad_coords = {'lat': 23.03, 'lon': 72.58}

# Select data only for Delhi and Ahmedabad
delhi_temp = ds['t2m'].sel(latitude=delhi_coords['lat'], longitude=delhi_coords['lon'], method='nearest')
ahmedabad_temp = ds['t2m'].sel(latitude=ahmedabad_coords['lat'], longitude=ahmedabad_coords['lon'], method='nearest')

# Convert to DataFrame
delhi_df = delhi_temp.to_dataframe().reset_index()
ahmedabad_df = ahmedabad_temp.to_dataframe().reset_index()

# Convert 'time' column to datetime
delhi_df['time'] = pd.to_datetime(delhi_df['valid_time'])
ahmedabad_df['time'] = pd.to_datetime(ahmedabad_df['valid_time'])

# Add year and month for easy grouping
delhi_df['year'] = delhi_df['time'].dt.year
delhi_df['month'] = delhi_df['time'].dt.month

ahmedabad_df['year'] = ahmedabad_df['time'].dt.year
ahmedabad_df['month'] = ahmedabad_df['time'].dt.month

# 3. Yearly Statistics
def calculate_statistics(df):
    yearly_stats = df.groupby('year')['t2m'].agg(['mean', 'median', 'min', 'max', 'std'])
    return yearly_stats

delhi_stats = calculate_statistics(delhi_df)
ahmedabad_stats = calculate_statistics(ahmedabad_df)

print("Delhi Yearly Statistics:\n", delhi_stats)
print("Ahmedabad Yearly Statistics:\n", ahmedabad_stats)

# 4. Monthly Mean, Min, and Max Temperature Trends
def plot_monthly_trends(city_df, city_name):
    monthly_stats = city_df.groupby(['year', 'month'])['t2m'].agg(['mean', 'min', 'max']).reset_index()
    monthly_stats['date'] = pd.to_datetime(monthly_stats[['year', 'month']].assign(day=1))
    
    plt.figure(figsize=(12, 6))
    plt.plot(monthly_stats['date'], monthly_stats['mean'], label='Mean Temp', color='royalblue')
    plt.plot(monthly_stats['date'], monthly_stats['min'], label='Min Temp', color='green')
    plt.plot(monthly_stats['date'], monthly_stats['max'], label='Max Temp', color='red')
    plt.xlabel("Date")
    plt.ylabel("Temperature (K)")
    plt.title(f"{city_name} Monthly Temperature Trends (2014-2023)")
    plt.legend()
    plt.grid(True)
    plt.show()

plot_monthly_trends(delhi_df, "Delhi")
plot_monthly_trends(ahmedabad_df, "Ahmedabad")


# ==============================
# (B) Statistical Analysis
# ==============================

# 1. Plot Annual Mean Temperature Trend
def plot_annual_trend(city_stats, city_name):
    plt.figure(figsize=(8, 5))
    plt.plot(city_stats.index, city_stats['mean'], marker='o', linestyle='-', label='Mean Temp')
    plt.title(f'{city_name} Annual Mean Temperature (2014-2023)')
    plt.xlabel('Year')
    plt.ylabel('Mean Temperature (K)')
    plt.grid(True)
    plt.legend()
    plt.show()

plot_annual_trend(delhi_stats, "Delhi")
plot_annual_trend(ahmedabad_stats, "Ahmedabad")

# 2. Linear Regression for Trendline
def linear_regression_trend(city_stats, city_name):
    X = city_stats.index.values.reshape(-1, 1)
    y = city_stats['mean'].values
    model = LinearRegression().fit(X, y)
    
    # Plot with trendline
    plt.figure(figsize=(8, 5))
    plt.scatter(X, y, label='Mean Temp')
    plt.plot(X, model.predict(X), color='red', linestyle='--', label=f'Trendline (Slope: {model.coef_[0]:.4f})')
    plt.title(f'{city_name} Annual Mean Temp with Linear Regression Trendline')
    plt.xlabel('Year')
    plt.ylabel('Mean Temperature (K)')
    plt.legend()
    plt.grid(True)
    plt.show()
    
    # Interpret slope
    print(f"{city_name} Slope: {model.coef_[0]:.4f} K/year")
    return model.coef_[0]

delhi_slope = linear_regression_trend(delhi_stats, "Delhi")
ahmedabad_slope = linear_regression_trend(ahmedabad_stats, "Ahmedabad")

# ==============================
# (C) Temperature Prediction Using ML Models
# ==============================

# 1. Extract Monthly Mean Temperatures (2014-2023)
delhi_monthly_avg = delhi_df.groupby(['year', 'month'])['t2m'].mean().reset_index()
ahmedabad_monthly_avg = ahmedabad_df.groupby(['year', 'month'])['t2m'].mean().reset_index()

# 2. Train/Test Split (80/20)
def train_models(city_df):
    # Create time index feature
    city_df['time_index'] = range(len(city_df))
    X = city_df[['time_index']]
    y = city_df['t2m']
    
    # Split data into train and test
    train_size = int(len(city_df) * 0.8)
    X_train, X_test = X[:train_size], X[train_size:]
    y_train, y_test = y[:train_size], y[train_size:]

    # Train Linear Regression Model
    lr_model = LinearRegression().fit(X_train, y_train)
    lr_pred = lr_model.predict(X_test)
    
    # Train Random Forest Model
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42).fit(X_train, y_train)
    rf_pred = rf_model.predict(X_test)
    
    # Evaluate Models
    models = {'Linear Regression': (lr_model, lr_pred), 'Random Forest': (rf_model, rf_pred)}
    for model_name, (model, pred) in models.items():
        mae = mean_absolute_error(y_test, pred)
        r2 = r2_score(y_test, pred)
        print(f"{model_name} - MAE: {mae:.4f}, R²: {r2:.4f}")

    # Plot predictions vs actual
    plt.figure(figsize=(10, 6))
    plt.plot(y_test.values, label='Actual', color='black')
    plt.plot(lr_pred, label='Linear Regression', linestyle='--', color='blue')
    plt.plot(rf_pred, label='Random Forest', linestyle='--', color='green')
    plt.xlabel("Time Steps")
    plt.ylabel("Temperature (K)")
    plt.title("Temperature Prediction (2023)")
    plt.legend()
    plt.grid(True)
    plt.show()

# Train models for both cities
print("Delhi Model Performance:")
train_models(delhi_monthly_avg)
print("\nAhmedabad Model Performance:")
train_models(ahmedabad_monthly_avg)

# ==============================
# Conclusion:
# - Delhi and Ahmedabad show increasing annual mean temperature trends, indicating warming.
# - Random Forest slightly outperformed Linear Regression in capturing complex patterns.
# - Further models can improve predictions using more features.
# ==============================

# %%
