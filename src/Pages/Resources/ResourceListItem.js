import React from 'react'



const ResourceListItem = ( { resource } ) => {
    return (
        <div>
            <li className='list-item'>
                <a href={resource.url}>{resource.title}</a>
            </li>
        </div>
    )
}

export default ResourceListItem