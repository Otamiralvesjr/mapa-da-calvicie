import React from 'react'
import FadeIn from './FadeIn'
import { GUIDE_ITEMS } from '../data/guideItems'

function GuideContents(){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)'}}>
      <div style={{maxWidth:960,margin:'0 auto'}}>
        <FadeIn>
          <div style={{textAlign:'center',marginBottom:16}}>
            <h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:14}}>O que você vai encontrar</h2>
            <p style={{color:'#9ca3af',fontSize:16,maxWidth:460,margin:'0 auto'}}>Não é apenas um guia sobre tratamentos. É um mapa para ajudar você a entender suas opções, evitar erros comuns e tomar decisões melhores.</p>
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap',margin:'28px 0 48px'}}>
            {['Guia Digital Completo','Framework de Tomada de Decisão','Comparativo de Tratamentos','Checklist de Avaliação','Atualizações Futuras'].map(tag=>(
              <span key={tag} style={{fontSize:12,color:'#6b7280',border:'1px solid rgba(255,255,255,0.08)',borderRadius:20,padding:'4px 12px'}}>{tag}</span>
            ))}
          </div>
        </FadeIn>
        <div className="guide-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10}}>
          {GUIDE_ITEMS.map((item,i)=>(
            <FadeIn key={i} delay={i*55}>
              <div style={item.bonus?{background:'rgba(245,158,11,0.05)',border:'1px solid rgba(245,158,11,0.22)',borderRadius:14,padding:'clamp(18px,2.5vw,24px)',transition:'all .22s',height:'100%',boxShadow:'0 0 28px rgba(245,158,11,0.07)'}:{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:14,padding:'clamp(18px,2.5vw,24px)',transition:'all .22s',height:'100%'}} onMouseEnter={e=>{e.currentTarget.style.background=item.bonus?'rgba(245,158,11,0.09)':'rgba(255,255,255,0.055)';e.currentTarget.style.borderColor=item.bonus?'rgba(245,158,11,0.38)':'rgba(255,255,255,0.12)';e.currentTarget.style.transform='translateY(-3px)'}} onMouseLeave={e=>{e.currentTarget.style.background=item.bonus?'rgba(245,158,11,0.05)':'rgba(255,255,255,0.025)';e.currentTarget.style.borderColor=item.bonus?'rgba(245,158,11,0.22)':'rgba(255,255,255,0.07)';e.currentTarget.style.transform='none'}}>
                {item.bonus&&<div style={{fontSize:9,fontWeight:800,color:'#f59e0b',letterSpacing:'0.2em',marginBottom:10,opacity:0.85}}>BÔNUS EXCLUSIVO</div>}
                <div style={{fontSize:11,fontWeight:700,color:'#f59e0b',letterSpacing:'0.12em',marginBottom:12}}>{item.num}</div>
                <h3 style={{fontSize:14,fontWeight:700,marginBottom:10,letterSpacing:'-0.01em',lineHeight:1.45}}>{item.title}</h3>
                <p style={{color:'#9ca3af',fontSize:13,lineHeight:1.7,whiteSpace:'pre-line'}}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.guide-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:440px){.guide-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

export default GuideContents
