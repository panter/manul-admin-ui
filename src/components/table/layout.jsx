import React from 'react';
import styled from 'styled-components';

const Layout = ({ Table, Pagination, className }) => (
  <div className={className}><Table /><Pagination /></div>
);

export default styled(Layout)`
  background-color: #fff;
  padding: 15px;
`;
