import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="header-title">
        <h1>Lambda School</h1>
        <span className="header-span"> @LambdaSchool - {moment().format("MMM Do YY")}</span>
    </div>
  )
}

export default HeaderTitle;