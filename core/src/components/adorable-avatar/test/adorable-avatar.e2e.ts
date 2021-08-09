import { newE2EPage } from '@stencil/core/testing';

describe('adorable-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<adorable-avatar></adorable-avatar>');

    const element = await page.find('adorable-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
