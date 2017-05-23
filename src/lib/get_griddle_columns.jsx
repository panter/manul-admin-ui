import { ColumnDefinition } from 'griddle-react';
import React from 'react';
import { isString } from 'lodash/fp';

const getColumns = ({ collectionName, columns, columnsI18n = `${collectionName}` }) => {
  const getTitle = id => `${columnsI18n}.${id}`;
  return columns.map(
    (props, index) => {
      if (isString(props)) {
        return (
          <ColumnDefinition
            order={index + 1}
            key={props}
            title={getTitle(props)}
            id={props}
          />
        );
      }
      return (
        <ColumnDefinition
          title={getTitle(props.id)}
          key={props.id}
          {...props}
          order={index + 1}
        />);
    },
  );
};

export default getColumns;
