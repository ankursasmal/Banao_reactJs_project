import React from 'react'
import testimonial from './assets/testimonial.png'
import Audio from './assets/Audio.png'
import Group108 from './assets/Group108.png'

function Testimonials() {
  return (
         <div className='container mt-3 mb-3' style={{backgroundColor:'#F7F5F9'}}>
            <div className='m-3 p-2 d-flex' style={{flexDirection:'column'}} >

 <img src={testimonial} alt=""  style={{width:'13vw',paddingTop:'1vw'}}/>
<a style={{fontSize:'1vw',margin:'2vw 0',width:'100%'}}>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</a>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'2vw'}}>
<img src={Audio} style={{width:'60%',height:'5%'}} alt="" />
<img src={Group108}   style={{width:'20%'}} alt="" />
</div>
</div>
    </div>
   )
}

export default Testimonials
