# Practical 1: Basic Arithmetic Calculator
print("Practical 1")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("\n--- Results ---")
print(f"Addition ({num1} + {num2}): {num1 + num2}")
print(f"Subtraction ({num1} - {num2}): {num1 - num2}")
print(f"Multiplication ({num1} * {num2}): {num1 * num2}")
if num2 != 0:
    print(f"Division ({num1} / {num2}): {num1 / num2}")
    print(f"Floor Division ({num1} // {num2}): {num1 // num2}")
    print(f"Modulus ({num1} % {num2}): {num1 % num2}")
else:
    print(
        "Division, Floor Division, and Modulus: Error! Division by zero is not allowed."
    )

print(f"Power ({num1} ** {num2}): {num1 ** num2}")

# Practical 2: Student Marks and Grade Checker
print("\nPractical 2")
sub1 = float(input("Enter marks for Subject 1: "))
sub2 = float(input("Enter marks for Subject 2: "))
sub3 = float(input("Enter marks for Subject 3: "))

total_marks = sub1 + sub2 + sub3
average_marks = total_marks / 3

# Check if each subject is at least 35 using comparison operators
pass_sub1 = sub1 >= 35
pass_sub2 = sub2 >= 35
pass_sub3 = sub3 >= 35

# Determine whether the student passes all three subjects using logical operators
is_passed = pass_sub1 and pass_sub2 and pass_sub3

print("\n--- Student Result Summary ---")
print(f"Total Marks: {total_marks:.2f}")
print(f"Average Marks: {average_marks:.2f}")
print(f"Subject 1 >= 35: {pass_sub1}")
print(f"Subject 2 >= 35: {pass_sub2}")
print(f"Subject 3 >= 35: {pass_sub3}")

if is_passed:
    print("Final Result: Pass")
else:
    print("Final Result: Fail")

# Practical 3: Age Eligibility Checker
print("\nPractical 3")
age = int(input("Enter your age: "))
if age < 0:
    print("Error: Age cannot be negative.")
else:
    # Check if adult (at least 18) and whether between 18 and 60 inclusive
    is_adult = age >= 18
    in_range = 18 <= age <= 60

    print("\n--- Age Eligibility Results ---")
    print(f"Is Adult (at least 18): {is_adult}")
    print(f"Falls within range [18, 60] inclusive: {in_range}")

# Practical 4: Bank Account Balance Updater
print("\nPractical 4")
balance = float(input("Enter initial account balance: "))

deposit = float(input("Enter deposit amount: "))
balance += deposit  # Using assignment operator +=
print(f"Balance after deposit: ₹{balance:.2f}")

withdrawal = float(input("Enter withdrawal amount: "))
if withdrawal > balance:
    print("Transaction failed: Withdrawal amount exceeds available balance!")
else:
    balance -= withdrawal  # Using assignment operator -=
    print(f"Balance after withdrawal: ₹{balance:.2f}")

print(f"\nFinal Account Balance: ₹{balance:.2f}")

# Practical 5: Login Validation System
print("\nPractical 5")
PREDEFINED_USER = "admin"
PREDEFINED_PASS = "secret12"

username = input("Enter username: ")
password = input("Enter password: ")

# Use logical 'not' to check if the username is empty
if not username.strip():
    print("Error: Username cannot be empty.")
elif username == PREDEFINED_USER and password == PREDEFINED_PASS:
    print("Success: Login successful! Welcome back.")
else:
    print("Error: Invalid username or password.")

# Practical 6: Bitwise Operator Demonstration
print("\nPractical 6")
a = int(input("Enter first integer: "))
b = int(input("Enter second integer: "))

print("\n--- Binary Representations ---")
print(f"Binary of {a}: {bin(a)}")
print(f"Binary of {b}: {bin(b)}")

print("\n--- Bitwise Operations ---")
print(f"Bitwise AND ({a} & {b}): {a & b} (Binary: {bin(a & b)})")
print(f"Bitwise OR ({a} | {b}): {a | b} (Binary: {bin(a | b)})")
print(f"Bitwise XOR ({a} ^ {b}): {a ^ b} (Binary: {bin(a ^ b)})")
print(f"Bitwise NOT on first (~{a}): {~a} (Binary: {bin(~a)})")
print(f"Left shift on first ({a} << 1): {a << 1} (Binary: {bin(a << 1)})")
print(f"Right shift on first ({a} >> 1): {a >> 1} (Binary: {bin(a >> 1)})")

# Practical 7: Number Comparison and Range Checker
print("\nPractical 7")
n1 = float(input("Enter first number: "))
n2 = float(input("Enter second number: "))
n3 = float(input("Enter third number: "))

largest = max(n1, n2, n3)
first_greater = n1 > n2

print("\n--- Number Comparisons ---")
print(f"Largest number among the three: {largest}")
print(f"Is the first number greater than the second? {first_greater}")

print("\n--- Range Checker ---")
min_val = float(input("Enter minimum value of range: "))
max_val = float(input("Enter maximum value of range: "))
    
# Chained comparison to check if first number falls within the range inclusive
in_range = min_val <= n1 <= max_val
print(f"Does the first number ({n1}) fall within [{min_val}, {max_val}]? {in_range}")

# Practical 8: Shopping Cart Membership Checker
print("\nPractical 8")
# Initial product list
products = ["Laptop", "Smartphone", "Headphones", "Smartwatch", "Tablet"]

print(f"Available products in store: {products}")

search_prod = input("Enter a product name to check availability: ").strip()
absent_prod = input("Enter another product name to check if it's absent: ").strip()

# Normalize products and inputs to make search case-insensitive
normalized_products = [p.lower() for p in products]

is_present = search_prod.lower() in normalized_products
is_absent = absent_prod.lower() not in normalized_products

print("\n--- Membership Results ---")
if is_present:
    print(f"'{search_prod}' is available in the product list.")
else:
    print(f"'{search_prod}' is NOT available in the product list.")

if is_absent:
    print(f"'{absent_prod}' is absent from the product list (verified by 'not in').")
else:
    print(f"'{absent_prod}' is actually present in the list.")

# Practical 9: Object Identity and Equality Tester
print("\nPractical 9")
# Create list_a with at least three elements
list_a = [10, 20, 30]

# Assign list_a to another variable named list_b
list_b = list_a

# Create a separate list named list_c containing the same elements
list_c = [10, 20, 30]

print("--- Identity and Equality Test ---")
print(f"list_a: {list_a} (Memory ID: {id(list_a)})")
print(f"list_b: {list_b} (Memory ID: {id(list_b)})")
print(f"list_c: {list_c} (Memory ID: {id(list_c)})")

# Value equality (==)
print(f"\nlist_a == list_b (Values equal): {list_a == list_b}")
print(f"list_a == list_c (Values equal): {list_a == list_c}")

# Object identity (is / is not)
print(f"list_a is list_b (Same object): {list_a is list_b}")
print(f"list_a is list_c (Same object): {list_a is list_c}")
print(f"list_a is not list_c (Different objects): {list_a is not list_c}")

print("\n--- Explanation ---")
print("Two lists can have equal values (checked via '==' returning True) because their items match element-by-element.")
print("However, they are not the same object in memory (checked via 'is' returning False) if they are created as distinct list objects (like list_a and list_c).")

# Practical 10: Employee Bonus Eligibility Calculator
print("\nPractical 10")
name = input("Enter employee's name: ").strip()
salary = float(input("Enter monthly salary: "))
experience = float(input("Enter years of experience: "))
rating = int(input("Enter performance rating (1 to 5): "))

# Validate inputs
if salary < 0 or experience < 0 or not (1 <= rating <= 5):
    print("Error: Invalid input! Salary and experience must be non-negative, and rating must be between 1 and 5.")
else:
    # Check eligibility using logical operators (experience >= 3 and rating >= 4)
    has_experience = experience >= 3
    has_good_rating = rating >= 4
    is_eligible = has_experience and has_good_rating

    # Calculate bonus using assignment operator
    bonus = 0.0
    if is_eligible:
        bonus += salary * 0.10  # 10% bonus added using +=

    print("\n--- Employee Details & Bonus Report ---")
    print(f"Employee Name: {name}")
    print(f"Monthly Salary: ₹{salary:.2f}")
    print(f"Years of Experience: {experience}")
    print(f"Performance Rating: {rating}/5")
    print(f"Eligible for Bonus: {'Yes' if is_eligible else 'No'}")
    print(f"Assigned Bonus Amount: ₹{bonus:.2f}")