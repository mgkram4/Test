# Backend API

This is a simple FastAPI backend for the AI Invoice Demo. It uses scikit-learn for a mock prediction.

## Setup

1. Create a virtual environment (optional but recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the server:
   ```bash
   uvicorn api:app --reload --host 0.0.0.0 --port 8000
   ```

The API will be available at `http://localhost:8000`.

## Endpoint

- `POST /predict`
  - Request body: `{ "estimate": 1200 }`
  - Response: `{ "range": "$1100 - $1500", "parts": "$660 - $900", "labor": "$440 - $600" }` 