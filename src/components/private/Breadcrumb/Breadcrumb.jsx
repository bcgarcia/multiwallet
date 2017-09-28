import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbElto = (breadcrumbItems) => {
  return (
    <div>
      <Breadcrumb tag="nav">
        {breadcrumbItems.map(item =>{ <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>} )}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbElto;