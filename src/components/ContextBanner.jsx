import React from 'react'

function ContextBanner(){
  return(
    <div style={{borderTop:'1px solid rgba(255,255,255,0.06)',borderBottom:'1px solid rgba(255,255,255,0.06)',background:'rgba(255,255,255,0.015)',padding:'18px clamp(16px,4vw,48px)',textAlign:'center'}}>
      <p style={{fontSize:14,color:'#6b7280',maxWidth:600,margin:'0 auto',lineHeight:1.65}}>
        Este guia reúne as respostas que levei mais de 15 anos para encontrar — organizadas para ajudar outras pessoas a evitar os mesmos erros.
      </p>
    </div>
  );
}

export default ContextBanner
