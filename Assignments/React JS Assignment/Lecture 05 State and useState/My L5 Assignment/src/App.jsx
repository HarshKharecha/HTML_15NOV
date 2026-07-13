import { useState } from 'react'
import './App.css'
import SimpleCounter from './component/SimpleCounter'
import AdvancedCounter from './component/AdvancedCounter'
import LikeButton from './component/LikeButton'
import LightToggle from './component/LightToggle'
import ShowHideText from './component/ShowHideText'
import StudentName from './component/StudentName'
import GreetingMessage from './component/GreetingMessage'
import LoginStatus from './component/LoginStatus'
import ColorChanger from './component/ColorChanger'
import AgeUpdater from './component/AgeUpdater'
import ProductQuantity from './component/ProductQuantity'
import TemperatureDisplay from './component/TemperatureDisplay'
import FruitSelector from './component/FruitSelector'
import MultipleStateStudent from './component/MultipleStateStudent'
import ShoppingCartCounter from './component/ShoppingCartCounter'
import ThemeSwitcher from './component/ThemeSwitcher'
import ProfileCard from './component/ProfileCard'
import TodoList from './component/TodoList'
import EmployeeInformation from './component/EmployeeInformation'
import StudentRegistrationForm from './component/StudentRegistrationForm'

function App() {

  return (
    <>
      <SimpleCounter/>
      <AdvancedCounter/>
      <LikeButton/>
      <LightToggle/>
      <ShowHideText/>
      <StudentName/>
      <GreetingMessage/>
      <LoginStatus/>
      <ColorChanger/>
      <AgeUpdater/>
      <ProductQuantity/>
      <TemperatureDisplay/>
      <FruitSelector/>
      <MultipleStateStudent/>
      <ShoppingCartCounter/>
      <ThemeSwitcher/>
      <ProfileCard/>
      <TodoList/>
      <EmployeeInformation/>
      <StudentRegistrationForm/>
    </>
  )
}

export default App
