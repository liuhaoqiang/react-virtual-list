(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hhDe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return a});var r=n("mXGw"),s=n.n(r);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return e.length?{__html:e.join(" ")}:{__html:""}}var a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={simpleDOMs:[],complexDOMs:[]},n.onCreateSimpleDOMs=n.onCreateSimpleDOMs.bind(o(o(n))),n.onCreateComplexDOMs=n.onCreateComplexDOMs.bind(o(o(n))),n}n=e,(t=r).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var a=r.prototype;return a.onCreateSimpleDOMs=function(){for(var e=[],t=0;t<1e4;t++)e.push("<div>"+t+"</div>");this.setState({simpleDOMs:e,complexDOMs:[]})},a.onCreateComplexDOMs=function(){for(var e=[],t=0;t<1e4;t++)e.push("\n        <div class='list-item'>\n          <p>#"+t+" eligendi voluptatem quisquam</p>\n          <p>Modi autem fugiat maiores. Doloremque est sed quis qui nobis. Accusamus dolorem aspernatur sed rem.</p>\n        </div>\n      ");this.setState({complexDOMs:e,simpleDOMs:[]})},a.render=function(){return s.a.createElement("div",{style:{marginLeft:"10px"}},s.a.createElement("h3",null,"Creat large of DOMs："),s.a.createElement("button",{onClick:this.onCreateSimpleDOMs},"Create Simple DOMs"),s.a.createElement("button",{onClick:this.onCreateComplexDOMs,style:{marginLeft:"10px"}},"Create Complex DOMs"),s.a.createElement("div",{dangerouslySetInnerHTML:i(this.state.simpleDOMs)}),s.a.createElement("div",{dangerouslySetInnerHTML:i(this.state.complexDOMs)}))},r}(s.a.Component)}}]);