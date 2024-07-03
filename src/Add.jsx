import React from 'react'
import add from './assets/add.png'

function Add() {
  return (
    <div className='container-fluid'style={{backgroundColor:'#F7FDFF',marginTop:'4%',marginBottom:'4%'}} > 

    <div className='container'  style={{paddingTop:'4%',paddingBottom:'4%'}}>
            <div className='   d-flex ' style={{flexDirection:'column',backgroundColor:'white',padding:'2%'}} >

<div style={{display:'flex',alignItems:'center'}} >
    <img src={add} style={{width:'2.7vw',paddingRight:'1vw'}} alt="" />
<a style={{fontSize:'1vw',fontWeight:'600'}}>Add your own</a>
</div>
<a style={{fontSize:'1.2vw',padding:'2vw 0'}}>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</a>
    <button className='btn btn-outline-primary' style={{alignSelf:'start',fontSize:'1.6vw'}}>Add new</button>
    </div>
    </div>
    </div>
  )
}

export default Add
