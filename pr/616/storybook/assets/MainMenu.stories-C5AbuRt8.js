import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,I as n,L as r,Pt as i,Rt as a,bt as o}from"./iframe-BJPFMC_k.js";import{i as s,n as c,r as l,t as u}from"./logo-text-DIfZVkJO.js";var d,f,p,m,h,g,_;e((()=>{a(),o(),l(),u(),d=i(),f=t(),p=`data:image/svg+xml;base64,${btoa(s)}`,m=`data:image/svg+xml;base64,${btoa(c)}`,h={title:`Global`,component:r,decorators:[]},g=()=>{let e=(0,d.text)(`Logo Mark SVG`,p),t=(0,d.text)(`Logo Text SVG`,m),i=(0,d.boolean)(`Can Always Pin`,!1),a=(0,d.text)(`Keep Open`,`Keep Open`),o=(0,d.text)(`Auto-Hide`,`Auto-Hide`),s=(0,d.text)(`Support Url`,`#`),c=(0,d.text)(`Home Link`,`#`);return(0,f.jsx)(n,{children:(0,f.jsx)(r,{content:(0,d.object)(`Menu Config`,{items:[{icon:`Invalid`,title:`Basic Item`,href:`#`},{icon:`Detection`,title:`External Link`,href:`https://futurestandard.co.jp/`,isExternalLink:!0},{icon:`PasswordShow`,title:`With Children`,href:`/`,submenu:[{title:`Child One`,href:`/`},{title:`Child Two`,href:`#`},{title:`Child Three`,href:`#`},{title:`Child with external link`,href:`https://www.google.com/`,isExternalLink:!0}]},{icon:`Success`,title:`Grouped Children`,href:`#`,submenu:[{title:`Subheader`},{title:`Nested Child One`,href:`#`},{title:`Nested Child Two`,href:`#`},{title:`Nested Child Three`,href:`#`},{title:`Subheader Two`},{title:`Nested Child Four`,href:`#`},{title:`Nested Child Five`,href:`#`}]}]}),home:c,logoMark:e,logoText:t,supportUrl:s,canAlwaysPin:i,keepOpenText:a,autoHideText:o})})},g.__docgenInfo={description:``,methods:[],displayName:`_MainMenu`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`_MainMenu`]}))();export{g as _MainMenu,_ as __namedExportsOrder,h as default};