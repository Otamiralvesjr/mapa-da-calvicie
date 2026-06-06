import React from 'react'

function Footer(){
  return(
    <footer style={{padding:'28px clamp(16px,4vw,48px)',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
      <div style={{maxWidth:960,margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,marginBottom:16}}>
          <span style={{fontSize:14,fontWeight:700,letterSpacing:'-0.02em'}}>Mapa da Calvície</span>
          <div style={{display:'flex',gap:20}}>
            <a href="#" style={{fontSize:13,color:'#6b7280',transition:'color .2s'}} onMouseEnter={e=>e.target.style.color='#9ca3af'} onMouseLeave={e=>e.target.style.color='#6b7280'}>Política de privacidade</a>
            <a href="#" style={{fontSize:13,color:'#6b7280',transition:'color .2s'}} onMouseEnter={e=>e.target.style.color='#9ca3af'} onMouseLeave={e=>e.target.style.color='#6b7280'}>Termos de uso</a>
          </div>
        </div>
        <p style={{fontSize:12,color:'#374151',lineHeight:1.65,maxWidth:680}}>
          © 2026 Mapa da Calvície · Este guia é baseado em experiência pessoal e tem caráter informativo. Não constitui aconselhamento médico. Consulte um dermatologista para diagnóstico e tratamento adequados.
        </p>
      </div>
    </footer>
  );
}

export default Footer
