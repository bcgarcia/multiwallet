import React from 'react'
  
import GroupCard from './GroupCard'


const GroupList = (items)=> (
    <div className="group-items-list">
    <div className="row justify-content-center">
        <div className="col-md-3">
            <GroupCard /*item={this.props}*/ />
        </div>
        <div className="col-md-3">
            <GroupCard /*item={this.props}*/ />
        </div>
        <div className="col-md-3">
            <GroupCard /*item={this.props}*/ />
        </div>
    </div>
    </div>
)

export default GroupList
