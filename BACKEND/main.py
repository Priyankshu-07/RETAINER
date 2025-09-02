from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import pickle
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__)))
from preprocess import preprocess_input

app = FastAPI()

# Enable CORS to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Refine to specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model and preprocessor at startup
model = pickle.load(open(os.path.join('models', 'model.pkl'), 'rb'))
preprocessor = pickle.load(open(os.path.join('models', 'preprocessor.pkl'), 'rb'))

@app.post("/predict")
async def predict(request: Request):
    data = await request.json()
    processed = preprocess_input(data, preprocessor)
    prediction = model.predict(processed)
    probability = model.predict_proba(processed)[1] if hasattr(model, 'predict_proba') else None
    return {
        "attrition": int(prediction),  # 1 if likely to leave, else 0
        "probability": probability  # Probability of attrition (optional)
    }
