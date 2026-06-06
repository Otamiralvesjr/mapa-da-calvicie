import React, { useState, useEffect } from 'react'

function WaitlistModal({onClose}){
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[loading,setLoading]=useState(false);
  const[done,setDone]=useState(false);
  const submit=e=>{e.preventDefault();if(!name.trim()||!email.trim())return;setLoading(true);setTimeout(()=>{setLoading(false);setDone(true);},1400);};
  useEffect(()=>{const fn=e=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',fn);return()=>window.removeEventListener('keydown',fn);},[]);
  return(
    <div style={{position:'fixed',inset:0,zIndex:9000,background:'rgba(0,0,0,0.82)',backdropFilter:'blur(10px)',display:'flex',alignItems:'center',justifyContent:'center',padding:16}} onClick={onClose}>
      <div style={{background:'#101010',border:'1px solid rgba(255,255,255,0.1)',borderRadius:20,padding:'clamp(28px,5vw,44px)',maxWidth:440,width:'100%',position:'relative',boxShadow:'0 32px 80px rgba(0,0,0,0.8)'}} onClick={e=>e.stopPropagation()}>
        <button onClick={onClose} style={{position:'absolute',top:14,right:14,background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',color:'#9ca3af',width:32,height:32,borderRadius:8,fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'all .2s'}} onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)';e.currentTarget.style.color='#f5f5f5'}} onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.06)';e.currentTarget.style.color='#9ca3af'}}>×</button>
        {!done?(
          <>
            <div style={{marginBottom:28}}>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.16)',borderRadius:20,padding:'4px 12px',marginBottom:18}}>
                <span style={{width:5,height:5,borderRadius:'50%',background:'#f59e0b',display:'inline-block'}}/>
                <span style={{fontSize:12,color:'#f59e0b',fontWeight:600}}>Lançamento em breve</span>
              </div>
              <h3 style={{fontSize:22,fontWeight:800,letterSpacing:'-0.03em',marginBottom:10}}>Entrar na lista de espera</h3>
              <p style={{fontSize:14,color:'#9ca3af',lineHeight:1.65}}>Seja um dos primeiros a acessar o guia completo quando ele for lançado.</p>
            </div>
            <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:10}}>
              <input type="text" placeholder="Seu nome" value={name} onChange={e=>setName(e.target.value)} required style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,padding:'13px 16px',color:'#f5f5f5',fontSize:15,width:'100%',outline:'none',transition:'border-color .2s'}} onFocus={e=>e.target.style.borderColor='rgba(245,158,11,0.45)'} onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.1)'}/>
              <input type="email" placeholder="Seu e-mail" value={email} onChange={e=>setEmail(e.target.value)} required style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:10,padding:'13px 16px',color:'#f5f5f5',fontSize:15,width:'100%',outline:'none',transition:'border-color .2s'}} onFocus={e=>e.target.style.borderColor='rgba(245,158,11,0.45)'} onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.1)'}/>
              <button type="submit" disabled={loading} style={{background:loading?'#b45309':'#f59e0b',color:'#000',border:'none',padding:'14px',borderRadius:10,fontSize:15,fontWeight:700,cursor:loading?'not-allowed':'pointer',transition:'all .2s',marginTop:4,letterSpacing:'-0.01em'}}>
                {loading?'Entrando...':'Entrar na lista de espera'}
              </button>
              <p style={{fontSize:12,color:'#6b7280',textAlign:'center',marginTop:4}}>Sem spam. Você só receberá o aviso de lançamento.</p>
            </form>
          </>
        ):(
          <div style={{textAlign:'center',padding:'16px 0'}}>
            <div style={{width:60,height:60,borderRadius:'50%',background:'rgba(245,158,11,0.1)',border:'1px solid rgba(245,158,11,0.2)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 22px',fontSize:24,color:'#f59e0b'}}>✓</div>
            <h3 style={{fontSize:21,fontWeight:800,marginBottom:12,letterSpacing:'-0.03em'}}>Você está na lista!</h3>
            <p style={{fontSize:14,color:'#9ca3af',lineHeight:1.68,maxWidth:320,margin:'0 auto 26px'}}>Assim que o guia for lançado, você será um dos primeiros a receber o aviso — com o preço de lançamento.</p>
            <button onClick={onClose} style={{background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',color:'#e5e5e5',padding:'10px 22px',borderRadius:8,fontSize:14,fontWeight:500,cursor:'pointer',transition:'all .2s'}} onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.12)'} onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.07)'}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal
