import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import { Link } from 'react-router-dom'
import Videolist1 from '../components/Videolist1'
import Category from '../components/Category'


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
            <Videolist1 add={addResponse} />
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
