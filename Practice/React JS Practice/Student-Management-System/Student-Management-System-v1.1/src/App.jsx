import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import StudentForm from './components/StudentForm'
import StudentCard from './components/StudentCard'
import Statistics from './components/Statistics'
import Footer from './components/Footer'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentList, setStudentList] = useState([
    { id: 'S01', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aanya Sharma', email: 'aanya.sharma@email.com', mobile: '9876543210', course: 'B.Tech CSE', city: 'Mumbai', price: '₹1,50,000', status: 'Active' },
    { id: 'S02', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Rohan Verma', email: 'rohan.v@email.com', mobile: '8765432109', course: 'Data Science', city: 'Delhi', price: '₹95,000', status: 'Active' },
    { id: 'S03', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80', name: 'Priya Patel', email: 'priya.patel@email.com', mobile: '7654321098', course: 'MBA', city: 'Ahmedabad', price: '₹2,10,000', status: 'Completed' },
    { id: 'S04', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80', name: 'Arjun Nair', email: 'arjun.nair@email.com', mobile: '6543210987', course: 'UI/UX Design', city: 'Bengaluru', price: '₹75,000', status: 'Active' },
    { id: 'S05', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80', name: 'Sneha Reddy', email: 'sneha.r@email.com', mobile: '9123456789', course: 'Cyber Security', city: 'Hyderabad', price: '₹1,20,000', status: 'Completed' }
  ]);
  const instituteName = "Frame Box IT";

  return (
    <>
      <Header />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <StudentForm studentList={studentList} setStudentList={setStudentList} searchQuery={searchQuery} instituteName={instituteName} />
      <StudentCard />
      <Statistics studentList={studentList}/>
      <Footer />
    </>
  )
}

export default App
