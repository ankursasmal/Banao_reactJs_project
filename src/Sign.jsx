import React from 'react'
import google from './assets/google.png'
import facebook from './assets/facebook.png'
import seperate from './assets/seperate.png'
import lock from './assets/lock.png'

function Sign() {
  return (
    <div className='d-flex' style={{flexDirection:'column',width:'100%'}}>
      <img src={google} alt=""  style={{padding:'2vw 0',width:'100%'}}/>
      <img src={facebook} alt="" style={{width:'100%'}}/>
      <img src={seperate} alt="" style={{paddingTop:'2vw',width:'100%'}} />
      <label for="newsletter1" class="visually-hidden">  </label>
            <input id="newsletter1" type="text" class="form-control w-80 mt-2" placeholder="email "/>
            <label for="newsletter1" class="visually-hidden" style={{margin:'2vw 0'}}></label>
            <input id="newsletter1" type="text" class="form-control w-80 mt-2" placeholder="password"/>

<div className='d-flex' style={{alignItems:'center',justifyContent:'space-between',padding:'2vw 0'}}>
<div style={{display:'flex',alignItems:'center'}}>
    <input type="checkbox" />
    <a style={{fontSize:'1vw',paddingLeft:'.75vw'}}>Remember me</a>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<img src={lock} style={{width:'2vw',paddingRight:'.75vw'}} alt="" /> 
   <a style={{fontSize:'1vw'}}>Forgot password? </a>
</div>

</div>
<button className='btn btn-outline-secondary rounded' style={{fontSize:'1.7vw', }}> Agreee And Continue</button>
    </div>
  )
}

export default Sign
