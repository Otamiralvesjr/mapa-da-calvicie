import React, { useState } from 'react'
import FadeIn from './FadeIn'
import { PROOF } from '../data/proof'

function VisualProof({onVideoOpen}){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)'}}>
      <div style={{maxWidth:960,margin:'0 auto'}}>
        <FadeIn>
          <div style={{marginBottom:44,textAlign:'center'}}>
            <h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em'}}>A jornada em imagens</h2>
          </div>
        </FadeIn>
        <div className="proof-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:12}}>
          {PROOF.map((p,i)=>(
            <FadeIn key={i} delay={i*70}>
              <div style={{borderRadius:12,overflow:'hidden',background:'#111',border:'1px solid rgba(255,255,255,0.07)',transition:'border-color .2s'}} onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.14)'} onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'}>
                <div style={{aspectRatio:'3/4',overflow:'hidden'}}>
                  <img src={p.src} alt={p.label} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top',transition:'transform .4s ease'}} onMouseEnter={e=>e.target.style.transform='scale(1.04)'} onMouseLeave={e=>e.target.style.transform='none'} onError={e=>{e.target.parentNode.style.background='#1a1a1a';e.target.style.display='none'}}/>
                </div>
                <div style={{padding:'10px 12px'}}>
                  <div style={{fontSize:10,color:p.pc,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:3}}>{p.phase}</div>
                  <div style={{fontSize:12,color:'#9ca3af'}}>{p.label}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={280}>
          <div onClick={onVideoOpen} role="button" tabIndex={0} onKeyDown={e=>e.key==='Enter'&&onVideoOpen()} style={{borderRadius:14,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.08)',padding:'40px 24px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:24,transition:'all .25s'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(245,158,11,0.25)';e.currentTarget.style.background='rgba(245,158,11,0.03)'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';e.currentTarget.style.background='rgba(255,255,255,0.02)'}}>
            <div style={{width:56,height:56,borderRadius:'50%',flexShrink:0,background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.25)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="5,3 19,12 5,21"/></svg>
            </div>
            <div>
              <div style={{fontSize:16,fontWeight:700,letterSpacing:'-0.01em',marginBottom:5}}>Ver vídeo do procedimento</div>
              <div style={{fontSize:13,color:'#6b7280'}}>Registro real do dia do transplante capilar</div>
            </div>
          </div>
        </FadeIn>
      </div>
      <style>{`@media(max-width:580px){.proof-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </section>
  );
}

export default VisualProof
