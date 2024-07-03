import React from 'react'
import Group27 from './assets/Group27.png'
import job from './assets/job.png'
import Footer from './Footer'
import FooterAbove from './FooterAbove'
import Sign from './Sign'
import Testimonials from './Testimonials'
import FourBox from './FourBox'
import Add from './Add'
import Nav from './Nav'

import { Outlet, Link } from "react-router-dom";

function SignIn() {
  return (
    <>
    <Nav/>
    <div className='container-fluid'style={{backgroundColor:'#F7F5F9' }} > 
    <div className='container '> 
       <div className=' row row-cols-12   row-cols-md-2'  style={{paddingTop:'8%'}}>
{/* col1 */}
<div className='col col-md-8  ' >
<div className='   d-flex ' style={{flexDirection:'column' ,padding:'2%',marginRight:'2vw'}} >
    <img src={job} style={{width:'75%' }} alt="" />

<div style={{display:'flex',flexDirection:'column',padding:'2vw 0'}} >
<a style={{fontSize:'1vw',paddingBottom:'1.7vw'}}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
</a>
<a style={{fontSize:'1vw'}}>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</a>
</div>
<img src={Group27}  className='pt- w-md-100 '  alt=''/>  
 </div>
</div>
{/* col2 */}
<div className='col col-md-4'  >
<div className='d-flex align-items-center justify-content-center justify-content-md-start pt-md-0 pt-sm-3'  >
  <Link  to='/'> 
<a className='fs-lg-3 fs-3 ' style={{fontSize:'2.2vw',fontWeight:'500'}} onClick={(e)=>{}}>Sign In</a> </Link> 
 <Link to='/join'>  <a className='fs-lg-3 fs-3'  style={{fontSize:'2.2vw',fontWeight:'500',marginLeft:'2.5vw'}} onClick={()=>{}}>Join In</a>  </Link>
</div>
<Outlet/>
</div>
      </div>
    </div>
    </div>
    <FourBox/>
    <Add/>
    <Testimonials/>
    <FooterAbove/>
    <Footer/>
    </>
  )
}

export default SignIn
