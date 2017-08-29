import React from 'react'
import PropTypes from 'prop-types'


const NavItemList = ({item,onDisplayedItem}) => (
    <div className="nav-eltos">
        {console.log(item)}

        {console.log('asfsdf')}
        <a href={item.url}> item.icon</a>
    </div>
)




export default NavItemList