Employee Attrition Prediction

Predict whether an employee will leave the organization using machine learning. This project combines React.js frontend, FastAPI backend, and Random Forest model training in Jupyter Notebook.

 Features

Predict employee attrition (Yes/No) based on multiple features

Web interface to input employee data

API for predictions

Random Forest model with 84% accuracy

 Dataset

IBM HR Analytics Employee Attrition Dataset from Kaggle:
Contains employee demographics, job info, satisfaction metrics, and attrition status.

🛠 Tech Stack

Frontend: React.js

Backend: FastAPI

Model: Random Forest (scikit-learn)

Training Environment: Jupyter Notebook

Libraries: pandas, numpy, matplotlib, seaborn, scikit-learn

 Installation
Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Frontend
cd frontend
npm install
npm start


Access the app at http://localhost:3000.

 Model Training

Encoded categorical variables and scaled numeric features

Trained Random Forest Classifier

Achieved 84% accuracy on test data

Saved model as .pkl for API integration

 Usage

Open the web app

Enter employee details

Click Predict

See the attrition prediction and probability

🔧 Future Improvements

Deploy on cloud platforms (AWS/Heroku)

Add dashboard analytics for HR insights

Experiment with XGBoost / LightGBM for better accuracy

Include feature importance visualization