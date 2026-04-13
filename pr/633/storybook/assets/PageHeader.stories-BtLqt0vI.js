import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,F as n,Ft as r,H as i,Lt as a,Pt as o,Rt as s,bt as c,rt as l,u}from"./iframe-Bq-bFTg_.js";import{n as d,r as f}from"./helpers-CmedATVk.js";var p,m,h,g,_,v,y,b,x;e((()=>{s(),r(),p=o(),c(),f(),m=t(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g=a.div`
  margin: 100px;
`,_={title:`Pages/molecules`,component:i,decorators:[]},v=[{label:`Shop A`,icon:`MetaCategories`,linkTo:`/`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Shop B`,icon:`MetaCategories`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Shop C`,icon:`MetaCategories`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Edit`,icon:`Edit`,onTagClick:h(`Edit tag clicked`)}],y=[{id:`primaryBase0`,buttonType:`default`,text:`Example Action 1`},{id:`secondaryBase1`,buttonType:`default`,text:`Example Action 2`,design:`secondary`},{id:`buttonWithIcon2`,buttonType:`icon-button`,text:`Delete Instance`,design:`danger`,icon:`DevicesScorerEdge`}],b=()=>{let e=Object.assign({None:null},d()),t=(0,p.text)(`Page Title`,`My Page Title`),r=(0,p.text)(`Page Area`,`Area Name`),a=(0,p.text)(`Page Area Href`,`#`),o=(0,p.select)(`Icon`,e,`Link`),s=(0,p.select)(`Icon Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`,Undefined:void 0},void 0),c=(0,p.boolean)(`Update Doc Title`,!0),f=(0,p.boolean)(`No tags Example`,!1),_=(0,p.boolean)(`Area Title Bottom`,!1),b=(0,p.boolean)(`No Buttons Example`,!1),x=(0,p.boolean)(`No Icon`,!1),S=h(`Custom onAreaClick was used`),C=(0,p.text)(`Text`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.`),w=(0,p.object)(`Tag List`,v),T=(0,p.object)(`Buttons Stack`,y),E=(0,p.boolean)(`Example with area on Click`,!1),D=(0,p.boolean)(`Has Bottom Left Bottom`,!1);return c&&console.info(`Note: Updating document.title in Storybook has no effect though it should work in projects.`),(0,m.jsx)(g,{children:(0,m.jsx)(i,{icon:x?void 0:o||void 0,iconColor:s,introductionText:C,title:t,areaTitle:r,areaHref:a,onAreaClick:E?S:void 0,updateDocTitle:c,tagList:f?void 0:w,rightContent:b?void 0:(0,m.jsx)(u,{buttons:T}),areaTitleBottom:_,bottomLeftContent:D?(0,m.jsx)(n,{htmlFor:`id-switch`,labelText:`Enable`,direction:`row`,children:(0,m.jsx)(l,{},`id-switch`)}):void 0})})},b.__docgenInfo={description:``,methods:[],displayName:`_PageHeader`},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const iconList = Object.assign({
    None: null
  }, generateIconList());
  const pageTitle = text("Page Title", "My Page Title");
  const pageAreaText = text("Page Area", "Area Name");
  const pageAreaHref = text("Page Area Href", "#");
  const pageIcon = select("Icon", iconList, 'Link');
  const pageIconColor = select("Icon Color", {
    Mono: "mono",
    Dimmed: "dimmed",
    Subtle: "subtle",
    Inverse: "inverse",
    Primary: "primary",
    Danger: "danger",
    Undefined: undefined
  }, undefined);
  const updateDocTitle = boolean("Update Doc Title", true);
  const noTagsExample = boolean("No tags Example", false);
  const areaTitleBottom = boolean("Area Title Bottom", false);
  const noButtonsExample = boolean("No Buttons Example", false);
  const noIconExample = boolean("No Icon", false);
  const customClick = action('Custom onAreaClick was used');
  const introductionText = text("Text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");
  const tagList = object('Tag List', defaultTags);
  const buttonList = object('Buttons Stack', defaultBtn);
  const optionalAreaOnclick = boolean('Example with area on Click', false);
  const hasBottomLeftContent = boolean('Has Bottom Left Bottom', false);
  if (updateDocTitle) {
    console.info("Note: Updating document.title in Storybook has no effect though it should work in projects.");
  }
  return <Container>
        <PageHeader icon={noIconExample ? undefined : pageIcon || undefined} iconColor={pageIconColor} introductionText={introductionText} title={pageTitle} areaTitle={pageAreaText} areaHref={pageAreaHref} onAreaClick={optionalAreaOnclick ? customClick : undefined} updateDocTitle={updateDocTitle} tagList={noTagsExample ? undefined : tagList} rightContent={noButtonsExample ? undefined : <ButtonsStack buttons={buttonList} />} areaTitleBottom={areaTitleBottom} bottomLeftContent={hasBottomLeftContent ? <Label htmlFor='id-switch' labelText='Enable' direction='row'>
              <Switch key='id-switch'></Switch>
            </Label> : undefined} />
      </Container>;
}`,...b.parameters?.docs?.source}}},x=[`_PageHeader`]}))();export{b as _PageHeader,x as __namedExportsOrder,_ as default};