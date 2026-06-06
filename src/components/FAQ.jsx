import React, { useState } from 'react'
import FadeIn from './FadeIn'
import { FAQ_ITEMS } from '../data/faqItems'

function FAQItem({item}){
  const[open,setOpen]=useState(false);
  return(
    <div style={{borderBottom:'1px solid rgba(255,255,255,0.06)',cursor:'pointer'}} onClick={()=>setOpen(v=>!v)}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0',gap:16}}>
        <span style={{fontSize:15,fontWeight:500,letterSpacing:'-0.015em',lineHeight:1.4}}>{item.q}</span>
        <span style={{color:'#f59e0b',fontSize:22,flexShrink:0,fontWeight:300,display:'inline-block',transform:open?'rotate(45deg)':'none',transition:'transform .22s'}}>+</span>
      </div>
      <div style={{overflow:'hidden',maxHeight:open?300:0,transition:'max-height .3s ease'}}>
        <p style={{color:'#9ca3af',fontSize:14,lineHeight:1.72,paddingBottom:20}}>{item.a}</p>
      </div>
    </div>
  );
}

function FAQ(){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)'}}>
      <div style={{maxWidth:660,margin:'0 auto'}}>
        <FadeIn><h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:40}}>Perguntas frequentes</h2></FadeIn>
        {FAQ_ITEMS.map((item,i)=>(<FadeIn key={i} delay={i*55}><FAQItem item={item}/></FadeIn>))}
      </div>
    </section>
  );
}

export default FAQ
