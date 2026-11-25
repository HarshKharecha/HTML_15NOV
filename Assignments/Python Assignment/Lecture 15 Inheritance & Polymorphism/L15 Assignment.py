# Task 1: Animal Sound System
print("Task 1")
class Animal:
    def sound(self):
        print("The animal makes a sound.")


class Dog(Animal):
    def sound(self):
        print("Dog: Woof! Woof!")


class Cat(Animal):
    def sound(self):
        print("Cat: Meow!")


class Cow(Animal):
    def sound(self):
        print("Cow: Moo!")


if __name__ == "__main__":
    dog = Dog()
    cat = Cat()
    cow = Cow()

    dog.sound()
    cat.sound()
    cow.sound()

# Task 2: Employee Management System
print("\nTask 2")
class Employee:
    def __init__(self, employee_id, name, salary):
        self.employee_id = employee_id
        self.name = name
        self.salary = salary

    def display_details(self):
        print(f"ID: {self.employee_id} | Name: {self.name} | Salary: ₹{self.salary:,.2f}")


class Manager(Employee):
    def __init__(self, employee_id, name, salary, team_size):
        super().__init__(employee_id, name, salary)
        self.team_size = team_size

    def manage_team(self):
        print(f"{self.name} is managing a team of {self.team_size} members.")


class Developer(Employee):
    def __init__(self, employee_id, name, salary, programming_language):
        super().__init__(employee_id, name, salary)
        self.programming_language = programming_language

    def write_code(self):
        print(f"{self.name} is writing {self.programming_language} code.")


if __name__ == "__main__":
    mgr = Manager(101, "Alice Johnson", 95000, 8)
    dev = Developer(102, "Bob Smith", 82000, "Python")

    mgr.display_details()
    mgr.manage_team()

    print("-" * 40)

    dev.display_details()
    dev.write_code()

# Task 3: Vehicle Inheritance System
print("\nTask 3")
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def display_details(self):
        print(f"Vehicle: {self.year} {self.brand} {self.model}")


class Car(Vehicle):
    def __init__(self, brand, model, year, trunk_capacity_liters):
        super().__init__(brand, model, year)
        self.trunk_capacity_liters = trunk_capacity_liters

    def open_trunk(self):
        print(f"Opening trunk ({self.trunk_capacity_liters}L) on {self.brand} {self.model}.")


class Bike(Vehicle):
    def __init__(self, brand, model, year, engine_cc):
        super().__init__(brand, model, year)
        self.engine_cc = engine_cc

    def start_ride(self):
        print(f"Starting ride on {self.brand} {self.model} ({self.engine_cc}cc).")


class Truck(Vehicle):
    def __init__(self, brand, model, year, max_payload_tons):
        super().__init__(brand, model, year)
        self.max_payload_tons = max_payload_tons

    def load_cargo(self, tons):
        if tons > self.max_payload_tons:
            print(f"Warning: {tons}t exceeds max payload of {self.max_payload_tons}t.")
        else:
            print(f"Loaded {tons}t of cargo into {self.brand} {self.model}.")


if __name__ == "__main__":
    car = Car("Toyota", "Camry", 2024, 428)
    bike = Bike("Yamaha", "MT-07", 2023, 689)
    truck = Truck("Volvo", "FH16", 2025, 25)

    car.display_details()
    car.open_trunk()

    bike.display_details()
    bike.start_ride()

    truck.display_details()
    truck.load_cargo(18)

# Task 4: Method Overriding — Payment System
print("\nTask 4")
class Payment:
    def pay(self, amount):
        print(f"Processing payment of ₹{amount:.2f}.")


class CreditCardPayment(Payment):
    def pay(self, amount):
        print(f"Paid ₹{amount:.2f} using Credit Card.")


class UPIPayment(Payment):
    def pay(self, amount):
        print(f"Paid ₹{amount:.2f} via UPI instant transfer.")


class CashPayment(Payment):
    def pay(self, amount):
        print(f"Paid ₹{amount:.2f} in physical Cash.")


if __name__ == "__main__":
    card = CreditCardPayment()
    upi = UPIPayment()
    cash = CashPayment()

    card.pay(1250.00)
    upi.pay(499.50)
    cash.pay(75.00)

# Task 5: Shape Area Calculator
print("\nTask 5")
import math


class Shape:
    def area(self):
        raise NotImplementedError("Subclasses must implement area().")


def _validate_positive(value, name):
    if value <= 0:
        raise ValueError(f"{name} must be greater than 0, got {value}.")


class Rectangle(Shape):
    def __init__(self, length, width):
        _validate_positive(length, "Length")
        _validate_positive(width, "Width")
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width


class Circle(Shape):
    def __init__(self, radius):
        _validate_positive(radius, "Radius")
        self.radius = radius

    def area(self):
        return math.pi * (self.radius ** 2)


class Triangle(Shape):
    def __init__(self, base, height):
        _validate_positive(base, "Base")
        _validate_positive(height, "Height")
        self.base = base
        self.height = height

    def area(self):
        return 0.5 * self.base * self.height


if __name__ == "__main__":
    shapes = [
        Rectangle(10, 4),
        Circle(5),
        Triangle(6, 8),
    ]

    for shape in shapes:
        print(f"{type(shape).__name__} Area: {shape.area():.2f}")

    # Example validation check
    try:
        invalid_circle = Circle(-3)
    except ValueError as err:
        print(f"Validation error: {err}")

# Task 6: Multilevel Inheritance — Person, Student, and Graduate
print("\nTask 6")
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display_person_info(self):
        print(f"Name: {self.name}, Age: {self.age}")


class Student(Person):
    def __init__(self, name, age, roll_number, course):
        super().__init__(name, age)
        self.roll_number = roll_number
        self.course = course

    def display_student_info(self):
        self.display_person_info()
        print(f"Roll Number: {self.roll_number}, Course: {self.course}")


class GraduateStudent(Student):
    def __init__(self, name, age, roll_number, course, research_topic):
        super().__init__(name, age, roll_number, course)
        self.research_topic = research_topic

    def display_complete_details(self):
        self.display_student_info()
        print(f"Research Topic: {self.research_topic}")


if __name__ == "__main__":
    grad_student = GraduateStudent(
        name="Elena Rostova",
        age=24,
        roll_number="GR2026-042",
        course="M.S. in Computer Science",
        research_topic="Efficient Distributed Graph Neural Networks",
    )
    grad_student.display_complete_details()

# Task 7: Multiple Inheritance — Smart Device
print("\nTask 7")
class Camera:
    def take_photo(self):
        print("Camera: Captured a high-resolution photo.")


class Phone:
    def make_call(self, number):
        print(f"Phone: Calling {number}...")


class Smartphone(Camera, Phone):
    def browse_internet(self, url):
        print(f"Smartphone: Loading {url} in browser.")


if __name__ == "__main__":
    phone = Smartphone()
    phone.take_photo()
    phone.make_call("+1-555-0199")
    phone.browse_internet("https://example.com")

# Task 8: Hierarchical Inheritance — Banking System
print("\nTask 8")
class BankAccount:
    def __init__(self, account_holder, balance=0.0):
        if balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self.account_holder = account_holder
        self.balance = float(balance)

    def deposit(self, amount):
        if amount < 0:
            raise ValueError("Deposit amount cannot be negative.")
        self.balance += amount
        print(f"Deposited ₹{amount:.2f} into {self.account_holder}'s account.")

    def display_balance(self):
        print(f"{self.account_holder} | Current Balance: ₹{self.balance:.2f}")

    def calculate_interest(self):
        return 0.0


class SavingsAccount(BankAccount):
    INTEREST_RATE = 0.04  # 4% annual interest

    def calculate_interest(self):
        interest = self.balance * self.INTEREST_RATE
        return interest


class CurrentAccount(BankAccount):
    INTEREST_RATE = 0.01  # 1% annual interest

    def calculate_interest(self):
        interest = self.balance * self.INTEREST_RATE
        return interest


if __name__ == "__main__":
    savings = SavingsAccount("David Kim", 5000)
    current = CurrentAccount("Sophia Patel", 10000)

    savings.deposit(1000)
    savings.display_balance()
    print(f"Savings Interest: ₹{savings.calculate_interest():.2f}")

    print("-" * 40)

    current.display_balance()
    print(f"Current Interest: ₹{current.calculate_interest():.2f}")

    # Validation examples
    try:
        current.deposit(-50)
    except ValueError as err:
        print(f"Deposit rejected: {err}")

    try:
        bad_acc = SavingsAccount("Invalid User", -100)
    except ValueError as err:
        print(f"Account creation rejected: {err}")

# Task 9: Runtime Polymorphism — Notification System
print("\nTask 9")
class Notification:
    def send(self, message):
        raise NotImplementedError("Subclasses must implement send(message).")


class EmailNotification(Notification):
    def send(self, message):
        print(f"[Email] Sending email with body: {message}")


class SMSNotification(Notification):
    def send(self, message):
        print(f"[SMS] Sending text message: {message}")


class PushNotification(Notification):
    def send(self, message):
        print(f"[Push] Sending mobile push alert: {message}")


def send_notification(notification, message):
    notification.send(message)


if __name__ == "__main__":
    channels = [
        EmailNotification(),
        SMSNotification(),
        PushNotification(),
    ]

    for channel in channels:
        send_notification(channel, "Your order has shipped!")

# Task 10: Polymorphic Product Discount System
print("\nTask 10")
class Product:
    def __init__(self, name, price):
        if price < 0:
            raise ValueError(f"Price cannot be negative, got {price}.")
        self.name = name
        self.price = float(price)

    def calculate_discount(self):
        return 0.0

    def final_price(self):
        return self.price - self.calculate_discount()


class Electronics(Product):
    DISCOUNT_RATE = 0.10  # 10%

    def calculate_discount(self):
        return self.price * self.DISCOUNT_RATE


class Clothing(Product):
    DISCOUNT_RATE = 0.20  # 20%

    def calculate_discount(self):
        return self.price * self.DISCOUNT_RATE


class Books(Product):
    DISCOUNT_RATE = 0.05  # 5%

    def calculate_discount(self):
        return self.price * self.DISCOUNT_RATE


if __name__ == "__main__":
    products = [
        Electronics("Wireless Headphones", 150.00),
        Clothing("Denim Jacket", 80.00),
        Books("Clean Code", 40.00),
    ]

    for item in products:
        discount = item.calculate_discount()
        final = item.final_price()
        print(
            f"{item.name} ({type(item).__name__}) -> "
            f"Original: ₹{item.price:.2f} | "
            f"Discount: ₹{discount:.2f} | "
            f"Final Price: ₹{final:.2f}"
        )