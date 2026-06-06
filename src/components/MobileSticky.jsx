import React, { useState, useEffect } from 'react'

function MobileSticky({onWaitlist}){
  const[show,setShow]=useState(false);
  useEffect(()=>{const fn=()=>setShow(window.scrollY>600);window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn);},[]);
  return(
    <div className="mobile-sticky-cta" style={{position:'fixed',bottom:0,left:0,right:0,zIndex:500,padding:'12px 16px 16px',background:'rgba(10,10,10,0.96)',backdropFilter:'blur(16px)',borderTop:'1px solid rgba(255,255,255,0.07)',transform:show?'translateY(0)':'translateY(100%)',transition:'transform .3s ease'}}>
      <button onClick={onWaitlist} style={{width:'100%',background:'#f59e0b',color:'#000',border:'none',padding:'14px',borderRadius:10,fontSize:15,fontWeight:700,cursor:'pointer'}}>Entrar na lista de espera →</button>
    </div>
  );
}

export default MobileSticky
