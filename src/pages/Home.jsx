import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Work from '../Components/Work/Work'
import Project from '../Components/Project/Project'
import Feature from '../Components/Feature/Feature'

import Wilson from '../Components/Client/Wilson'
import Faq from '../Components/Faq/Faq'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
   
     <Banner/>
     <Work/>
     <Project/>
     <Feature/>
     <Wilson/>
     <Faq/>
     <Blog/>
     
    </>
   
  )
}

export default Home