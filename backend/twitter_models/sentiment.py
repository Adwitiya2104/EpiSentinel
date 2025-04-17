from pytrends.request import TrendReq
from textblob import TextBlob
import pandas as pd
import matplotlib.pyplot as plt
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)
# Initialize pytrends
pytrends = TrendReq()

# Queries
queries = ["flu", "covid", "cough", "fatigue"]

trend_results = {}

for query in queries:
    print(f"Fetching data for: {query}")
    pytrends.build_payload([query], timeframe='now 7-d', geo='US')
    try:
        trend_data = pytrends.interest_over_time()
        trend_results[query] = trend_data
        print(f"Fetched data for {query} successfully.")
    except Exception as e:
        print(f"Failed to fetch data for {query}: {e}")

# Analyze sentiment on the data's textual representation
sentiment_results = []
for query, df in trend_results.items():
    if df.empty:
        continue
    # Perform sentiment analysis
    combined_text = " ".join([str(val) for val in df[query]])
    sentiment = TextBlob(combined_text).sentiment
    sentiment_results.append({
        "query": query,
        "polarity": sentiment.polarity,
        "subjectivity": sentiment.subjectivity
    })

# Save sentiment results
sentiment_df = pd.DataFrame(sentiment_results)
sentiment_df.to_csv('GoogleTrends_Sentiment.csv', index=False)

# Visualization
for query, df in trend_results.items():
    if not df.empty:
        plt.plot(df.index, df[query], label=query)

plt.xlabel('Date')
plt.ylabel('Search Interest')
plt.title('Google Trends Over Time')
plt.legend()
plt.show()
