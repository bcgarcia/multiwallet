import React from 'react'
import { Jumbotron , Button } from 'reactstrap'

const NoGroups = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 text-center"> <i className="fa fa-thumbs-o-down"></i> No groups yet!</h1>
        <br /><p className="lead text-center">Oh Nooo!!  It seems that you don't have groups yet.</p>
        <hr className="my-2" />
        <p className="text-center">Do you want to <a href="groups/new">create one</a> now? or if you prefer <a href="groups/find">find one</a> created in your area and join it? </p>
        {/*<p className="lead">
          <Button onClick={() =>{ browserHistory.push('groups/new')} } color="primary"> Create </Button>
        </p>*/}
      </Jumbotron>
    </div>
  )
}

export default NoGroups