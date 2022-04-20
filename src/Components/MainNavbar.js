import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './MainNavbar.css'
import { LinkContainer } from 'react-router-bootstrap'

const MainNavbar = () => {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to='/'>
          <Nav.Link>My Trips</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to='/new-trip'>
          <Nav.Link>Create New Trip</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to='/resources'>
          <Nav.Link>Resources</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      </Nav>

    </div>
  )
}

export default MainNavbar