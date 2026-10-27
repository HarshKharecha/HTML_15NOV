# Practical Task 01: Student Information Program
# Store student details in separate descriptive variables
student_name = "Genius"
student_age = 20
student_course = "Bachelor of Computer Science"

# Display all the student information using print statements
print("--- Student Information ---")
print("Name:", student_name)
print("Age:", student_age)
print("Course:", student_course)

# Practical Task 02: Rectangle Area Calculator
# Store length and width in variables (in centimeters)
rectangle_length = 12.5
rectangle_width = 5.0

# Calculate the area by multiplying length and width
# Area = length * width represents the total 2D space occupied by the rectangle
rectangle_area = rectangle_length * rectangle_width

# Display the dimensions and calculated area
print("\n--- Rectangle Area Calculator ---")
print("Length:", rectangle_length, "cm")
print("Width:", rectangle_width, "cm")
print("Calculated Area:", rectangle_area, "sq cm")

# Practical Task 03: Student Marks Calculator
# Store marks for three subjects
subject_one_marks = 78
subject_two_marks = 85
subject_three_marks = 92

# Calculate the total marks
total_marks = subject_one_marks + subject_two_marks + subject_three_marks

# Calculate the average marks across the three subjects
average_marks = total_marks / 3

# Display the results
print("\n--- Student Marks Summary ---")
print("Total Marks:", total_marks)
print("Average Marks:", round(average_marks, 2))

# Practical Task 04: Python Code Formatting
# Define item price and quantity
item_price = 450.0
item_quantity = 3

# Calculate the subtotal amount
subtotal_amount = item_price * item_quantity

# Apply a standard shipping fee
shipping_fee = 50.0
total_payable_amount = subtotal_amount + shipping_fee

# Display final bill details
print("\n--- Invoice Summary ---")
print("Subtotal:", subtotal_amount)
print("Shipping Fee:", shipping_fee)
print("Total Payable:", total_payable_amount)

# Practical Task 05: Conditional Statement and Indentation
# Store the student's exam marks
exam_marks = 42
passing_threshold = 35

# Check if the student passed or failed
print("\n--- Examination Result ---")
print("Marks Obtained:", exam_marks)

if exam_marks >= passing_threshold:
    print("Status: Passed! Congratulations.")
else:
    print("Status: Failed. Better luck next time.")

# Practical Task 06: Employee Salary Calculator
# Define constant for the number of months in a year
MONTHS_IN_YEAR = 12

# Store employee details using snake_case
employee_name = "Sarah Connor"
employee_department = "Engineering"
monthly_salary = 5500.0

# Calculate annual salary
annual_salary = monthly_salary * MONTHS_IN_YEAR

# Display employee details and salary summary
print("\n--- Employee Salary Details ---")
print("Name:", employee_name)
print("Department:", employee_department)
print("Monthly Salary: ₹", monthly_salary)
print("Annual Salary: ₹", annual_salary)

# Practical Task 07: Discount Calculator Function
def calculate_discount(original_price, discount_percentage):
    """
    Calculate the final price of an item after applying a percentage discount.
    
    Parameters:
    original_price (float): The initial price of the item.
    discount_percentage (float): The discount rate as a percentage (e.g., 20 for 20%).
    
    Returns:
    float: The final discounted price.
    """
    discount_amount = (original_price * discount_percentage) / 100
    final_price = original_price - discount_amount
    return final_price

# Test the function with sample values
item_original_price = 120.0
discount_rate = 15.0

discounted_price = calculate_discount(item_original_price, discount_rate)

# Display the result
print("\n--- Discount Calculator ---")
print("Original Price: ₹", item_original_price)
print("Discount Applied:", discount_rate, "%")
print("Final Discounted Price: ₹", round(discounted_price, 2))

# Practical Task 08: Student Result Management
# Student details and subject marks
student_name = "Genius"
mark_math = 72
mark_science = 65
mark_english = 80
mark_history = 55
mark_computer = 90

PASSING_MARK = 35

# Calculate total and average marks
total_marks = mark_math + mark_science + mark_english + mark_history + mark_computer
average_marks = total_marks / 5

# Check if the student passed all individual subjects
all_subjects_passed = (
    mark_math >= PASSING_MARK and
    mark_science >= PASSING_MARK and
    mark_english >= PASSING_MARK and
    mark_history >= PASSING_MARK and
    mark_computer >= PASSING_MARK
)

# Determine final status
if all_subjects_passed:
    final_status = "Passed"
else:
    final_status = "Failed (Scored below 35 in one or more subjects)"

# Display comprehensive result report
print("\n--- Student Result Management Report ---")
print("Student Name:", student_name)
print("Total Marks:", total_marks, "/ 500")
print("Average Marks:", round(average_marks, 2))
print("Final Status:", final_status)

# Practical Task 09: Improve Existing Code Readability
# Define conversion constants
FAHRENHEIT_FREEZING_POINT = 32.0
FAHRENHEIT_SCALE_FACTOR = 5.0 / 9.0

# Temperature in Fahrenheit to be converted
temperature_fahrenheit = 98.6

# Convert Fahrenheit to Celsius
temperature_celsius = (temperature_fahrenheit - FAHRENHEIT_FREEZING_POINT) * FAHRENHEIT_SCALE_FACTOR

# Display the conversion results
print("\n--- Temperature Conversion ---")
print("Temperature in Fahrenheit:", temperature_fahrenheit, "°F")
print("Temperature in Celsius:", round(temperature_celsius, 2), "°C")

# Practical Task 10: Monthly Expense Calculator
# Define constant for the monthly budget limit
MONTHLY_BUDGET = 2000.0

# Store individual expenses
rent_expense = 950.0
groceries_expense = 450.0
utilities_expense = 250.0

def calculate_total_expense(expense_one, expense_two, expense_three):
    """
    Calculates and returns the sum of three distinct monthly expenses.
    
    Parameters:
    expense_one (float): First expense amount.
    expense_two (float): Second expense amount.
    expense_three (float): Third expense amount.
    
    Returns:
    float: Total combined expenses.
    """
    return expense_one + expense_two + expense_three

# Calculate total monthly expense
total_expense = calculate_total_expense(rent_expense, groceries_expense, utilities_expense)

# Check budget status using conditional statements
if total_expense <= MONTHLY_BUDGET:
    budget_status = "Within Budget (Great job saving!)"
else:
    budget_status = "Budget Exceeded (Overspending detected)"

# Display detailed expense report
print("\n--- Monthly Expense Report ---")
print("Rent Expense: ₹", rent_expense)
print("Groceries Expense: ₹", groceries_expense)
print("Utilities Expense: ₹", utilities_expense)
print("-" * 30)
print("Total Expense: ₹", total_expense)
print("Monthly Budget: ₹", MONTHLY_BUDGET)
print("Status:", budget_status)