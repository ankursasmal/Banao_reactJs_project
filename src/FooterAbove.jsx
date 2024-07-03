import React from 'react'
import hobby from './assets/hobby.png'
import img99 from './assets/img99.png'
import Group77 from './assets/Group77.png'

function FooterAbove() {
  return (
    <div className='container-fluid' style={{backgroundColor:'#F7FDFF',marginTop:'4%'}}>
      <div className='container d-flex pt-3' style={{flexDirection:'column'}}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',}}> 
<div style={{display:'flex',flexDirection:'column'}}>
<img src={hobby} style={{width:'35vw',marginTop:'2vw'}} alt="" />
<button className='btn ' style={{backgroundColor:'#8064A2',alignSelf:'start',padding:'.5vw 1.3vw',margin:'2vw 0',fontSize:'1.6vw',color:'white'}}>Get Started</button>
</div>
<div style={{display:'flex',flexDirection:'column',alignItems:'center'
}}>
    <a href=''> <img src={Group77} style={{width:'4vw',paddingTop:'4vw'}} alt="" /></a>
    <a style={{fontSize:'.7vw'}}> Go to top (Ctrl+Home)</a>
</div>
</div>
<div className='pt-md-5 pt-3 pb-4'>
<img src={img99} style={{width:'100%'}} alt="" />
      </div>

      </div>
      
      
    </div>
  )
}

export default FooterAbove
