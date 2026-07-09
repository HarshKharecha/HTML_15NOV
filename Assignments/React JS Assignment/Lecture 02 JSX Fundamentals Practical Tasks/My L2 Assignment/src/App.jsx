import { useState } from 'react'
import './App.css';

function App() {

  // Task 11: Dynamic Variables
  const name = "Sarah Connor";
  const age = 28;
  const city = "Los Angeles";

  // Task 12: Arithmetic Expression Display
  const num1 = 20;
  const num2 = 5;

  // Task 13: Greeting Message Generator
  const username = "Genius";

  // Task 14: Function Output in JSX
  function generateGreeting() {
    return "Hello from the helper function system!";
  }

  // Task 16: Inline CSS Styling
  const customStyle = {
    color: '#ffffff',
    backgroundColor: '#4A90E2',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center'
  };

  // Task 20: ProfileDashboard
  // Dynamic Variables
  const user = {
    name: "Elena Rostova",
    title: "Lead Cloud Infrastructure Engineer",
    location: "Berlin, Germany",
    email: "elena.rostova@cloudtech.io",
    experienceYears: 7,
    hourlyRate: 85
  };

  // Helper Function
  const calculateAnnualEstimate = (rate) => {
    return rate * 40 * 52; // Simple structural math calculation
  };

  // Style Object Configs
  const dashboardStyles = {
    card: {
      fontFamily: 'Segoe UI, sans-serif',
      maxWidth: '450px',
      margin: '30px auto',
      padding: '25px',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      backgroundColor: '#ffffff',
      border: '1px solid #eaeaea'
    },
    avatarPlaceholder: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: '#6C63FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '24px',
      margin: '0 auto 15px auto'
    },
    headerText: {
      textAlign: 'center',
      color: '#1a1a1a',
      margin: '5px 0'
    },
    detailSection: {
      marginTop: '20px',
      borderTop: '1px solid #eee',
      paddingTop: '15px'
    }
  };

  return (
    <>
      {/* Task 1: WelcomeMessage */}

      <div>
        <h1>Welcome to ReactJS!</h1>
        <p>JSX makes it incredibly easy to build dynamic and interactive user interfaces.</p>
      </div>

      {/* Task 2: StudentCard */}

      <div className="student-card">
        <h3>Student Profile</h3>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Course:</strong> Full Stack Web Development</p>
        <p><strong>Age:</strong> 22</p>
        <p><strong>City:</strong> New York</p>
      </div>

      {/* Task 3: CompanyProfile */}

      <section>
        <h2>TechNova Solutions</h2>
        <p>Innovating the future through high-performance software engineering solutions.</p>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <p><strong>Website:</strong> www.technovasolutions.com</p>
      </section>

      {/* Task 4: ProductCard */}

      <div className="product-card">
        <div style={{ width: '150px', height: '150px', background: '#ccc' }}><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeVX6fCpy_ruUos6F0Ll5yms6xEUIURuj7t889dAQjN4AKsmy8G1wkziIUrpeTTJVCbYIhf7626mAqXNWd3EepUJ5FA0hpPiRyKOhx_TpUf1G4GjeV7QMmhA" alt="Image Placeholder" /></div>
        <h3>Wireless Headphones</h3>
        <p>Price: ₹2,999</p>
        <p>Category: Electronics</p>
        <p>Status: <span style={{ color: 'green' }}>In Stock</span></p>
      </div>

      {/* Task 5: RestaurantMenu */}

      <div className="menu-card">
        <h2>Punjabi Thali</h2>
        <h3>Paneer Butter Masala + Dal Fry + Jira Rice + 3 Butter Roti + Salad + Papad + Butter Milk</h3>
        <p>Price: ₹130</p>
        <p>Category: Main Course</p>
        <p>Rating: ⭐ 4.9 / 5</p>
      </div>

      {/* Task 6: EmployeeProfile */}

      <div className="employee-card">
        <h2>Jane Smith</h2>
        <p><strong>Designation:</strong> Senior React Developer</p>
        <p><strong>Department:</strong> Engineering</p>
        <p><strong>ID:</strong> EMP-9042</p>
        <p><strong>Experience:</strong> 5+ Years</p>
      </div>

      {/* Task 7: TravelDestination */}

      <div className="destination-card">
        <h2>Kedarnath</h2>
        <h3>Country: India</h3>
        <p><strong>Famous Attraction:</strong> <a href="https://badrinath-kedarnath.gov.in/">Shri Kedarnath Jyotirlinga Temple</a></p>
        <p><strong>Est. Travel Cost:</strong> ₹9,500</p>
        <p>Description: Experience snow-capped Himalayan peaks, the holy <a href="https://uttarakhandtourism.gov.in/destination/kedarnath">Gaurikund Temple</a>, and a 16 km spiritual trek.</p>
      </div>

      {/* Task 8: BookInformation */}

      <div className="book-card">
        <h2>The Bhagavad Gita: A Guide for Navigating Life</h2>
        <p><strong>Author:</strong> Compiled by Maharishi Ved Vyasa</p>
        <p><strong>Price:</strong> ₹299</p>
        <p><strong>Published:</strong> Circa 5th to 2nd century BCE</p>
        <p><strong>Genre:</strong> Hindu Philosophy / Self-Improvement</p>
        <p>Description: An eternal source of spiritual wisdom, offering actionable life lessons on duty, devotion, and karma to overcome inner obstacles.</p>
      </div>

      {/* Task 9: MovieCard */}

      <div className="movie-card">
        <h2>Inception</h2>
        <p><strong>Rating:</strong> 8.8 / 10</p>
        <p><strong>Release Year:</strong> 2010</p>
        <p><strong>Language:</strong> English</p>
        <p><strong>Genre:</strong> Sci-Fi / Thriller</p>
      </div>

      {/* Task 10: PortfolioHeader */}

      <header>
        <h1>Harsh S Kharecha</h1>
        <h3>EC Engineer, UI/UX Designer & Frontend Developer</h3>
        <p><strong>Skills:</strong> React, JavaScript, CSS, Figma, Tailwind</p>
        <p><strong>Email:</strong> hkheracha363@gmail.com</p>
        <p>Hi, I craft clean, interactive user interfaces with a strong focus on UX design patterns.</p>
      </header>

      {/* Task 11: Dynamic Variables */}

      <div>
        <h2>User Information</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>

      {/* Task 12: Arithmetic Expression Display */}

      <div>
        <h2>Math Operations Summary</h2>
        <p>{num1} + {num2} = {num1 + num2}</p>
        <p>{num1} - {num2} = {num1 - num2}</p>
        <p>{num1} * {num2} = {num1 * num2}</p>
      </div>

      {/* Task 13: Greeting Message Generator */}

      <div>
        <h1>Welcome, {username}!</h1>
      </div>

      {/* Task 14: Function Output in JSX */}

      <div>
        <h2>{generateGreeting()}</h2>
      </div>

      {/* Task 15: Multiple Elements Using Fragment */}

      <h1>Fragment Heading</h1>
      <p>This layout uses React Fragments to avoid writing unnecessary DOM node wrappers.</p>
      <button>Click Me</button>

      {/* Task 16: Inline CSS Styling */}

      <div style={customStyle}>
        <h3>Styled Component Container</h3>
      </div>

      {/* Task 17: LoginPage */}

      <div>
        <h2>Account Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
        <p><a href="#forgot">Forgot Password?</a></p>
      </div>

      {/* Task 18: RegistrationForm */}

      <div>
        <h2>Create an Account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="reg-name">Name:</label>
            <input type="text" id="reg-name" />
          </div>
          <div>
            <label htmlFor="reg-email">Email:</label>
            <input type="email" id="reg-email" />
          </div>
          <div>
            <label htmlFor="reg-pass">Password:</label>
            <input type="password" id="reg-pass" />
          </div>
          <div>
            <label htmlFor="reg-confirm">Confirm Password:</label>
            <input type="password" id="reg-confirm" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>

      {/* Task 19: HTML to JSX Conversion */}

      <div className="form-container" style={{ padding: '20px', border: '1px solid black' }}>
        <h2 className="title">User Setup Form</h2>
        <form>
          <label htmlFor="usernameField">Username:</label>
          <input type="text" id="usernameField" className="input-field" />
          <br />
          <label htmlFor="roleField">Role Choice:</label>
          <input type="text" id="roleField" className="input-field" />
        </form>
      </div>

      {/* Task 20: ProfileDashboard */}

      <main style={dashboardStyles.card}>
        {/* Placeholder Profile Image Element */}
        <div style={dashboardStyles.avatarPlaceholder}>
          {user.name.split(' ').map(n => n[0]).join('')}
        </div>

        {/* Dynamic User Headers */}
        <h2 style={dashboardStyles.headerText}>{user.name}</h2>
        <h4 style={{ ...dashboardStyles.headerText, color: '#666', fontWeight: 'normal' }}>
          {user.title}
        </h4>

        {/* Dynamic Structural Details via Elements */}
        <section style={dashboardStyles.detailSection}>
          <p><strong>📍 Location:</strong> {user.location}</p>
          <p><strong>✉️ Contact Email:</strong> {user.email}</p>
          <p><strong>⏳ Track Record:</strong> {user.experienceYears} Years Experience</p>
          <p><strong>💵 Projected Annual Valuation:</strong> ${calculateAnnualEstimate(user.hourlyRate).toLocaleString()}/yr</p>
        </section>
      </main>
    </>
  )
}

export default App
