import React from 'react'
import social from './assets/social.png'
function Footer() {
  return (

<>
    <footer class="py-5 container">
    <div class="row ">
      <div class="col-6 col-md-2 mb-3">
        <h5>Hobbycue</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>How Do I</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Quick Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Social Media</h5>
           
<img style={{width:'100%',paddingTop:'2.5vw',paddingBottom:'4vw'}} src={social} alt="" />      
   <h4 style={{fontWeight:'600',paddingBottom:'2vh'}}>Invite Friends</h4>
    <div class="d-flex flex-column flex-sm-row w-100 ">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control w-80 rounded-start" placeholder="Email address"/>
            <button  className="rounded-end" style={{backgroundColor:'#8064A2'}} type="button">Invite</button>
          </div>
        </form>
      </div>
    </div>
    
  </footer>
  <div className='container-fluid' style={{paddingTop:'2vh',paddingBottom:'0.5vh',backgroundColor:'#F7F5F9',marginTop:'1vh'}}>
  <p style={{ display:'flex',alignItems:'center',textAlign:'center',justifyContent:'center'}}>© 2024 Company, Inc. All rights reserved.</p>
</div> </>
  )
}

export default Footer
