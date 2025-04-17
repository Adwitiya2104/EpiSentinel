import pandas as pd
import re
from googleapiclient.discovery import build
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
import matplotlib.pyplot as plt
import seaborn as sns

# YouTube Data API configuration
API_KEY = 'AIzaSyBXjAPUUoxrm92TypdoMphAOaxfKod82d8'
youtube = build('youtube', 'v3', developerKey=API_KEY)

# Function to search for videos based on a query
def search_videos(query, max_results=10):
    video_ids = []
    request = youtube.search().list(
        part="snippet",
        q=query,
        type="video",
        maxResults=max_results
    )
    response = request.execute()

    for item in response['items']:
        video_ids.append(item['id']['videoId'])
    
    return video_ids

# Function to fetch comments from a YouTube video
def fetch_comments(video_id):
    comments = []
    try:
        request = youtube.commentThreads().list(
            part="snippet",
            videoId=video_id,
            maxResults=100
        )
        response = request.execute()

        while response:
            for item in response.get('items', []):
                comment = item['snippet']['topLevelComment']['snippet']['textDisplay']
                comments.append(comment)
            
            if 'nextPageToken' in response:
                request = youtube.commentThreads().list(
                    part="snippet",
                    videoId=video_id,
                    maxResults=100,
                    pageToken=response['nextPageToken']
                )
                response = request.execute()
            else:
                break
    except Exception as e:
        print(f"Skipping video {video_id}: {e}")
    
    return comments

# Enhanced query for epidemics-related terms
query = "epidemic|flu|covid|fever|rash|fatigue|virus|outbreak|pneumonia|nausea|diarrhea|rsv|cold|sick|chills|illness|contagious|hospital|vaccine"

# Search for videos related to the expanded query
video_ids = search_videos(query, max_results=10)

# Fetch comments from the searched videos
all_comments = []
for video_id in video_ids:
    print(f"Fetching comments for video: {video_id}")
    video_comments = fetch_comments(video_id)
    if video_comments:
        all_comments.extend(video_comments)

# Create a DataFrame from the comments
df = pd.DataFrame(all_comments, columns=['Comment'])

# Clean and preprocess comments
def clean_text(text):
    text = re.sub(r'http\S+', '', text)  # Remove URLs
    text = re.sub(r'[^a-zA-Z\s]', '', text)  # Remove non-alphanumeric characters
    return text.strip().lower()

df['CleanedComment'] = df['Comment'].apply(clean_text)

# Sentiment analysis
analyzer = SentimentIntensityAnalyzer()

def get_sentiment_label(text):
    score = analyzer.polarity_scores(str(text))
    compound = score['compound']
    if compound >= 0.05:
        return 'positive'
    elif compound <= -0.05:
        return 'negative'
    else:
        return 'neutral'

df['Sentiment'] = df['CleanedComment'].apply(get_sentiment_label)

# Summarize sentiment counts
sentiment_counts = df['Sentiment'].value_counts()

# Machine learning for sentiment trends
df['Compound'] = df['CleanedComment'].apply(lambda x: analyzer.polarity_scores(x)['compound'])
features = df[['Compound']]
labels = df['Sentiment'].apply(lambda x: 1 if x == 'positive' else 0 if x == 'negative' else -1)

scaler = StandardScaler()
X_scaled = scaler.fit_transform(features)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, labels, test_size=0.25, random_state=42)
clf = SVC(kernel='linear')
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)
print("\n SVM Classification Report:")
print(classification_report(y_test, y_pred))

# Save processed data to CSV
df.to_csv('YouTube_Comments_Sentiment.csv', index=False)
print("\n Sentiment analysis completed. Data saved to 'YouTube_Comments_Sentiment.csv'.")

# Plotting sentiment distribution
sentiment_data = pd.DataFrame({
    'Sentiment': sentiment_counts.index,
    'Count': sentiment_counts.values
})

plt.figure(figsize=(8, 6))
sns.barplot(data=sentiment_data, x='Sentiment', y='Count', palette="viridis", hue='Sentiment', dodge=False)
plt.title("Sentiment Distribution", fontsize=16)
plt.xlabel("Sentiment", fontsize=12)
plt.ylabel("Number of Comments", fontsize=12)
plt.legend([], [], frameon=False)  # Remove the legend
plt.show()

# Plot average sentiment score distribution
average_compound = df['Compound'].mean()

plt.figure(figsize=(8, 6))
sns.histplot(df['Compound'], bins=30, kde=True, color='blue')
plt.axvline(average_compound, color='red', linestyle='--', label=f'Average Compound: {average_compound:.2f}')
plt.title("Distribution of Sentiment Compound Scores", fontsize=16)
plt.xlabel("Compound Score", fontsize=12)
plt.ylabel("Frequency", fontsize=12)
plt.legend()
plt.show()
