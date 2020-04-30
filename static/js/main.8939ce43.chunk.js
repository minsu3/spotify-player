(this["webpackJsonphome-controller"]=this["webpackJsonphome-controller"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(27),n(6)),i=n.n(s),u=n(18),l=n(7),p=n(10),h=(n(29),n(11)),f=n(8),m=n(21),d=Object({NODE_ENV:"production",PUBLIC_URL:"/chihuahua",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).CHIHUAHUA_SPOTIFY_SECRET,v=new URLSearchParams(window.location.hash.substr(1)).get("access_token"),y=null;null==d&&console.warn("Spotify client secret was not found; please set it in your environment\n    variables to use Spotify integration.  Until then, serverside attempts to\n    communicate with Spotify will just log to the console :)"),null==v&&console.warn("No clientside access token found.  Try authenticating again.  Without this\n    access token, clientside attempts to communicate with Spotify will fail.");var b=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"user-read-playback-state user-modify-playback-state",t="https://accounts.spotify.com/authorize?client_id=".concat("c684509b8e09406c8b08e1c6e9110d94","&redirect_uri=http:%2F%2Flocalhost:3000&scope=").concat(encodeURI("user-read-playback-state user-modify-playback-state"),"&response_type=token"),window.location.href=t,e.abrupt("return",null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=v){e.next=3;break}return console.warn("No clientside access token.  Redirecting to authentication page..."),e.abrupt("return",b());case 3:if(a={Authorization:"Bearer "+v},null!=n){e.next=7;break}return n={headers:a},e.abrupt("return",fetch(t,n));case 7:return r=Object(m.a)({},a,{},n.headers),n.headers=r,e.next=11,fetch(t,n);case 11:return 401===(c=e.sent).status&&b(),e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.status,e.next=204===e.t0?3:4;break;case 3:return e.abrupt("return",{success:!0});case 4:return e.next=6,t.json();case 6:return e.t1=e.sent,e.abrupt("return",{success:!1,responseJson:e.t1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e,t,n){var a=t||y;return null!=a?e+"&device_id=".concat(a):(console.warn("".concat(n," was called with a null device id.\n      This will fail if the user is not listening on any devices right now")),e)},E=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g("https://api.spotify.com/v1/me/player/pause",t,"pause()"),e.next=3,w(n,{method:"PUT"});case 3:return a=e.sent,e.abrupt("return",k(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t),e.next=3,w("https://api.spotify.com/v1/search?q=".concat(n,"&type=track"));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=n(20);function x(e){return console.log("searchResults = ",e),r.a.createElement("div",{className:"list"},e.searchResults.map((function(e){return r.a.createElement("p",{className:"render"},e.trackName)})))}var j=function(){var e=Object(a.useState)({text:""}),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(p.a)(o,2),m=s[0],d=s[1],v=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,r,c,o,s,l,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O(n);case 3:a=e.sent,console.log(a),r=a.tracks.items,c=[],o=Object(u.a)(r);try{for(o.s();!(s=o.n()).done;)l=s.value,p={trackName:l.name},c.push(p)}catch(i){o.e(i)}finally{o.f()}d(c),console.log("Track Name = ",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",{className:"title"},"Spotify Player"),r.a.createElement(f.a,{variant:"primary",onClick:function(){return console.log("play.  Attempting to connect to backend; you should see something print after this"),void fetch("/play").then(console.log)}},"Play")," ",r.a.createElement(f.a,{variant:"primary",onClick:function(){return E()}},"Pause")," ",r.a.createElement(S.a,{style:{display:"inline-block"}},r.a.createElement(h.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",type:"text",placeholder:"Enter song name...",onChange:function(e){return c(e.target.value)}})),r.a.createElement(f.a,{type:"submit",className:"submit",onClick:v},"Submit")," ",r.a.createElement(f.a,{variant:"primary",onClick:function(){b()},className:"authenticate"},"Authenticate"),r.a.createElement(x,{searchResults:m,key:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(33);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.8939ce43.chunk.js.map