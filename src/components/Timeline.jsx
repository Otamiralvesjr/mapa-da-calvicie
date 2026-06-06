import React, { useState } from 'react'
import FadeIn from './FadeIn'
import { TIMELINE } from '../data/timeline'

function Timeline(){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)'}}>
      <div style={{maxWidth:880,margin:'0 auto'}}>
        <FadeIn>
          <div style={{marginBottom:60,textAlign:'center'}}>
            <h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:14}}>Como eu cheguei até aqui</h2>
            <p style={{color:'#9ca3af',fontSize:16,maxWidth:440,margin:'0 auto'}}>Não foi uma linha reta. Foi um caminho longo, caro e confuso.</p>
          </div>
        </FadeIn>
        <div style={{position:'relative'}}>
          <div className="tl-line" style={{position:'absolute',left:'50%',top:0,bottom:0,width:1,background:'linear-gradient(to bottom,transparent,rgba(255,255,255,0.08) 10%,rgba(255,255,255,0.08) 90%,transparent)',transform:'translateX(-50%)'}}/>
          {TIMELINE.map((item,i)=>{
            const isLeft=i%2===0;
            return(
              <FadeIn key={i} delay={i*80}>
                <div className="tl-row" style={{display:'grid',gridTemplateColumns:'1fr 48px 1fr',marginBottom:52,alignItems:'center'}}>
                  <div style={{padding:'0 28px 0 0',textAlign:'right'}} className={isLeft?'tl-text':'tl-img'}>
                    {isLeft?(
                      <div>
                        <span style={{fontSize:11,fontWeight:700,color:'#f59e0b',letterSpacing:'0.1em',textTransform:'uppercase'}}>{item.tag}</span>
                        <h3 style={{fontSize:19,fontWeight:700,margin:'8px 0 10px',letterSpacing:'-0.025em',lineHeight:1.3}}>{item.title}</h3>
                        <p style={{color:'#9ca3af',fontSize:13,lineHeight:1.75,whiteSpace:'pre-line'}}>{item.text}</p>
                      </div>
                    ):(
                      <div style={{borderRadius:12,overflow:'hidden',background:'#111',border:'1px solid rgba(255,255,255,0.07)',aspectRatio:'4/3'}}>
                        <img src={item.img} alt={item.alt} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} onError={e=>{e.target.parentNode.style.background='#1a1a1a';e.target.style.display='none'}}/>
                      </div>
                    )}
                  </div>
                  <div style={{display:'flex',justifyContent:'center',position:'relative',zIndex:2}}>
                    <div style={{width:14,height:14,borderRadius:'50%',background:'#f59e0b',border:'3px solid #0a0a0a',boxShadow:'0 0 0 4px rgba(245,158,11,0.14)'}}/>
                  </div>
                  <div style={{padding:'0 0 0 28px'}} className={isLeft?'tl-img':'tl-text'}>
                    {!isLeft?(
                      <div>
                        <span style={{fontSize:11,fontWeight:700,color:'#f59e0b',letterSpacing:'0.1em',textTransform:'uppercase'}}>{item.tag}</span>
                        <h3 style={{fontSize:19,fontWeight:700,margin:'8px 0 10px',letterSpacing:'-0.025em',lineHeight:1.3}}>{item.title}</h3>
                        <p style={{color:'#9ca3af',fontSize:13,lineHeight:1.75,whiteSpace:'pre-line'}}>{item.text}</p>
                      </div>
                    ):(
                      <div style={{borderRadius:12,overflow:'hidden',background:'#111',border:'1px solid rgba(255,255,255,0.07)',aspectRatio:'4/3'}}>
                        <img src={item.img} alt={item.alt} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} onError={e=>{e.target.parentNode.style.background='#1a1a1a';e.target.style.display='none'}}/>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:640px){.tl-line{display:none}.tl-row{grid-template-columns:28px 1fr!important}.tl-img{display:none!important}.tl-text{text-align:left!important;padding:0 0 0 20px!important}}`}</style>
    </section>
  );
}

export default Timeline
