//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className='Big_container'>
      <div className='header_part'>
        <Header></Header>
      </div>
      <div className='contents'>
        <p>component로 칸 만들고, 내용은 따로 입력</p>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default App
