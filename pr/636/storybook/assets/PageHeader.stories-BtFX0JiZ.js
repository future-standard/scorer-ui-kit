import{n as e}from"./chunk-BneVvdWh.js";import{F as t,H as n,Lt as r,Ot as i,bt as a,jt as o,kt as s,rt as c,u as l}from"./iframe-Du_t-W6m.js";import{n as u,t as d}from"./helpers-Dc96BL7N.js";var f,p,m,h,g,_,v,y,b;e((()=>{f=r(),a(),s(),u(),p=i(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h=o.div`
  margin: 100px;
`,g={title:`Pages/molecules`,component:n,decorators:[]},_=[{label:`Shop A`,icon:`MetaCategories`,linkTo:`/`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Shop B`,icon:`MetaCategories`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Shop C`,icon:`MetaCategories`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Edit`,icon:`Edit`,onTagClick:m(`Edit tag clicked`)}],v=[{id:`primaryBase0`,buttonType:`default`,text:`Example Action 1`},{id:`secondaryBase1`,buttonType:`default`,text:`Example Action 2`,design:`secondary`},{id:`buttonWithIcon2`,buttonType:`icon-button`,text:`Delete Instance`,design:`danger`,icon:`DevicesScorerEdge`}],y=()=>{let e=Object.assign({None:null},d()),r=(0,f.text)(`Page Title`,`My Page Title`),i=(0,f.text)(`Page Area`,`Area Name`),a=(0,f.text)(`Page Area Href`,`#`),o=(0,f.select)(`Icon`,e,`Link`),s=(0,f.select)(`Icon Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`,Undefined:void 0},void 0),u=(0,f.boolean)(`Update Doc Title`,!0),g=(0,f.boolean)(`No tags Example`,!1),y=(0,f.boolean)(`Area Title Bottom`,!1),b=(0,f.boolean)(`No Buttons Example`,!1),x=(0,f.boolean)(`No Icon`,!1),S=m(`Custom onAreaClick was used`),C=(0,f.text)(`Text`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.`),w=(0,f.object)(`Tag List`,_),T=(0,f.object)(`Buttons Stack`,v),E=(0,f.boolean)(`Example with area on Click`,!1),D=(0,f.boolean)(`Has Bottom Left Bottom`,!1);return u&&console.info(`Note: Updating document.title in Storybook has no effect though it should work in projects.`),(0,p.jsx)(h,{children:(0,p.jsx)(n,{icon:x?void 0:o||void 0,iconColor:s,introductionText:C,title:r,areaTitle:i,areaHref:a,onAreaClick:E?S:void 0,updateDocTitle:u,tagList:g?void 0:w,rightContent:b?void 0:(0,p.jsx)(l,{buttons:T}),areaTitleBottom:y,bottomLeftContent:D?(0,p.jsx)(t,{htmlFor:`id-switch`,labelText:`Enable`,direction:`row`,children:(0,p.jsx)(c,{},`id-switch`)}):void 0})})},y.__docgenInfo={description:``,methods:[],displayName:`_PageHeader`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const iconList = Object.assign({
    None: null
  }, generateIconList());
  const pageTitle = text('Page Title', 'My Page Title');
  const pageAreaText = text('Page Area', 'Area Name');
  const pageAreaHref = text('Page Area Href', '#');
  const pageIcon = select('Icon', iconList, 'Link');
  const pageIconColor = select('Icon Color', {
    Mono: 'mono',
    Dimmed: 'dimmed',
    Subtle: 'subtle',
    Inverse: 'inverse',
    Primary: 'primary',
    Danger: 'danger',
    Undefined: undefined
  }, undefined);
  const updateDocTitle = boolean('Update Doc Title', true);
  const noTagsExample = boolean('No tags Example', false);
  const areaTitleBottom = boolean('Area Title Bottom', false);
  const noButtonsExample = boolean('No Buttons Example', false);
  const noIconExample = boolean('No Icon', false);
  const customClick = action('Custom onAreaClick was used');
  const introductionText = text('Text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.');
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
}`,...y.parameters?.docs?.source}}},b=[`_PageHeader`]}))();export{y as _PageHeader,b as __namedExportsOrder,g as default};