import React from 'react'
import LigthDayBtn from '../assets/website/light-mode-button.png'
import DarkBtn from '../assets/website/dark-mode-button.png'

const DarkMode = () => {
  
  const[theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;

  React.useEffect(()=>{
    if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
  }, [theme])
  
  
    return (
    <>

        <div className='relative '>
        <img src={LigthDayBtn} alt="" className={`max-h-[30px] drop-shadow-sm transition-all duration-300 absolute right-0 z-10' ${theme === "light" ? 'opacity-100' : 'opacity-0'}`} 
        onClick={()=> setTheme(theme === "light" ? "dark" : "light")}/>
      
      
        <img src={DarkBtn} alt="" className={`max-h-[30px] drop-shadow-sm transition-all duration-300 absolute' ${theme === "light" ? 'opacity-0' : 'opacity-100'}`} onClick={()=> setTheme(theme === "light" ? "dark" : "light")}/>
        </div>
    
    
    </>
  )
}

export default DarkMode