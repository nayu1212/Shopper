import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offer/Offers'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/Newsletter/NewsLetter'
import Footer from '../Components/Footer/Footer'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
