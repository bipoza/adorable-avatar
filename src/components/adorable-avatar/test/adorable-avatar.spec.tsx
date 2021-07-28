import { newSpecPage } from '@stencil/core/testing';
import { AdorableAvatar } from '../adorable-avatar';

describe('adorable-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdorableAvatar],
      html: `<adorable-avatar></adorable-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <adorable-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </adorable-avatar>
    `);
  });
});
