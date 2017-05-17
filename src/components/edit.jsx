import React from 'react';

import AutoForm from './forms/AutoForm';
import Button from './button';


const DocumentEdit = ({ doc, collectionName, schema, title, destroy, gotoList, upsert }) =>
   (
     <div>
       <h2>Edit {title}</h2>
       <AutoForm model={doc} schema={schema} onSubmit={changedDoc => upsert(collectionName, changedDoc)} />
       <Button onClick={() => gotoList(collectionName)}>Back to list</Button>
       <Button black onClick={() => destroy(collectionName, doc._id)}>Destroy</Button>
     </div>
  );

DocumentEdit.propTypes = {
};

DocumentEdit.defaultProps = {
};

DocumentEdit.displayName = 'DocumentEdit';

export default DocumentEdit;
