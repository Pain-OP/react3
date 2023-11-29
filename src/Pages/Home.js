import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className='banner1'>
        <div className='col-md-12' style={{height:"250px"}} ></div>
        <div className='col-md-12'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <center>
                    <p className='display-2 cgreen'><b>EARTH</b></p>
                    <h1 className='display-4 '>ENDLESS POTENTIAL</h1>
                    <button className='btn btn-lg btn-success '>EXPLORE</button>
                    </center>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
      </div>

      <div className='col-md-12' style={{height:"100px"}}></div>

      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <div className='col-md-12'>
                    
                    <img src='img/img1.jpg' style={{height:"420px" , width:"100%"}} />
                    
                </div>
                <div className='col-md-12'><br/>
                    <h4>Web Design</h4>
                    <p>Custom web design for small businesses, we help you capture new audiences and increase your sales.</p>
                </div>
            </div>

            <div className='col-md-4'>
            <div className='col-md-12'>
                    
                    <img src='img/img2.jpg' style={{height:"420px" , width:"100%"}} />
                    
                </div>
                <div className='col-md-12'><br/>
                    <h4>Graphic Design</h4>
                    <p>Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.</p>
                </div>
            </div>

            <div className='col-md-4'>
            <div className='col-md-12'>
                    
                    <img src='img/img3.jpg' style={{height:"420px" , width:"100%"}} />
                    
                </div>
                <div className='col-md-12'><br/>
                    <h4>Content Creation</h4>
                    <p>Want to attract people to your website?  You have to have the best content in the world. That’s what we do.</p>
                </div>
            </div>
        </div>
      </div>

      <div className='col-md-12' style={{height:"100px"}}></div>


      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
      <div className='col-md-12' style={{height:"100px"}}></div>
            <div className='col-md-12'>
                <h2><b>ABOUT US</b></h2>
                <br/>
                <p>I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure.</p>
            </div>
            </div>
            <div className='col-md-6'>
                <div className='col-md-12'>
                    <img src='img/img4.jpg' style={{height:"420px" , width:"100%"}} />
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

             <div className='col-md-2 mt-2'><center><Link to="/contact" className='text-decoration-none '><p className='text-dark' >Contact</p></Link></center></div>
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


