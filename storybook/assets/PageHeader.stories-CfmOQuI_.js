import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as A}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{q as l,V as I,$ as S,a5 as P}from"./index.modern-CMonYql-.js";import{g as y}from"./index-DQYbOqls.js";import{a as c}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const N=A.div`
  margin: 100px;
`,$={title:"Pages/molecules",component:l,decorators:[]},j=[{label:"Shop A",icon:"MetaCategories",linkTo:"/"},{label:"Example",icon:"MetaTags"},{label:"Smart",icon:"MetaTags"},{label:"Shop B",icon:"MetaCategories"},{label:"Example",icon:"MetaTags"},{label:"Smart",icon:"MetaTags"},{label:"Shop C",icon:"MetaCategories"},{label:"Example",icon:"MetaTags"},{label:"Smart",icon:"MetaTags"},{label:"Edit",icon:"Edit",onTagClick:c("Edit tag clicked")}],w=[{id:"primaryBase0",buttonType:"default",text:"Example Action 1"},{id:"secondaryBase1",buttonType:"default",text:"Example Action 2",design:"secondary"},{id:"buttonWithIcon2",buttonType:"icon-button",text:"Delete Instance",design:"danger",icon:"DevicesScorerEdge"}],o=()=>{const r=Object.assign({None:null},y()),m=e.text("Page Title","My Page Title"),d=e.text("Page Area","Area Name"),u=e.text("Page Area Href","#"),p=e.select("Icon",r,"Link"),g=e.select("Icon Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle",Inverse:"inverse",Primary:"primary",Danger:"danger",Undefined:void 0},void 0),a=e.boolean("Update Doc Title",!0),f=e.boolean("No tags Example",!1),b=e.boolean("Area Title Bottom",!1),x=e.boolean("No Buttons Example",!1),T=e.boolean("No Icon",!1),h=c("Custom onAreaClick was used"),C=e.text("Text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique."),E=e.object("Tag List",j),L=e.object("Buttons Stack",w),B=e.boolean("Example with area on Click",!1),k=e.boolean("Has Bottom Left Bottom",!1);return a&&console.info("Note: Updating document.title in Storybook has no effect though it should work in projects."),t.jsx(N,{children:t.jsx(l,{icon:T?void 0:p||void 0,iconColor:g,introductionText:C,title:m,areaTitle:d,areaHref:u,onAreaClick:B?h:void 0,updateDocTitle:a,tagList:f?void 0:E,rightContent:x?void 0:t.jsx(P,{buttons:L}),areaTitleBottom:b,bottomLeftContent:k?t.jsx(I,{htmlFor:"id-switch",labelText:"Enable",direction:"row",children:t.jsx(S,{},"id-switch")}):void 0})})};o.__docgenInfo={description:"",methods:[],displayName:"_PageHeader"};var n,i,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const R=["_PageHeader"];export{o as _PageHeader,R as __namedExportsOrder,$ as default};
