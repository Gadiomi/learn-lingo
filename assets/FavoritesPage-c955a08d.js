import{r as l,b as h,j as e}from"./index-e8c8f30d.js";import{g as p,h as u,C as i,T as d,d as o,e as x,n as j,f as m,i as v,j as T}from"./TeachersFilter-b6b59a36.js";function F({color:a}){const[r,c]=l.useState(""),s=h(p),t=h(u);return e.jsx(e.Fragment,{children:t?e.jsxs(i,{children:[e.jsx(d,{color:a,Level:r,setLevel:c,Teachers:s}),e.jsxs(o,{children:[t&&(t==null?void 0:t.map(n=>e.jsx(x,{color:a,teacher:n,Level:r},j()))),t.length===0?e.jsxs(m,{children:[e.jsx("p",{children:"Teacher not faund"})," "]}):void 0]})]}):e.jsx(e.Fragment,{children:s.length===0?e.jsx(i,{children:e.jsxs(v,{children:[" ",e.jsx(T,{children:"It appears that you have not added any teachers to your favorites yet."})]})}):e.jsxs(i,{children:[e.jsx(d,{color:a,Level:r,setLevel:c,Teachers:s}),e.jsx(o,{children:s&&(s==null?void 0:s.map(n=>e.jsx(x,{color:a,teacher:n},j())))})]})})})}const C=({color:a})=>e.jsx(F,{color:a});export{C as default};