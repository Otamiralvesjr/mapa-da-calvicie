import React from 'react'
import FadeIn from './FadeIn'
import { PAIN_ITEMS } from '../data/painItems'

function PainSection(){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)',borderTop:'1px solid rgba(255,255,255,0.05)',background:'rgba(255,255,255,0.01)'}}>
      <div style={{maxWidth:960,margin:'0 auto'}}>
        <FadeIn>
          <h2 style={{fontSize:'clamp(24px,3.5vw,40px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:52,maxWidth:680}}>
            Se você está começando a perder cabelo,{' '}<span style={{color:'#9ca3af',fontWeight:400}}>provavelmente já viveu isso.</span>
          </h2>
        </FadeIn>
        <div className="pain-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:14}}>
          {PAIN_ITEMS.map((item,i)=>(
            <FadeIn key={i} delay={i*70}>
              <div style={{background:'rgba(255,255,255,0.035)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'clamp(20px,3vw,28px)',transition:'border-color .2s,background .2s',height:'100%',boxSizing:'border-box'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.13)';e.currentTarget.style.background='rgba(255,255,255,0.055)'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.07)';e.currentTarget.style.background='rgba(255,255,255,0.035)'}}>
                <div style={{width:32,height:32,borderRadius:8,background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.15)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16,color:'#f59e0b',fontSize:16,fontWeight:700}}>{i+1}</div>
                <h3 style={{fontSize:15,fontWeight:700,marginBottom:10,lineHeight:1.4,letterSpacing:'-0.01em'}}>{item.title}</h3>
                <p style={{color:'#9ca3af',fontSize:13,lineHeight:1.75,whiteSpace:'pre-line'}}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:580px){.pain-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default PainSection
