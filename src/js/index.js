import 'babel-polyfill'
import '../scss/index.scss'
import config from './config'


const getGHProfileInfo = async () => await (await fetch(config.apiGHInfoProfileUrl)).json()
let GHProfileInfo;
getGHProfileInfo().then((GHResponse)=>{
  console.log("<< IN CODE WE TRUST >>")
  // console.info("GH Profile information obtained");
  document.getElementById("profile-pic").src = GHResponse.avatar_url

}).catch(()=>{
  console.error(`Can't get GH profile information from '${config.apiGHInfoProfileUrl}'`);
})

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', config.particlesConf, function() {
  // console.log('callback - particles.js config loaded');
});

//social media
const fbLogo = document.getElementById("fb-logo")
const twLogo = document.getElementById("tw-logo")
const ghLogo = document.getElementById("gh-logo")

//set social media links
fbLogo.addEventListener("click", () => {
  window.open("http://facebook.com/YAYOSILVAIPN","_blank")
})

twLogo.addEventListener("click", () => {
  window.open("http://twitter.com/devcharles","_blank")
})

twLogo.addEventListener("click", () => {
  window.open("https://github.com/devCharles","_blank")
})
