import React from 'react'
import ResourceItem from './ResourceItem'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import './Resources.css'

const Resources = () => {

 const resources = [
   {
      title: 'How to Travel the World on $50 a Day',
      url: 'https://www.amazon.com/How-Travel-World-50-Day/dp/0399173285', 
      image: 'https://media.nomadicmatt.com/siteimages/NM_Travel_World_50_A_Day_3D-1.png'
    },
    {
      title: 'Moon USA State by State',
      url: "https://www.amazon.com/Moon-USA-State-Things-Travel/dp/1640495975/ref=sr_1_3?keywords=us+travel+guides&qid=1650483619&s=books&sprefix=us+travel+%2Cstripbooks%2C115&sr=1-3", 
      image: 'https://images-na.ssl-images-amazon.com/images/I/91cyMyqNGBS.jpg'
  },
  {
    title: 'Ultimate USA Travel List',
    url: 'https://www.amazon.com/Ultimate-Travel-List-Lonely-Planet/dp/1838694587/ref=sr_1_2_sspa?crid=Q5PKHJK2PDN6&keywords=us+travel+guides&qid=1650484286&s=books&sprefix=us+travel+guides%2Cstripbooks%2C145&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExTzlWSjFDM1lQVVRJJmVuY3J5cHRlZElkPUEwMDk5Mzk5MzY5OTE5SUpNUFRLVSZlbmNyeXB0ZWRBZElkPUEwMDY4MzAzMjZQMVlLVDE0NVZSJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==', 
    image: 'https://images-na.ssl-images-amazon.com/images/I/41NmomGveFL._SX398_BO1,204,203,200_.jpg'
  },
  {
    title: "The Points Guy",
    url: 'https://thepointsguy.com/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/TPG.PGN.png'
  },
  {
   title: "data",
   url: 'https://thepointsguy.com/',
   image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-0404f4f/images/the-planet-d-logo-2021.svg'
 }
 ]


  const resourceList = resources.map((resource) => {
    return <ResourceItem resource={resource} key={resource.title} />
  })
  console.log(resources)

  return (
  <Row>
    {resourceList}
  </Row>

  )
}

export default Resources