from fastapi import FastAPI
from routes.twitter_router import router as twitter_router
from routes.reddit_router import router as reddit_router
from routes.youtube_router import router as youtube_router
from routes.trends_router import router as trends_router
from routes.xai_risk_router import router as xai_risk_router
# Import other routers for YouTube, Reddit, Google Trends when they are ready

app = FastAPI()

# Include all routers
app.include_router(twitter_router, prefix="/twitter", tags=["Twitter"])
app.include_router(youtube_router, prefix="/youtube", tags=["YouTube"])
app.include_router(reddit_router, prefix="/reddit", tags=["Reddit"])
app.include_router(trends_router, prefix="/google-trends", tags=["Google Trends"])
app.include_router(xai_risk_router, prefix="/xai-risk", tags=["XAI & Risk Scoring"])

@app.get("/")
async def root():
    return {"message": "Welcome to the Data Analysis App!"}
