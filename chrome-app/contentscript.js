
window.onload = function() {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('jquery-2.1.0.min.js');
  (document.head||document.documentElement).appendChild(s);

  var c = document.createElement('style');
  c.rel = 'stylesheet';
  c.type = 'text/css';
  c.href = chrome.extension.getURL('boustrephedon.css');
  document.body.appendChild(c);

  s = document.createElement('script');
  s.src = chrome.extension.getURL('boustrephedon.js');
  document.body.appendChild(s);

  this.parentNode.removeChild(this);
};
