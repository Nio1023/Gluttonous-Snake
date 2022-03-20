import './style/index.less'
import GameControl from './modules/GameControl'

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
 
var flag = IsPC(); 
console.log(flag)
if(flag){
  (document.getElementById('mobile') as HTMLElement).style.display ="none"
}
new GameControl()