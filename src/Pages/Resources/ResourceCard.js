import React from 'react'
import Card from 'react-bootstrap/Card'

const ResourceCard = ( { resource } ) => {

    return (
        <div>
             <Card style={{ width: '15rem' }} >
                <Card.Img variant="top" src={resource.image} className='card-img-top' />
                <Card.Body>
                    <Card.Title>{resource.title}</Card.Title>
                    <Card.Link href={resource.url}>Buy on Amazon</Card.Link>
                    </Card.Body>
            </Card>
        </div>
    );
}

export default ResourceCard