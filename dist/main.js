(()=>{"use strict";const e=(()=>{const e=e=>({length:e,hits:function(e){return e+1},sunk:!1});return{createShips:e,createAllShips:()=>{let l=[];for(let t=4;t>=1;t--)for(let o=4;o>=t;o--)l.push(e(t));return l}}})();console.log(e.createAllShips().length),console.log("player",e.createAllShips()),console.log("comp",e.createAllShips())})();