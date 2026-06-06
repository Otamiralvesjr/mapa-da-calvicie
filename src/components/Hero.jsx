import React from 'react'
import FadeIn from './FadeIn'

function Hero({onWaitlist}){
  return(
    <section style={{minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden'}}>
      <div className="hero-glow"/>
      <div style={{maxWidth:1080,margin:'0 auto',padding:'clamp(100px,12vw,140px) clamp(16px,4vw,48px) 80px',width:'100%'}}>
        <div className="hero-grid" style={{display:'grid',gridTemplateColumns:'1fr 400px',gap:'clamp(40px,6vw,72px)',alignItems:'center'}}>
          <div>
            <FadeIn>
              <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.18)',borderRadius:24,padding:'5px 14px',marginBottom:28}}>
                <span style={{width:6,height:6,borderRadius:'50%',background:'#f59e0b',flexShrink:0,boxShadow:'0 0 6px rgba(245,158,11,0.6)'}}/>
                <span style={{fontSize:12,color:'#f59e0b',fontWeight:600,letterSpacing:'0.02em'}}>Em breve · Lista de espera aberta</span>
              </div>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 style={{fontSize:'clamp(34px,4.5vw,56px)',fontWeight:800,lineHeight:1.07,letterSpacing:'-0.04em',marginBottom:22,color:'#f5f5f5'}}>
                Levei 15 anos para{' '}<span style={{color:'#f59e0b'}}>entender a calvície.</span>{' '}Você não precisa levar.
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p style={{fontSize:17,color:'#9ca3af',lineHeight:1.75,marginBottom:36,maxWidth:510}}>
                Depois de 15 anos pesquisando, testando tratamentos, gastando dinheiro e cometendo erros, reuni tudo o que aprendi em um guia para ajudar você a tomar decisões melhores e evitar anos de tentativa e erro.
              </p>
            </FadeIn>
            <FadeIn delay={240}>
              <button onClick={onWaitlist} style={{background:'#f59e0b',color:'#000',border:'none',padding:'15px 28px',borderRadius:10,fontSize:16,fontWeight:700,letterSpacing:'-0.015em',transition:'all .2s',display:'inline-block',marginBottom:14}} onMouseEnter={e=>{e.currentTarget.style.background='#d97706';e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 8px 30px rgba(245,158,11,0.28)'}} onMouseLeave={e=>{e.currentTarget.style.background='#f59e0b';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
                Quero receber o guia no lançamento →
              </button>
              <p style={{fontSize:13,color:'#6b7280'}}>Acesso imediato no lançamento</p>
            </FadeIn>
            <FadeIn delay={320}>
              <div style={{display:'flex',gap:'clamp(20px,4vw,40px)',marginTop:44,paddingTop:36,borderTop:'1px solid rgba(255,255,255,0.07)',flexWrap:'wrap'}}>
                {[['15 anos','pesquisando'],['dezenas','tratamentos avaliados'],['uma','decisão tomada com convicção']].map(([val,label])=>(
                  <div key={label}>
                    <div style={{fontSize:26,fontWeight:800,letterSpacing:'-0.04em'}}>{val}</div>
                    <div style={{fontSize:13,color:'#6b7280',marginTop:2}}>{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={180} className="hero-photo-wrap">
            <div style={{position:'relative'}}>
              <div style={{borderRadius:20,overflow:'hidden',aspectRatio:'3/4',background:'#111',border:'1px solid rgba(255,255,255,0.07)',boxShadow:'0 32px 80px rgba(0,0,0,0.6)'}}>
                <img src="/images/resultado-atual.JPG" alt="Otamir — resultado após transplante capilar" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}} onError={e=>{e.target.style.display='none';e.target.parentNode.style.background='linear-gradient(135deg,#111 0%,#1a1a1a 100%)'}}/>
              </div>
              <div style={{position:'absolute',bottom:-14,left:-14,background:'rgba(8,8,8,0.92)',backdropFilter:'blur(16px)',border:'1px solid rgba(245,158,11,0.2)',borderRadius:10,padding:'10px 14px',fontSize:12,color:'#f59e0b',fontWeight:600}}>
                ✓ Foto real · Sem filtro
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <style>{`.hero-grid{} @media(max-width:768px){.hero-grid{grid-template-columns:1fr!important}.hero-photo-wrap{order:-1;max-width:240px;margin:0 auto}}`}</style>
    </section>
  );
}

export default Hero
