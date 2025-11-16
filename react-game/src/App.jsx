import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LudoBoard } from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'

function App() {

  return (
    <>
      <Lottery n={4} winningSum={20}/>

    </>
  )
}

export default App
