import 'babel-polyfill'
import '../scss/index.scss'
import config from './config'
import cover from '../html/cover.html'

document.getElementById("cover").innerHTML = cover

const getGHProfileInfo = async () => await (await fetch(config.apiGHInfoProfileUrl)).json()
let GHProfileInfo;
getGHProfileInfo().then((GHResponse)=>{
  console.log("GH Profile information obtained");
  document.getElementById("profile-pic").src = GHResponse.avatar_url
  console.log("<< IN CODE WE TRUST >>")
}).catch(()=>{
  console.error("Can't get  GH profile information from '"+ config.apiGHInfoProfileUrl +"'");
})

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', config.particlesConf, function() {
  console.log('callback - particles.js config loaded');
});

//set social media logos
document.getElementById("fb-logo").src = config.fbWhite
document.getElementById("tw-logo").src = config.twWhite
