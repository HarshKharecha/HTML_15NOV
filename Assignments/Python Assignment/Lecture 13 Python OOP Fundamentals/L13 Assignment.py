# Task 1: Create a Person Class
print("Task 1")
class Person:
    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city

    def display_details(self):
        print(f"Name: {self.name} | Age: {self.age} | City: {self.city}")


# Create at least three Person objects and display details
person1 = Person("Aarav Patel", 24, "Ahmedabad")
person2 = Person("Meera Nair", 29, "Bengaluru")
person3 = Person("Rohan Kulkarni", 32, "Pune")

person1.display_details()
person2.display_details()
person3.display_details()

# Task 2: Create a Rectangle Class
print("\nTask 2")
class Rectangle:
    def __init__(self, length, width):
        if length <= 0 or width <= 0:
            raise ValueError("Length and width must be positive numbers.")
        self.length = length
        self.width = width

    def calculate_area(self):
        return self.length * self.width

    def calculate_perimeter(self):
        return 2 * (self.length + self.width)


# Create at least two Rectangle objects and display area and perimeter
rect1 = Rectangle(10, 5)
rect2 = Rectangle(7.5, 4.0)

print(f"Rectangle 1 -> Area: {rect1.calculate_area()}, Perimeter: {rect1.calculate_perimeter()}")
print(f"Rectangle 2 -> Area: {rect2.calculate_area()}, Perimeter: {rect2.calculate_perimeter()}")

# Task 3: Create an Employee Salary System
print("\nTask 3")
class Employee:
    def __init__(self, employee_id, name, department, monthly_salary):
        if monthly_salary < 0:
            raise ValueError("Monthly salary cannot be negative.")
        self.employee_id = employee_id
        self.name = name
        self.department = department
        self.monthly_salary = monthly_salary

    def calculate_annual_salary(self):
        return self.monthly_salary * 12

    def display_details(self):
        annual_salary = self.calculate_annual_salary()
        print(
            f"ID: {self.employee_id} | Name: {self.name} | "
            f"Department: {self.department} | Monthly Salary: {self.monthly_salary:.2f} | "
            f"Annual Salary: {annual_salary:.2f}"
        )


# Create at least three Employee objects and display details
emp1 = Employee("E101", "Ananya Sharma", "Engineering", 65000)
emp2 = Employee("E102", "Vikram Desai", "Product", 72000)
emp3 = Employee("E103", "Priya Menon", "Design", 54000)

emp1.display_details()
emp2.display_details()
emp3.display_details()

# Task 4: Create a Book Management Class
print("\nTask 4")
class Book:
    def __init__(self, title, author, price, publication_year):
        if price < 0:
            raise ValueError("Price cannot be negative.")
        self.title = title
        self.author = author
        self.price = price
        self.publication_year = publication_year

    def apply_discount(self, discount_percentage):
        if not (0 <= discount_percentage <= 100):
            raise ValueError("Discount percentage must be between 0 and 100.")
        discounted_price = self.price * (1 - discount_percentage / 100)
        return round(discounted_price, 2)

    def display_book_details(self, discount_percentage=10):
        discounted_price = self.apply_discount(discount_percentage)
        print(
            f"Title: '{self.title}' | Author: {self.author} | "
            f"Year: {self.publication_year} | Original Price: {self.price:.2f} | "
            f"Discounted ({discount_percentage}%): {discounted_price:.2f}"
        )


# Create at least three Book objects and display original & discounted prices
book1 = Book("Clean Code", "Robert C. Martin", 800, 2008)
book2 = Book("Atomic Habits", "James Clear", 500, 2018)
book3 = Book("Deep Work", "Cal Newport", 650, 2016)

book1.display_book_details(15)
book2.display_book_details(20)
book3.display_book_details(10)

# Task 5: Build a BankAccount Class
print("\nTask 5")
class BankAccount:
    def __init__(self, account_holder, balance=0.0):
        if balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self.account_holder = account_holder
        self.balance = float(balance)

    def deposit(self, amount):
        if amount <= 0:
            print(f"[{self.account_holder}] Deposit amount must be greater than zero.")
            return False
        self.balance += amount
        print(f"[{self.account_holder}] Deposited {amount:.2f}. New balance: {self.balance:.2f}")
        return True

    def withdraw(self, amount):
        if amount <= 0:
            print(f"[{self.account_holder}] Withdrawal amount must be greater than zero.")
            return False
        if amount > self.balance:
            print(
                f"[{self.account_holder}] Insufficient balance! "
                f"Requested {amount:.2f}, available {self.balance:.2f}."
            )
            return False
        self.balance -= amount
        print(f"[{self.account_holder}] Withdrew {amount:.2f}. New balance: {self.balance:.2f}")
        return True

    def display_balance(self):
        print(f"Account Holder: {self.account_holder} | Current Balance: {self.balance:.2f}")


# Create two independent account objects
acc1 = BankAccount("Siddharth Joshi", 5000)
acc2 = BankAccount("Neha Gupta", 12000)

acc1.deposit(1500)
acc1.withdraw(8000)  # Exceeds balance -> rejected
acc1.withdraw(2000)

acc2.withdraw(3000)
acc2.deposit(-100)  # Negative amount -> rejected

print("\nFinal Balances:")
acc1.display_balance()
acc2.display_balance()

# Task 6: Create a Student Result System
print("\nTask 6")
class Student:
    def __init__(self, roll_number, name, marks):
        if not (0 <= marks <= 100):
            raise ValueError("Marks must be between 0 and 100.")
        self.roll_number = roll_number
        self.name = name
        self.marks = marks

    def check_result(self):
        return "Pass" if self.marks >= 40 else "Fail"

    def display_details(self):
        print(
            f"Roll No: {self.roll_number} | Name: {self.name} | "
            f"Marks: {self.marks} | Result: {self.check_result()}"
        )


# Create at least five Student objects with varied marks
students = [
    Student(1, "Aarohi Shah", 88),
    Student(2, "Karan Verma", 40),
    Student(3, "Diya Iyer", 34),
    Student(4, "Kabir Malhotra", 73),
    Student(5, "Zoya Khan", 27),
]

for student in students:
    student.display_details()

# Task 7: Demonstrate Class and Instance Attributes
print("\nTask 7")
class Company:
    company_name = "Infosys"

    def __init__(self, employee_name, employee_id):
        self.employee_name = employee_name
        self.employee_id = employee_id

    def display_info(self):
        print(f"Employee: {self.employee_name} (ID: {self.employee_id}) | Company: {self.company_name}")


# 1. Create three employee objects and display initial company_name
e1 = Company("Riya Sen", "TS-01")
e2 = Company("Arjun Rao", "TS-02")
e3 = Company("Nandini Das", "TS-03")

print("--- Initial State ---")
e1.display_info()
e2.display_info()
e3.display_info()

# 2. Update the class attribute via Company.company_name
Company.company_name = "Infosys"
print("\n--- After Updating Company.company_name ---")
e1.display_info()
e2.display_info()
e3.display_info()

# 3. Shadow the class attribute on a single instance (e2)
e2.company_name = "Infosys Labs (Special Unit)"
print("\n--- After Shadowing company_name on e2 ---")
e1.display_info()  # Still reads class attribute
e2.display_info()  # Reads instance attribute shadowing the class attribute
e3.display_info()  # Still reads class attribute

# Task 8: Create a Product Price Management System
print("\nTask 8")
class Product:
    def __init__(self, product_id, product_name, price):
        if price < 0:
            raise ValueError("Price cannot be negative.")
        self.product_id = product_id
        self.product_name = product_name
        self.price = float(price)

    def update_price(self, new_price):
        if new_price < 0:
            raise ValueError("New price cannot be negative.")
        self.price = float(new_price)

    def calculate_discounted_price(self, discount_percentage):
        if not (0 <= discount_percentage <= 100):
            raise ValueError("Discount percentage must be between 0 and 100.")
        return round(self.price * (1 - discount_percentage / 100), 2)

    def display_product(self, discount_percentage=0):
        discounted = self.calculate_discounted_price(discount_percentage)
        print(
            f"ID: {self.product_id} | Name: {self.product_name} | "
            f"Price: {self.price:.2f} | Price after {discount_percentage}% off: {discounted:.2f}"
        )


# Create at least three Product objects
p1 = Product("P01", "Wireless Mouse", 1200)
p2 = Product("P02", "Mechanical Keyboard", 3500)
p3 = Product("P03", "USB-C Hub", 1800)

print("--- Before Price Update ---")
p1.display_product(10)
p2.display_product(15)
p3.display_product(5)

# Update one product's price and display updated information
p2.update_price(3200)
print("\n--- After Updating Mechanical Keyboard Price ---")
p2.display_product(15)

# Task 9: Create a Car Information System
print("\nTask 9")
from datetime import datetime


class Car:
    def __init__(self, brand, model, year, color):
        current_year = datetime.now().year
        if year > current_year:
            raise ValueError(f"Manufacturing year ({year}) cannot be in the future ({current_year}).")
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

    def is_new_car(self):
        current_year = datetime.now().year
        return (current_year - self.year) <= 5

    def display_details(self):
        new_status = "Yes" if self.is_new_car() else "No"
        print(
            f"Brand: {self.brand} | Model: {self.model} | Year: {self.year} | "
            f"Color: {self.color} | New Car (<=5 yrs): {new_status}"
        )


# Create at least three Car objects with different details
car1 = Car("Tata", "Nexon EV", 2025, "White")
car2 = Car("Honda", "City", 2019, "Silver")
car3 = Car("Hyundai", "i20", 2022, "Red")

car1.display_details()
car2.display_details()
car3.display_details()

# Task 10: Build a Library Book Tracking System
print("\nTask 10")
class LibraryBook:
    def __init__(self, title, author, is_available=True):
        self.title = title
        self.author = author
        self.is_available = bool(is_available)

    def borrow_book(self):
        if not self.is_available:
            print(f"'{self.title}' is already borrowed.")
            return False
        self.is_available = False
        print(f"You have borrowed '{self.title}'.")
        return True

    def return_book(self):
        if self.is_available:
            print(f"'{self.title}' is already available in the library.")
            return False
        self.is_available = True
        print(f"'{self.title}' has been returned and is now available.")
        return True

    def display_status(self):
        status = "Available" if self.is_available else "Borrowed"
        print(f"Title: '{self.title}' | Author: {self.author} | Status: {status}")


# Create at least five LibraryBook objects
books = [
    LibraryBook("1984", "George Orwell"),
    LibraryBook("To Kill a Mockingbird", "Harper Lee"),
    LibraryBook("The Pragmatic Programmer", "Andrew Hunt"),
    LibraryBook("Sapiens", "Yuval Noah Harari"),
    LibraryBook("Dune", "Frank Herbert"),
]

# Demonstrate borrowing and returning without affecting other books
books[0].borrow_book()
books[0].borrow_book()  # Already borrowed -> prevented
books[2].borrow_book()

print("\n--- Status After Borrowing ---")
for b in books:
    b.display_status()

print("\n--- Returning a Book ---")
books[0].return_book()

print("\n--- Final Status ---")
for b in books:
    b.display_status()