import{M as l,d as e,j as o,L as f}from"./iframe-BQPDKgpJ.js";import{l as m,a as g}from"./logo-text-DliAGR_v.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const M={title:"Global",component:l,decorators:[]},t=()=>{const s=e.text("Logo Mark SVG",m),a=e.text("Logo Text SVG",g),h=e.boolean("Can Always Pin",!1),d=e.text("Keep Open","Keep Open"),u=e.text("Auto-Hide","Auto-Hide"),c=e.text("Support Url","#"),p=e.text("Home Link","#"),x=e.object("Menu Config",{items:[{icon:"Invalid",title:"Basic Item",href:"#"},{icon:"Detection",title:"External Link",href:"https://futurestandard.co.jp/",isExternalLink:!0},{icon:"PasswordShow",title:"With Children",href:"/",submenu:[{title:"Child One",href:"/"},{title:"Child Two",href:"#"},{title:"Child Three",href:"#"},{title:"Child with external link",href:"https://www.google.com/",isExternalLink:!0}]},{icon:"Success",title:"Grouped Children",href:"#",submenu:[{title:"Subheader"},{title:"Nested Child One",href:"#"},{title:"Nested Child Two",href:"#"},{title:"Nested Child Three",href:"#"},{title:"Subheader Two"},{title:"Nested Child Four",href:"#"},{title:"Nested Child Five",href:"#"}]}]});return o.jsx(f,{children:o.jsx(l,{content:x,home:p,logoMark:s,logoText:a,supportUrl:c,canAlwaysPin:h,keepOpenText:d,autoHideText:u})})};t.__docgenInfo={description:"",methods:[],displayName:"_MainMenu"};var i,n,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const logoMark = text("Logo Mark SVG", logoMarkSvg);
  const logoText = text("Logo Text SVG", logoTextSvg);
  const canAlwaysPin = boolean("Can Always Pin", false);
  const keepOpenText = text("Keep Open", "Keep Open");
  const autoHideText = text("Auto-Hide", "Auto-Hide");
  const supportUrl = text("Support Url", "#");
  const menuHomeLink = text("Home Link", "#");
  const menuConfig = object("Menu Config", {
    items: [{
      icon: 'Invalid',
      title: 'Basic Item',
      href: '#'
    }, {
      icon: 'Detection',
      title: 'External Link',
      href: 'https://futurestandard.co.jp/',
      isExternalLink: true
    }, {
      icon: 'PasswordShow',
      title: 'With Children',
      href: '/',
      submenu: [{
        title: 'Child One',
        href: '/'
      }, {
        title: 'Child Two',
        href: '#'
      }, {
        title: 'Child Three',
        href: '#'
      }, {
        title: 'Child with external link',
        href: 'https://www.google.com/',
        isExternalLink: true
      }]
    }, {
      icon: 'Success',
      title: 'Grouped Children',
      href: '#',
      submenu: [{
        title: 'Subheader'
      }, {
        title: 'Nested Child One',
        href: '#'
      }, {
        title: 'Nested Child Two',
        href: '#'
      }, {
        title: 'Nested Child Three',
        href: '#'
      }, {
        title: 'Subheader Two'
      }, {
        title: 'Nested Child Four',
        href: '#'
      }, {
        title: 'Nested Child Five',
        href: '#'
      }]
    }]
  });
  return <Layout>
      <MainMenu content={menuConfig} home={menuHomeLink} {...{
      logoMark,
      logoText,
      supportUrl,
      canAlwaysPin,
      keepOpenText,
      autoHideText
    }} />
    </Layout>;
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const S=["_MainMenu"];export{t as _MainMenu,S as __namedExportsOrder,M as default};
