# Task 1: Even or Odd Number Checker
print("Task 1")
# Take an integer as input
num = int(input("Enter an integer: "))

# Use the modulo operator to check divisibility by 2
if num % 2 == 0:
    print(f"The number {num} is Even.")
else:
    print(f"The number {num} is Odd.")

# Task 2: Student Pass or Fail System
print("\nTask 2")
marks = float(input("Enter student's marks (0-100): "))

# Validate that marks are within the valid range
if 0 <= marks <= 100:
    if marks >= 35:
        print(f"Marks: {marks} - Pass")
    else:
        print(f"Marks: {marks} - Fail")
else:
    print("Error: Entered marks are outside the valid range (0-100).")

# Task 3: Student Grade Calculator
print("\nTask 3")
marks = float(input("Enter student's marks (0-100): "))

if 0 <= marks <= 100:
    print(f"Student's Marks: {marks}")
    if marks >= 90:
        print("Grade: A")
    elif marks >= 75:
        print("Grade: B")
    elif marks >= 60:
        print("Grade: C")
    elif marks >= 35:
        print("Grade: D")
    else:
        print("Grade: F")
else:
    print("Error: Invalid marks entered. Must be between 0 and 100.")

# Task 4: Age Eligibility Checker
print("\nTask 4")
age = int(input("Enter person's age: "))

  # Validate that the age is a non-negative integer
if age >= 0:
    if age >= 18:
        print(f"Age: {age}. The person is eligible to vote.")
    else:
        print(f"Age: {age}. The person is not eligible to vote (must be 18 or" " older).")
else:
    print("Error: Age cannot be negative.")

# Task 5: Login Authentication System
print("\nTask 5")
# Sample stored credentials and account status
STORED_USER = "admin123"
STORED_PASS = "secret_pass"
IS_ACTIVE = True  # Can be toggled to False to test inactive account

# Accept username and password from the user
username = input("Enter username: ")
password = input("Enter password: ")

# Check whether both credentials match using logical operators
if username == STORED_USER and password == STORED_PASS:
  # Nested if to check the account's active status
  if IS_ACTIVE:
    print("Login successful! Welcome, admin.")
  else:
    print("Login failed: Your account is inactive.")
else:
  print("Login failed: Invalid username or password.")

# Task 6: Scholarship Eligibility Checker
print("\nTask 6")
marks = float(input("Enter student's marks (0-100): "))
income = float(input("Enter annual family income (in ₹): "))

# Validate entered values
if 0 <= marks <= 100 and income >= 0:
# Use the 'and' operator to check both conditions
    if marks >= 85 and income <= 300000:
        print("Congratulations! The student is eligible for the scholarship.")
    else:
        print("The student is not eligible for the scholarship.")
else:
    print("Error: Please enter valid marks (0-100) and a non-negative income.")

# Task 7: Number Classification Program
print("\nTask 7")
number = float(input("Enter a number: "))

if number < 0:
    print("Negative")
elif number == 0:
    print("Zero")
elif 1 <= number <= 100:
    print("Positive and Small")
elif number > 100:
    print("Positive and Large")
else:
# Handles numbers between 0 and 1 (exclusive) if decimals are inputted
    print("Positive (between 0 and 1)")

# Task 8: Shopping Discount Calculator
print("\nTask 8")
purchase_amount = float(input("Enter total purchase amount (in ₹): "))

if purchase_amount < 0:
    print("Error: Purchase amount cannot be negative.")
else:
    # Determine discount percentage
    if purchase_amount >= 5000:
      discount_rate = 0.20
    elif purchase_amount >= 2000:
      discount_rate = 0.10
    else:
      discount_rate = 0.0

    discount_amount = purchase_amount * discount_rate
    final_payable = purchase_amount - discount_amount

    print(f"Total Purchase Amount: ₹{purchase_amount:.2f}")
    print(f"Discount Applied: {int(discount_rate * 100)}%")
    print(f"Discount Amount: ₹{discount_amount:.2f}")
    print(f"Final Payable Amount: ₹{final_payable:.2f}")

# Task 9: Leap Year Checker
print("\nTask 9")
year = int(input("Enter a year as a positive integer: "))

if year > 0:
    # Leap year rules combined with logical operators
    if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
      print(f"{year} is a Leap Year.")
    else:
      print(f"{year} is not a Leap Year.")
else:
    print("Error: Please enter a positive integer for the year.")

# Task 10: Employee Bonus Eligibility System
print("\nTask 10")
rating = int(input("Enter employee's performance rating (1 to 5): "))
years_service = int(input("Enter completed years of service: "))
salary_input = input(
      "Enter employee's monthly/annual salary (optional, press Enter to skip): "
  )

  # Validate inputs
if 1 <= rating <= 5 and years_service >= 0:
    bonus_rate = 0.0

    # Determine bonus rate based on criteria
    if rating == 5 and years_service >= 3:
      bonus_rate = 0.15
    elif rating >= 4 and years_service >= 1:
      bonus_rate = 0.05
    else:
      bonus_rate = 0.0

    print(f"\nPerformance Rating: {rating}")
    print(f"Years of Service: {years_service}")
    print(f"Bonus Awarded: {int(bonus_rate * 100)}%")

    # Calculate bonus amount and total salary if provided
    if salary_input.strip() != "":
      salary = float(salary_input)
      if salary >= 0:
        bonus_amount = salary * bonus_rate
        total_salary = salary + bonus_amount
        print(f"Base Salary: ₹{salary:.2f}")
        print(f"Bonus Amount: ₹{bonus_amount:.2f}")
        print(f"Total Salary After Bonus: ₹{total_salary:.2f}")
      else:
        print("Error: Salary cannot be negative.")
else:
    print(
        "Error: Rating must be between 1 and 5, and years of service must be"
        " non-negative."
    )