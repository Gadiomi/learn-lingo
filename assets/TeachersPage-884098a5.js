import{u as r,h as p,j as e,a as m,b as d,r as y,g,c as j}from"./index-5e6b954b.js";import{s as v,a as k,b as w,c as C,C as T,T as N,d as x,e as $,n as b,f as L,B as M}from"./TeachersFilter-79fb1266.js";const S="#4fa94d",F={"aria-busy":!0,role:"progressbar"},B=r.div`
  display: ${t=>t.$visible?"flex":"none"};
`,E="http://www.w3.org/2000/svg",s=242.776657104492,z=1.6,D=p`
12.5% {
  stroke-dasharray: ${s*.14}px, ${s}px;
  stroke-dashoffset: -${s*.11}px;
}
43.75% {
  stroke-dasharray: ${s*.35}px, ${s}px;
  stroke-dashoffset: -${s*.35}px;
}
100% {
  stroke-dasharray: ${s*.01}px, ${s}px;
  stroke-dashoffset: -${s*.99}px;
}
`;r.path`
  stroke-dasharray: ${s*.01}px, ${s};
  stroke-dashoffset: 0;
  animation: ${D} ${z}s linear infinite;
`;const H=p`
to {
   transform: rotate(360deg);
 }
`;r.svg`
  animation: ${H} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;r.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const P=({height:t=80,width:n=80,radius:a=9,color:o=S,ariaLabel:l="three-dots-loading",wrapperStyle:i,wrapperClass:c,visible:h=!0})=>e.jsx(B,{style:i,$visible:h,className:c,"data-testid":"three-dots-loading","aria-label":l,...F,children:e.jsxs("svg",{width:n,height:t,viewBox:"0 0 120 30",xmlns:E,fill:o,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(a)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:a,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(a)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),R=p`
to {
   stroke-dashoffset: 136;
 }
`;r.polygon`
  stroke-dasharray: 17;
  animation: ${R} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;r.svg`
  transform-origin: 50% 65%;
`;function q({color:t}){const n=m(),a=d(v),o=d(k),l=d(w),i=d(C),[c,h]=y.useState(""),u=()=>{n(g(o+4)),n(j())};return e.jsx(e.Fragment,{children:e.jsxs(T,{children:[e.jsx(N,{color:t,Level:c,setLevel:h,Teachers:a}),i?e.jsxs(x,{children:[i&&(i==null?void 0:i.map(f=>e.jsx($,{color:t,teacher:f,Level:c},b()))),i.length===0?e.jsxs(L,{children:[" ",e.jsx("p",{children:"Teacher not faund"}),"  "]}):void 0]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{children:a&&(a==null?void 0:a.map(f=>e.jsx($,{color:t,teacher:f},b())))}),(a==null?void 0:a.length)>o&&(l?e.jsx(P,{height:"60",width:"80",radius:"9",color:"#000000",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},visible:!0}):e.jsx(M,{color:t,onClick:u,children:"Load more"}))]})]})})}const I=({color:t})=>e.jsx(q,{color:t});export{I as default};
