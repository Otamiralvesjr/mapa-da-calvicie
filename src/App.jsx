import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ContextBanner from './components/ContextBanner'
import Timeline from './components/Timeline'
import PainSection from './components/PainSection'
import GuideContents from './components/GuideContents'
import FounderStory from './components/FounderStory'
import VisualProof from './components/VisualProof'
import ForWhom from './components/ForWhom'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'
import VideoModal from './components/VideoModal'
import MobileSticky from './components/MobileSticky'

function App(){
  const[showWaitlist,setShowWaitlist]=useState(false);
  const[showVideo,setShowVideo]=useState(false);
  useEffect(()=>{document.body.style.overflow=(showWaitlist||showVideo)?'hidden':'';return()=>{document.body.style.overflow='';};},[showWaitlist,showVideo]);
  const open=()=>setShowWaitlist(true);
  return(
    <>
      <Nav onWaitlist={open}/>
      <main>
        <Hero onWaitlist={open}/>
        <ContextBanner/>
        <Timeline/>
        <PainSection/>
        <GuideContents/>
        <FounderStory/>
        <VisualProof onVideoOpen={()=>setShowVideo(true)}/>
        <ForWhom onWaitlist={open}/>
        <FAQ/>
        <FinalCTA onWaitlist={open}/>
        <Footer/>
      </main>
      <div className="mobile-cta-wrap"><MobileSticky onWaitlist={open}/></div>
      {showWaitlist&&<WaitlistModal onClose={()=>setShowWaitlist(false)}/>}
      {showVideo&&<VideoModal onClose={()=>setShowVideo(false)}/>}
      <style>{`@media(min-width:769px){.mobile-cta-wrap{display:none}}@media(max-width:768px){.mobile-cta-wrap{display:block}}`}</style>
    </>
  );
}

export default App
