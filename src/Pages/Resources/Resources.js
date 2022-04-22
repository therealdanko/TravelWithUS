import React from 'react'
import ResourceCard from './ResourceCard'
import ResourceListItem from './ResourceListItem'
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
    title: "National Geographic Guide to State Parks",
    url: 'https://www.amazon.com/National-Geographic-Guide-United-States/dp/1426218850/ref=sr_1_2_sspa?keywords=us+national+parks+book&qid=1650492010&s=books&sprefix=us+nat%2Cstripbooks%2C136&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVlMyR0E2WEhPWUJCJmVuY3J5cHRlZElkPUEwODIxNjQwMlU2Q05IRE5TWExVRSZlbmNyeXB0ZWRBZElkPUEwOTYxMzUzRkhRMks2RVQ4U1M2JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81ObSE5XdEL.jpg'
  },
  {
   title: "The Unique States of America",
   url: 'https://www.amazon.com/Unique-States-America-Lonely-Planet/dp/1788686411/ref=asc_df_1788686411/?tag=hyprod-20&linkCode=df0&hvadid=366402539474&hvpos=&hvnetw=g&hvrand=15482798951833976256&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030070&hvtargid=pla-816227104238&psc=1&tag=&ref=&adgrpid=76223197157&hvpone=&hvptwo=&hvadid=366402539474&hvpos=&hvnetw=g&hvrand=15482798951833976256&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9030070&hvtargid=pla-816227104238',
   image: 'https://images-na.ssl-images-amazon.com/images/I/51hSB7Y1uLL._SX388_BO1,204,203,200_.jpg'
 }
 ]

 const additionalResources = [
   {
     title: "Two Wandering Soles Blog",
     url: 'https://www.twowanderingsoles.com/usa'
   },
   {
     title: 'Lonely Planet',
     url: 'https://shop.lonelyplanet.com/categories/usa'
   },
   {
     title: 'Y Travel Blog',
     url: 'https://www.ytravelblog.com/category/destinations/north-america/usa/'
   },
   {
     title: 'The Blonde Abroad Blog',
     url: 'https://www.theblondeabroad.com/ultimate-usa-travel-guide/',
   },
   {
     title: 'Visit the USA',
     url: 'https://www.visittheusa.com/'
   },
   {
     title: 'Town And Tourist',
     url: 'https://www.townandtourist.com/work-with-us/'
   }, 
   {
     title: 'USA Travel Guides',
     url: 'https://travel.usnews.com/destinations/USA/'
   },
   {
     title: 'Rough Guides USA',
     url: 'https://www.roughguides.com/usa/'
   }
 ]


  const resourceList = resources.map((resource) => {
    return <ResourceCard resource={resource} key={resource.title} />
  })
  console.log(resources)

  const websiteList = additionalResources.map((resource) => {
    return <ResourceListItem resource={resource} key={resource.title} />
  })

  return (
    <>
      <div className='resource-container'>
        {resourceList}
       
      </div>
      <div className='resource-list'>
          <ul className='resource-list'>
            <h2>Additional Resources</h2>
           {websiteList}
          </ul>
        </div>
      
    </>
    
  )
}

export default Resources