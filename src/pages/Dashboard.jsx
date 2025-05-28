import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import Videolist from '../components/Videolist'



function Dashboard() {

  const [addResponse,setAddResponse]=useState("")

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
        <h2>Dashboard</h2>
        <Link to={'/his'}>Watch History</Link>
        </div>
        <Row>
          <Col sm={6} md={1}>
            <Addvideo addres={setAddResponse} />
          </Col>
          <Col sm={6} md={8} className='border border-dark border-1 p-2 mb-4'>
            <Videolist add={addResponse} />
          </Col>
          <Col sm={12} md={3} >
            <Category />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard
