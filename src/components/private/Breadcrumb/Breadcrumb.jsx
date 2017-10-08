import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import uuid from 'uuid'

const BreadcrumbElto = ({breadcrumbItems}) => {
  return (
      <div className="col-md-12">
      <Breadcrumb tag="nav">
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
       {/* breadcrumbItems.map( (item) => (
        <BreadcrumbItem key={ uuid.v4() } tag="a" href="#">dashboard</BreadcrumbItem>)) 
       */}
       </Breadcrumb>
      </div>
  )
}

export default BreadcrumbElto