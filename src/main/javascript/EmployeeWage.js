const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Generating work type :- Absent, Part-Time, Full-Time
// Function to get work hours
function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
// Function for calculating total wages until limit is reached
function calculateTotalWage() {
    let totalEmpHours = 0;
    let totalWorkingDays = 0;

 while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
        let empCheck = Math.floor(Math.random() * 3);
        totalEmpHours += getWorkHours(empCheck);
        totalWorkingDays++;
    }

    return totalEmpHours * WAGE_PER_HOUR;
}

// calculating total wages
let totalWage = calculateTotalWage();
console.log(`Total Monthly Wage: $${totalWage}`);