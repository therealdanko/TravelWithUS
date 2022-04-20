import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './MainNavbar.css'

const MainNavbar = () => {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">My Trips</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Create New Trip</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Resources</Nav.Link>
      </Nav.Item>
      </Nav>

    </div>
  )
}

export default MainNavbar