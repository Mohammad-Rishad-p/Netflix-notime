import React from 'react'
import Feature from '../components/Feature'
import Faq from '../components/Faq'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <Faq />
      <Feature no={1} heading="Heading 1" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
      <Feature no={2} heading="Heading 1" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
      <Feature no={3} heading="Heading 1" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
      <Feature no={4} heading="Heading 1" videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />

    </div>
  )
}

export default Home