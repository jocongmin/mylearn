(function() {
     var s = document.createElement('script');
     s.type = 'text/javascript';
     s.async = true;
     s.src = 'one.js';
     var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(s, x);
 })();
 (function() {
     var s = document.createElement('script');
     s.type = 'text/javascript';
     s.async = true;
     s.src = 'two.js';
     var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(s, x);
 })();
  (function() {
     var s = document.createElement('script');
     s.type = 'text/javascript';
     s.async = true;
     s.src = 'three.js';
     var x = document.getElementsByTagName('script')[0];
     x.parentNode.insertBefore(s, x);
 })();
