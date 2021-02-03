import { html } from 'lit-html';
import '../../cxl-jwplayer/src/components/cxl-jwplayer.js';
import cxlJWPlayerData from './cxl-jwplayer.data.json';

export default {
  title: 'CXL JWPlayer | cxl-jwplayer',
};

export const CxlJWPlayer = () => html`
  <style>
    .jwplayers-wrapper {
      max-width: 800px;
      margin: auto;
    }

    cxl-jwplayer {
      margin: 50px;
    }
  </style>
  <div class="jwplayers-wrapper">
    ${Object.keys(cxlJWPlayerData).map(
      (mediaId) => html`
        <cxl-jwplayer
          mediaId=${mediaId}
          config="${JSON.stringify(cxlJWPlayerData[mediaId])}"
        ></cxl-jwplayer>
      `
    )}
  </div>
`;

// @todo localStorage data panel?
CxlJWPlayer.story = {
  name: 'cxl-jwplayer',
};
