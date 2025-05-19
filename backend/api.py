from typing import Dict

import numpy as np
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sklearn.linear_model import LinearRegression

app = FastAPI()

# Allow CORS for local frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InvoiceRequest(BaseModel):
    estimate: float
    repair: str
    vehicle: str

# Simulated adjustment factors for repair and vehicle types
REPAIR_FACTORS = {
    "transmission": 1.2,
    "brakes": 0.8,
    "oil change": 0.5,
    "engine": 1.5,
    "default": 1.0,
}
VEHICLE_FACTORS = {
    "toyota": 0.95,
    "bmw": 1.3,
    "ford": 1.0,
    "honda": 0.9,
    "default": 1.0,
}

@app.post("/predict")
def predict_invoice(data: InvoiceRequest) -> Dict[str, str]:
    # Mock: Use a simple linear regression for demonstration
    X = np.array([[1000], [2000], [3000], [4000], [5000]])
    y = np.array([1100, 2200, 3300, 4400, 5500])
    model = LinearRegression().fit(X, y)
    base_pred = model.predict(np.array([[data.estimate]]))[0]

    # Adjust based on repair type
    repair_key = data.repair.lower().split()[0] if data.repair else "default"
    repair_factor = REPAIR_FACTORS.get(repair_key, REPAIR_FACTORS["default"])

    # Adjust based on vehicle type
    vehicle_key = data.vehicle.lower().split()[1] if len(data.vehicle.split()) > 1 else "default"
    vehicle_factor = VEHICLE_FACTORS.get(vehicle_key, VEHICLE_FACTORS["default"])

    pred = base_pred * repair_factor * vehicle_factor
    low = int(pred * 0.85)
    high = int(pred * 1.15)
    parts_low = int(low * 0.6)
    parts_high = int(high * 0.6)
    labor_low = int(low * 0.4)
    labor_high = int(high * 0.4)

    return {
        "range": f"${low} - ${high}",
        "parts": f"${parts_low} - ${parts_high}",
        "labor": f"${labor_low} - ${labor_high}",
        "details": f"Base: ${int(base_pred)}, Repair adj: x{repair_factor}, Vehicle adj: x{vehicle_factor}"
    } 