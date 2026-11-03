# Task 1: Student Information Manager
print("Task 1")
# Create a dictionary containing student's basic information
student = {
    "name": "Genius",
    "age": 20,
    "course": "B.Tech Computer Science",
    "city": "Mumbai"
}

print("--- Initial Student Information ---")
for key, value in student.items():
    print(f"{key.capitalize()}: {value}")

# Update the student's city
student["city"] = "Pune"

# Add a new key called email
student["email"] = "aarav.sharma@example.com"

# Remove the student's age from the dictionary
student.pop("age")

print("\n--- Final Student Information ---")
for key, value in student.items():
    print(f"{key.capitalize()}: {value}")

# Task 2: List of Student Marks
print("\nTask 2")
# Create a list containing marks for five subjects out of 100
marks = [85, 92, 78, 90, 88]

print("--- Subject Marks ---")
print(marks)

# Calculate and display the total marks
total_marks = sum(marks)
print(f"Total Marks: {total_marks}")

# Calculate and display the average marks
average_marks = total_marks / len(marks)
print(f"Average Marks: {average_marks:.2f}")

# Find the highest and lowest marks
highest_mark = max(marks)
lowest_mark = min(marks)
print(f"Highest Mark: {highest_mark}")
print(f"Lowest Mark: {lowest_mark}")

# Sort the marks in ascending order
marks.sort()
print(f"Marks in Ascending Order: {marks}")

# Task 3: String Analysis Tool
print("\nTask 3")
# Accept a sentence from the user (using a sample sentence for demonstration)
sentence = "   Python programming is powerful and versatile. Learning Python opens up many career paths.   "
print(f"Original Sentence: '{sentence}'")

# Remove extra spaces from the beginning and end
cleaned_sentence = sentence.strip()
print(f"Cleaned Sentence: '{cleaned_sentence}'")

# Display the sentence in uppercase and lowercase
print(f"Uppercase: {cleaned_sentence.upper()}")
print(f"Lowercase: {cleaned_sentence.lower()}")

# Count the total characters, including spaces
total_chars = len(cleaned_sentence)
print(f"Total Characters (including spaces): {total_chars}")

# Count the number of words
words = cleaned_sentence.split()
word_count = len(words)
print(f"Number of Words: {word_count}")

# Count the occurrences of a specific character (e.g., 'a')
char_to_count = 'a'
char_count = cleaned_sentence.lower().count(char_to_count)
print(f"Occurrences of '{char_to_count}': {char_count}")

# Check whether the sentence starts with a given word
search_word = "Python"
starts_with = cleaned_sentence.startswith(search_word)
print(f"Starts with '{search_word}': {starts_with}")

# Task 4: Remove Duplicate Items
print("\nTask 4")
# Create a list containing duplicate numbers
original_list = [10, 20, 30, 20, 40, 10, 50, 30, 60]
print(f"Original List: {original_list}")

# Convert the list into a set and display the result
unique_set = set(original_list)
print(f"Converted to Set (order may change): {unique_set}")

# Create another solution that removes duplicates while preserving the original order
# Using dict.fromkeys() which preserves insertion order in Python 3.7+
preserved_list = list(dict.fromkeys(original_list))
print(f"Updated List (duplicates removed, order preserved): {preserved_list}")

# Task 5: Tuple-Based Employee Records
print("\nTask 5")
# Create a tuple containing employee's ID, name, department, and salary
employee = (1042, "Priya Nair", "Engineering", 750000)

print("--- Employee Record ---")
print(employee)

# Display each value using indexing
print(f"ID: {employee[0]}")
print(f"Name: {employee[1]}")
print(f"Department: {employee[2]}")
print(f"Salary: ₹{employee[3]:,}")

# Display the first two elements using slicing
print(f"First Two Elements (ID & Name): {employee[:2]}")

# Check whether a particular department exists in the tuple
dept_to_check = "Engineering"
dept_exists = dept_to_check in employee
print(f"Does department '{dept_to_check}' exist? {dept_exists}")

# Count how many times a specified value appears
search_val = "Engineering"
count_val = employee.count(search_val)
print(f"Occurrences of '{search_val}': {count_val}")

# Task 6: Product Inventory System
print("\nTask 6")
# Create a dictionary containing at least five products and their quantities
inventory = {
    "Laptop": 12,
    "Mouse": 45,
    "Keyboard": 3,
    "Monitor": 8,
    "Headphones": 2
}

print("--- Initial Product Inventory ---")
for product, qty in inventory.items():
    print(f"{product}: {qty}")

# Add a new product
inventory["Webcam"] = 15
print("\nAdded 'Webcam': 15")

# Update the quantity of an existing product
inventory["Mouse"] = 50
print("Updated 'Mouse' quantity to 50")

# Remove a discontinued product
discontinued = inventory.pop("Headphones", None)
print(f"Removed discontinued product 'Headphones'")

# Search for a product by name
search_product = "Monitor"
if search_product in inventory:
    print(f"\nSearch Result: '{search_product}' is available with quantity {inventory[search_product]}.")
else:
    print(f"\nSearch Result: '{search_product}' not found in inventory.")

# Display products whose quantities are below five
print("\n--- Products with Quantity Below 5 ---")
low_stock = {p: q for p, q in inventory.items() if q < 5}
for product, qty in low_stock.items():
    print(f"{product}: {qty}")

# Task 7: List Slicing Practice
print("\nTask 7")
# Create a list containing numbers from 1 to 20
numbers = list(range(1, 21))
print(f"Original List: {numbers}")

# Display the first five elements
print(f"First five elements: {numbers[:5]}")

# Display the last five elements
print(f"Last five elements: {numbers[-5:]}")

# Display elements from index 5 to index 14 (inclusive of index 5, exclusive of index 15)
print(f"Elements from index 5 to 14: {numbers[5:15]}")

# Display every second element
print(f"Every second element: {numbers[::2]}")

# Reverse the list using slicing (creates a reversed copy)
reversed_list = numbers[::-1]
print(f"Reversed list: {reversed_list}")

# Display the original list without modifying it
print(f"Original list remains unmodified: {numbers}")

# Task 8: Set Operations Calculator
print("\nTask 8")
# Create two sets containing different integers
set_a = {1, 2, 3, 4, 5, 6}
set_b = {4, 5, 6, 7, 8, 9}

print(f"Set A: {set_a}")
print(f"Set B: {set_b}")

# Display their union
print(f"Union (A | B): {set_a | set_b}")

# Display their intersection
print(f"Intersection (A & B): {set_a & set_b}")

# Display their difference in both directions
print(f"Difference A - B: {set_a - set_b}")
print(f"Difference B - A: {set_b - set_a}")

# Display their symmetric difference
print(f"Symmetric Difference (A ^ B): {set_a ^ set_b}")

# Check whether one set is a subset of another
sub_check = {4, 5}.issubset(set_a)
print(f"Is {{4, 5}} a subset of Set A? {sub_check}")

# Task 9: List Comprehension Number Filter
print("\nTask 9")
# Create a list containing numbers from 1 to 50
numbers = list(range(1, 51))

# Generate a list containing only even numbers using list comprehension
evens_lc = [n for n in numbers if n % 2 == 0]

# Generate a list containing only odd numbers using list comprehension
odds_lc = [n for n in numbers if n % 2 != 0]

# Generate a list containing squares of all numbers
squares_lc = [n ** 2 for n in numbers]

# Generate a list of numbers divisible by both 3 and 5
divisible_3_5 = [n for n in numbers if n % 3 == 0 and n % 5 == 0]

# Repeat the even-number filtering using a traditional for loop
evens_loop = []
for n in numbers:
    if n % 2 == 0:
        evens_loop.append(n)

print(f"Even Numbers (List Comp): {evens_lc}")
print(f"Odd Numbers (List Comp): {odds_lc}")
print(f"Divisible by 3 and 5: {divisible_3_5}")
print(f"Even Numbers (For Loop): {evens_loop}")

# Task 10: Mini Student Management System
print("\nTask 10")
# Store multiple student records in a list of dictionaries with subject marks stored as tuples
students = [
    {"id": 101, "name": "Aarav Patel", "age": 19, "marks": (82, 78, 85)},
    {"id": 102, "name": "Diya Sharma", "age": 20, "marks": (90, 92, 88)},
    {"id": 103, "name": "Kabir Verma", "age": 19, "marks": (65, 70, 68)},
    {"id": 104, "name": "Ananya Iyer", "age": 21, "marks": (75, 80, 78)}
]

# Add a new student record
new_student = {"id": 105, "name": "Rohan Gupta", "age": 20, "marks": (88, 85, 90)}
students.append(new_student)

# Search for a student using their ID
search_id = 102
print(f"--- Search Student ID {search_id} ---")
found_student = next((s for s in students if s["id"] == search_id), None)
if found_student:
    print(f"Found: Name: {found_student['name']}, Marks: {found_student['marks']}")

# Update a student's marks (ID 103)
for s in students:
    if s["id"] == 103:
        s["marks"] = (70, 75, 72)
        print(f"\nUpdated marks for ID {search_id}")

# Display all students whose average/individual marks meet criteria (at least 75 average or total)
print("\n--- Students with Average Marks at Least 75 ---")
for s in students:
    avg = sum(s["marks"]) / len(s["marks"])
    if avg >= 75:
        print(f"ID: {s['id']} | Name: {s['name']} | Average Marks: {avg:.2f}")

# Calculate the overall average marks of all students
all_marks = [mark for s in students for mark in s["marks"]]
overall_avg = sum(all_marks) / len(all_marks)
print(f"\nOverall Average Marks across all students: {overall_avg:.2f}")

# Use a set to identify unique student ages
unique_ages = {s["age"] for s in students}
print(f"Unique Student Ages: {unique_ages}")

# Display all student records in a readable format
print("\n--- All Student Records ---")
for s in students:
    avg = sum(s["marks"]) / len(s["marks"])
    print(f"ID: {s['id']} | Name: {s['name']} | Age: {s['age']} | Marks: {s['marks']} | Avg: {avg:.2f}")