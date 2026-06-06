import React from 'react'
import FadeIn from './FadeIn'
import { STORY } from '../data/story'

function FounderStory(){
  return(
    <section style={{padding:'clamp(60px,8vw,100px) clamp(16px,4vw,48px)',borderTop:'1px solid rgba(255,255,255,0.05)',background:'rgba(255,255,255,0.01)'}}>
      <div style={{maxWidth:880,margin:'0 auto'}}>
        <FadeIn>
          <div style={{marginBottom:44}}>
            <h2 style={{fontSize:'clamp(26px,3.5vw,42px)',fontWeight:800,letterSpacing:'-0.035em',marginBottom:8}}>Por que eu escrevi isso</h2>
            <p style={{color:'#6b7280',fontSize:14}}>Os erros, aprendizados e decisões que moldaram este guia.</p>
          </div>
        </FadeIn>
        <div className="story-grid" style={{display:'grid',gridTemplateColumns:'1fr 260px',gap:'clamp(32px,6vw,64px)',alignItems:'start'}}>
          <div>
            {STORY.map((p,i)=>(
              <FadeIn key={i} delay={i*40}>
                <p style={{fontSize:16,lineHeight:1.85,color:i===3?'#e5e5e5':'#a0a0a0',fontWeight:i===3?500:400,marginBottom:i===STORY.length-1?32:20,fontStyle:i===3?'italic':'normal',whiteSpace:'pre-line'}}>{p}</p>
              </FadeIn>
            ))}
            <FadeIn delay={320}>
              <div style={{display:'flex',alignItems:'center',gap:14,paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.07)'}}>
                <div style={{width:44,height:44,borderRadius:'50%',overflow:'hidden',border:'2px solid rgba(255,255,255,0.12)',flexShrink:0,background:'#1a1a1a'}}>
                  <img src="/images/pior-fase.jpg" alt="Otamir" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
                </div>
                <div>
                  <div style={{fontSize:14,fontWeight:600}}>Otamir</div>
                  <div style={{fontSize:12,color:'#6b7280',marginTop:2}}>Fundador, Mapa da Calvície</div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={150} className="story-photo">
            <div style={{position:'sticky',top:90}}>
              <div style={{borderRadius:14,overflow:'hidden',background:'#111',aspectRatio:'3/4',border:'1px solid rgba(255,255,255,0.07)'}}>
                <img src="/images/inicio-queda.jpg" alt="Início da perda de cabelo" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}/>
              </div>
              <p style={{fontSize:11,color:'#4b5563',textAlign:'center',marginTop:10}}>Início da queda</p>
            </div>
          </FadeIn>
        </div>
      </div>
      <style>{`@media(max-width:700px){.story-grid{grid-template-columns:1fr!important}.story-photo{display:none}}`}</style>
    </section>
  );
}

export default FounderStory
