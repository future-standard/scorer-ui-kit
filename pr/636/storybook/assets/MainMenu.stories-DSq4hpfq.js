import{n as e}from"./chunk-BneVvdWh.js";import{I as t,L as n,Lt as r,Ot as i,bt as a}from"./iframe-CqAvHUfG.js";import{i as o,n as s,r as c,t as l}from"./logo-text-DIfZVkJO.js";var u,d,f,p,m,h,g;e((()=>{u=r(),a(),c(),l(),d=i(),f=`data:image/svg+xml;base64,${btoa(o)}`,p=`data:image/svg+xml;base64,${btoa(s)}`,m={title:`Global`,component:n,decorators:[]},h=()=>{let e=(0,u.text)(`Logo Mark SVG`,f),r=(0,u.text)(`Logo Text SVG`,p),i=(0,u.boolean)(`Can Always Pin`,!1),a=(0,u.text)(`Keep Open`,`Keep Open`),o=(0,u.text)(`Auto-Hide`,`Auto-Hide`),s=(0,u.text)(`Support Url`,`#`),c=(0,u.text)(`Home Link`,`#`);return(0,d.jsx)(t,{children:(0,d.jsx)(n,{content:(0,u.object)(`Menu Config`,{items:[{icon:`Invalid`,title:`Basic Item`,href:`#`},{icon:`Detection`,title:`External Link`,href:`https://futurestandard.co.jp/`,isExternalLink:!0},{icon:`PasswordShow`,title:`With Children`,href:`/`,submenu:[{title:`Child One`,href:`/`},{title:`Child Two`,href:`#`},{title:`Child Three`,href:`#`},{title:`Child with external link`,href:`https://www.google.com/`,isExternalLink:!0}]},{icon:`Success`,title:`Grouped Children`,href:`#`,submenu:[{title:`Subheader`},{title:`Nested Child One`,href:`#`},{title:`Nested Child Two`,href:`#`},{title:`Nested Child Three`,href:`#`},{title:`Subheader Two`},{title:`Nested Child Four`,href:`#`},{title:`Nested Child Five`,href:`#`}]}]}),home:c,logoMark:e,logoText:r,supportUrl:s,canAlwaysPin:i,keepOpenText:a,autoHideText:o})})},h.__docgenInfo={description:``,methods:[],displayName:`_MainMenu`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const logoMark = text('Logo Mark SVG', logoMarkSvg);
  const logoText = text('Logo Text SVG', logoTextSvg);
  const canAlwaysPin = boolean('Can Always Pin', false);
  const keepOpenText = text('Keep Open', 'Keep Open');
  const autoHideText = text('Auto-Hide', 'Auto-Hide');
  const supportUrl = text('Support Url', '#');
  const menuHomeLink = text('Home Link', '#');
  const menuConfig = object('Menu Config', {
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
}`,...h.parameters?.docs?.source}}},g=[`_MainMenu`]}))();export{h as _MainMenu,g as __namedExportsOrder,m as default};