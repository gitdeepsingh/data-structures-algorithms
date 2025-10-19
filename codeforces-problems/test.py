#%%
import matplotlib.pyplot as plt
import numpy as np

# Data from the research - themes on x-axis, experience groups as bars
themes = ['Collab', 'Threat', 'Upskill', 'Product Develop']
experience_groups = ['<5 yrs', '5-10 yrs', '>10 yrs']

# Frequency data for each theme by experience group
data = {
    'Collab': [4, 9, 4],
    'Threat': [4, 7, 4], 
    'Upskill': [3, 9, 5],
    'Product Develop': [4, 10, 5]
}

# Create a simple bar chart with themes on x-axis
fig, ax = plt.subplots(figsize=(10, 6))

# Set up bar positions
bar_width = 0.25
x = np.arange(len(themes))

# Different shades of blue - from light to dark
colors = ['#87CEEB', '#4682B4', '#191970']  # Sky Blue, Steel Blue, Midnight Blue

for i, exp_group in enumerate(experience_groups):
    values = [data[theme][i] for theme in themes]
    ax.bar(x + i * bar_width, values, bar_width, 
           label=exp_group, color=colors[i], edgecolor='white', linewidth=1)

# Basic formatting - simple and clean
ax.set_xlabel('Theme', fontsize=12)
ax.set_ylabel('Frequency', fontsize=12)
ax.set_title('Theme Frequency by Years of Experience', fontsize=14)
ax.set_xticks(x + bar_width)
ax.set_xticklabels(themes)
ax.legend(loc='upper right')
ax.grid(axis='y', alpha=0.3)

# Clean styling
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.set_facecolor('white')

plt.tight_layout()
plt.show()



# %%
import matplotlib.pyplot as plt
import numpy as np

# Data for AI Concerns Intensity
themes = ['Job Security', 'Skill Obsolescence', 'Ethical Risks', 'Workflow Disruption']
experience_levels = ['Early-career', 'Mid-career', 'Senior']

# Intensity data (scale 1-5, where 5 is highest concern)
# Based on research patterns from previous conversation
intensity_data = np.array([
    [4, 3, 2],  # Job Security: High for early-career, decreases with experience
    [4, 4, 3],  # Skill Obsolescence: High for early/mid-career, medium for senior
    [2, 4, 4],  # Ethical Risks: Low for early-career, high for mid/senior
    [3, 3, 2]   # Workflow Disruption: Medium across all, slightly lower for senior
])

# Create simple heatmap
fig, ax = plt.subplots(figsize=(8, 6))

# Create heatmap with blue color scheme
im = ax.imshow(intensity_data, cmap='Blues', aspect='auto', vmin=1, vmax=5)

# Set labels
ax.set_xticks(np.arange(len(experience_levels)))
ax.set_yticks(np.arange(len(themes)))
ax.set_xticklabels(experience_levels)
ax.set_yticklabels(themes)

# Add intensity values in each cell
for i in range(len(themes)):
    for j in range(len(experience_levels)):
        text = ax.text(j, i, intensity_data[i, j], 
                      ha="center", va="center", color="white", 
                      fontweight='bold', fontsize=12)

# Formatting
ax.set_xlabel('Experience Level', fontsize=12)
ax.set_ylabel('AI Concern Themes', fontsize=12)
ax.set_title('Intensity of AI Concerns', fontsize=14, pad=20)

# Add colorbar
cbar = plt.colorbar(im, ax=ax, shrink=0.8)
cbar.set_label('Intensity Level (1-5)', rotation=270, labelpad=20)

# Clean styling
ax.set_xticks(np.arange(len(experience_levels)+1)-.5, minor=True)
ax.set_yticks(np.arange(len(themes)+1)-.5, minor=True)
ax.grid(which="minor", color="white", linestyle='-', linewidth=2)

plt.tight_layout()
plt.show()

# %%
# 1. Line Chart: Theme Trends by Experience Level
import matplotlib.pyplot as plt
import numpy as np

themes = ['Job Security', 'Skill Obsolescence', 'Ethical Risks', 'Workflow Disruption']
experience_levels = ['Early-career', 'Mid-career', 'Senior']
# Intensity data (scale 1–5)
intensity = np.array([
    [4, 3, 2],   # Job Security
    [4, 4, 3],   # Skill Obsolescence
    [2, 4, 4],   # Ethical Risks
    [3, 3, 2]    # Workflow Disruption
])

for i, theme in enumerate(themes):
    plt.plot(experience_levels, intensity[i], marker='o', label=theme)

plt.title('AI Concern Intensity by Experience Level')
plt.xlabel('Experience Level')
plt.ylabel('Intensity (1–5)')
plt.grid(True, linestyle='--', alpha=0.5)
plt.legend(title='Themes', bbox_to_anchor=(1.05, 1), loc='upper left')
plt.tight_layout()
plt.show()

# %%
# 2. Pie Chart: Overall Theme Distribution (sum across experience levels)
import matplotlib.pyplot as plt

themes = ['Job Security', 'Skill Obsolescence', 'Ethical Risks', 'Workflow Disruption']
# Sum intensity across experience levels
values = [sum([4,3,2]), sum([4,4,3]), sum([2,4,4]), sum([3,3,2])]  # [9, 11, 10, 8]

colors = ['#87CEEB', '#4682B4', '#1E90FF', '#191970']

plt.pie(values, labels=themes, autopct='%1.1f%%', startangle=140, colors=colors,
        wedgeprops={'edgecolor':'white'})
plt.title('Overall Distribution of AI Concern Intensity')
plt.axis('equal')
plt.show()

# %%
import matplotlib.pyplot as plt
import numpy as np

# Themes and intensity data for each experience level (from your attached table)
themes = ['Job Security', 'Skill Obsolescence', 'Ethical Risks', 'Workflow Disruption']
early = [4, 4, 2, 3]    # Example intensity values for Early-career
mid   = [3, 4, 4, 3]    # Example intensity values for Mid-career
senior= [2, 3, 4, 2]    # Example intensity values for Senior

# Bar settings
bar_width = 0.25
x = np.arange(len(themes))

# Create figure and axes
fig, ax = plt.subplots(figsize=(8, 5))

# Plot bars
ax.bar(x - bar_width, early, width=bar_width, label='Early-career', color='#87CEEB', edgecolor='white')
ax.bar(x           , mid  , width=bar_width, label='Mid-career' , color='#4682B4', edgecolor='white')
ax.bar(x + bar_width, senior, width=bar_width, label='Senior'     , color='#1E90FF', edgecolor='white')

# Labels and title
ax.set_xticks(x)
ax.set_xticklabels(themes, rotation=30, ha='right')
ax.set_ylabel('Intensity (1–5)')
ax.set_title('Intensity of AI Concerns by Experience Level')

# Legend and grid
ax.legend(loc='upper right')
ax.grid(axis='y', alpha=0.3)

# Styling for a clean look
for spine in ['top','right']:
    ax.spines[spine].set_visible(False)
ax.set_axisbelow(True)

plt.tight_layout()
plt.show()


# %%
import matplotlib.pyplot as plt
import pandas as pd

# Define data
data = {
    'Theme': ['Job Security', 'Skill Obsolescence', 'Ethical Risks', 'Workflow Disruption'],
    'Early-career': [5, 5, 2, 3],
    'Mid-career': [4, 3, 4, 5],
    'Senior': [1, 1, 4, 3]
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Function to convert count to bar symbols
def bars(n):
    return '▮' * n

# Apply formatting
df['Early-career'] = df['Early-career'].apply(bars)
df['Mid-career'] = df['Mid-career'].apply(bars)
df['Senior'] = df['Senior'].apply(bars)

# Plot using matplotlib table
fig, ax = plt.subplots(figsize=(8, 3))
ax.axis('off')
table = ax.table(
    cellText=df.values,
    colLabels=df.columns,
    cellLoc='center',
    loc='center',
)

# Styling
table.auto_set_font_size(False)
table.set_fontsize(12)
table.scale(1.2, 1.8)  # Increase size

# Set background white
fig.patch.set_facecolor('white')

plt.tight_layout()
plt.show()

# %%
import matplotlib.pyplot as plt
import numpy as np

# Data
themes = ['Collab', 'Threat', 'Upskill', 'Product']
exp_labels = ['<5 yrs', '5-10 yrs', '>10 yrs']
data = {
    '<5 yrs': [4, 4, 3, 4],
    '5-10 yrs': [4, 4, 5, 5],
    '>10 yrs': [9, 7, 9, 10]
}

# Bar positions
x = np.arange(len(themes))
width = 0.25

# Plot
fig, ax = plt.subplots()
ax.bar(x - width, data['<5 yrs'], width=width, label='<5 yrs', color='#29B6F6')
ax.bar(x, data['5-10 yrs'], width=width, label='5-10 yrs', color='#FFD54F')
ax.bar(x + width, data['>10 yrs'], width=width, label='>10 yrs', color='#FFB74D')

# Labels
ax.set_xlabel("Theme")
ax.set_ylabel("Years of Exp")
ax.set_title("Theme Frequency by Years of Experience")
ax.set_xticks(x)
ax.set_xticklabels(themes)
ax.legend()

plt.grid(axis='y', linestyle='--', alpha=0.3)
plt.tight_layout()
plt.show()

# %%
fig, ax = plt.subplots()

# Stack values
bar1 = np.array(data['<5 yrs'])
bar2 = np.array(data['5-10 yrs'])
bar3 = np.array(data['>10 yrs'])

ax.bar(themes, bar1, label='<5 yrs', color='#29B6F6')
ax.bar(themes, bar2, bottom=bar1, label='5-10 yrs', color='#FFD54F')
ax.bar(themes, bar3, bottom=bar1 + bar2, label='>10 yrs', color='#FFB74D')

# Labels
ax.set_ylabel("Total Frequency")
ax.set_title("Stacked Theme Frequency by Experience")
ax.legend()
plt.grid(axis='y', linestyle='--', alpha=0.3)
plt.tight_layout()
plt.show()

# %%
import seaborn as sns
import pandas as pd

# Create DataFrame
df = pd.DataFrame(data, index=themes)

# Plot heatmap
plt.figure(figsize=(6, 4))
sns.heatmap(df, annot=True, cmap="YlOrBr", cbar=False, linewidths=0.5)
plt.title("Theme Frequency by Experience (Heatmap)")
plt.xlabel("Experience")
plt.ylabel("Theme")
plt.tight_layout()
plt.show()

# %%
import matplotlib.pyplot as plt
import numpy as np

# Data
themes = ['Collaboration', 'Job Threat', 'Upskill', 'Product Develop']
exp_labels = ['<5 yrs', '5–10 yrs', '>10 yrs']
data = {
    '<5 yrs': [4, 4, 3, 4],
    '5–10 yrs': [9, 7, 9, 10],
    '>10 yrs': [4, 4, 5, 5]
}

# Plot config
x = np.arange(len(themes))
width = 0.25

# Professional muted colors
colors = ['#999999', '#cccccc', '#666666']

# Set font globally
plt.rcParams.update({'font.size': 11, 'font.family': 'DejaVu Serif'})

# Create plot
fig, ax = plt.subplots(figsize=(6, 4))
ax.bar(x - width, data['<5 yrs'], width=width, label='<5 yrs', color=colors[0])
ax.bar(x, data['5–10 yrs'], width=width, label='5–10 yrs', color=colors[1])
ax.bar(x + width, data['>10 yrs'], width=width, label='>10 yrs', color=colors[2])

# Labels and layout
ax.set_xlabel("Theme", fontsize=12)
ax.set_ylabel("Frequency", fontsize=12)
ax.set_title("Theme Frequency by Years of Experience", fontsize=13)
ax.set_xticks(x)
ax.set_xticklabels(themes)
ax.set_ylim(0, 11)

# Minimal grid
ax.yaxis.grid(True, linestyle='--', alpha=0.3)
ax.spines[['top', 'right']].set_visible(False)

# Legend: minimal and clean
ax.legend(frameon=True, fontsize=8)

plt.tight_layout()
plt.show()

# %%
