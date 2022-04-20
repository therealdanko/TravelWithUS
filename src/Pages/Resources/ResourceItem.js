import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'

const ResourceItem = ( { resource } ) => {

    // const goToLink = (e) => {
    //     return <a href={resource.url}></a>
    // }
    return (
        <Col>
        <div>
            <Card style={{ width: '15rem' }} className='resource-container'>
                <Card.Img variant="top" src={resource.image} className='card-img-top' />
                <Card.Body>
                    <Card.Title>{resource.title}</Card.Title>
                    {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text> */}
                    {/* <Button onClick={goToLink} variant="primary">Link</Button> */}
                    <Card.Link href={resource.url}>Follow Link</Card.Link>
                    </Card.Body>
            </Card>
        </div>
        </Col>
    );
}

export default ResourceItem