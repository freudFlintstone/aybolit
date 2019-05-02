import { configure } from '@storybook/polymer';
import '@conversionxl/cxl-storybook/.storybook/config';

function loadStories() {
  const req = require.context('@conversionxl/cxl-storybook/marketing-stories/', true, /index.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
