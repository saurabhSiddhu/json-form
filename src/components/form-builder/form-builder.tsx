import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'form-builder',
  styleUrl: 'form-builder.css',
  shadow: true,
})
export class FormBuilder {

  render() {
    return (
      <Host>
        Form builder
      </Host>
    );
  }

}
