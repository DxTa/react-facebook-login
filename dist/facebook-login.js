!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(6),l=n(c),p=o(4),u=n(p),f=o(3),d=n(f),y=function(e){function t(){var e,o,n,s;i(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return o=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{fields:n.props.fields},function(t){Object.assign(t,e),n.props.callback(t)})},n.checkLoginAfterRefresh=function(e){"unknown"===e.status&&window.FB.login(function(e){return n.checkLoginState(e)},!0)},n.checkLoginState=function(e){n.setState({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.callback&&n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"unknown"===e.status?window.FB.login(function(e){return n.checkLoginState(e)},!0):n.checkLoginState(e)},n.click=function(){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var e=n.props,t=e.scope,o=e.appId,i=e.onClick,r=e.reAuthenticate,s=e.redirectUri,a=e.disableMobileRedirect;"function"==typeof i&&i();var c=!1;try{c=window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i)}catch(l){}var p={client_id:o,redirect_uri:s,state:"facebookdirect",scope:t};r&&(p.auth_type="reauthenticate"),c&&!a?window.location.href="//www.facebook.com/dialog/oauth?"+(0,d["default"])(p):window.FB.login(n.checkLoginState,{scope:t,auth_type:p.auth_type})}},s=o,r(n,s)}return s(t,e),a(t,[{key:"componentDidMount",value:function(){if(document.getElementById("facebook-jssdk"))return void this.sdkLoaded();this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||(e=document.createElement("div"),e.id="fb-root",document.body.appendChild(e))}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,i=t.cookie,r=t.version,s=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+r,appId:o,xfbml:n,cookie:i}),e.setState({isSdkLoaded:!0}),(s||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var i=t.getElementsByTagName(o)[0],r=i,s=i;t.getElementById(n)||(s=t.createElement(o),s.id=n,s.src="//connect.facebook.net/"+e+"/sdk.js",r.parentNode.insertBefore(s,r))}(document,"script","facebook-jssdk")}},{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:u["default"]}})}},{key:"containerStyle",value:function(){var e={transition:"opacity 0.5s"};return(this.state.isProcessing||!this.state.isSdkLoaded||this.props.isDisabled)&&(e.opacity=.6),Object.assign(e,this.props.containerStyle)}},{key:"render",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,i=e.textButton,r=e.typeButton,s=e.buttonStyle,a="string"==typeof n;return l["default"].createElement("span",{style:this.containerStyle()},a&&l["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement("button",{type:r,className:t+" "+o,style:s,onClick:this.click},n&&a&&l["default"].createElement("i",{className:"fa "+n}),n&&!a&&n,i),this.style())}}]),t}(l["default"].Component);y.propTypes={isDisabled:c.PropTypes.bool,callback:c.PropTypes.func.isRequired,appId:c.PropTypes.string.isRequired,xfbml:c.PropTypes.bool,cookie:c.PropTypes.bool,reAuthenticate:c.PropTypes.bool,scope:c.PropTypes.string,redirectUri:c.PropTypes.string,textButton:c.PropTypes.string,typeButton:c.PropTypes.string,autoLoad:c.PropTypes.bool,disableMobileRedirect:c.PropTypes.bool,size:c.PropTypes.string,fields:c.PropTypes.string,cssClass:c.PropTypes.string,version:c.PropTypes.string,icon:c.PropTypes.any,language:c.PropTypes.string,onClick:c.PropTypes.func,containerStyle:c.PropTypes.object,buttonStyle:c.PropTypes.object},y.defaultProps={textButton:"Login with Facebook",typeButton:"button",redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",xfbml:!1,cookie:!1,reAuthenticate:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.8",language:"en_US",disableMobileRedirect:!1},t["default"]=y},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=o(1),r=n(i);t["default"]=r["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t}},function(e,t,o){t=e.exports=o(5)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,o){t.exports=e}])});