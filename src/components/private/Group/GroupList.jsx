import React,{Component} from 'react'
  
import GroupCard from './GroupCard'

class GroupList extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(<div className="group-items-list">
                <div className="row">
                    <div className="col-md-4">
                        <GroupCard /*item={this.props}*/ />
                    </div>
                    <div className="col-md-4">
                        <GroupCard /*item={this.props}*/ />
                    </div>
                    <div className="col-md-4">
                        <GroupCard /*item={this.props}*/ />
                    </div>
                </div>
            </div>)
    }
}


//export default connect()(GroupList)
export default GroupList
