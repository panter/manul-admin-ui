import React from 'react';
import { RowDefinition } from 'griddle-react';
import Griddle from './griddle';
import getGriddleColumns from '../lib/get_griddle_columns';

const List = (props) => {
  const {
    docs,
    docsLoaded,
    sortProperties,
    pageProperties,
    recordCount,
  } = props;

  return (
    <Griddle
      data={docs}
      docsLoaded={docsLoaded}
      sortProperties={sortProperties}
      pageProperties={{
        ...pageProperties,
        recordCount,
      }}

      events={{
      }}
    >
      <RowDefinition>
        { getGriddleColumns(props) }
      </RowDefinition>
    </Griddle>
  );
};

export default List;
