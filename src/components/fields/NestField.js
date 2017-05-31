import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import injectName from 'uniforms/injectName';
import joinName from 'uniforms/joinName';
import { Row } from 'reactstrap';
import AutoField from './AutoField';

const Nest = ({
    children,
  fields,
  label,
  name,
  ...props
}) => {
  return (<div {...filterDOMProps(props) }>
    {label && (
      <label htmlFor={props.id}>
        {label}
      </label>
    )}
    <Row>
      {children ? (
        injectName(name, children)
      ) : (
          fields.map(key =>
            <AutoField key={key} name={joinName(name, key)} />,
          )
        )}
    </Row>
  </div>);
};

export default connectField(Nest, { includeInChain: false });
