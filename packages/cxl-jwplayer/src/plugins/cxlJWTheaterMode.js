/* eslint-disable */
/**
 *
 * JW Custom Plugin: Theater mode
 * Description: Resize Player
 * ID: cxlJWTTheaterMode
 * Author: kyle@cxl.com
 * Dependencies: none
 *
 */

(() => {
  const id = 'cxlJWTheaterMode';

  let playerContainer;

  class plugin {
    constructor(playerInstance) {
      // Start Plugin Code

      let player = '';

      const { path } = data;
      const buttonId = 'toggle-theater-mode';
      const iconPath = `${path}images/wide-tv.svg`;
      const tooltipText = 'Toggle Theater Mode';
      /** *M Start Theater Mode Interactivity */
      const buttonClickAction = () => {
        playerContainer.classList.toggle('theater-mode');
      };

      playerInstance.on('ready', () => {
        // Call the player's `addButton` API method to add the custom button
        playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);
      });

      playerInstance.on('viewable', () => {
        player = playerInstance.getContainer();
        playerContainer = document.getElementById(`${player.getAttribute('id')}`).parentElement;
      });
      /** * End Theater Mode Interactivity M-END */
      // End Plugin Code
    }
  }

  plugin.version = '1.0.0';

  const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;
  registerPlugin(id, '1.0.0', plugin);
})();
