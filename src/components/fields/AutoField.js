import { createElement } from 'react';
import BaseAutoField from 'uniforms-bootstrap4/AutoField';
import fieldColumn from './fieldColumn';
import NestField from './NestField';
import ListField from './ListField';
import TextField from './TextField';

// Component overwrites
export const componentOverwrites = new Map([
  [Object, NestField],
  [Array, ListField],
  [String, TextField],
]);

export default class AutoField extends BaseAutoField {
  static displayName = 'AutoField';

  render() {
    // this.getFieldProps also returns props from context, such as uniforms props:
    const props = this.getFieldProps(undefined, { ensureValue: false });
    const action = this.context.uniforms.action;
    const isDisabled = props.field.uniforms && props.field.uniforms.disabled;
    if (action === 'create' && isDisabled) return null;
    let component = props.component;
    const componentOverwrite = componentOverwrites.get(props.fieldType);
    if (!component && componentOverwrite) {
      component = fieldColumn(componentOverwrite);
    }
    if (!component) {
      component = fieldColumn(BaseAutoField);
    }
    return createElement(component, { ...props });
  }
}
