import React, { useState } from 'react'
import FadeIn from './FadeIn'
import { TIMELINE } from '../data/timeline'

function Timeline(){
  const imgBlock=(item)=>(
    <div style={{borderRadius:12,overflow:'hidden',background:'#111',border:'1px solid rgba(255,255,255,0.07)',aspectRatio:'4/3'}}>
      <img src={item.img} alt={item.alt} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} onError={e=>{e.target.parentNode.style.background='#1a1a1a';e.target.style.display='none'}}/>
    </div>
  );
  const textBlock=(item)=>(
    <div>
      <span style={{fontSize:11,fontWeight:700,color:'#f59e0b',letterSpacing:'0.1em',textTransform:'uppercase'}}>{item.tag}</span>
      <h3 style={{fontSize:19,fontWeight:700,margin:'8px 0 10px',letterSpacing:'-0.025em',lineHeight:1.3}}>{item.title}</h3>
      <p style={{color:'#9ca3af',fontSize:13,lineHeight:1.75,whiteSpace:'pre-line'}}>{item.text}</p>
    </div>
  );
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)'}}>
      <div style={{maxWidth:880,margin:'0 auto'}}>
        <FadeIn>
          <div style={{marginBottom:60,textAlign:'center'}}>
            <h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:14}}>Como eu cheguei até aqui</h2>
            <p style={{color:'#9ca3af',fontSize:16,maxWidth:440,margin:'0 auto'}}>Não foi uma linha reta. Foi um caminho longo, caro e confuso.</p>
          </div>
        </FadeIn>

        {/* ── DESKTOP: layout alternado em grid ── */}
        <div className="tl-desktop" style={{position:'relative'}}>
          <div className="tl-line" style={{position:'absolute',left:'50%',top:0,bottom:0,width:1,background:'linear-gradient(to bottom,transparent,rgba(255,255,255,0.08) 10%,rgba(255,255,255,0.08) 90%,transparent)',transform:'translateX(-50%)'}}/>
          {TIMELINE.map((item,i)=>{
            const isLeft=i%2===0;
            return(
              <FadeIn key={i} delay={i*80}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 48px 1fr',marginBottom:52,alignItems:'center'}}>
                  <div style={{padding:'0 28px 0 0',textAlign:'right'}}>
                    {isLeft ? textBlock(item) : imgBlock(item)}
                  </div>
                  <div style={{display:'flex',justifyContent:'center',position:'relative',zIndex:2}}>
                    <div style={{width:14,height:14,borderRadius:'50%',background:'#f59e0b',border:'3px solid #0a0a0a',boxShadow:'0 0 0 4px rgba(245,158,11,0.14)'}}/>
                  </div>
                  <div style={{padding:'0 0 0 28px'}}>
                    {isLeft ? imgBlock(item) : textBlock(item)}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* ── MOBILE: coluna única — texto depois imagem ── */}
        <div className="tl-mobile">
          {TIMELINE.map((item,i)=>(
            <FadeIn key={i} delay={i*80}>
              <div style={{display:'flex',gap:16,marginBottom:48}}>
                {/* linha + dot */}
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
                  <div style={{width:12,height:12,borderRadius:'50%',background:'#f59e0b',border:'3px solid #0a0a0a',boxShadow:'0 0 0 4px rgba(245,158,11,0.14)',marginTop:2,flexShrink:0}}/>
                  {i<TIMELINE.length-1&&<div style={{flex:1,width:1,background:'rgba(255,255,255,0.08)',marginTop:8}}/>}
                </div>
                {/* conteúdo */}
                <div style={{flex:1,paddingBottom:8}}>
                  {textBlock(item)}
                  <div style={{marginTop:16}}>
                    {imgBlock(item)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`
        .tl-desktop{display:block}
        .tl-mobile{display:none}
        @media(max-width:640px){
          .tl-desktop{display:none}
          .tl-mobile{display:block}
          .tl-line{display:none}
        }
      `}</style>
    </section>
  );
}

export default Timeline
