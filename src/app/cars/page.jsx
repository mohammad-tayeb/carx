import React from 'react'
import Navbar from '../../../components/Navbar'
import CarsPageBanner from '../../../components/CarsPageBanner'
import HomeBanner from '../../../components/HomeBanner'
import CarsPageCards from '../../../components/CarsPageCards'
import Footer from '../../../components/Footer'

export default function cars() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mx-10'><HomeBanner></HomeBanner></div>
      <div className='mx-10'><CarsPageCards></CarsPageCards></div>
      <Footer></Footer>
    </div>
  )
}
