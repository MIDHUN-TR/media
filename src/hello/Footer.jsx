import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>  
    <div className='container-fluid p-4' style={{backgroundColor:"orange"}}>
        <div className='row'>
            <div className='col'>
                <h3 className="text-center" style={{color:"black"}}><b>Media Player 2025</b></h3>
                <p style={{ textAlign:'justify',color:"black"}} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore optio, eaque recusandae ipsa nesciunt repellendus quos,
                     officiis nemo nihil officia explicabo iure illo dolorem error est labore similique quia! Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Soluta sunt sequi, atque alias iusto ratione maiores minus dolorum repudiandae molestias deleniti. Modi esse, nam omnis dolorum cupiditate suscipit et ipsam.
                </p>

            </div>
            <div className="col-2 text-light">
                <h3  className="text-center" style={{color:"black"}}><b>Links</b></h3>
                <div className='d-flex flex-column justify-content-around'>
                    <Link to={'/'} style={{color:"black"}}>Landing</Link>
                    <Link to={'/log'} style={{color:"black"}}>Login</Link>
                    <Link to={'/reg'} style={{color:"black"}}>Registration</Link>
                </div>

            </div>
            <div className='col text-light'>
                <h4 className='text-center' style={{color:"black"}}><b>Feedback</b></h4>
                <textarea className='form-control my-3' style={{color:"black"}} placeholder='Enter feedback' id=""></textarea>
                <button className='btn' style={{color:"white", backgroundColor:"blue"}}>Send</button>

            </div>

        </div>
        <p className='text-center' style={{color:"black"}}>
        <b>Media Player 2025 &copy; AllCopyRights Reserved.</b>
        </p>
    </div>
    </>
  )
}

export default Footer
