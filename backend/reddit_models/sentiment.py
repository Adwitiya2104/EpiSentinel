import pandas as pd
import praw
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import seaborn as sns
import matplotlib.pyplot as plt

# Initialize Reddit API connection
reddit = praw.Reddit(client_id='',
    client_secret='',
    user_agent='')

# Define search queries and the number of posts to retrieve
queries = ["flu", "covid", "fever", "rash", "fatigue", "virus", "outbreak", "pneumonia", 
           "nausea", "diarrhea", "rsv", "cold", "sick", "chills", "illness", "contagious", 
           "hospital", "vaccine"]
num_posts = 100  # Define how many posts you want to fetch

# Initialize the sentiment analyzer
analyzer = SentimentIntensityAnalyzer()

# Function to get sentiment from text
def get_sentiment(text):
    score = analyzer.polarity_scores(text)
    if score['compound'] >= 0.05:
        return 'positive'
    elif score['compound'] <= -0.05:
        return 'negative'
    else:
        return 'neutral'

# Create a list to store the reddit data
reddit_data = []

# Fetch posts based on queries
for query in queries:
    print(f"Fetching posts for query: {query}")
    for submission in reddit.subreddit('all').search(query, limit=num_posts):
        sentiment = get_sentiment(submission.title + " " + submission.selftext)
        reddit_data.append({
            'Title': submission.title,
            'Text': submission.selftext,
            'Sentiment': sentiment
        })

# Convert to DataFrame
reddit_df = pd.DataFrame(reddit_data)

# Print the sentiment distribution
sentiment_counts = reddit_df['Sentiment'].value_counts()
print("\nSentiment Counts:")
print(sentiment_counts)

# Print the first few rows of the DataFrame
print("\nFirst 5 entries in the DataFrame:")
print(reddit_df.head())

# Plot the sentiment distribution
plt.figure(figsize=(8, 6))
sns.countplot(data=reddit_df, x='Sentiment', order=['positive', 'neutral', 'negative'], palette='viridis', hue='Sentiment', dodge=False, legend=False)
plt.title('Sentiment Distribution')
plt.xlabel('Sentiment')
plt.ylabel('Post Count')
plt.show()

# Save the result to a CSV file
reddit_df.to_csv('reddit_sentiment_analysis.csv', index=False)
