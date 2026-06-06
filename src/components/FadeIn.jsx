import React from 'react'
import useInView from '../hooks/useInView'

function FadeIn({children,delay=0,style={},className=''}){
  const[ref,visible]=useInView();
  return(
    <div ref={ref} className={className} style={{opacity:visible?1:0,transform:visible?'translateY(0)':'translateY(22px)',transition:`opacity .65s ease ${delay}ms,transform .65s ease ${delay}ms`,...style}}>
      {children}
    </div>
  );
}

export default FadeIn
