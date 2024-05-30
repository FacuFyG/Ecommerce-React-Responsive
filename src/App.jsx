import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Aos from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import EmailBanner from './components/EmailBanner'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const App = () => {

  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>  
      
    <Navbar/>
    <Hero/>
    <div className='dark:bg-gray-900 dark:text-white'>
    <Products/>
    <TopProducts/>
    <Banner/>
    <EmailBanner/>
    <Testimonials/>
    </div>
    <Footer/>

    </>
  )
}

export default App