import '../scss/index.scss'
import config from './config'
import cover from '../html/cover.html'


document.getElementById("cover").innerHTML = cover
console.log(config.particlesConf);
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', config.particlesConf, function() {
  console.log('callback - particles.js config loaded');
});
