const sample = "🚀 #3b82f6";

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const statsEl = document.getElementById('output-stats') || document.getElementById('stats');

function process() {
  const parts = inputEl.value.split(/[,\s]+/).filter(s => s.length > 0);
  const emoji = parts[0] || '⚡';
  const color = parts[1] || '#3b82f6';

  const res = FaviconGen.generateHtml('App', emoji, color);
  outputEl.value = res.htmlTags;
  if (statsEl) statsEl.textContent = `Generated emoji favicon ${emoji} with theme ${color}`;
}

document.getElementById('btn-run').addEventListener('click', process);
inputEl.addEventListener('input', process);
document.getElementById('btn-sample').addEventListener('click', () => { inputEl.value = sample; process(); });
document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(outputEl.value); alert('Copied HTML favicon tags!'); });
if (document.getElementById('btn-clear')) document.getElementById('btn-clear').addEventListener('click', () => { inputEl.value = ''; outputEl.value = ''; });
process();
