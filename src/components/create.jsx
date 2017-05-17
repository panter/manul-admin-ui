import React from 'react';

import AutoForm from './forms/AutoForm';
import Button from './button';

const Create = ({ collectionName, schema, create, title, gotoList }) =>
   (
     <div >
       <h2>Create {title}</h2>
       <AutoForm schema={schema} onSubmit={doc => create(collectionName, doc)} />
       <Button onClick={() => gotoList(collectionName)}>Back to list</Button>
     </div>
  );

Create.propTypes = {

};

Create.defaultProps = {
};

Create.displayName = 'Admin.Create';

export default Create;
