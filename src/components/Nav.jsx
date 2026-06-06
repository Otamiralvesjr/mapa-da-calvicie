import React, { useState, useEffect } from 'react'

function Nav({onWaitlist}){
  const[scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60);
    window.addEventListener('scroll',fn,{passive:true});
    return()=>window.removeEventListener('scroll',fn);
  },[]);
  return(
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:1000,height:64,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 clamp(16px,4vw,48px)',background:scrolled?'rgba(10,10,10,0.88)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid rgba(255,255,255,0.06)':'none',transition:'all .35s ease'}}>
      <span style={{fontWeight:700,fontSize:15,letterSpacing:'-0.03em'}}>Mapa da Calvície</span>
      <button onClick={onWaitlist} style={{fontSize:13,fontWeight:500,padding:'8px 18px',borderRadius:8,border:'1px solid rgba(255,255,255,0.14)',background:'rgba(255,255,255,0.05)',color:'#e5e5e5',transition:'all .2s'}} onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)';e.currentTarget.style.borderColor='rgba(255,255,255,0.22)'}} onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.borderColor='rgba(255,255,255,0.14)'}}>
        Lista de espera
      </button>
    </nav>
  );
}

export default Nav
