# Task 1: Student Marks Management System
print("Task 1")
class Student:
    def __init__(self, name: str, marks: float):
        self.name = name
        self.__marks = 0
        self.set_marks(marks)

    def get_marks(self) -> float:
        return self.__marks

    def set_marks(self, marks: float) -> None:
        if not isinstance(marks, (int, float)) or isinstance(marks, bool) or not (0 <= marks <= 100):
            raise ValueError("Marks must be a number between 0 and 100.")
        self.__marks = marks


if __name__ == "__main__":
    s1 = Student("Aarav", 88)
    s2 = Student("Diya", 94.5)
    s3 = Student("Rohan", 72)

    print(f"{s1.name}: {s1.get_marks()}")
    print(f"{s2.name}: {s2.get_marks()}")
    print(f"{s3.name}: {s3.get_marks()}")

    s3.set_marks(79)
    print(f"{s3.name} updated marks: {s3.get_marks()}")

    for bad_mark in [-5, 105]:
        try:
            s1.set_marks(bad_mark)
        except ValueError as err:
            print(f"Validation error for {bad_mark}: {err}")

# Task 2: Bank Account Management System
print("\nTask 2")
class BankAccount:
    def __init__(self, account_holder: str, balance: float):
        if not isinstance(balance, (int, float)) or isinstance(balance, bool) or balance < 0:
            raise ValueError("Initial balance cannot be negative.")
        self.account_holder = account_holder
        self.__balance = float(balance)

    def get_balance(self) -> float:
        return self.__balance

    def deposit(self, amount: float) -> None:
        if not isinstance(amount, (int, float)) or isinstance(amount, bool) or amount <= 0:
            raise ValueError("Deposit amount must be positive.")
        self.__balance += amount

    def withdraw(self, amount: float) -> None:
        if not isinstance(amount, (int, float)) or isinstance(amount, bool) or amount <= 0:
            raise ValueError("Withdrawal amount must be positive.")
        if amount > self.__balance:
            raise ValueError("Insufficient funds for withdrawal.")
        self.__balance -= amount


if __name__ == "__main__":
    acc1 = BankAccount("Ananya", 5000)
    acc2 = BankAccount("Kabir", 1500)

    acc1.deposit(2000)
    acc1.withdraw(1200)
    acc2.withdraw(500)

    print(f"{acc1.account_holder} balance: {acc1.get_balance()}")
    print(f"{acc2.account_holder} balance: {acc2.get_balance()}")

    for action in [
        lambda: acc2.withdraw(5000),
        lambda: acc2.deposit(-100),
        lambda: BankAccount("Invalid", -50),
    ]:
        try:
            action()
        except ValueError as err:
            print(f"Rejected operation: {err}")

# Task 3: Product Price Validation System
print("\nTask 3")
class Product:
    def __init__(self, name: str, price: float):
        self.name = name
        self.__price = 0.0
        self.price = price

    @property
    def price(self) -> float:
        return self.__price

    @price.setter
    def price(self, value: float) -> None:
        if not isinstance(value, (int, float)) or isinstance(value, bool) or value < 0:
            raise ValueError("Price cannot be negative.")
        self.__price = float(value)


if __name__ == "__main__":
    p1 = Product("Wireless Mouse", 799)
    p2 = Product("Mechanical Keyboard", 2499)
    p3 = Product("USB-C Hub", 1299)

    p1.price = 699
    print(f"{p1.name}: ₹{p1.price}")
    print(f"{p2.name}: ₹{p2.price}")
    print(f"{p3.name}: ₹{p3.price}")

    try:
        p2.price = -10
    except ValueError as err:
        print(f"Invalid price update: {err}")

# Task 4: Employee Salary Management System
print("\nTask 4")
class Employee:
    def __init__(self, employee_id: str, name: str, salary: float):
        self.employee_id = employee_id
        self.name = name
        self.__salary = 0.0
        self.set_salary(salary)

    def get_salary(self) -> float:
        return self.__salary

    def set_salary(self, salary: float) -> None:
        if not isinstance(salary, (int, float)) or isinstance(salary, bool) or salary < 0:
            raise ValueError("Salary cannot be negative.")
        self.__salary = float(salary)

    def display_details(self) -> None:
        print(f"ID: {self.employee_id} | Name: {self.name} | Salary: {self.__salary}")


if __name__ == "__main__":
    e1 = Employee("E101", "Meera", 65000)
    e2 = Employee("E102", "Vikram", 72000)
    e3 = Employee("E103", "Neha", 58000)

    e3.set_salary(64000)

    for emp in (e1, e2, e3):
        emp.display_details()

    try:
        e1.set_salary(-5000)
    except ValueError as err:
        print(f"Salary update failed: {err}")

# Task 5: Circle Calculator with Read-Only Properties
print("\nTask 5")
import math


class Circle:
    def __init__(self, radius: float):
        if not isinstance(radius, (int, float)) or isinstance(radius, bool) or radius <= 0:
            raise ValueError("Radius must be a positive number.")
        self.__radius = float(radius)

    @property
    def radius(self) -> float:
        return self.__radius

    @property
    def area(self) -> float:
        return math.pi * (self.__radius ** 2)


if __name__ == "__main__":
    c1 = Circle(3)
    c2 = Circle(5.5)
    c3 = Circle(10)

    for idx, c in enumerate((c1, c2, c3), start=1):
        print(f"Circle {idx} -> Radius: {c.radius}, Area: {c.area:.2f}")

    try:
        c1.radius = 8
    except AttributeError as err:
        print(f"Cannot modify radius: {err}")

    try:
        Circle(0)
    except ValueError as err:
        print(f"Invalid radius: {err}")

# Task 6: User Profile Management System
print("\nTask 6")
class UserProfile:
    def __init__(self, username: str, email: str):
        self.__username = ""
        self.__email = ""
        self.username = username
        self.email = email

    @property
    def username(self) -> str:
        return self.__username

    @username.setter
    def username(self, value: str) -> None:
        if not isinstance(value, str) or not value.strip():
            raise ValueError("Username cannot be empty or whitespace only.")
        self.__username = value.strip()

    @property
    def email(self) -> str:
        return self.__email

    @email.setter
    def email(self, value: str) -> None:
        if not isinstance(value, str) or "@" not in value:
            raise ValueError("Email must contain '@'.")
        _, domain = value.rsplit("@", 1)
        if not domain.strip():
            raise ValueError("Email must have a non-empty domain after '@'.")
        self.__email = value.strip()

    def display_profile(self) -> None:
        print(f"Username: {self.__username} | Email: {self.__email}")


if __name__ == "__main__":
    u1 = UserProfile("arjun_k", "arjun@example.com")
    u2 = UserProfile("sana_dev", "sana@domain.org")
    u3 = UserProfile("tara_m", "tara@mail.io")

    u1.username = "arjun_kumar"
    u2.email = "sana.new@domain.org"

    for user in (u1, u2, u3):
        user.display_profile()

    for bad_fn in [
        lambda: setattr(u3, "username", "   "),
        lambda: setattr(u3, "email", "invalid-email"),
        lambda: setattr(u3, "email", "user@"),
    ]:
        try:
            bad_fn()
        except ValueError as err:
            print(f"Update rejected: {err}")

# Task 7: Mobile Phone Settings System
print("\nTask 7")
class MobilePhone:
    def __init__(self, brand: str, model: str, volume: int):
        self.brand = brand
        self.model = model
        self.__volume = 0
        self.volume = volume

    @property
    def volume(self) -> int:
        return self.__volume

    @volume.setter
    def volume(self, value: int) -> None:
        if not isinstance(value, int) or isinstance(value, bool) or not (0 <= value <= 100):
            raise ValueError("Volume must be an integer between 0 and 100 inclusive.")
        self.__volume = value

    def increase_volume(self, step: int = 10) -> None:
        if step < 0:
            raise ValueError("Step must be non-negative.")
        self.__volume = min(100, self.__volume + step)

    def decrease_volume(self, step: int = 10) -> None:
        if step < 0:
            raise ValueError("Step must be non-negative.")
        self.__volume = max(0, self.__volume - step)


if __name__ == "__main__":
    phone1 = MobilePhone("Samsung", "Galaxy S25", 92)
    phone2 = MobilePhone("Google", "Pixel 9", 8)

    phone1.increase_volume(15)
    phone2.decrease_volume(20)

    print(f"{phone1.brand} {phone1.model} volume: {phone1.volume}")
    print(f"{phone2.brand} {phone2.model} volume: {phone2.volume}")

    for invalid_vol in [-1, 101]:
        try:
            phone1.volume = invalid_vol
        except ValueError as err:
            print(f"Invalid volume {invalid_vol}: {err}")

# Task 8: Library Book Management System
print("\nTask 8")
class LibraryBook:
    def __init__(self, title: str, author: str, is_available: bool = True):
        self.title = title
        self.author = author
        self.__is_available = bool(is_available)

    @property
    def is_available(self) -> bool:
        return self.__is_available

    def borrow_book(self) -> None:
        if not self.__is_available:
            raise ValueError(f"'{self.title}' is already borrowed.")
        self.__is_available = False

    def return_book(self) -> None:
        if self.__is_available:
            raise ValueError(f"'{self.title}' is already available.")
        self.__is_available = True


if __name__ == "__main__":
    books = [
        LibraryBook("Clean Code", "Robert C. Martin", True),
        LibraryBook("Atomic Habits", "James Clear", True),
        LibraryBook("1984", "George Orwell", False),
        LibraryBook("The Pragmatic Programmer", "Andrew Hunt", True),
        LibraryBook("Deep Work", "Cal Newport", True),
    ]

    books[0].borrow_book()
    books[2].return_book()

    for book in books:
        status = "Available" if book.is_available else "Borrowed"
        print(f"{book.title} by {book.author} -> {status}")

    try:
        books[0].borrow_book()
    except ValueError as err:
        print(f"Borrow error: {err}")

    try:
        books[1].return_book()
    except ValueError as err:
        print(f"Return error: {err}")

# Task 9: Inventory Stock Management System
print("\nTask 9")
class InventoryItem:
    def __init__(self, item_id: str, name: str, price: float, quantity: int):
        if not isinstance(price, (int, float)) or isinstance(price, bool) or price < 0:
            raise ValueError("Price cannot be negative.")
        if not isinstance(quantity, int) or isinstance(quantity, bool) or quantity < 0:
            raise ValueError("Initial quantity cannot be negative.")
        self.item_id = item_id
        self.name = name
        self.price = float(price)
        self.__quantity = quantity

    @property
    def quantity(self) -> int:
        return self.__quantity

    def add_stock(self, amount: int) -> None:
        if not isinstance(amount, int) or isinstance(amount, bool) or amount <= 0:
            raise ValueError("Stock to add must be a positive integer.")
        self.__quantity += amount

    def remove_stock(self, amount: int) -> None:
        if not isinstance(amount, int) or isinstance(amount, bool) or amount <= 0:
            raise ValueError("Stock to remove must be a positive integer.")
        if amount > self.__quantity:
            raise ValueError("Cannot remove more stock than available.")
        self.__quantity -= amount

    def display_details(self) -> None:
        total_value = self.price * self.__quantity
        print(
            f"[{self.item_id}] {self.name} | Price: {self.price:.2f} | "
            f"Qty: {self.__quantity} | Total Value: {total_value:.2f}"
        )


if __name__ == "__main__":
    item1 = InventoryItem("ITM-1", "Notebook", 50.0, 40)
    item2 = InventoryItem("ITM-2", "Ballpoint Pen", 15.0, 100)
    item3 = InventoryItem("ITM-3", "Desk Lamp", 850.0, 12)

    item1.add_stock(20)
    item2.remove_stock(35)
    item3.remove_stock(2)

    for item in (item1, item2, item3):
        item.display_details()

    try:
        item3.remove_stock(50)
    except ValueError as err:
        print(f"Stock removal failed: {err}")

# Task 10: Student Result Management with Properties
print("\nTask 10")
class StudentResult:
    def __init__(self, name: str, marks: float):
        self.name = name
        self.__marks = 0
        self.marks = marks

    @property
    def marks(self) -> float:
        return self.__marks

    @marks.setter
    def marks(self, value: float) -> None:
        if not isinstance(value, (int, float)) or isinstance(value, bool) or not (0 <= value <= 100):
            raise ValueError("Marks must be between 0 and 100.")
        self.__marks = value

    @property
    def result(self) -> str:
        return "Pass" if self.__marks >= 40 else "Fail"

    @property
    def grade(self) -> str:
        if self.__marks >= 90:
            return "A"
        if self.__marks >= 75:
            return "B"
        if self.__marks >= 60:
            return "C"
        if self.__marks >= 40:
            return "D"
        return "F"

    def display_result(self) -> None:
        print(f"Name: {self.name} | Marks: {self.__marks} | Result: {self.result} | Grade: {self.grade}")


if __name__ == "__main__":
    students = [
        StudentResult("Aarav", 95),
        StudentResult("Bhavna", 81),
        StudentResult("Chetan", 67),
        StudentResult("Devika", 48),
        StudentResult("Eshan", 32),
    ]

    for s in students:
        s.display_result()

    print("\n--- After Updating Marks ---")
    students[4].marks = 78
    students[3].marks = 29
    students[4].display_result()
    students[3].display_result()

    try:
        students[0].result = "Fail"
    except AttributeError as err:
        print(f"Read-only result error: {err}")