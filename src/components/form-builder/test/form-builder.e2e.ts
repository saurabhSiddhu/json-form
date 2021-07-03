import { newE2EPage } from '@stencil/core/testing';

describe('form-builder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<form-builder></form-builder>');

    const element = await page.find('form-builder');
    expect(element).toHaveClass('hydrated');
  });
});
