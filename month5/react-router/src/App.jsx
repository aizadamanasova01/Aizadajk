import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Info from './pages/info/info'
import MealDetail from './pages/meal/MealDetail'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/meal' element={<Meal/>}/>
          <Route path='/meal:id' element={<MealDetail/>}/>
          
          

          <Route 
          path='*'
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App

// SPA
//SINGLE PAGE APPLICATION