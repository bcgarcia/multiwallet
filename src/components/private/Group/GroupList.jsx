import React from 'react'
import lodash from 'lodash'
import GroupCard from './GroupCard'
import NoGroup from '../Group/NoGroups'

const GroupList = ( {items, onOpenModal} )=> 
    (<div className="col-md-12 group-items-list">
        <div className="row justify-content-center">
            {lodash.size() == 0
            ? 
            ( <div className="col-md-6"> <NoGroup onOpenModal={onOpenModal} /> </div> )
            : 
            (items.map( item =>{<div className="col-md-3"><GroupCard /*item={this.props}*/ /></div>}))}
        </div>
    </div>)

export default GroupList
