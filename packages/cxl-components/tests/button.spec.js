import { fixture } from '@open-wc/testing-helpers';
import '../src/components/cxl-banner-card.js';

describe('CXL Banner Card', () => {
  let card;

  beforeEach(async () => {
    card = await fixture(`
    <cxl-banner-card></cxl-banner-card>
    `);
  });

  it('should have banner url defined', async () => {
    card.banner_link_url = 'http://example.com';
    await card.updateComplete;
    // ...
  });
});
