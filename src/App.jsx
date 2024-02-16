// components
import { Banner } from './components/Banner';
import { Header } from './components/Header';
// import { Nav } from './components/Nav';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Loading } from './components/Loading';


// import React from 'react'

export const App = () => {
  return (
    <>
      <div
        className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Loading/>
        <Header />
        <Banner />
        {/* <Nav /> */}
        <About />
        <Services />
        <Work />
        <Contact />
        <div className='h-[4000px]'></div>
      </div>
    </>
  )
}
