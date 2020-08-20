/* eslint-disable */
/**
 *
 * JW Custom Plugin: Chapters
 * Description: Jump to chapters within a lesson.
 * ID: cxlJWChapters
 * Author: kyle@cxl.com
 * Dependencies: none
 *
 */

(() => {
  const id = 'cxlJWChapters';

  class plugin {
    constructor(playerInstance) {
      // Start Plugin Code

      // const path = data.path; Used in php version
      const buttonId = 'toggle-chapters';
      const iconPath = 'images/open-book-top-view.svg'; // images/open-book-top-view.svg';
      const tooltipText = 'Toggle Chapters';

      let chapters = [];
      let chaptersOverlay;

      const chapterNav = document.createElement('div');
      chapterNav.setAttribute('id', 'chapterNav');
      chapterNav.setAttribute('class', 'chapters');

      playerInstance.on('viewable', () => {
        chaptersOverlay = document.getElementById(`${playerInstance.id}_cxlJWChapters`);
        chaptersOverlay.setAttribute('class', 'chapters-overlay jw-plugin jw-reset hidden');
        chaptersOverlay.appendChild(chapterNav);

        playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);
      });

      const buttonClickAction = () => {
        chaptersOverlay.classList.toggle('hidden');
      };

      const loadChapters = () => {
        let list = '';
        chapters.forEach((chapter, i) => {
          list += `<li id="chapter${i}" class="chapterItem">${chapter.text}</li>`;
        });
        chapterNav.innerHTML = `<ul>${list}</ul>`;
      };

      playerInstance.on('beforePlay', () => {
        chapters = playerInstance.getCues();
        loadChapters();

        chapterNav.addEventListener('click', e => {
          if (e.target.id.indexOf('chapter') === 0) {
            const i = Number(e.target.id.replace('chapter', ''));
            chaptersOverlay.classList.toggle('hidden');
            playerInstance.seek(chapters[i].startTime).play();
          }
        });
      });
      // End Plugin Code
    }
  }

  plugin.version = '1.0.0';
  const registerPlugin = window.jwplayerPluginJsonp || window.jwplayer().registerPlugin;
  registerPlugin(id, '1.0.0', plugin);
})();
