import{j as t,F as a,a as c,R as i,s as l}from"./index.4d142e70.js";const g=({textArray:n,separator:r})=>t(a,{children:n.map((s,e)=>{const o=e===n.length-1;return c(i.Fragment,{children:[t("span",{"text-orange-600":"",children:s}),o?"":r]},s)})}),h=l.a`
  &:hover {
    cursor: pointer;
    color: rgba(234, 88, 12);
  }
`,p=({path:n,children:r,className:s})=>{const e=o=>{window.open(o)};return t(h,{onClick:()=>e(n),className:s,children:r})};export{p as C,g as H};
