# Task 1: Simple Calculator Using Functions
print("Task 1")
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero is not allowed."
    return a / b

def calculator():
    print("=== Simple Calculator ===")
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input! Please enter numeric values.")
        return

    print("Select operation:")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")

    choice = input("Enter choice (1/2/3/4 or +, -, *, /): ")

    if choice in ("1", "+"):
        result = add(num1, num2)
        op = "+"
    elif choice in ("2", "-"):
        result = subtract(num1, num2)
        op = "-"
    elif choice in ("3", "*"):
        result = multiply(num1, num2)
        op = "*"
    elif choice in ("4", "/"):
        result = divide(num1, num2)
        op = "/"
    else:
        print("Invalid operation choice!")
        return

    print(f"Result: {num1} {op} {num2} = {result}")

calculator()

# Task 2: Student Grade Calculator
print("\nTask 2")
def calculate_total(marks):
    return sum(marks)

def calculate_average(marks):
    if not marks:
        return 0
    return sum(marks) / len(marks)

def calculate_grade(average):
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"

def student_grade_system():
    print("=== Student Grade Calculator ===")
    subjects = ["Math", "Science", "English", "History", "Computer Science"]
    marks = []

    for subject in subjects:
        while True:
            try:
                mark = float(input(f"Enter marks for {subject} (0-100): "))
                if 0 <= mark <= 100:
                    marks.append(mark)
                    break
                else:
                    print("Error: Marks must be between 0 and 100.")
            except ValueError:
                print("Invalid input! Please enter a valid number.")

    total = calculate_total(marks)
    average = calculate_average(marks)
    grade = calculate_grade(average)

    print("\n--- Grade Report ---")
    print(f"Total Marks: {total:.2f} / {len(subjects) * 100}")
    print(f"Average Marks: {average:.2f}%")
    print(f"Final Grade: {grade}")

student_grade_system()

# Task 3: User Registration Function
print("\nTask 3")

def register_user(username, email, password):
    errors = []

    # Validate username
    if not username or len(username.strip()) < 3:
        errors.append("Username must contain at least 3 characters.")

    # Validate email
    if not email or "@" not in email:
        errors.append("Email must contain an '@' symbol.")
    else:
        parts = email.split("@")
        if len(parts) != 2 or not parts[0] or not parts[1] or "." not in parts[1]:
            errors.append(
                "Email must have a valid domain portion (e.g., user@domain.com)."
            )

    # Validate password
    if not password or len(password) < 8:
        errors.append("Password must contain at least 8 characters.")

    if errors:
        return f"Registration Failed: {', '.join(errors)}"
    else:
        return f"Success: User '{username}' registered successfully!"

# Test data
test_cases = [
    ("alice", "alice@example.com", "securePass123"),
    ("bo", "bob@domain.com", "short1"),
    ("charlie", "charliedomain.com", "longenoughpassword"),
    ("david", "david@sub.domain.co", "mypassword123"),
]

for uname, mail, pwd in test_cases:
    print(f"Testing ({uname}, {mail}, {pwd}):")
    print("->", register_user(uname, mail, pwd))
    print()

# Task 4: Default Arguments for Product Pricing
print("\nTask 4")
def calculate_price(price, tax_rate=5, discount=0):
    if price < 0:
        raise ValueError("Price cannot be negative.")
    if tax_rate < 0 or tax_rate > 100:
        raise ValueError("Tax rate must be between 0 and 100.")
    if discount < 0:
        raise ValueError("Discount cannot be negative.")

    tax_amount = price * (tax_rate / 100)
    final_price = (price + tax_amount) - discount

    # Ensure final price doesn't drop below zero due to excessive discount
    return max(0.0, final_price)

# Testing the function
try:
    print("Default pricing (100):", calculate_price(100))
    print(
        "Custom tax and discount (200, tax=10, discount=15):",
        calculate_price(200, tax_rate=10, discount=15),
    )
    print("Only custom tax (150, tax=8):", calculate_price(150, tax_rate=8))
    # print(calculate_price(-50)) # Raises ValueError
except ValueError as e:
    print("Error:", e)

# Task 5: Flexible Sum Calculator Using *args
print("\nTask 5")
def calculate_statistics(*args):
    if not args:
        return 0, 0.0

    total = sum(args)
    average = total / len(args)
    return total, average

# Testing with two, five, and zero arguments
print("2 arguments (10, 20):", calculate_statistics(10, 20))
print("5 arguments (5, 10, 15, 20, 25):", calculate_statistics(5, 10, 15, 20, 25))
print("0 arguments:", calculate_statistics())

# Task 6: Employee Profile Using kwargs
print("\nTask 6")

def create_employee_profile(**kwargs):
    print("--- Employee Profile ---")
    for key, value in kwargs.items():
        # Format key nicely (e.g., 'employee_id' -> 'Employee Id')
        formatted_key = key.replace("_", " ").title()
        print(f"{formatted_key}: {value}")

    return kwargs

# Test with different sets of details
emp1 = create_employee_profile(
    name="Alice Smith",
    employee_id="E101",
    department="Engineering",
    salary=85000,
    city="New York",
)
print()
emp2 = create_employee_profile(name="Bob Jones", employee_id="E102", department="Marketing")
print()
emp3 = create_employee_profile(name="Charlie Brown", employee_id="E103", salary=60000, city="Chicago", remote=True)

# Task 7: Return Multiple Values From a Function
print("\nTask 7")
def generate_sales_report(sales):
    if not sales:
        return 0, 0.0, 0, 0

    total_sales = sum(sales)
    average_sales = total_sales / len(sales)
    highest_sale = max(sales)
    lowest_sale = min(sales)

    return total_sales, average_sales, highest_sale, lowest_sale

# Test with valid sales data
sales_data = [1200.50, 450.00, 3200.75, 890.25, 150.00]
total, avg, highest, lowest = generate_sales_report(sales_data)

print("--- Sales Report ---")
print(f"Total Sales: ₹{total:,.2f}")
print(f"Average Sale: ₹{avg:,.2f}")
print(f"Highest Sale: ₹{highest:,.2f}")
print(f"Lowest Sale: ₹{lowest:,.2f}")

print("\n--- Empty Sales List Test ---")
empty_total, empty_avg, empty_high, empty_low = generate_sales_report([])
print(f"Total: {empty_total}, Avg: {empty_avg}, High: {empty_high}, Low: {empty_low}")

# Task 8: Recursive Factorial Calculator
print("\nTask 8")

def factorial(n):
    if not isinstance(n, int) or n < 0:
        raise ValueError("Factorial is only defined for non-negative integers.")

    # Base case: 0! = 1, 1! = 1
    if n == 0 or n == 1:
        return 1

    # Recursive step
    return n * factorial(n - 1)

# Explanation of how recursion works:
# When calling factorial(4):
# 1. factorial(4) returns 4 * factorial(3)
# 2. factorial(3) returns 3 * factorial(2)
# 3. factorial(2) returns 2 * factorial(1)
# 4. factorial(1) hits the base case and returns 1.
# 5. Results unwind: 2 * 1 = 2 -> 3 * 2 = 6 -> 4 * 6 = 24.

try:
    num = 5
    print(f"Factorial of {num} is {factorial(num)}")
    print(f"Factorial of 0 is {factorial(0)}")
except ValueError as e:
    print("Error:", e)

# Task 9: Recursive Fibonacci Sequence
print("\nTask 9")
# Using memoization challenge to avoid repeated calculations
memo = {0: 0, 1: 1}

def fibonacci(n):
    if n < 0:
        raise ValueError("Index cannot be negative.")

    if n in memo:
        return memo[n]

    memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return memo[n]

def generate_fibonacci_sequence(terms):
    if terms < 0:
        print("Number of terms cannot be negative.")
        return

    sequence = [fibonacci(i) for i in range(terms)]
    print(f"Fibonacci sequence ({terms} terms): {sequence}")

# Test generation
generate_fibonacci_sequence(10)

# Task 10: Mini Banking System Using Functions
print("\nTask 10")
# Global state or passed state management
balance = 1000.0
transactions = ["Initial deposit: ₹1000.0"]

def check_balance(current_balance):
    return current_balance

def deposit(current_balance, amount, history):
    if amount <= 0:
        return current_balance, "Error: Deposit amount must be positive."

    new_balance = current_balance + amount
    history.append(f"Deposited: ₹{amount:.2f}")
    return new_balance, f"Successfully deposited ₹{amount:.2f}."

def withdraw(current_balance, amount, history):
    if amount <= 0:
        return current_balance, "Error: Withdrawal amount must be positive."
    if amount > current_balance:
        return current_balance, "Error: Insufficient funds!"

    new_balance = current_balance - amount
    history.append(f"Withdrew: ₹{amount:.2f}")
    return new_balance, f"Successfully withdrew ₹{amount:.2f}."

def display_transactions(history):
    print("\n--- Transaction History ---")
    if not history:
        print("No transactions recorded yet.")
    for tx in history:
        print(f"- {tx}")
    print("---------------------------")

def banking_system():
    global balance
    while True:
        print("\n=== Mini Banking System ===")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. View Transaction History")
        print("5. Exit")

        choice = input("Choose an option (1-5): ")

        if choice == "1":
            print(f"Current Balance: ₹{balance:.2f}")
        elif choice == "2":
            try:
                amt = float(input("Enter amount to deposit: "))
                balance, msg = deposit(balance, amt, transactions)
                print(msg)
            except ValueError:
                print("Invalid amount entered.")
        elif choice == "3":
            try:
                amt = float(input("Enter amount to withdraw: "))
                balance, msg = withdraw(balance, amt, transactions)
                print(msg)
            except ValueError:
                print("Invalid amount entered.")
        elif choice == "4":
            display_transactions(transactions)
        elif choice == "5":
            print("Thank you for banking with us!")
            break
        else:
            print("Invalid choice, please select between 1 and 5.")

banking_system()