import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./Label-DhuZ_F6G.js";import{n as i,t as a}from"./Switch-qgTedwEQ.js";import{n as o,t as s}from"./ButtonsStack-MezIPgb6.js";import{n as c,t as l}from"./PageHeader-CPSv-dtM.js";import{_ as u,a as d,o as f}from"./iframe-PEYaYO03.js";import{n as p,t as m}from"./helpers-DugtZnoE.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{h=u(),o(),n(),c(),i(),f(),p(),g=t(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v=d.div`
  margin: 100px;
`,y={title:`Pages/molecules`,component:l,decorators:[]},b=[{label:`Shop A`,icon:`MetaCategories`,linkTo:`/`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Shop B`,icon:`MetaCategories`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Shop C`,icon:`MetaCategories`},{label:`Example`,icon:`MetaTags`},{label:`Smart`,icon:`MetaTags`},{label:`Edit`,icon:`Edit`,onTagClick:_(`Edit tag clicked`)}],x=[{id:`primaryBase0`,buttonType:`default`,text:`Example Action 1`},{id:`secondaryBase1`,buttonType:`default`,text:`Example Action 2`,design:`secondary`},{id:`buttonWithIcon2`,buttonType:`icon-button`,text:`Delete Instance`,design:`danger`,icon:`DevicesScorerEdge`}],S=()=>{let e=Object.assign({None:null},m()),t=(0,h.text)(`Page Title`,`My Page Title`),n=(0,h.text)(`Page Area`,`Area Name`),i=(0,h.text)(`Page Area Href`,`#`),o=(0,h.select)(`Icon`,e,`Link`),c=(0,h.select)(`Icon Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`,Undefined:void 0},void 0),u=(0,h.boolean)(`Update Doc Title`,!0),d=(0,h.boolean)(`No tags Example`,!1),f=(0,h.boolean)(`Area Title Bottom`,!1),p=(0,h.boolean)(`No Buttons Example`,!1),y=(0,h.boolean)(`No Icon`,!1),S=_(`Custom onAreaClick was used`),C=(0,h.text)(`Text`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.`),w=(0,h.object)(`Tag List`,b),T=(0,h.object)(`Buttons Stack`,x),E=(0,h.boolean)(`Example with area on Click`,!1),D=(0,h.boolean)(`Has Bottom Left Bottom`,!1);return u&&console.info(`Note: Updating document.title in Storybook has no effect though it should work in projects.`),(0,g.jsx)(v,{children:(0,g.jsx)(l,{icon:y?void 0:o||void 0,iconColor:c,introductionText:C,title:t,areaTitle:n,areaHref:i,onAreaClick:E?S:void 0,updateDocTitle:u,tagList:d?void 0:w,rightContent:p?void 0:(0,g.jsx)(s,{buttons:T}),areaTitleBottom:f,bottomLeftContent:D?(0,g.jsx)(r,{htmlFor:`id-switch`,labelText:`Enable`,direction:`row`,children:(0,g.jsx)(a,{},`id-switch`)}):void 0})})},C=[`_PageHeader`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
    console.info('Note: Updating document.title in Storybook has no effect though it should work in projects.');
  }
  return <Container>
      <PageHeader icon={noIconExample ? undefined : pageIcon || undefined} iconColor={pageIconColor} introductionText={introductionText} title={pageTitle} areaTitle={pageAreaText} areaHref={pageAreaHref} onAreaClick={optionalAreaOnclick ? customClick : undefined} updateDocTitle={updateDocTitle} tagList={noTagsExample ? undefined : tagList} rightContent={noButtonsExample ? undefined : <ButtonsStack buttons={buttonList} />} areaTitleBottom={areaTitleBottom} bottomLeftContent={hasBottomLeftContent ? <Label htmlFor='id-switch' labelText='Enable' direction='row'>
              <Switch key='id-switch'></Switch>
            </Label> : undefined} />
    </Container>;
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as _PageHeader,C as __namedExportsOrder,y as default};