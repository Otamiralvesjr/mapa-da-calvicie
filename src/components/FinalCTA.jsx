import React from 'react'
import FadeIn from './FadeIn'

function FinalCTA({onWaitlist}){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)',borderTop:'1px solid rgba(245,158,11,0.08)',background:'radial-gradient(ellipse at center bottom,rgba(245,158,11,0.04) 0%,transparent 70%)'}}>
      <div style={{maxWidth:600,margin:'0 auto',textAlign:'center'}}>
        <FadeIn><h2 style={{fontSize:'clamp(28px,4vw,50px)',fontWeight:800,lineHeight:1.07,letterSpacing:'-0.04em',marginBottom:20}}>Tudo o que eu gostaria de ter sabido aos 18 anos — organizado em um único lugar.</h2></FadeIn>
        <FadeIn delay={100}><p style={{fontSize:17,color:'#9ca3af',lineHeight:1.72,maxWidth:480,margin:'0 auto 36px'}}>Todas as perguntas que me custaram anos para responder estão neste guia. Organizadas de forma clara para ajudar você a evitar erros, economizar tempo e tomar decisões melhores.</p></FadeIn>
        <FadeIn delay={200}>
          <button onClick={onWaitlist} style={{background:'#f59e0b',color:'#000',border:'none',padding:'16px 32px',borderRadius:12,fontSize:17,fontWeight:700,cursor:'pointer',transition:'all .22s',letterSpacing:'-0.015em',display:'inline-block',marginBottom:16}} onMouseEnter={e=>{e.currentTarget.style.background='#d97706';e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 12px 40px rgba(245,158,11,0.32)'}} onMouseLeave={e=>{e.currentTarget.style.background='#f59e0b';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
            Quero acessar o guia →
          </button>
          <p style={{fontSize:13,color:'#6b7280'}}>Acesso imediato ao lançamento · Sem assinatura</p>
        </FadeIn>
      </div>
    </section>
  );
}

export default FinalCTA
