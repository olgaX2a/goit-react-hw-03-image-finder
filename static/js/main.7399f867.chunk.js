(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},22:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(8),o=r.n(c),s=(r(18),r(3)),u=r(4),i=r(6),l=r(5),h=(r(19),r(20),r(21),r(22),r(7)),d=r(1),p=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:""},e.handleInputChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?e.props.onFormSubmit(e.state.query):h.b.error("Your query is empty. Please enter correct query.")},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),r}(n.Component),j=r(10),b=r.n(j),m=r(11),f=r(12),y=(r(25),r(26),function(e){var t=e.src,r=e.alt,n=e.onPictureClick;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:t,alt:r,className:"ImageGalleryItem-image",onClick:n})})});var g=function(e,t){var r="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("21806148-ef05846c07274d590c18cb52e","&image_type=photo&orientation=horizontal&per_page=").concat(12);return fetch(r).then((function(e){return e.ok?e.json():Promise.reject(new Error("No matches found. Please check your request."))}))},O=r(13),v=r.n(O),S=(r(47),function(){return Object(d.jsx)(v.a,{className:"Loading",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}),x="idle",k="pending",w="resolved",q="rejected",C=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={gallery:[],page:1,status:x,error:null},e.setPictures=function(){var t=Object(f.a)(b.a.mark((function t(r,n,a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(n,a);case 3:return c=t.sent,t.abrupt("return",e.setState({gallery:[].concat(Object(m.a)(r),Object(m.a)(c.hits)),status:w}));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e.setState({error:t.t0,status:q}));case 10:return t.prev=10,1!==a&&window.scrollTo({top:document.querySelector("ul").scrollHeight,behavior:"smooth"}),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(e,r,n){return t.apply(this,arguments)}}(),e.handlePictureSelect=function(t){e.props.getSelectedPic(t)},e.renderGallery=function(){return Object(d.jsx)("ul",{className:"ImageGallery",query:e.props.query,page:e.props.page,children:e.state.gallery.map((function(t){var r=t.id,n=t.webformatURL,a=t.largeImageURL,c=t.tags;return Object(d.jsx)(y,{src:n,alt:c,onPictureClick:function(){return e.handlePictureSelect(a)}},r)}))})},e}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r=e.query,n=this.props.query,a=e.page,c=this.props.page,o=t.gallery;r!==n&&(this.setState({page:1,status:k}),this.setPictures([],n,c)),a!==c&&(this.setState({status:k}),this.setPictures(o,n,c))}},{key:"render",value:function(){var e=this.state,t=e.gallery,r=e.status,n=e.error;return r===x?null:r===k?Object(d.jsxs)(d.Fragment,{children:[this.renderGallery(),Object(d.jsx)(S,{})]}):r===q?h.b.error(n):r===w&&0===t.length?h.b.error("No matches found. Please check your query."):this.renderGallery()}}]),r}(n.Component),P=(r(48),function(e){var t=e.onLoadMore;return Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}),M=(r(49),function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={url:null},e.handleEscKeyDown=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.setState({url:this.props.url}),window.addEventListener("keydown",this.handleEscKeyDown)}},{key:"componentWillUnmount",value:function(){this.setState({url:null}),window.removeEventListener("keydown",this.handleEscKeyDown)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:this.state.url,alt:""})})})}}]),r}(n.Component)),N=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={query:"",page:1,selectedPicture:null},e.handleGalleryUpd=function(t){e.setState({pictures:t})},e.handleOpenModal=function(t){e.setState({selectedPicture:t})},e.handleCloseModal=function(){e.setState({selectedPicture:null})},e.handleSearchSubmit=function(t){e.setState({query:t})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onFormSubmit:this.handleSearchSubmit}),Object(d.jsx)(h.a,{autoClose:2e3}),Object(d.jsx)(C,{query:this.state.query,page:this.state.page,getSelectedPic:this.handleOpenModal}),this.state.query&&Object(d.jsx)(P,{onLoadMore:this.handleLoadMore}),this.state.selectedPicture&&Object(d.jsx)(M,{closeModal:this.handleCloseModal,url:this.state.selectedPicture})]})}}]),r}(n.Component);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7399f867.chunk.js.map