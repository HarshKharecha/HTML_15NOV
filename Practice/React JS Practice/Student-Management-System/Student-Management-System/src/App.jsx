import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import StudentForm from './components/StudentForm'
import StudentCard from './components/StudentCard'
import Statistics from './components/Statistics'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const instituteName = "Frame Box IT";

  return (
    <>
      <Header />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <StudentForm searchQuery={searchQuery} instituteName={instituteName} />
      <StudentCard />
      <Footer />
    </>
  )
}

export default App
