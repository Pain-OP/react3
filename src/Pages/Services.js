import React from 'react'
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
     <div className='col-md-12 sebanner'>
        <div className='col-md-12' style={{height:"200px"}}  ></div>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <center><p className='display-2 cgreen '><b>SERVICES</b></p></center>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>




      <div className='col-md-12' style={{height:"100px"}}  ></div>

      <div className='container'>
        <div className='row'>

        <div className='col-md-6 '>
      <div className='col-md-12' style={{height:"80px"}}></div>
      
        
            <div className='col-md-12'>
                <h2><b>Web Design</b></h2>
                <br/>
                <p className='font1'>We create custom web design for small businesses, this will help you capture new audiences and increase your sales. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>

                <button className='btn btn-lg btn-success pl-5 pr-5 mb-4'>EXPLORE</button>
            </div>
            
            </div>
            
            <div className='col-md-6'>
                <div className='col-md-12'>
                    <img src='img/img1.jpg' style={{height:"400px" , width:"100%"}} />
                </div>
            </div>

           
        </div>
      </div>





      <div className='col-md-12' style={{height:"100px"}}  ></div>

      <div className='container'>
        <div className='row'>
            
            <div className='col-md-6'>
                <div className='col-md-12'>
                    <img src='img/img2.jpg' style={{height:"400px" , width:"100%"}} />
                </div>
            </div>

            <div className='col-md-6'>
      <div className='col-md-12' style={{height:"80px"}}></div>
      <div className='row'>
        <div className='col-md-1'></div>
            <div className='col-md-11'>
                <h2><b>Graphic Design</b></h2>
                <br/>
                <p className='font1'>We specialize in logos, merchandise and more. Anyone can create nice graphics but it’s much better to create memorable ones. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>

                <button className='btn btn-lg btn-success pl-5 pr-5'>EXPLORE</button>
            </div>
            </div>
            </div>
        </div>
      </div>





      <div className='col-md-12' style={{height:"100px"}}  ></div>

      <div className='container'>
        <div className='row'>

        <div className='col-md-6'>
      <div className='col-md-12' style={{height:"80px"}}></div>
      
        
            <div className='col-md-12'>
                <h2><b>Content Writing</b></h2>
                <br/>
                <p className='font1'>Want to attract people to your website? You have to have the best content in the world. Our content writers will create award willing content for you. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours.</p>

                <button className='btn btn-lg btn-success pl-5 pr-5 mb-4'>EXPLORE</button>
            </div>
            
            </div>
            
            <div className='col-md-6'>
                <div className='col-md-12'>
                    <img src='img/img3.jpg' style={{height:"400px" , width:"100%"}} />
                </div>
            </div>

           
        </div>
      </div>



      <div className='col-md-12' style={{height:"100px"}}></div>

<div className='col-md-12 bbanner'>
  <div className='col-md-12' style={{height:"100px"}}></div>
  <div className='row'>
      <div className='col-md-4'></div>
      <div className='col-md-4'>
          <center>
          <h1 className=' cgreen'>TALK TO US</h1>
          <p className='mt-4 '>Have any questions? We are always open to talk about your business, new projects, creative opportunities and how we can help you.</p>
          <button className='btn  btn-lg btn-success mt-3 pl-4 pr-4'>GET IN TOUCH</button>
          </center>
      </div>
      <div className='col-md-4'></div>
  </div>
</div>

<div className='col-md-12' style={{height:"25px"}}></div>


<div className='col-md-12'>
  <div className='row'>
      <div className='col-md-4'>
          <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-2'></div>
              <div className='col-md-2 mt-2'><center><Link to="/" className='text-decoration-none '><p className='text-dark' >Home</p></Link></center></div>

              <div className='col-md-2 mt-2'><center><Link to="/About" className='text-decoration-none '><p className='text-dark' >About</p></Link></center></div>

             <div className='col-md-2 mt-2'><center><Link to="/Services" className='text-decoration-none '><p className='text-dark' >Services</p></Link></center></div>

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
