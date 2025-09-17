from fastapi import FastAPI
from pydantic import BaseModel
from preprocess import predict_employee_attrition
app = FastAPI(title="Employee Attrition Prediction API")
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
    return {"message": "Employee Attrition Prediction API is running 🚀"}
@app.post("/predict")
def predict(data: EmployeeData):
    result = predict_employee_attrition(data.dict())
    return result
