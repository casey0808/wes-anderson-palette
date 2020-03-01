(this["webpackJsonpwes-anderson-palette"]=this["webpackJsonpwes-anderson-palette"]||[]).push([[0],{51:function(e,t,a){e.exports=a.p+"static/media/PD.afc1bf56.svg"},60:function(e,t,a){e.exports=a(77)},65:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var o,n,r=a(0),l=a.n(r),i=a(8),c=a.n(i),s=a(35),m=(a(65),a(17)),d=a(12),p=a(19),h=a(20),u=a(21),g=a(10),f=a(48),b=a(78),y=a(7),v=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},C={colorBox:Object(y.a)({width:"50%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4px","&:hover button":{opacity:1}},v("xs"),{width:"100%",height:"12%"}),copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",textTransform:"uppercase",border:"none",opacity:0,cursor:"pointer",textDecoration:"none"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.5s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMsg:{opacity:0,color:"white",transform:"scale(0.1)",fontSize:"3rem",position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& h1":{fontWeight:400,textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textTransform:"uppercase",textAlign:"center",marginBottom:0,padding:"1rem"},"& p":{fontSize:"2rem",fontWeight:100}},showMsg:{opacity:1,transform:"scale(1)",transition:"all 0.4s ease-in-out",transitionDelay:"0.2s",zIndex:25}},k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={copied:!1},a.changeCopyState=a.changeCopyState.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.background,o=e.classes,n=this.state.copied;return l.a.createElement(f.CopyToClipboard,{text:a,onCopy:this.changeCopyState},l.a.createElement("div",{style:{background:a},className:o.colorBox},l.a.createElement("div",{style:{background:a},className:"".concat(o.copyOverlay," ").concat(n&&o.showOverlay)}),l.a.createElement("div",{className:"".concat(o.copyMsg," ").concat(n&&o.showMsg)},l.a.createElement("h1",null,"Copied"),l.a.createElement("p",null,a)),l.a.createElement("div",null,l.a.createElement("div",{className:o.boxContent},l.a.createElement("span",null,t)),l.a.createElement("button",{className:o.copyButton},"Copy"))))}}]),t}(r.Component),x=Object(b.a)(C)(k),O=a(109),E=a(111),D=a(112),j=a(108),w=a(50),S=a.n(w),B={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh",backgroundColor:"#fafafa"},logo:Object(y.a)({marginRight:"15px",padding:"0 13px",fontSize:"20px",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"},"& a:hover":{color:"gray"}},v("xs"),{fontSize:"18px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem","& .items":{fontSize:"15px"}}},N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={format:"hex",open:!1},a.handleFormatChange=a.handleFormatChange.bind(Object(g.a)(a)),a.closeSnackbar=a.closeSnackbar.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.state,t=e.format,a=e.open,o=this.props.classes;return l.a.createElement("header",{className:o.Navbar},l.a.createElement("div",{className:o.logo},l.a.createElement(s.b,{to:"/"},l.a.createElement("i",{class:"fas fa-chevron-circle-left"},"  Palette List"))),l.a.createElement("div",{className:o.selectContainer},l.a.createElement(O.a,{value:t,onChange:this.handleFormatChange,className:"items"},l.a.createElement(E.a,{value:"hex"},"HEX - #ffffff"),l.a.createElement(E.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"))),l.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:3e3,message:l.a.createElement("span",{id:"message-id"},"Format Changed To ",t.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[l.a.createElement(j.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},l.a.createElement(S.a,null))]}))}}]),t}(r.Component),F=Object(b.a)(B)(N),A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={format:"hex"},a.changeFormat=a.changeFormat.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this,t=this.props.palette.colors.map((function(t){return l.a.createElement(x,{background:t[e.state.format],name:t.name,key:t.name})})),a=this.props.classes;return l.a.createElement("div",{className:a.Palette},l.a.createElement(F,{handleChange:this.changeFormat}),l.a.createElement("div",{className:a.paletteColors},t),l.a.createElement("footer",{className:a.paletteFooter},this.props.palette.paletteName))}}]),t}(r.Component),P=Object(b.a)({Palette:{height:"100vh",backgroundColor:"#fafafa"},paletteColors:{height:"90%"},paletteFooter:{height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold",paddingRight:"1rem"}})(A),R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paletteName,o=e.colors.map((function(e){return l.a.createElement("div",{className:t.miniColor,style:{backgroundColor:e.color},key:e.name})}));return l.a.createElement("div",{className:t.root,onClick:this.handleClick},l.a.createElement("div",{className:t.colors},o),l.a.createElement("h5",{className:t.title},a))}}]),t}(r.PureComponent),T=Object(b.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},miniColor:{height:"51%",width:"50%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})(R),G=a(51),z={root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundImage:"url(".concat(a.n(G).a,")"),overflow:"scroll"},heading:{fontSize:"2rem",letterSpacing:"0.1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"},container:(o={width:"60%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(y.a)(o,v("md"),{width:"80%"}),Object(y.a)(o,v("sm"),{width:"100%"}),o),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white"},palettes:(n={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2rem"},Object(y.a)(n,v("sm"),{gridTemplateColumns:"repeat(2, 40%)",paddingBottom:"2rem"}),Object(y.a)(n,v("xs"),{gridTemplateColumns:"repeat(1, 80%)",gridGap:"1.2rem",paddingBottom:"2rem"}),n)},I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).goToPalette=a.goToPalette.bind(Object(g.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/wes-anderson-palette/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.palettes,o=t.classes;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.container},l.a.createElement("nav",{className:o.nav},l.a.createElement("h1",{className:o.heading},"Palette List")),l.a.createElement("div",{className:o.palettes},a.map((function(t){return l.a.createElement(T,Object.assign({},t,{key:t.id,id:t.id,goToPalette:e.goToPalette}))})))))}}]),t}(r.Component),V=Object(b.a)(z)(I),M=a(29),L=a(52),Y=a.n(L);function W(e){var t={paletteName:e.paletteName,id:e.id,colors:[]},a=!0,o=!1,n=void 0;try{for(var r,l=e.colors[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var i=r.value;t.colors.push({name:i.name,hex:i.color,rgb:Y()(i.color).css()})}}catch(c){o=!0,n=c}finally{try{a||null==l.return||l.return()}finally{if(o)throw n}}return t}var H=[{paletteName:"Bottle Rocket",id:"bottle-rocket",colors:[{name:"DarkRed",color:"#A42820"},{name:"DarkGrayishOrange",color:"#5f5647"},{name:"VividYellow",color:"#FAD510"},{name:"DarkGrayishCyan",color:"#3F5151"},{name:"DarkBrownishOrange",color:"#4E2A1E"},{name:"DarkRed2",color:"#550307"},{name:"DarkBlackishGreen",color:"#0C1707"},{name:"StrongRed",color:"#CB2314"}]},{paletteName:"Rushmore",id:"rushmore",colors:[{name:"SoftOrange",color:"#E1BD6D"},{name:"SoftOrange2",color:"#EABE94"},{name:"DarkCyan",color:"#0B775E"},{name:"DarkViolet",color:"#35274A"},{name:"VividRed",color:"#F2300F"}]},{paletteName:"Royal Tenenbaums",id:"royal-tenenbaums",colors:[{name:"DarkGrayishBlue",color:"#899DA4"},{name:"StrongRed",color:"#C93312"},{name:"LightGrayishOrange",color:"#FAEFD1"},{name:"BrightOrange",color:"#DC863B"},{name:"OliveYellow",color:"#9A8822"},{name:"VerySoftOrange",color:"#F5CDB4"},{name:"VerySoftRed",color:"#F8AFA8"},{name:"VerySoftOrange2",color:"#FDDDA0"}]},{paletteName:"Darjeeling Limited",id:"darjeeling-limited",colors:[{name:"PureRed",color:"#FF0000"},{name:"DarkCyan2",color:"#00A08A"},{name:"PureOrange",color:"#F2AD00"},{name:"PureOrange2",color:"#F98400"},{name:"ModerateCyan",color:"#5BBCD6"},{name:"VerySoftOrange3",color:"#ECCBAE"},{name:"DarkBlue",color:"#046C9A"},{name:"ModerateOrange",color:"#D69C4E"}]},{paletteName:"Fantastic Fox",id:"fantastic-fox",colors:[{name:"BrightOrange2",color:"#DD8D29"},{name:"PureYellow",color:"#E2D200"},{name:"ModerateCyan2",color:"#46ACC8"},{name:"VividOrange",color:"#E58601"},{name:"StrongRed2",color:"#B40F20"}]},{paletteName:"Moonrise Kingdom",id:"moonrise-kingdom",colors:[{name:"SoftYellow",color:"#F3DF6C"},{name:"StrongYellow",color:"#CEAB07"},{name:"GrayishYellow",color:"#D5D5D3"},{name:"VeryDarkGreen",color:"#24281A"},{name:"LimeGreen",color:"#798E87"},{name:"ModerateOrange2",color:"#C27D38"},{name:"SlightlyDesaturatedYellow",color:"#CCC591"},{name:"BlackishRed",color:"#29211F"}]},{paletteName:"Grand Budapest",id:"grand-budapest",colors:[{name:"SoftOrange3",color:"#F1BB7B"},{name:"SoftRed",color:"#FD6467"},{name:"VeryDarkRed",color:"#5B1A18"},{name:"ModerateOrange3",color:"#D67236"},{name:"VerySoftPink",color:"#E6A0C4"},{name:"LightGrayishBlue",color:"#C6CDF7"},{name:"SlightlyDesaturatedRed",color:"#D8A499"},{name:"SlightlyDesaturatedBlue",color:"#7294D4"}]},{paletteName:"Isle of Dogs",id:"isle-of-dogs",colors:[{name:"DarkGrayishViolet",color:"#9986A5"},{name:"DarkModerateRed",color:"#79402E"},{name:"SlightlyDesaturatedYellow2",color:"#CCBA72"},{name:"VeryDarkPink",color:"#0F0D0E"},{name:"LightGrayishPink",color:"#D9D0D3"},{name:"DarkGrayishOrange2",color:"#8D8680"},{name:"LightGrayishOrange2",color:"#EAD3BF"},{name:"DarkGrayishOrange3",color:"#AA9486"}]}],J=a(113),K=a(110),U=(a(76),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"findPalette",value:function(e){return H.find((function(t){return t.id===e}))}},{key:"render",value:function(){var e=this;return l.a.createElement(M.a,{render:function(t){var a=t.location;return l.a.createElement(J.a,null,l.a.createElement(K.a,{key:a.key,classNames:"page",timeout:400},l.a.createElement(M.c,{location:a},l.a.createElement(M.a,{exact:!0,path:"/wes-anderson-palette",render:function(e){return l.a.createElement("div",{className:"page"},l.a.createElement(V,Object.assign({palettes:H},e)))}}),l.a.createElement(M.a,{exact:!0,path:"/wes-anderson-palette/:id",render:function(t){return l.a.createElement("div",{className:"page"},l.a.createElement(P,{palette:W(e.findPalette(t.match.params.id))}))}}))))}})}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.673c3960.chunk.js.map