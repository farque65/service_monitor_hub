from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import pandas as pd
import os

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data path
DATA_PATH = "data/monitoring_data.parquet"
os.makedirs("data", exist_ok=True)

# Initialize empty DataFrame if file doesn't exist
if not os.path.exists(DATA_PATH):
    df = pd.DataFrame(columns=[
        'service',
        'name',
        'endpoint',
        'check_interval',
        'threshold_ms',
        'response_time',
        'status',
        'timestamp'
    ])
    df.to_parquet(DATA_PATH)

class MonitoringData(BaseModel):
    service: str
    name: str
    endpoint: str
    check_interval: int
    threshold_ms: int
    response_time: float
    status: str

@app.post("/monitor")
async def save_monitoring_data(data: MonitoringData):
    try:
        # Read existing data
        df = pd.read_parquet(DATA_PATH)
        
        # Create new row
        new_data = {
            **data.dict(),
            'timestamp': datetime.now()
        }
        
        # Append new data
        df = pd.concat([df, pd.DataFrame([new_data])], ignore_index=True)
        
        # Save updated data
        df.to_parquet(DATA_PATH)
        
        return {"status": "success", "message": "Data saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/monitor")
async def get_monitoring_data():
    try:
        df = pd.read_parquet(DATA_PATH)
        return df.to_dict(orient='records')
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))