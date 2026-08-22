;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FaviconGen = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  function generateHtml(title, emoji, themeColor) {
    title = title || 'My App';
    emoji = emoji || '⚡';
    themeColor = themeColor || '#000000';

    const svgUri = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>' + encodeURIComponent(emoji) + '</text></svg>';

    return {
      svgFaviconUri: svgUri,
      htmlTags: [
        `<link rel="icon" href="${svgUri}">`,
        `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`,
        `<meta name="theme-color" content="${themeColor}">`
      ].join('\n')
    };
  }

  return { generateHtml: generateHtml };
});
