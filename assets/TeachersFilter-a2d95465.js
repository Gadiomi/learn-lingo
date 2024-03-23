import{n,R as m,d as le,e as I,f as ce,j as r,s as z,a as te,r as d,b as M,i as de,M as O,B as pe,k as he,l as xe,m as ue,o as ge,u as f,p as fe,q as me,t as ve,v as be}from"./index-9b0a3acd.js";const Tr=n.ul`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 65px;
      min-height: 430px;
`,Gr=n.button`
  border: none;
  border-radius: 12px;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  display: block;
  transition: background 300ms;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`,$r=n.div`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  width: 320px;
  background-color: var(--secondary-white);

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 70px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 70px 40px;
  }
`;n.p`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
`;const Nr=n.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`,Rr=n.div`
    min-height: calc(100vh - 391px);
`,Ar=n.div`
    min-height: calc(100vh - 220px);
`;var ne={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K=m.createContext&&m.createContext(ne),we=["attr","size","title"];function je(e,t){if(e==null)return{};var i=ye(e,t),o,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)o=l[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function ye(e,t){if(e==null)return{};var i={},o=Object.keys(e),s,l;for(l=0;l<o.length;l++)s=o[l],!(t.indexOf(s)>=0)&&(i[s]=e[s]);return i}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},L.apply(this,arguments)}function X(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,o)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?X(Object(i),!0).forEach(function(o){ke(e,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))})}return e}function ke(e,t,i){return t=Ce(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ce(e){var t=Pe(e,"string");return typeof t=="symbol"?t:String(t)}function Pe(e,t){if(typeof e!="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var o=i.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ie(e){return e&&e.map((t,i)=>m.createElement(t.tag,S({key:i},t.attr),ie(t.child)))}function F(e){return t=>m.createElement(Be,L({attr:S({},e.attr)},t),ie(e.child))}function Be(e){var t=i=>{var{attr:o,size:s,title:l}=e,p=je(e,we),c=s||i.size||"1em",a;return i.className&&(a=i.className),e.className&&(a=(a?a+" ":"")+e.className),m.createElement("svg",L({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,p,{className:a,style:S(S({color:e.color||i.color},i.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&m.createElement("title",null,l),e.children)};return K!==void 0?m.createElement(K.Consumer,null,i=>t(i)):t(ne)}function Oe(e){return F({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function ze(e){return F({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function Le(e){return F({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},child:[]}]})(e)}function Se(e){return F({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},child:[]}]})(e)}const Fe=n.li`
  position: relative;
  width: 100%;
  padding: 12px;

  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;

  border-radius: 24px;
  background-color: var(--background);

  @media screen and (min-width: 756px) {
    flex-wrap: nowrap;
    padding: 16px;
    gap: 30px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;
    gap: 40px;
  }
`,Te=n.div`
  width: 120px;
  height: 120px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border-radius: 50%;
  border: 3px solid
    ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  background: #fff;
`,Ge=n.img`
  position: relative;
  display: block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
`,$e=n.svg`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 17px;
  right: 17px;
`,Ne=n.div``,Re=n.div`
  margin-bottom: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: start;

  @media screen and (min-width: 1280px) {
    width: 968px;
    justify-content: space-between;
  }
  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;

    gap: 16px;

    @media screen and (min-width: 1280px) {
      justify-content: space-between;
    }

    & :not(:last-child) {
      &:after {
        content: '';
        display: block;
        height: 17px;
        width: 1px;
        background-color: rgba(18, 20, 23, 0.2);
        margin-left: 16px;
      }
    }
  }
  & li {
    display: flex;
    align-items: center;
    & span {
      color: var(--grean);
      margin-left: 4px;
    }
  }
`;n.div`
  display: flex;
  justify-content: space-between;
`;const Ae=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ee=n.li`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  border: 1px solid rgba(18, 20, 23, 0.2);

  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  &.selected {
    background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
    border: none;
  }
`,Z=n(Se)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,J=n.button`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,Ie=n(Oe)`
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  fill: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`,Ye=n(Le)`
  margin-right: 8px;
`,Q=n(ze)`
  margin-right: 8px;
  fill: #ffc531;
`,_e=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & p {
    color: var(--gray);
    margin: 0;
  }
`,De=n.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`,Me=n.p`
  margin-top: 32px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & span {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    text-decoration-line: underline;
  }
`,ee=n.p`
  margin-top: 8px;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  & span {
    color: var(--secondary);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`,re=n.button`
  margin-top: 16px;
  padding: 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  border: none;
  margin-right: auto;
  margin-bottom: 32px;
  cursor: pointer;
  transition: color 200ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {
  }
`;n.svg`
  position: absolute;
  top: 24px;
  right: 24px;
  transform: scale(1);
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  width: 26px;
  height: 26px;
  stroke: black;
  fill: transparent;
`;const qe=n.p`
  margin-bottom: 32px;
  margin-top: 16px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`,We=n.ul`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
`,He=n.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,Ue=n.div`
  display: flex;
  gap: 12px;
`,Ve=n.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ke=n.p`
  display: block;
  border-radius: 100px;

  font-size: 24px;
  font-weight: 700;
`,Xe=n.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,Ze=n.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,Je=n.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,Qe=n.button`
  padding: 16px 48px;
  border: none;
  border-radius: 12px;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-top: 32px;
`,er=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 445px;
  padding: 60px 20px;
  border-radius: 20px;
  background: #fff;

  @media (min-width: 768px) {
    width: 608px;
    height: 429px;
    padding: 60px 40px;
    border-radius: 40px;
  }
`,rr=n.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: var(--secondary);
  fill: none;

  width: 24px;
  height: 24px;

  cursor: pointer;
  transition: 300ms;

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`,tr=n.h3`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`,nr=n.p`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`,ir=e=>e.teachers.teachers,Er=e=>e.teachers.isLoading,or=e=>e.teachers.teachersFavorites,Ir=e=>e.teachers.filterFavoritesTeachers,Yr=e=>e.teachers.limit,_r=e=>e.teachers.teachersFilter,ar=n.form`
  max-width: 600px;
  border-radius: 30px;
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  height: auto;
  padding: 64px;
  left: 50%;
  max-height: calc(100% - 88px);
  overflow-y: auto;
  top: calc(50% + 40px);
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 88px;
    left: 50%;
    width: 100%;
    max-height: calc(100% - 88px);
    overflow-y: auto;
    transform: translateX(-50%) translateY(0px);
  }
`,sr=n.div`
  margin-bottom: 18px;
`,lr=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,cr=n.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 21px;
  margin-top: 32px;
`,y=n.label`
  display: flex;
  gap: 8px;
  color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.04em;
  text-align: left;
  &:checked {
    font-weight: 700;
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
  &:focus-within {
    font-weight: 700;
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
`,Y=n.div`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
    height: 100%;

    margin-top: 20px;
    border-radius: 12px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    background-color: #fff;
    color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
    padding: 16px;

    &:focus {
      outline: none;
    }

    &:focus + label {
      color: #dddddd;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-34px);
      font-size: 10px;
      font-weight: 100;
    }
    &.is-invalid {
      border-color: var(--red);
    }
  }

  & label {
    position: absolute;
    bottom: 20px;
    left: 18px;
    width: 100%;
    pointer-events: none;
    font-size: 14px;

    transition: all 0.3s ease;
  }

  & .error {
    position: absolute;
    top: 56px;
    left: 40px;
    font-size: 12px;
  }
`,k=n.input`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 20px;
  height: 20px;
  align-items: center;
  appearance: none;
  background-color: #fff;

  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  transition: all 300ms;
  &:checked {
    border: 2px solid
      ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  }
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({color:e})=>e==="Blue"?"var(--colorBlue)  10px 10px inset":e==="Green"?"var(--colorGreen)  10px 10px inset":e==="Orange"?"var(--colorYellow)  10px 10px inset":e==="Pink"?"var(--colorPink)  10px 10px inset":e==="LightPink"?"var(--colorCoral)  10px 10px inset":"var(--cecondary-text-color)"};
    background-color: transparent;
  }
  &:checked::before {
    transform: scale(1);
  }
  &:focus {
  }
`,dr=n.div`
  display: flex;
  gap: 12px;
`,pr=n.div`
  width: 46px;
  height: 46px;
  border-radius: 100px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`,hr=n.img`
  border-radius: 100%;
  background: #fff;
  overflow: hidden;
`,xr=n.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`,ur=n.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
`,gr=n.span`
  font-size: 16px;

  font-weight: 500;
  line-height: 1.5; /* 150% */
`,fr=n.h3`
  margin: 0;

  margin-bottom: 20px;
  margin-right: auto;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
`,mr=n.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`,vr=n.p`
  margin: 0;
  margin-bottom: 22px;
  margin-right: auto;
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
`,_=n.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`,br=n.button`
  border: none;
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  padding: 16px 215px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 16px 70px;
  }
`,wr=n.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
`,jr=n.svg`
  stroke: black;
  width: 32px;
  height: 32px;
`,yr=({setIsBookModalOpened:e,teacherDataForBook:t,color:i})=>{const{name:o,surname:s,avatar_url:l}=t,p=()=>{e(!1),document.querySelector("body").classList.remove("modal-open")},c=le({userName:I().min(2,"Name must be at least 2 characters long").max(16,"Name can be at most 16 characters long").matches(/^[a-zA-Z\s]+$/,"Name must contain only English letters and spaces").required("Name is required"),email:I().email("Invalid email format").matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,"Invalid Email format").required("Email is required"),phone:I().matches(/^\+\d{12}$/,"Phone must have + and length 12").min(13,"Phone Too Short!").max(13,"Phone Too long").required("Required")}),a=ce({initialValues:{userName:"",email:"",phone:""},validationSchema:c,onSubmit:async()=>{document.querySelector("body").classList.remove("modal-open"),e(!1)}});return r.jsxs(ar,{onSubmit:a.handleSubmit,children:[r.jsx(fr,{children:"Book trial lesson"}),r.jsx(vr,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),r.jsxs(dr,{children:[r.jsx(pr,{children:r.jsx(hr,{src:l,height:"46px",width:"46px"})}),r.jsxs(xr,{children:[r.jsx(ur,{children:"Your teacher"}),r.jsx(gr,{children:`${o} ${s}`})]})]}),r.jsx(cr,{children:"What is your main reason for learning English?"}),r.jsxs(lr,{children:[r.jsxs(y,{children:[r.jsx(k,{color:i,type:"radio",name:"mainReason",value:"Career and business"}),"Career and business"]}),r.jsxs(y,{children:[r.jsx(k,{color:i,type:"radio",name:"mainReason",value:"Lesson for kids"}),"Lesson for kids"]}),r.jsxs(y,{children:[r.jsx(k,{color:i,type:"radio",name:"mainReason",value:"Living abroad"}),"Living abroad"]}),r.jsxs(y,{children:[r.jsx(k,{color:i,type:"radio",name:"mainReason",value:"Exams and coursework"}),"Exams and coursework"]}),r.jsxs(y,{children:[r.jsx(k,{color:i,type:"radio",name:"mainReason",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]})]}),r.jsxs(sr,{children:[r.jsxs(Y,{children:[r.jsx("input",{type:"text",name:"userName",placeholder:"Full Name",onChange:a.handleChange,value:a.values.userName,className:`${a.touched.userName&&a.errors.userName?"is-invalid":""}`}),a.touched.userName&&a.errors.userName?r.jsx(r.Fragment,{children:r.jsx(_,{children:a.errors.userName})}):null]}),r.jsxs(Y,{children:[r.jsx("input",{type:"text",name:"email",placeholder:"Email",onChange:a.handleChange,value:a.values.email,className:`${a.touched.email&&a.errors.email?"is-invalid":""}`}),a.touched.email&&a.errors.email?r.jsx(r.Fragment,{children:r.jsx(_,{children:a.errors.email})}):null]}),r.jsxs(Y,{children:[r.jsx("input",{type:"phone",name:"phone",placeholder:"Phone number",onChange:a.handleChange,value:a.values.phone,className:`${a.touched.phone&&a.errors.phone?"is-invalid":""}`}),a.touched.phone&&a.errors.phone?r.jsx(r.Fragment,{children:r.jsx(_,{children:a.errors.phone})}):null]})]}),r.jsx(mr,{children:r.jsx(br,{color:i,type:"submit",children:"Book"})}),r.jsx(wr,{onClick:p,children:r.jsx(jr,{children:r.jsx("use",{href:z+"#icon-x"})})})]})},Dr=({teacher:e,color:t,Level:i})=>{const{name:o,surname:s,languages:l,levels:p,rating:c,reviews:a,price_per_hour:u,lessons_done:h,avatar_url:x,lesson_info:T,conditions:G,experience:C}=e,v=te(),[b,P]=d.useState(!1),[B,w]=d.useState(!1),[q,$]=d.useState(!1),[W,N]=d.useState(!1),[H,R]=d.useState(!1),U=M(or),A=M(de),[E,V]=d.useState(!1);d.useEffect(()=>{U.find(j=>j.avatar_url===x)!==void 0&&V(!0)},[x,U]);const oe=()=>{V(!E),v(E?ue(e):ge(e))},ae=()=>{document.querySelector("body").classList.remove("modal-open"),w(!1)},se={name:o,surname:s,avatar_url:x};return r.jsxs(Fe,{children:[r.jsxs(Te,{color:t,children:[r.jsx(Ge,{src:x,height:"100px",width:"100px"}),r.jsx($e,{children:r.jsx("use",{href:z+"#icon-Group-82"})})]}),r.jsxs(Ne,{children:[r.jsxs(Re,{children:[r.jsxs(_e,{children:[r.jsx("p",{children:"Languages"}),r.jsxs(De,{children:[o," ",s]})]}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx(Ye,{size:"16px"})," Lessons online"]}),r.jsxs("li",{children:["Lessons done: ",h]}),r.jsxs("li",{children:[r.jsx(Q,{})," Rating: ",c]}),r.jsxs("li",{children:["Price / 1 hour: ",r.jsxs("span",{children:[u," $"]})]})]}),A&&r.jsx(J,{type:"button",onClick:oe,children:E?r.jsx(Ie,{color:t,size:26}):r.jsx(Z,{size:26})}),!A&&r.jsx(J,{type:"button",onClick:()=>w(!0),children:r.jsx(Z,{size:26})})]}),r.jsxs(Me,{children:["Speaks: ",r.jsx("span",{children:l==null?void 0:l.join(", ")})]}),r.jsxs(ee,{children:["Lesson Info:",r.jsx("span",{children:T})]}),r.jsxs(ee,{children:["Conditions:",r.jsx("span",{children:G})]}),!b&&r.jsx(re,{onClick:()=>P(!0),children:"Read more"}),b&&r.jsxs(r.Fragment,{children:[r.jsx(qe,{children:C}),r.jsx(We,{children:a.map((g,j)=>r.jsxs(He,{children:[r.jsxs(Ue,{children:[r.jsx(Ve,{children:r.jsx(Ke,{children:g.reviewer_name.charAt(0).toUpperCase()})}),r.jsxs(Xe,{children:[r.jsx(Ze,{children:g.reviewer_name}),r.jsxs("span",{children:[r.jsx(Q,{}),g.reviewer_rating,".0"]})]})]}),r.jsx(Je,{children:g.comment})]},j))}),b&&r.jsx(re,{onClick:()=>P(!1),children:"Read less"})]}),r.jsx(Ae,{children:p.map((g,j)=>r.jsx(Ee,{className:g===i?"selected":"",color:t,children:g},j))}),b&&r.jsx(Qe,{color:t,onClick:A?()=>$(!0):()=>w(!0),className:"orderBtn",children:"Book trial lesson"}),q&&r.jsx(O,{onClose:$,top:"d",state:q,children:r.jsx(yr,{color:t,setIsBookModalOpened:$,teacherDataForBook:se})}),B&&r.jsx(O,{onClose:w,state:B,children:r.jsxs(er,{children:[r.jsx(rr,{onClick:ae,children:r.jsx("use",{href:z+"#icon-x"})}),r.jsx(tr,{children:"Attention"}),r.jsx(nr,{children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),r.jsx(pe,{color:t,regis:N,log:R,ShowModal:w})]})}),W&&r.jsx(O,{onClose:N,state:W,children:r.jsx(he,{color:t,onClose:N})}),H&&r.jsx(O,{onClose:R,state:H,children:r.jsx(xe,{color:t,onClose:R})})]})]})};let Mr=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,i)=>(i&=63,i<36?t+=i.toString(36):i<62?t+=(i-26).toString(36).toUpperCase():i>62?t+="-":t+="_",t),"");const kr=f.div`
  position: relative;
  display: inline-block;
  border-radius: 14px;
  background-color: #fff;
`,Cr=f.div`
  display: flex;
  align-items: center;
  gap: 0px 50px;
  padding: 14px 18px 14px 18px;
  cursor: pointer;
  border-radius: 14px;
`,Pr=f.p`
  color: var(--secondary);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin: 0px;
`,Br=f.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px 0px;

  width: 100%;
  padding: 14px 8px 14px 18px;

  overflow: auto;

  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: var(--background);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`,Or=f.li`
  cursor: pointer;
  transition: color 300ms;
  color: rgba(18, 20, 23, 0.2);

  width: 100%;
  &:hover {
    color: var(--secondary);
  }
`,zr=f.svg`
  width: 20px;
  height: 20px;
  stroke-width: 0;
  stroke: currentColor;
  fill: transparent;
  transition: transform 300ms;
  transform: ${e=>e.$active&&"rotate(180deg)"};
`;function D({arr:e,value:t,set:i,height:o,selectedOption:s}){const[l,p]=d.useState(!1),c=()=>{p(!l)},a=h=>{i(h),p(!1)},u=d.useRef(null);return d.useEffect(()=>{const h=x=>{u.current&&!u.current.contains(x.target)&&p(!1)};return document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}},[u]),r.jsxs(kr,{children:[r.jsxs(Cr,{onClick:c,ref:u,children:[r.jsx(Pr,{children:s||t}),r.jsx(zr,{$active:l?!0:void 0,children:r.jsx("use",{href:z+"#icon-chevron-down"})})]}),l&&r.jsx(Br,{$heigh:o||void 0,children:e.map((h,x)=>r.jsx(Or,{onClick:()=>a(h),children:h},x))})]})}const Lr=f.ul`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
  }
  span {
    color: var(--gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;

    margin-bottom: 8px;
  }
`,Sr=f.button`
  background-color: ${({color:e})=>e==="Blue"?"var(--colorBlue)":e==="Green"?"var(--colorGreen)":e==="Orange"?"var(--colorYellow)":e==="Pink"?"var(--colorPink)":e==="LightPink"?"var(--colorCoral)":"var(--cecondary-text-color)"};
  border: none;
  border-radius: 12px;
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  padding: 14px 39px;
  transition: background 300ms;
  &:hover {
    background-color: ${({color:e})=>e==="Blue"?"var(--hoverColorBlue)":e==="Green"?"var(--hoverColorGreen)":e==="Orange"?"var(--hoverColorYellow)":e==="Pink"?"var(--hoverColorPink)":e==="LightPink"?"var(--hoverColorCoral)":"var(--hoverCecondary-text-color)"};
  }
`;function qr({color:e,Level:t,setLevel:i,Teachers:o}){const s=te(),[l,p]=d.useState(""),[c,a]=d.useState(""),u=M(ir),h=["French","English","German","Ukrainian","Polish","Spanish","Italian"],x=["A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"];let T=[10,15,20,25,30,35,40];d.useEffect(()=>{if(l+c+t==="")return;const C=o.filter(v=>{const b=l?v.languages.includes(l):!0,P=c?+v.price_per_hour<=c:!0,B=t?v.levels.includes(t):!0;return P&&b&&B});s(u===o?fe(C):me(C))},[l,t,o,s,c]);const G=()=>{s(u===o?ve():be()),p(""),a(""),i("")};return r.jsxs(Lr,{children:[r.jsxs("li",{children:[r.jsx("span",{children:"Languages"}),r.jsx(D,{arr:h,value:"Choose a language",set:p,selectedOption:l})]}),r.jsxs("li",{children:[r.jsx("span",{children:"Level of knowledge"}),r.jsx(D,{arr:x,value:"Choose a level",set:i,selectedOption:t})]}),r.jsxs("li",{children:[r.jsx("span",{children:"Price"}),r.jsx(D,{arr:T,value:"To $",set:a,height:!0,selectedOption:c})]}),r.jsx(Sr,{color:e,onClick:G,children:"Reset filter"})]})}export{Gr as B,$r as C,qr as T,Yr as a,Er as b,_r as c,Tr as d,Dr as e,Rr as f,or as g,Ir as h,Ar as i,Nr as j,Mr as n,ir as s};
