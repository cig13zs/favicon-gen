const assert = require('assert');
const FaviconGen = require('./core');

const res = FaviconGen.generateHtml('Dashboard', '🚀', '#3b82f6');
assert.strictEqual(res.htmlTags.includes('data:image/svg+xml,'), true);
assert.strictEqual(res.htmlTags.includes('#3b82f6'), true);
console.log('ok, all FaviconGen assertions passed');
