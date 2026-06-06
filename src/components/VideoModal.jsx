import React, { useEffect } from 'react'

function VideoModal({onClose}){
  useEffect(()=>{const fn=e=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',fn);return()=>window.removeEventListener('keydown',fn);},[]);
  return(
    <div style={{position:'fixed',inset:0,zIndex:9000,background:'rgba(0,0,0,0.96)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:20}} onClick={onClose}>
      <div style={{position:'absolute',top:20,right:20}}>
        <button onClick={onClose} style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',color:'#e5e5e5',padding:'8px 16px',borderRadius:8,fontSize:14,fontWeight:500,cursor:'pointer',display:'flex',alignItems:'center',gap:8,transition:'all .2s'}} onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.14)'} onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.08)'}>
          <span style={{fontSize:18,lineHeight:1}}>×</span> Fechar
        </button>
      </div>
      <div style={{maxWidth:900,width:'100%'}} onClick={e=>e.stopPropagation()}>
        <video src="/images/procedimento.mp4" controls autoPlay playsInline style={{width:'100%',borderRadius:14,background:'#000',boxShadow:'0 0 80px rgba(0,0,0,0.9)'}}/>
        <p style={{fontSize:13,color:'#6b7280',textAlign:'center',marginTop:14}}>Registro real do procedimento · Pressione ESC para fechar</p>
      </div>
    </div>
  );
}

export default VideoModal
