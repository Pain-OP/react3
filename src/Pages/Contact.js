import React from 'react'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>


     <div className='col-md-12 cobanner'>
        <div className='col-md-12' style={{height:"200px"}}  ></div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <center><p className='display-2 cgreen '><b>CONTACT US</b></p></center>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>

      <div className='col-md-12' style={{height:"100px"}}  ></div>


     <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='col-md-12'>
          <h1>Get In Touch</h1><br/><br/>
          <input type='text' placeholder='Your Name' className='pl-2' style={{height:"50px" , width:"90%"}} />

          <br/>
          <br/>
          <input type='number' placeholder='Phone Number' className='pl-2' style={{height:"50px" , width:"90%"}} />

          <br/>
          <br/>
          <input type='email' placeholder='Email' className='pl-2' style={{height:"50px" , width:"90%"}} />


          <br/>
          <br/>

          <textarea placeholder='Message' className='pl-2 pt-2' style={{height:"120px" , width:"90%"}}></textarea>
          <br/>
          <br/>

          <button className='btn btn-lg btn-success pl-5 pr-5 mb-4'>SEND NOW</button>


          </div>
        </div>
        <div className='col-md-6'>
        <div className='col-md-12'>
          <h1>Talk To Us</h1>
          <br/>
          </div>
          <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-2'>
            <div className=" mt-2 rounded-circle border border-success" style={{height:"46px" , width:"46px"}}  >
            <h5><i className="fa fa-envelope-o mt-2 pt-1 pl-2 ml-1 " aria-hidden="true"></i></h5>
            </div>
            </div>
            <div className='col-md-10'>
              <p>EMAIL</p>
              <h5 className='cgreen font2' >something@tyler.com</h5>
            </div>
          </div>
          </div>

          <br/>
          




          <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-2'>
            <div className=" mt-2 rounded-circle border border-success" style={{height:"46px" , width:"46px"}}  >
            <h5><i className="fa fa-phone mt-2 pt-1 pl-2 ml-1 " aria-hidden="true"></i></h5>
            </div>
            </div>
            <div className='col-md-10'>
              <p>PHONE NUMBER</p>
              <h5 className='cgreen font2' >202-555-0188</h5>
            </div>
          </div>
          </div>

          <br/>
          




          <div className='col-md-12'>

          <div className='row'>
            <div className='col-md-2'>
            <div className=" mt-2 rounded-circle border border-success" style={{height:"46px" , width:"46px"}}  >
            <h5><i className="fa fa-map-marker mt-2 pt-1 pl-2 ml-2 " aria-hidden="true"></i></h5>
            </div>
            </div>
            <div className='col-md-10'>
              <p>ADDRESS</p>
              <h5 className='cgreen font2' >2727 Ocean Road,<br/>Malibu, CA, 90264</h5>

              <br/>
              <br/>

              <h6 className='font1'>Follow Us:</h6>
              <button className='btn rounded-circle btn-success'><i class="fa fa-facebook pl-1 pr-1" aria-hidden="true"></i></button>

              <button className='btn ml-2 rounded-circle btn-success'><i class="fa fa-twitter" aria-hidden="true"></i></button>

              <button className='btn ml-2 rounded-circle btn-success'><i class="fa fa-linkedin" aria-hidden="true"></i></button>

              <button className='btn ml-2 rounded-circle btn-success'><i class="fa fa-play" aria-hidden="true"></i></button>

            </div>
          </div>
          </div>


          

        </div>
      </div>
     </div>


     <div className='col-md-12' style={{height:"100px"}}  ></div>

     <div className='col-md-12' style={{height:"25px"}}></div>


<div className='col-md-12'>
  <div className='row'>
      <div className='col-md-4'>
          <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-2'></div>
              <div className='col-md-2 mt-2'><center><Link to="/" className='text-decoration-none '><p className='text-dark' >Home</p></Link></center></div>

              <div className='col-md-2 mt-2'><center><Link to="/About" className='text-decoration-none '><p className='text-dark' >About</p></Link></center></div>

             <div className='col-md-2 mt-2'><center><Link to="/Servicea" className='text-decoration-none '><p className='text-dark' >Services</p></Link></center></div>

             <div className='col-md-2 mt-2'><center><Link to="/Contact" className='text-decoration-none '><p className='text-dark' >Contact</p></Link></center></div>

          </div>
      </div>

      <div className='col-md-4'>
          <center><h2 className=''>EARTH</h2></center>
      </div>

      <div className='col-md-4'>
          <div className='row'>
              <div className='col-md-6'><center><p className='mt-2 ' >©2022 Earth. All right reserved.</p></center></div>
              <div className='col-md-6'></div>
          </div>
      </div>
  </div>
</div>


<div className='col-md-12' style={{height:"20px"}}></div>





    
    </>
  )
}
