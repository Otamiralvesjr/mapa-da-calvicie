import React from 'react'
import FadeIn from './FadeIn'

function ForWhom({onWaitlist}){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)',borderTop:'1px solid rgba(255,255,255,0.05)',background:'rgba(255,255,255,0.01)'}}>
      <div style={{maxWidth:820,margin:'0 auto'}}>
        <FadeIn>
          <h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:44,textAlign:'center'}}>Este guia é para você?</h2>
        </FadeIn>
        <div className="whom-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:44}}>
          <FadeIn>
            <div style={{background:'rgba(245,158,11,0.04)',border:'1px solid rgba(245,158,11,0.14)',borderRadius:14,padding:'clamp(20px,3vw,28px)'}}>
              <h3 style={{fontSize:15,fontWeight:700,color:'#f59e0b',marginBottom:20,letterSpacing:'-0.01em'}}>Para você, se:</h3>
              {['Você está notando os primeiros sinais de queda','Já tentou tratamentos sem clareza sobre o que esperar','Não sabe se está no estágio certo para agir','Quer tomar decisões mais conscientes antes de investir tempo, dinheiro e energia em tratamentos','Considera transplante mas não sabe se é candidato'].map((item,i)=>(
                <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:i<4?14:0}}>
                  <span style={{color:'#f59e0b',flexShrink:0,marginTop:1,fontSize:13,fontWeight:700}}>✓</span>
                  <span style={{fontSize:14,color:'#b0b0b0',lineHeight:1.55}}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'clamp(20px,3vw,28px)'}}>
              <h3 style={{fontSize:15,fontWeight:700,color:'#6b7280',marginBottom:20,letterSpacing:'-0.01em'}}>Não é para você, se:</h3>
              {['Você procura uma fórmula milagrosa para recuperar o cabelo','Quer substituir o acompanhamento de um dermatologista','Já tem diagnóstico e tratamento definido com especialista'].map((item,i)=>(
                <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start',marginBottom:i<2?14:0}}>
                  <span style={{color:'#4b5563',flexShrink:0,marginTop:1,fontSize:15,lineHeight:1}}>×</span>
                  <span style={{fontSize:14,color:'#6b7280',lineHeight:1.55}}>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={180}>
          <div style={{textAlign:'center'}}>
            <button onClick={onWaitlist} style={{background:'#f59e0b',color:'#000',border:'none',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:700,cursor:'pointer',transition:'all .2s'}} onMouseEnter={e=>{e.currentTarget.style.background='#d97706';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 28px rgba(245,158,11,0.25)'}} onMouseLeave={e=>{e.currentTarget.style.background='#f59e0b';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
              Entrar na lista de espera →
            </button>
          </div>
        </FadeIn>
      </div>
      <style>{`@media(max-width:560px){.whom-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default ForWhom
