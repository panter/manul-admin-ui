import React from 'react';
import NotAllowedMessage from './not_allowed_message';

const NotAllowed = ({
  adminContext: { components: { mainLayout } },
}) => (
  mainLayout ?
    <mainLayout content={() => <NotAllowedMessage />} /> :
    <NotAllowedMessage />
);

export default NotAllowed;
