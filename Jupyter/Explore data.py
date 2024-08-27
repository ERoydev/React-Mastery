import pandas as pd
import numpy as np
import matplotlib.pyplot as plt


# Generate synthetic data
np.random.seed(0)

years = np.arange(2010, 2024)
countries = ['Bugaria', 'England', 'Germany']

data = []

for country in countries:
    population = np.random.randint(30_000_000, 80_000_000)
    gdp_per_capital = np.random.randint(8_000, 15_000)
    growth_rate = np.random.uniform(0.5, 2.0)

    for year in years:
        population += int(population * (growth_rate / 100))
        gdp_per_capital += np.random.randint(200, 800)
        
        data.append([year, country, population, gdp_per_capital, growth_rate])
        
    

    data.append([year, country, population, gdp_per_capital, growth_rate])

# Create a DataFrame
df = pd.DataFrame(data, columns=['Year', 'Country', 'Population', 'GDP_per_capital', 'Population_Growth_Rate'])

# Medians
population_median = df['Population'].median()
gdp_per_capital_median = df['GDP_per_capital'].median()

# Mean
average_population = df['Population'].mean()
average_gdp_per_capital = df['GDP_per_capital'].mean()

years = df.Year.unique()
weights = df.Population['Bulgaria']

