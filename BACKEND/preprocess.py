import joblib
import pandas as pd
preprocessor = joblib.load("models/preprocessor.pkl")
model = joblib.load("models/model.pkl")
def predict_employee_attrition(data: dict):
    df = pd.DataFrame([data])
    X = preprocessor.transform(df)
    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0]
    return {
        "prediction": int(prediction),  
        "probability": {
            "no_attrition": float(probability[0]),
            "yes_attrition": float(probability[1])
        }
    }
