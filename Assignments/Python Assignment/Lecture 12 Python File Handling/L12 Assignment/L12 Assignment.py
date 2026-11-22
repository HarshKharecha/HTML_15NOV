# Task 1: Create and Write to a Text File
print("Task 1")
file_name1 = "welcome.txt"

try:
    file = open(file_name1, "w", encoding="utf-8")
    file.write("Welcome to Python File Handling!\n")
    file.close()
    print(f"Successfully wrote to '{file_name1}'.")
except OSError as e:
    print(f"Error writing to '{file_name1}': {e}")

# Task 2: Read Content from a Text File
print("\nTask 2")
file_name2 = "notes.txt"

try:
    with open(file_name2, "r", encoding="utf-8") as file:
        content = file.read()
    print("--- Content of notes.txt ---")
    print(content)
except FileNotFoundError:
    print(f"Error: '{file_name2}' does not exist.")
except OSError as e:
    print(f"An error occurred while reading '{file_name2}': {e}")

# Task 3: Count Lines, Words, and Characters
print("\nTask 3")
file_name3 = "article.txt"

try:
    with open(file_name3, "r", encoding="utf-8") as file:
        content = file.read()

    line_count = len(content.splitlines())
    word_count = len(content.split())
    char_count = len(content)  # Includes spaces and newline characters

    print(f"File: {file_name3}")
    print(f"Total Lines: {line_count}")
    print(f"Total Words: {word_count}")
    print(f"Total Characters (including spaces & newlines): {char_count}")

except FileNotFoundError:
    print(f"Error: '{file_name3}' was not found.")
except OSError as e:
    print(f"Error reading '{file_name3}': {e}")

# Task 4: Append Data to an Existing File
print("\nTask 4")
file_name4 = "activity_log.txt"

try:
    # Step 1: Write initial activity message
    with open(file_name4, "w", encoding="utf-8") as file:
        file.write("[Initial] User logged into the system.\n")

    # Step 2: Append at least three new activity messages
    new_activities = [
        "[Activity] Opened dashboard.\n",
        "[Activity] Uploaded assignment draft.\n",
        "[Activity] Downloaded practice notes.\n",
    ]
    with open(file_name4, "a", encoding="utf-8") as file:
        file.writelines(new_activities)

    # Step 3: Read and display the final file content
    with open(file_name4, "r", encoding="utf-8") as file:
        final_content = file.read()

    print("--- Final Activity Log ---")
    print(final_content)

except OSError as e:
    print(f"File operation error on '{file_name4}': {e}")

# Task 5: Copy Content Between Files
print("\nTask 5")
source_file = "source.txt"
destination_file = "destination.txt"

try:
    with open(source_file, "r", encoding="utf-8") as src:
        data = src.read()

    with open(destination_file, "w", encoding="utf-8") as dest:
        dest.write(data)

    print(f"Successfully copied content from '{source_file}' to '{destination_file}'.")

except FileNotFoundError:
    print(f"Error: Source file '{source_file}' does not exist.")
except OSError as e:
    print(f"Error during file copy: {e}")

# Task 6: Manage Student Records Using a Text File
print("\nTask 6")
file_name6 = "students.txt"


def add_student_records():
    while True:
        name = input("Enter student name: ").strip()
        if not name:
            print("Student name cannot be empty. Please try again.")
            continue

        try:
            marks = float(input("Enter marks (0 - 100): ").strip())
            if marks < 0 or marks > 100:
                print("Invalid marks! Marks must be between 0 and 100.")
                continue
        except ValueError:
            print("Invalid input! Please enter a numeric value for marks.")
            continue

        try:
            with open(file_name6, "a", encoding="utf-8") as file:
                file.write(f"{name} | {marks}\n")
            print(f"Saved record for {name} ({marks}).")
        except OSError as e:
            print(f"Error saving record: {e}")
            break

        choice = input("Add another student? (y/n): ").strip().lower()
        if choice != "y":
            break


def display_student_records():
    print("\n--- Saved Student Records ---")
    try:
        with open(file_name6, "r", encoding="utf-8") as file:
            records = file.read().strip()
        if not records:
            print("No student records found.")
        else:
            print(records)
    except FileNotFoundError:
        print(f"No records file ('{file_name6}') found yet.")
    except OSError as e:
        print(f"Error reading '{file_name6}': {e}")


if __name__ == "__main__":
    add_student_records()
    display_student_records()

# Task 7: Read and Write a CSV File
print("\nTask 7")
import csv

csv_file = "employees.csv"

employees_data = [
    ["EmployeeID", "Name", "Department", "Salary"],
    ["E101", "Aarav Patel", "Engineering", 75000],
    ["E102", "Maya Sharma", "Product", 82000],
    ["E103", "Rohan Mehta", "Design", 64000],
    ["E104", "Priya Nair", "Marketing", 68000],
    ["E105", "Kabir Joshi", "HR", 59000],
]

try:
    # Write employee records using csv.writer
    with open(csv_file, "w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerows(employees_data)

    print(f"Wrote {len(employees_data) - 1} records to '{csv_file}'.\n")

    # Read employee records using csv.DictReader
    print("--- Employee Directory ---")
    with open(csv_file, "r", newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            print(
                f"ID: {row['EmployeeID']} | "
                f"Name: {row['Name']} | "
                f"Department: {row['Department']} | "
                f"Salary: ₹{row['Salary']}"
            )

except OSError as e:
    print(f"Error working with '{csv_file}': {e}")

# Task 8: Search for a Word in a File
print("\nTask 8")
import re

file_name8 = "story.txt"

search_word = input("Enter a word to search for: ").strip()

if not search_word:
    print("Search input cannot be empty.")
else:
    try:
        with open(file_name8, "r", encoding="utf-8") as file:
            content = file.read()

        # Match whole words case-insensitively
        pattern = rf"\b{re.escape(search_word)}\b"
        matches = re.findall(pattern, content, flags=re.IGNORECASE)
        count = len(matches)

        if count == 0:
            print(f"The word '{search_word}' was not found in '{file_name8}'.")
        else:
            print(f"The word '{search_word}' occurs {count} time(s) in '{file_name8}'.")

    except FileNotFoundError:
        print(f"Error: '{file_name8}' does not exist.")
    except OSError as e:
        print(f"Error reading '{file_name8}': {e}")

# Task 9: Analyze a File Using pathlib
print("\nTask 9")
from pathlib import Path

raw_path = input("Enter a file path: ").strip()

if not raw_path:
    print("Invalid path: input cannot be empty.")
else:
    target = Path(raw_path).expanduser()

    try:
        if not target.exists():
            print(f"Path does not exist: '{target}'")
        else:
            print(f"Name: {target.name}")
            print(f"Extension: {target.suffix if target.suffix else '(none)'}")

            if target.is_file():
                print("Type: File")
                print(f"Size: {target.stat().st_size} bytes")
            elif target.is_dir():
                print("Type: Directory")
            else:
                print("Type: Other")
    except OSError as e:
        print(f"Unable to inspect path '{raw_path}': {e}")

# Task 10: Build a File-Based Contact Management System
# print("\nTask 10")