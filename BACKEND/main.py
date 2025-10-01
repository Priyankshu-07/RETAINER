from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from preprocess import predict_employee_attrition
app = FastAPI(title="Employee Attrition Prediction API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class EmployeeData(BaseModel):
    Age: int
    BusinessTravel: str
    DailyRate: int
    Department: str
    DistanceFromHome: int
    Education: int
    EducationField: str
    EmployeeCount: int
    EnvironmentSatisfaction: int
    Gender: str
    HourlyRate: int
    JobInvolvement: int
    JobLevel: int
    JobRole: str
    JobSatisfaction: int
    MaritalStatus: str
    MonthlyIncome: int
    MonthlyRate: int
    NumCompaniesWorked: int
    Over18: str
    OverTime: str
    PercentSalaryHike: int
    PerformanceRating: int
    RelationshipSatisfaction: int
    StandardHours: int
    StockOptionLevel: int
    TotalWorkingYears: int
    TrainingTimesLastYear: int
    WorkLifeBalance: int
    YearsAtCompany: int
    YearsInCurrentRole: int
    YearsSinceLastPromotion: int
    YearsWithCurrManager: int
@app.get("/")
def root():
    return {"message": "Employee Attrition Prediction API is running"}
@app.post("/predict")
def predict(data: EmployeeData):
    model_output = predict_employee_attrition(data.dict())
    prediction = model_output.get("prediction", 1)  
    confidence = model_output.get("confidence", 0.8)
    willStay = True if prediction == 1 else False
    risk_factors = []
    if data.MonthlyIncome < 3000:
        risk_factors.append("Low monthly income")
    if data.YearsAtCompany < 2:
        risk_factors.append("Short tenure at company")
    if data.OverTime == "Yes":
        risk_factors.append("Frequent overtime work")
    if data.JobSatisfaction < 3:
        risk_factors.append("Low job satisfaction")
    if data.WorkLifeBalance < 3:
        risk_factors.append("Poor work-life balance")
    if data.DistanceFromHome > 20:
        risk_factors.append("Long commute distance")

    recommendations = []
    if not willStay:
        if data.MonthlyIncome < 5000:
            recommendations.append("Consider salary review")
        if data.JobSatisfaction < 3:
            recommendations.append("Career development opportunities")
        if data.WorkLifeBalance < 3:
            recommendations.append("Introduce flexible working arrangements")
    else:
        recommendations.append("Continue current engagement strategies")
        recommendations.append("Leadership development opportunities")
        recommendations.append("Mentorship programs")

    return {
        "willStay": willStay,
        "confidence": round(float(confidence), 2),
        "riskFactors": risk_factors[:3],
        "recommendations": recommendations[:3],
    }
