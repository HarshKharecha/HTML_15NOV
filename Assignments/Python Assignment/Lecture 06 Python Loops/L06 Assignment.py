# Task 1: Print Numbers Using a For Loop
print("\nTask 1")
for num in range(1, 11):
    print(num)

# Task 2: Print Even Numbers
print("\nTask 2")
for num in range(2, 51, 2):
    print(num)

# Task 3: Calculate the Sum of Numbers
print("\nTask 3")
n = int(input("Enter a number: "))
total_sum = 0

for i in range(1, n + 1):
    total_sum += i

print(f"Sum: {total_sum}")

# Task 4: Create a Multiplication Table
print("\nTask 4")
num = int(input("Enter a number: "))

for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")

# Task 5: Calculate the Factorial of a Number
print("\nTask 5")
num = int(input("Enter a number: "))

if num < 0:
    print("Factorial is not defined for negative numbers.")
else:
    factorial = 1
    for i in range(1, num + 1):
        factorial *= i
    print(f"Factorial: {factorial}")

# Task 6: Guess the Secret Number
print("\nTask 6")
secret_number = 7  # Predefined secret number

while True:
    guess = int(input("Guess the secret number: "))
    
    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")
    else:
        print("Success! You guessed the correct secret number.")
        break

# Task 7: Skip Multiples of 3
print("\nTask 7")
for num in range(1, 31):
    if num % 3 == 0:
        continue
    print(num)

# Task 8: Print a Star Pattern
print("\nTask 8")
rows = int(input("Enter the number of rows: "))

for i in range(1, rows + 1):
    for j in range(i):
        print("*", end="")
    print()

# Task 9: Find a Number in a List
print("\nTask 9")
numbers = [12, 45, 7, 23, 89, 34, 56, 91, 3, 19]
target = int(input("Enter the target number: "))

found = False
for num in numbers:
    if num == target:
        found = True
        break

if found:
    print(f"The number {target} exists in the list.")
else:
    print(f"The number {target} does not exist in the list.")

# Task 10: Process Student Marks
print("\nTask 10")
marks = [45, 88, 35, 105, 12, 70, 92, -5, 40, 55, 60]

passed = 0
failed = 0
invalid = 0

for mark in marks:
    if mark < 0 or mark > 100:
        invalid += 1
        continue
    
    if mark >= 40:
        passed += 1
    else:
        failed += 1

print(f"Passing students: {passed}")
print(f"Failing students: {failed}")
print(f"Invalid marks: {invalid}")