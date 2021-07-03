import { newSpecPage } from '@stencil/core/testing';
import { FormBuilder } from '../form-builder';

describe('form-builder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FormBuilder],
      html: `<form-builder></form-builder>`,
    });
    expect(page.root).toEqualHtml(`
      <form-builder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </form-builder>
    `);
  });
});
