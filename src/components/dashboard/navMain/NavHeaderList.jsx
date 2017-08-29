import React from 'react'
import PropTypes from 'prop-types'
import NavbarItem from './Navbar'
import uuid from 'uuid'


const Navbar = ( {nav , onDisplayedItem } )=>(<div>
    {
        nav.map( item =>{
                <NavbarItem key={uuid.v4()} {...item} onDisplayedItem={onDisplayedItem} />
        })
    }
</div>)

export default Navbar