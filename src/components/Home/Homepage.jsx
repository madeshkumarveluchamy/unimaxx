import React from 'react'
import Hero from './Hero'
import UnimaxxFeatures from './UnimaxxFeatures'
import UnimaxxProjects from './UnimaxxProjects'
import UnimaxxOngoing from './UnimaxxOngoing'
import UnimaxxExpertise from './UnimaxxExpertise'
import UnimaxxFaq from './UnimaxxFaq'
import UnimaxxTeam from './UnimaxxTeam'
import UnimaxxReviews from './UnimaxxReviews'
import UnimaxxInsights from './UnimaxxInsights'
import GooeButton from './GoeeButton'
import GooButton from './GooButton'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <UnimaxxFeatures />
      <UnimaxxProjects />
      <UnimaxxOngoing />
      <UnimaxxExpertise />
      <UnimaxxFaq />
      <UnimaxxTeam />
      <UnimaxxReviews />
      <UnimaxxInsights />
    </div>
  )
}

export default Homepage
