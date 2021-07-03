import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'form-builder',
  styleUrl: 'form-builder.css',
  shadow: true,
})
export class FormBuilder {
  @Prop() schema;
  elements;
  elementMap ={
    'input': <input value="hello world"/>,
    'select': <select/>,
    'radio': <radio/>
  }
  componentWillLoad() {
    this.elements = JSON.parse(this.schema).map((element) => {
      return this.elementMap[element.type];
    })
  }
  
  render() {
    return (
      <Host>
        {
          this.elements
        }
      </Host>
    );
  }

}
