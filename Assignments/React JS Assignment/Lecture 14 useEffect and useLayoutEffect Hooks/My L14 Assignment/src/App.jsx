import React from 'react'
import MountLogger from './components/MountLogger'
import TitleCounter from './components/TitleCounter'
import DigitalClock from './components/DigitalClock'
import CountdownTimer from './components/CountdownTimer'
import UserList from './components/UserList'
import WindowResize from './components/WindowResize'
import NetworkStatus from './components/NetworkStatus'
import MouseTracker from './components/MouseTracker'
import AutoFocusInput from './components/AutoFocusInput'
import LocalStorageCounter from './components/LocalStorageCounter'
import Stopwatch from './components/Stopwatch'
import SearchLogger from './components/SearchLogger'
import MultipleEffects from './components/MultipleEffects'
import ThemeSwitcher from './components/ThemeSwitcher'
import MeasureBoxHeight from './components/MeasureBoxHeight'
import ResponsiveCardWidth from './components/ResponsiveCardWidth'
import ScrollToTop from './components/ScrollToTop'
import LifecycleDemo from './components/LifecycleDemo'
import ProgressBar from './components/ProgressBar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <MountLogger />
      <TitleCounter />
      <DigitalClock />
      <CountdownTimer/>
      <UserList/>
      <WindowResize/>
      <NetworkStatus/>
      <MouseTracker/>
      <AutoFocusInput/>
      <LocalStorageCounter/>
      <Stopwatch/>
      <SearchLogger/>
      <MultipleEffects/>
      <ThemeSwitcher/>
      <MeasureBoxHeight/>
      <ResponsiveCardWidth/>
      <ScrollToTop/>
      <ProgressBar/>
      <LifecycleDemo/>
      <Dashboard/>
    </>
  )
}

export default App