//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Theme_Button from './components/Theme_Button'
import List from './components/List'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import { useContext } from 'react'
import Horizontal_line from './components/Horizontal_line'

function App() {
  const {isDarkMode} = useContext(ThemeContext);

  const data = [
    {id: 1, title: "학력사항",
      script: "부산대학교 정보컴퓨터공학부 ai전공",
    },
    {id: 2, title: "경력사항",
      script: "fffff",
    },
    {id: 3, title: "자격증",
      script: "aaaaaaaaa"
    },
  ]

  return (
    <>
    <div className={isDarkMode? 'dark_mode':'mode'}>
      <div className='header_part'>
        <Header />
        <Theme_Button />
      </div>
      <div className='contents'>
        <Horizontal_line />
        <List items = {data} />
        <Horizontal_line />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
