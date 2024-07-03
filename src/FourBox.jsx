import React from 'react'
import Group from './assets/Group.png'
import location from './assets/location.png'
import cart1 from './assets/cart1.png'
import prog from './assets/prog.png'
import './App.css'

function FourBox() {
  return (
     <div className='container ' style={{marginTop:'4%'}}  >
        <div className='row row-cols-1 row-cols-md-2  ' style={{alignItems:'center', flexWrap:'wrap',width:'100%'}}>
      {/* 1 div */}
      <div className='col'>
  <div className='rounded hoverproperty  d-flex ' style={{flexDirection:'column',padding:'2%',border:' 1px solid #CED4DA',marginBottom:'1vw'}} >
<div style={{display:'flex',alignItems:'center',}} >
    <img src={Group} style={{width:'3vw',paddingRight:'1vw'}} alt="" />
<a style={{fontSize:'1.2vw',fontWeight:'600'}}>People </a>
</div>
<a style={{fontSize:'1.2vw',padding:'2vw 0'}}>An Individual or Organization.  Teacher, Coach, Professional or Online Seller.  Company, Business or Association.</a>
<button className='btn btnhover3 btn-outline-primary d-none d-md-block' style={{alignSelf:'start',fontSize:'1.6vw'}}>Connect</button>

     </div>
    </div>
      {/* 2 div */}
      <div className='col  '>

  <div className='rounded hoverproperty1  d-flex ' style={{flexDirection:'column',padding:'2%', border:' 1px solid #CED4DA', marginBottom:'1vw'}} >
<div style={{display:'flex',alignItems:'center',}} >
    <img src={location} style={{width:'3vw',paddingRight:'1vw'}} alt="" />
<a style={{fontSize:'1.2vw',fontWeight:'600'}}>  Place  </a>
</div>
<a style={{fontSize:'1.2vw',padding:'2vw 0'}}>An Address.  Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</a>
    
<button className='btn btnhover2 btn-outline-primary d-none d-md-block' style={{alignSelf:'start',fontSize:'1.6vw'}}>Meet up</button>
 </div>
</div>
      {/* 3 div */}
      <div className='col  mb-mb-0 mb-2'>

  <div className=' rounded hoverproperty2 d-flex ' style={{flexDirection:'column',padding:'2%',border:' 1px solid #CED4DA', }} >
<div style={{display:'flex',alignItems:'center',}} >
    <img src={cart1} style={{width:'3vw',paddingRight:'1vw'}} alt="" />
<a style={{fontSize:'1.2vw',fontWeight:'600'}}>Product  </a>
</div>
<a style={{fontSize:'1.2vw',padding:'2vw 0'}}>An Item that you can Book, Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</a>
<button className='btn btnhover1 btn-outline-primary d-none d-md-block' style={{alignSelf:'start',fontSize:'1.6vw'}}>Get it</button>

     </div>
</div>
      {/* 4 div */}
      <div className='col   mb-mb-0 mb-2'>

  <div className=' rounded hoverproperty3 d-flex ' style={{flexDirection:'column',padding:'2%', border:' 1px solid #CED4DA',   }} >
<div style={{display:'flex',alignItems:'center',}} >
    <img src={prog} style={{width:'3vw',paddingRight:'1vw'}} alt="" />
<a style={{fontSize:'1.2vw',fontWeight:'600'}}>Program</a>
</div>
<a style={{fontSize:'1.2vw',padding:'2vw 0'}}>An Event with Venue and Date.  Meetup, Workshop or Webinar.  Exhibition, Performance or Competition.</a>
<button className='btn btnhover btn-outline-primary d-none d-md-block' style={{alignSelf:'start',fontSize:'1.6vw'}}>Attend</button>

     </div>
    </div>
        </div>

</div>      
   )
}

export default FourBox
