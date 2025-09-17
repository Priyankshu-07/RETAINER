import joblib
import pandas as pd

# Load saved preprocessor and model
preprocessor = joblib.load("models/preprocessor.pkl")
model = joblib.load("models/model.pkl")

def predict_employee_attrition(data: dict):
    """
    Takes raw employee data (dict), preprocesses it, and predicts attrition.
    """
    # Convert dict to DataFrame (pandas is needed for the pipeline)
    df = pd.DataFrame([data])

    # Preprocess
    X = preprocessor.transform(df)

    # Predict
    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0]

    return {
        "prediction": int(prediction),  # 0 = No Attrition, 1 = Yes Attrition
        "probability": {
            "no_attrition": float(probability[0]),
            "yes_attrition": float(probability[1])
        }
    }
