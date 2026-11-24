# Task 1: Person Information System
print("Task 1")
class Person:
    def __init__(self, name, age, city): # For Give data type write name: str, age: int etc.
        self.name = name
        self.age = age
        self.city = city

    def display_details(self) -> None:
        print(f"Name: {self.name} | Age: {self.age} | City: {self.city}")


p1 = Person("Aarav", 24, "Ahmedabad")
p2 = Person("Meera", 29, "Mumbai")
p3 = Person("Rohan", 31, "Bengaluru")

for person in (p1, p2, p3):
    person.display_details()

# Task 2: Rectangle Calculator
print("\nTask 2")
class Rectangle:
    def __init__(self, length, width):
        if length <= 0 or width <= 0:
            raise ValueError("Length and width must be positive numbers.")
        self.length = length
        self.width = width

    def calculate_area(self) -> float:
        return self.length * self.width

    def calculate_perimeter(self) -> float:
        return 2 * (self.length + self.width)


r1 = Rectangle(10, 5)
r2 = Rectangle(7.5, 4)
r3 = Rectangle(12, 8)

for idx, rect in enumerate((r1, r2, r3), start=1):
    print(
        f"Rectangle {idx} ({rect.length} x {rect.width}) -> "
        f"Area: {rect.calculate_area()}, Perimeter: {rect.calculate_perimeter()}"
    )

# Task 3: Employee Salary Calculator
print("\nTask 3")
class Employee:
    def __init__(self, employee_id, name, department, monthly_salary):
        if monthly_salary < 0:
            raise ValueError("Monthly salary cannot be negative.")
        self.employee_id = employee_id
        self.name = name
        self.department = department
        self.monthly_salary = monthly_salary

    def calculate_annual_salary(self) -> float:
        return self.monthly_salary * 12

    def display_details(self) -> None:
        print(
            f"ID: {self.employee_id} | Name: {self.name} | "
            f"Dept: {self.department} | Monthly: {self.monthly_salary:.2f} | "
            f"Annual: {self.calculate_annual_salary():.2f}"
        )


e1 = Employee("E101", "Ananya", "Engineering", 75000)
e2 = Employee("E102", "Vikram", "Product", 82000)
e3 = Employee("E103", "Priya", "Design", 60000)

for emp in (e1, e2, e3):
    emp.display_details()

# Task 4: Student Result System
print("\nTask 4")
class Student:
    def __init__(self, roll_number, name, marks):
        if not (0 <= marks <= 100):
            raise ValueError("Marks must be between 0 and 100.")
        self.roll_number = roll_number
        self.name = name
        self.marks = marks

    def check_result(self) -> str:
        return "Pass" if self.marks >= 40 else "Fail"

    def calculate_grade(self) -> str:
        if self.marks >= 90:
            return "A"
        if self.marks >= 75:
            return "B"
        if self.marks >= 60:
            return "C"
        if self.marks >= 40:
            return "D"
        return "F"

    def display_details(self) -> None:
        print(
            f"Roll: {self.roll_number} | Name: {self.name} | "
            f"Marks: {self.marks} | Grade: {self.calculate_grade()} | "
            f"Result: {self.check_result()}"
        )


students = [
    Student(1, "Kabir", 94),
    Student(2, "Diya", 81),
    Student(3, "Arjun", 67),
    Student(4, "Neha", 45),
    Student(5, "Dev", 32),
]

for student in students:
    student.display_details()

# Task 5: Bank Account Management System
print("\nTask 5")
class BankAccount:
    def __init__(self, account_holder: str, balance: float = 0.0):
        if balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount: float) -> bool:
        if amount <= 0:
            print(f"[{self.account_holder}] Deposit failed: amount must be greater than 0.")
            return False
        self.balance += amount
        print(f"[{self.account_holder}] Deposited {amount:.2f}.")
        return True

    def withdraw(self, amount: float) -> bool:
        if amount <= 0:
            print(f"[{self.account_holder}] Withdrawal failed: amount must be greater than 0.")
            return False
        if amount > self.balance:
            print(f"[{self.account_holder}] Withdrawal failed: insufficient balance.")
            return False
        self.balance -= amount
        print(f"[{self.account_holder}] Withdrew {amount:.2f}.")
        return True

    def display_balance(self) -> None:
        print(f"Account Holder: {self.account_holder} | Current Balance: {self.balance:.2f}")


acc1 = BankAccount("Riya", 5000)
acc2 = BankAccount("Siddharth")  # Defaults to 0.0

acc1.deposit(1500)
acc1.withdraw(2000)
acc1.withdraw(10000)  # Exceeds balance

acc2.deposit(3000)
acc2.withdraw(1200)

acc1.display_balance()
acc2.display_balance()

# Task 6: Product Price Management System
print("\nTask 6")
class Product:
    def __init__(self, product_id, product_name, price):
        if price < 0:
            raise ValueError("Price cannot be negative.")
        self.product_id = product_id
        self.product_name = product_name
        self.price = price

    def update_price(self, new_price: float) -> None:
        if new_price < 0:
            raise ValueError("Updated price cannot be negative.")
        self.price = new_price

    def calculate_discounted_price(self, discount_percent: float) -> float:
        if not (0 <= discount_percent <= 100):
            raise ValueError("Discount percentage must be between 0 and 100.")
        return self.price * (1 - discount_percent / 100)

    def display_product(self) -> None:
        print(f"ID: {self.product_id} | Name: {self.product_name} | Price: {self.price:.2f}")


prod1 = Product("P01", "Wireless Mouse", 1200)
prod2 = Product("P02", "Mechanical Keyboard", 3500)
prod3 = Product("P03", "USB-C Hub", 1800)

prod2.update_price(3200)
prod2.display_product()
print(f"Discounted price (15% off): {prod2.calculate_discounted_price(15):.2f}")

# Task 7: Constructors with Default Parameters (Mobile)
print("\nTask 7")
class Mobile:
    def __init__(self, brand: str, model: str, price: float = 15000.0, color: str = "Black"):
        if price < 0:
            raise ValueError("Price cannot be negative.")
        self.brand = brand
        self.model = model
        self.price = price
        self.color = color

    def display_details(self) -> None:
        print(f"Brand: {self.brand} | Model: {self.model} | Color: {self.color} | Price: {self.price:.2f}")


m1 = Mobile("Samsung", "Galaxy A15")                  # Uses default price and color
m2 = Mobile("Apple", "iPhone 16", price=79900)        # Custom price, default color
m3 = Mobile("OnePlus", "13R", 42999, "Astral Trail")  # Custom price and color

for mobile in (m1, m2, m3):
    mobile.display_details()

# Task 8: Book Management System
print("\nTask 8")
class Book:
    def __init__(self, title, author, price, publication_year):
        if price < 0:
            raise ValueError("Price cannot be negative.")
        self.title = title
        self.author = author
        self.price = price
        self.publication_year = publication_year

    def apply_discount(self, discount_percent: float) -> float:
        if not (0 <= discount_percent <= 100):
            raise ValueError("Discount percentage must be between 0 and 100.")
        # Returns discounted price without mutating self.price
        return self.price * (1 - discount_percent / 100)

    def display_details(self) -> None:
        print(
            f"Title: {self.title} | Author: {self.author} | "
            f"Year: {self.publication_year} | Original Price: {self.price:.2f}"
        )


b1 = Book("Clean Code", "Robert C. Martin", 850, 2008)
b2 = Book("Designing Data-Intensive Applications", "Martin Kleppmann", 1200, 2017)
b3 = Book("Atomic Habits", "James Clear", 600, 2018)

discounts = [20, 10, 25]
for book, disc in zip((b1, b2, b3), discounts):
    book.display_details()
    print(f"  -> Price after {disc}% discount: {book.apply_discount(disc):.2f} (Original stays {book.price:.2f})")

# Task 9: Inventory Item Tracker
print("\nTask 9")
class InventoryItem:
    def __init__(self, item_id, item_name, price, quantity):
        if price < 0 or quantity < 0:
            raise ValueError("Price and initial quantity cannot be negative.")
        self.item_id = item_id
        self.item_name = item_name
        self.price = price
        self.quantity = quantity

    def add_stock(self, amount: int) -> bool:
        if amount < 0:
            print(f"[{self.item_name}] Cannot add negative stock.")
            return False
        self.quantity += amount
        return True

    def remove_stock(self, amount: int) -> bool:
        if amount < 0:
            print(f"[{self.item_name}] Cannot remove negative stock.")
            return False
        if amount > self.quantity:
            print(f"[{self.item_name}] Insufficient stock to remove {amount} units.")
            return False
        self.quantity -= amount
        return True

    def display_item(self) -> None:
        print(
            f"ID: {self.item_id} | Item: {self.item_name} | "
            f"Price: {self.price:.2f} | Quantity: {self.quantity}"
        )


item1 = InventoryItem("I01", "Notebook", 80, 50)
item2 = InventoryItem("I02", "Ballpoint Pen", 15, 120)
item3 = InventoryItem("I03", "Stapler", 150, 25)

item1.add_stock(30)
item1.remove_stock(20)
item2.remove_stock(200)  # Exceeds available stock
item3.remove_stock(10)

for item in (item1, item2, item3):
    item.display_item()

# Task 10: Library Book Tracking System
print("\nTask 10")
class LibraryBook:
    def __init__(self, title, author, is_available: bool = True):
        self.title = title
        self.author = author
        self.is_available = is_available

    def borrow_book(self) -> bool:
        if not self.is_available:
            print(f"'{self.title}' is already borrowed.")
            return False
        self.is_available = False
        print(f"You borrowed '{self.title}'.")
        return True

    def return_book(self) -> bool:
        if self.is_available:
            print(f"'{self.title}' is already available in the library.")
            return False
        self.is_available = True
        print(f"You returned '{self.title}'.")
        return True

    def display_status(self) -> None:
        status = "Available" if self.is_available else "Borrowed"
        print(f"Title: {self.title} | Author: {self.author} | Status: {status}")


books = [
    LibraryBook("1984", "George Orwell"),
    LibraryBook("To Kill a Mockingbird", "Harper Lee"),
    LibraryBook("The Great Gatsby", "F. Scott Fitzgerald"),
    LibraryBook("Brave New World", "Aldous Huxley"),
    LibraryBook("Fahrenheit 451", "Ray Bradbury"),
]

books[0].borrow_book()
books[0].borrow_book()  # Already borrowed
books[2].borrow_book()
books[0].return_book()

for book in books:
    book.display_status()