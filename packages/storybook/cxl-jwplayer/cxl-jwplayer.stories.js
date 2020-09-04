import { html } from 'lit-html';
import '../../cxl-jwplayer/src/components/cxl-jwplayer.js';

export default {
  title: 'CXL JWPlayer | cxl-jwplayer'
};

export const CxlJWPlayer = () => {
  return html`
    <cxl-jwplayer mediaId="fZ0XiGdb"></cxl-jwplayer>
  `;
};

// @todo localStorage data panel?
CxlJWPlayer.story = {
  name: 'cxl-jwplayer'
};
