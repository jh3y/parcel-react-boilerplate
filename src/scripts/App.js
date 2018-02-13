import React from 'react'
import Scaler from './components/Scaler/'
import Title from './components/Title/'
import { container } from '../styles/index.styl'

const App = () => (
  <div className={container}>
    <Title text="Hello React App 👋" />
    <Scaler />
  </div>
)
export default App
