var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&i(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&i(e,n,t[n]);return e},s=(e,r)=>t(e,n(r)),p=(e,t)=>{var n={};for(var i in e)a.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&o.call(e,i)&&(n[i]=e[i]);return n};import{j as m,r as d,L as c,c as u,N as k,H as g,M as h,S as v,R as f,a as b,b as y}from"./vendor.029ff854.js";let _=!1,N=!1,x=!1;const C={mousedown:function(){if(!_&&!x){_=!0,N=!1;const e=document.querySelector("html");null==e||e.setAttribute("data-mousenavigation","true"),null==e||e.removeAttribute("data-touchnavigation"),j(),L("touchstart"),L("keydown")}},keydown:function(e){if("Tab"===e.key){const e=document.querySelector("html");j(),null==e||e.removeAttribute("data-mousenavigation"),null==e||e.removeAttribute("data-touchnavigation"),_=!1,N=!1,L("touchstart"),L("mousedown")}},touchstart:function(){if(!N){_=!1,N=!0;const e=document.querySelector("html");null==e||e.setAttribute("data-touchnavigation","true"),null==e||e.removeAttribute("data-mousenavigation"),j(),L("touchstart"),L("keydown"),L("mousedown")}x=!0,setTimeout((()=>{x=!1}),150)}};function j(){Object.keys(C).forEach((e=>{document.removeEventListener(e,C[e])}))}function L(e){document.addEventListener(e,C[e])}const w=m.exports.jsx,E=m.exports.jsxs,T=m.exports.Fragment;"undefined"!=typeof document&&(L("touchstart"),L("mousedown"));const V=({brand:e,children:t})=>w("div",{"data-testid":"core-entry",className:e,children:t}),S=d.exports.createContext({theme:"rtv"});function P(){return d.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 334.22 90.83"},d.exports.createElement("defs",null,d.exports.createElement("style",null,".cls-1{fill:#ef4642}")),d.exports.createElement("g",{id:"Layer_2","data-name":"Layer 2"},d.exports.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},d.exports.createElement("path",{className:"cls-1",d:"M62.66 85.94C59 79 53.45 68.46 50 61.85c-1.68-3.09-3.45-6.18-5-9.21a1.91 1.91 0 0 1 .83-2.53c8-4.28 10.6-11.67 10.6-21.6 0-15.5-6.92-25.2-29-25.2H1.91A1.9 1.9 0 0 0 0 5.22v81.6a1.9 1.9 0 0 0 1.91 1.91h11.57a1.9 1.9 0 0 0 1.91-1.91v-31a1.9 1.9 0 0 1 1.91-1.91h9.83A1.9 1.9 0 0 1 28.84 55L45 87.67a1.9 1.9 0 0 0 1.71 1.06H61a1.91 1.91 0 0 0 1.66-2.79zM28.87 39.11H17.3a1.91 1.91 0 0 1-1.91-1.91V20.05a1.9 1.9 0 0 1 1.91-1.91h11.57c9.82 0 11.26 4.57 11.26 10.37s-1.44 10.6-11.26 10.6zM83.13 0a9.1 9.1 0 0 0-6.69 2.73 9.11 9.11 0 0 0-2.74 6.7 9.09 9.09 0 0 0 2.74 6.7 9.56 9.56 0 0 0 13.38 0 9.09 9.09 0 0 0 2.74-6.7 9.11 9.11 0 0 0-2.74-6.7A9.1 9.1 0 0 0 83.13 0zM89 28.76H70.86a1.91 1.91 0 0 0-1.86 1.9V42.5a1.92 1.92 0 0 0 1.91 1.91h4.47v42.41a1.9 1.9 0 0 0 1.91 1.91H89a1.9 1.9 0 0 0 1.91-1.91V30.66a1.9 1.9 0 0 0-1.91-1.9zM332.31 3.42H321a2.6 2.6 0 0 0-2.47 1.78l-20.18 61a1.91 1.91 0 0 1-3.62 0l-20.21-61a2.6 2.6 0 0 0-2.47-1.78H204a1.9 1.9 0 0 0-1.9 1.9v9.5a1.9 1.9 0 0 0 1.9 1.9h21.14a1.91 1.91 0 0 1 1.9 1.91V86.8a1.91 1.91 0 0 0 1.96 1.91h12.5a1.91 1.91 0 0 0 1.91-1.91V18.63a1.92 1.92 0 0 1 1.88-1.91h14.87A1.92 1.92 0 0 1 262 18l23.85 69a2.6 2.6 0 0 0 2.46 1.75h16.85a1.92 1.92 0 0 0 1.81-1.3l27.15-81.52a1.91 1.91 0 0 0-1.81-2.51zM138.58 51.55a1.9 1.9 0 0 1 .26-2.3L155.36 32a1.9 1.9 0 0 0-1.36-3.24h-13.3a1.9 1.9 0 0 0-1.44.66l-13.1 15.14a1.9 1.9 0 0 1-3.35-1.24v-38a1.91 1.91 0 0 0-1.91-1.9h-11.79a1.91 1.91 0 0 0-1.91 1.9v81.5a1.91 1.91 0 0 0 1.91 1.91h11.79a1.91 1.91 0 0 0 1.91-1.91v-21a1.89 1.89 0 0 1 .52-1.31l1.58-1.68a1.92 1.92 0 0 1 3.09.44l12.56 24.4a1.9 1.9 0 0 0 1.69 1h15.16a1.91 1.91 0 0 0 1.64-2.88zM191.48 52l-1.26-.49c-6.93-2.74-10-4.28-9.88-7.56s2.6-5.42 6.64-5.42c3 0 6.44 1.34 11.44 4.49a2.76 2.76 0 0 0 3.5-.46l4.38-6.11a2.72 2.72 0 0 0 .7-2.15 2.67 2.67 0 0 0-1-1.91A32 32 0 0 0 186.7 26c-11.75.18-20.6 8.11-20.6 18.44 0 12.23 9.88 16.76 19.15 20.06 7.71 2.59 10.28 4.11 10.28 8 0 3.61-3 5.77-8.12 5.77-4.39 0-9.41-2.16-13.43-5.76a2.75 2.75 0 0 0-3.81.15l-4.41 6a2.79 2.79 0 0 0-.77 2 2.68 2.68 0 0 0 .88 1.89 31.9 31.9 0 0 0 21.37 8.3c10.89 0 22.62-6.18 22.62-19.74 0-12-8.11-15.11-18.38-19.11z"}))))}const D=()=>E("svg",{viewBox:"0 0 141 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img",children:[w("title",{children:"Strim hjem"}),w("rect",{width:"140.25",height:"66",rx:"16.5",fill:"#FAED6F"}),w("path",{d:"M82.9687 27.9346H76.3885V54.6844H82.9687V27.9346ZM116.193 27.4C112.715 27.4 109.078 29.1127 107.204 32.482C105.277 29.1127 102.442 27.4 98.3236 27.4C91.5817 27.4 87.7834 31.1983 87.7834 39.1711V54.6844H94.4692V39.3823C94.4692 35.4223 96.3964 33.0694 99.4984 33.0694C102.442 33.0694 104.099 35.2639 104.099 39.1678V54.6811H110.573V39.1711C110.573 35.2672 112.444 33.0727 115.655 33.0727C118.49 33.0727 120.308 35.1583 120.308 38.9038V54.6844H126.674V39.1711C126.677 31.1983 122.664 27.4 116.193 27.4ZM79.8667 17.665C77.4049 17.665 75.6394 19.3249 75.6394 21.7306C75.6394 24.0307 77.4049 25.5817 79.8667 25.5817C82.2757 25.5817 84.0412 24.0307 84.0412 21.7306C84.0379 19.3216 82.2724 17.665 79.8667 17.665ZM24.2815 27.4C17.9686 27.4 14.2231 30.6637 14.2231 35.7985C14.2231 39.4912 16.6849 42.3787 21.658 43.3951L27.8092 44.6788C29.6275 45.0517 30.271 45.9097 30.271 46.9789C30.271 48.5299 28.6672 49.4935 26.311 49.4935C22.5127 49.4935 19.1434 48.3715 16.6816 46.606L13.4707 51.4207C15.2362 52.7044 19.5163 54.9517 24.9184 54.9517C31.5514 54.9517 36.3133 51.7408 36.3133 46.2298C36.3133 43.1278 34.1749 40.2898 29.8948 39.3823L22.8856 37.9369C21.1729 37.564 20.1565 36.6532 20.1565 35.4751C20.1565 33.9241 21.1201 32.9605 24.2749 32.9605C26.8423 32.9605 29.4658 33.604 31.7659 35.4223L34.5478 30.6076C32.1982 28.6837 28.1326 27.4 24.2815 27.4ZM48.0349 21.7834H41.722V28.6837H37.069V33.8185H41.6692V43.6096C41.6692 49.8697 44.0221 53.8825 50.2822 55.1134L52.1533 49.2295C49.2658 48.6421 48.0877 46.8766 48.0877 43.504V33.8218H53.4898V28.6837H48.0316V21.7834H48.0349ZM67.8283 27.4C60.4462 27.4 56.8063 31.5184 56.8063 39.2767V54.6844H63.2248V39.3823C63.2248 35.4223 65.0431 33.0694 68.0923 33.0694C69.2143 33.0694 70.3396 33.3895 71.356 34.033L73.4416 28.6837C71.9467 27.8818 69.8611 27.4 67.8283 27.4Z",fill:"#004B50"})]}),H=()=>{const{theme:e}=d.exports.useContext(S);return w("header",{className:"portal-header",children:w(c,{to:"/",title:"Hjem",children:w("rtv"===e?P:D,{})})})},A=d.exports.forwardRef(((e,t)=>{var n=e,{children:r,buttonType:a,buttonStyle:o,type:i="button",isLoading:m=!1,postfix:d,icon:c,disabled:u,className:k="","aria-busy":g}=n,h=p(n,["children","buttonType","buttonStyle","type","isLoading","postfix","icon","disabled","className","aria-busy"]);return E("button",s(l({type:i},h),{ref:t,disabled:m||u,"aria-busy":m||g,className:`${o} rds-button__shared rds-button__shared--${a} rds-button--${a} ${m?"rds-button--loading":""} ${k}`,children:[c&&w("span",{"data-testid":"rds-button__icon",className:"rds-button__icon",children:w(c,{})}),r,!!d&&"rds-icon-button"!==o&&w("span",{className:"rds-button__postfix",children:d})]}))}));A.displayName="BaseButton";const M=e=>w(A,l({buttonStyle:"rds-button",buttonType:"primary"},e)),I=e=>w(A,l({buttonStyle:"rds-button",buttonType:"secondary"},e)),R=e=>w(A,l({buttonStyle:"rds-button",buttonType:"tertiary"},e));let O;const B={},z=function(e,t){if(!t||0===t.length)return e();if(void 0===O){const e=document.createElement("link").relList;O=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/rtv-ds/${e}`)in B)return;B[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":O,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))};var $={name:"@rikstv/shared-components-root",version:"0.0.1",private:"true",scripts:{dev:"npm run dev --workspace=portal","dev:clean":"npm run dev:clean --workspace=portal",build:"npm run build --workspace=shared-components --workspace=portal",serve:"npm run serve --workspace=portal",test:"npm run test --workspace=shared-components","test:open":"npm run test:open --workspace=shared-components",lint:"eslint --ext .ts,.tsx,.js .","lint:fix":"eslint --fix --ext .ts,.tsx,.js .",prepare:"husky install",precommit:"lint-staged",release:"npm publish --access public --workspace shared-components"},"lint-staged":{"{portal,shared-components}/src/**/*.{js,ts,tsx,json}":["eslint --fix"],"{portal,shared-components}/src/**/*.{js,ts,tsx,json,scss,css}":["prettier --write"]},workspaces:["./portal","./shared-components"],dependencies:{react:"^17.0.2","react-dom":"^17.0.2",sass:"^1.35.2","vite-react-jsx":"^1.1.2"},devDependencies:{"@mdx-js/mdx":"^1.6.22","@testing-library/react":"^12.0.0","@types/babel__core":"^7.1.15","@types/mdx-js__react":"^1.5.4","@types/node":"^16.3.3","@types/react":"^17.0.14","@types/react-dom":"^17.0.9","@typescript-eslint/eslint-plugin":"^4.28.3","@typescript-eslint/parser":"^4.28.4","@vitejs/plugin-react-refresh":"^1.3.5",eslint:"^7.31.0","eslint-config-prettier":"^8.3.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.23.4","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.0","eslint-plugin-react":"^7.24.0",husky:"^7.0.1","lint-staged":"^11.0.1",prettier:"^2.3.2",typescript:"^4.3.5",vite:"^2.4.3"},engines:{node:">=14",npm:">=7"},repository:{type:"git",url:"git+https://github.com/lfbergee/rtv-ds.git"},homepage:"https://lfbergee.github.io/rtv-ds/#/"};const F=()=>w("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub repository",href:$.repository.url.replace("git+","").replace(".git",""),className:"portal-external-link portal-external-link--github"}),K=()=>w("a",{target:"_blank",rel:"noopener noreferrer","aria-label":"npm package",href:"https://www.npmjs.com/package/@rikstv/shared-components",className:"portal-external-link portal-external-link--npm"}),X=({children:e})=>w("div",{className:"portal-external-link__container",children:e}),Z=[new Promise((e=>setTimeout((()=>e({default:[]})))))],q=d.exports.createContext({types:Z}),U=(e,t,...n)=>({Page:()=>E(q.Provider,{value:{types:n||Z},children:[E(X,{children:[w(F,{}),w(K,{})]}),w(t,{})]}),displayName:e}),J=d.exports.lazy((()=>z((()=>import("./spacing.d4ecc0a9.js")),["assets/spacing.d4ecc0a9.js","assets/icon-button.dac3b01c.css","assets/vendor.029ff854.js","assets/Example.2bd8eb69.js","assets/FieldSet.8df93c8b.js","assets/FieldSet.7533e962.css"]))),G=d.exports.lazy((()=>z((()=>import("./colors.1979f214.js")),["assets/colors.1979f214.js","assets/icon-button.dac3b01c.css","assets/vendor.029ff854.js","assets/Example.2bd8eb69.js","assets/FieldSet.8df93c8b.js","assets/FieldSet.7533e962.css"]))),W=d.exports.lazy((()=>z((()=>import("./button.98dfa093.js")),["assets/button.98dfa093.js","assets/vendor.029ff854.js"]))),Y=d.exports.lazy((()=>z((()=>import("./iconButton.156843bd.js")),["assets/iconButton.156843bd.js","assets/vendor.029ff854.js"]))),Q=d.exports.lazy((()=>z((()=>import("./radioToggle.c89ad693.js")),["assets/radioToggle.c89ad693.js","assets/vendor.029ff854.js","assets/FieldSet.8df93c8b.js","assets/FieldSet.7533e962.css"]))),ee=d.exports.lazy((()=>z((()=>import("./typography.6ec0c094.js")),["assets/typography.6ec0c094.js","assets/vendor.029ff854.js"]))),te=z((()=>import("./Button_type.3e10c2b8.js")),[]),ne=z((()=>import("./IconButton_type.4811dbf4.js")),[]),re=z((()=>import("./RadioToggle_type.199b81a6.js")),[]),ae=z((()=>import("./FieldSet_type.3b95741d.js")),[]),oe=z((()=>import("./Typography_type.895cbc9c.js")),[]),ie=[U("button",W,te),U("icon button",Y,ne),U("radio toggle",Q,re,ae),U("spacing",J),U("colors",G),U("typografi",ee,oe)].sort(((e,t)=>e.displayName.localeCompare(t.displayName))),le={};function se(e){var t=e,{components:n}=t,r=p(t,["components"]);return u("wrapper",s(l(l({},le),r),{components:n,mdxType:"MDXLayout"}),u("h1",null,"Velkommen til RiksTV Shared Components"),u("p",null,"Her er det et fint sted å være"))}se.isMDXComponent=!0;const pe={};function me(e){var t=e,{components:n}=t,r=p(t,["components"]);return u("wrapper",s(l(l({},pe),r),{components:n,mdxType:"MDXLayout"}),u("h1",null,"Kom i gang"),u("ol",null,u("li",{parentName:"ol"},u("inlineCode",{parentName:"li"},"$")," ",u("inlineCode",{parentName:"li"},"npm install @rikstv/shared-components")),u("li",{parentName:"ol"},"Pakk inn appen din i ønsket merkevare, ",u("inlineCode",{parentName:"li"},"<StrimProvider> <App /> <StrimProvider>")," eller ",u("inlineCode",{parentName:"li"},"<RiksTVProvider> <App /> <RiksTVProvider>")),u("li",{parentName:"ol"},"Importer rot stilen ",u("inlineCode",{parentName:"li"},'import "@rikstv/shared-components/dist/core/strim.css"')," eller ",u("inlineCode",{parentName:"li"},'import "@rikstv/shared-components/dist/core/rikstv.css"')),u("li",{parentName:"ol"},"Importer stilen til komponentene du trenger feks ",u("inlineCode",{parentName:"li"},'import "@rikstv/shared-components/dist/button/Button.css"')),u("li",{parentName:"ol"},"Legg til fontene du trenger, kan hentes fra portalen")),u("pre",null,u("code",l({parentName:"pre"},{className:"language-tsx"}),"import {\n    StrimProvider,\n    PrimaryButton,\n    DisplayTitle,\n} from '@rikstv/shared-components\";\n\nimport '@rikstv/shared-components/dist/core/Strim.css\";\nimport '@rikstv/shared-components/dist/button/Button.css\";\nimport '@rikstv/shared-components/dist/typography/Typography.css\";\n\nconst Root = () => (\n    <StrimProvider>\n        <main>\n            <DisplayTitle>\n                MyApp\n            </DisplayTitle>\n\n            <PrimaryButton>\n                Hello world\n            </PrimaryButton>\n        </main>\n    </StrimProvider>\n)\n")))}me.isMDXComponent=!0;const de={};function ce(e){var t=e,{components:n}=t,r=p(t,["components"]);return u("wrapper",s(l(l({},de),r),{components:n,mdxType:"MDXLayout"}),u("h1",null,"Utvikle til komponent biblioteket"),u("p",null,"Det er litt forskjell på å utvikle bibliotekskode og klient kode. Vi prøver å ikke gjøre for mye ut av det her, men noen ting er viktige å tenke på."),u("h2",null,"Miljø og oppsett"),u("p",null,"Krav:"),u("ul",null,u("li",{parentName:"ul"},u("inlineCode",{parentName:"li"},"npm 7")," eller nyere"),u("li",{parentName:"ul"},u("inlineCode",{parentName:"li"},"node 14")," eller nyere")),u("p",null,"Hvordan:"),u("ul",null,u("li",{parentName:"ul"},u("inlineCode",{parentName:"li"},"npm install")),u("li",{parentName:"ul"},u("inlineCode",{parentName:"li"},"npm run dev"))),u("h2",null,"Registrere ny komponent"),u("p",null,"Når du lager en ny komponent er det noen ting som er viktige å gjøre for at den skal bli med i pakken og dokumentert i portalen."),u("ol",null,u("li",{parentName:"ol"},"Lag ny mappe inne i ",u("inlineCode",{parentName:"li"},"shared-components")),u("li",{parentName:"ol"},"Lag komponenten din, bruk named export"),u("li",{parentName:"ol"},"Legg til komponenten i ",u("inlineCode",{parentName:"li"},"shared-components/src/index.ts")," også som named export"),u("li",{parentName:"ol"},"Lag en ",u("inlineCode",{parentName:"li"},".mdx")," fil med dokumentasjonen sammen med komponenten din"),u("li",{parentName:"ol"},"Registerer komponenten og eventuelt typen i ",u("inlineCode",{parentName:"li"},"portal/src/config.ts"))),u("h2",null,"Krav til komponentene"),u("p",null,"Vi skal være pragmatiske her, men det er viktig å holde et høyt nok kvalitetsnivå på komponentene siden de taes i bruk i mange forskjellige prosjekt."),u("ol",null,u("li",{parentName:"ol"},"Snakk med de andre teamene før man lager ny komponent"),u("li",{parentName:"ol"},"Alle komponenter tilbyr referanse til det viktige underliggende komponenten. Feks i ",u("inlineCode",{parentName:"li"},"<Input />")," skal det være en ",u("inlineCode",{parentName:"li"},"forwardRef")," som gir referansen til ",u("inlineCode",{parentName:"li"},"<input>")," elementet"),u("li",{parentName:"ol"},"Universell utforming er ivaretatt"),u("li",{parentName:"ol"},"Ytelse er ivaretatt"),u("li",{parentName:"ol"},"Nødvendig funksjonalitet er testet"),u("li",{parentName:"ol"},"Dekker teamenes behov, men bør ikke løse problemer ingen har behov for at løses"),u("li",{parentName:"ol"},"Foretrekk HTML/CSS over Javascript"),u("li",{parentName:"ol"},"Skriv ut typene i interface definisjonen isteden for å definere typene utenfor, gir bedre dokumentasjon i portalen")),u("h2",null,"Krav til stil"),u("ol",null,u("li",{parentName:"ol"},"Hold det ryddig"),u("li",{parentName:"ol"},"Foretrekk CSS funksjonalitet over SCSS"),u("li",{parentName:"ol"},"Husk på universell utforming"),u("li",{parentName:"ol"},"Kjerneverdier som farger og spacing er ALLTID definert i ",u("inlineCode",{parentName:"li"},"core"),", aldri i komponent stil"),u("li",{parentName:"ol"},"Kjerneverdier skal alltid finnes i begge brands")),u("h2",null,"Dokumentasjon"),u("p",null,"Vi dokumenterer komponentene med mdx. Komponentene tilgjengeliggjøres for markdown parseren automatisk når du eksporterer den fra ",u("inlineCode",{parentName:"p"},"index.ts")," i shared-components.\nLes mer om ",u("a",l({parentName:"p"},{href:"https://mdxjs.com/"}),"mdx her"),". Tldr; er at mdx er et superset av markdown som støtter React. Vi oversetter markdown til å bruke våre typografi komponenter.\nHvis du benytter deg av markdown som ikke er mappet opp til en av våre komponenter, kan det gjøres i ",u("inlineCode",{parentName:"p"},"/portal/src/mdxComponents/index.tsx"),", er oversetter vi fra default HTML elementer til våre utganger av de elementene.\nMan kan vise frem kode på fire måter i vårt oppsett."),u("p",null,"En linje lager en inline ",u("inlineCode",{parentName:"p"},"<code>")," blokk. Praktisk for små forklaringer og utheve enkelt verdier."),u("pre",null,u("code",l({parentName:"pre"},{}),"`en linje kode`\n")),u("p",null,"Flere linjers kode kan brukes hvis man skal beskrive flere påfølgende steg eller korte kodesnutter"),u("pre",null,u("code",l({parentName:"pre"},{}),"    ```tsx\n    flere\n    linjer\n    kode\n")),u("p",null,"Flere linjers live-kodeblokk tar inn en React komponent og gir den tilbake i en fungerende versjon med en kode editor, så man kan gjøre endringer i koden og se resultatet direkte.\nBrukes til å vise frem komponentene i all sin prakt. Den vil også lage en accordion med generert stil og en accordion med typene til komponeten hvis det er importert for den komponenten i ",u("inlineCode",{parentName:"p"},"config.ts"),"."),u("pre",null,u("code",l({parentName:"pre"},{}),"    ```tsx live=true\n    <SomeComponent />\n")),u("p",null,"Tilsvarende som over, men denne vil ikke ha live editering og vil vise kodeblokken under. Brukes til å vise varianter eller hvis man vil vise samme komponent flere ganger på en side."),u("pre",null,u("code",l({parentName:"pre"},{}),"    ```tsx render=true\n    <SomeComponent />\n")),u("h2",null,"Tester"),u("p",null,"Vi ønsker kvalitet i komponentene og at det stabilt for de som tar de i bruk. Derfor er det smart å skrive noen gode tester for komponenten. Vi ønsker ikke å overdrive her og skrive tester for testenes del.\nSå finn et fornuftig nivå hvor nøkkelfunksjonaliteten til komponenten er ivaretatt. Imotsetning til Jest eller Mocha de fleste er vant med fra klient-prosjekt bruker Cypress som testverktøy her.\nDet gjør vi for å ha et testmiljø som er så tett som mulig til produksjon. Det gjør også at man kan teste komponeter som bruker browser API som feks IntersectionObserver.\nDet muliggjør visuell regresjons testing på sikt. Ulempen er at testene blir noe tregere enn via en mer tradisjonell testrunner. Du kan bruke @testing/libary-stil for å finne elementer.\nDet er også lagt opp en customMount funksjon for å kunne rendere komponenten i begge brands."),u("h2",null,"Release"),u("p",null,"Ny release lages ved å oppdatere versjonsnummeret i ",u("inlineCode",{parentName:"p"},"shared-components/package.json")," og for ",u("inlineCode",{parentName:"p"},"@rikstv/shared-components")," i ",u("inlineCode",{parentName:"p"},"portal/package.json")," og merge den til master med commit meldingen ",u("inlineCode",{parentName:"p"},"chore: {descripe changes} [release]"),", release til npm skjer automatisk."),u("h2",null,"Troubleshooting"),u("p",null,"Hvis ",u("inlineCode",{parentName:"p"},"npm install")," feiler, sjekk at du har minst ",u("inlineCode",{parentName:"p"},"npm 7.0.0")," installert. ",u("inlineCode",{parentName:"p"},"npm i -g npm")," for å oppdatere. Vi bruker ",u("inlineCode",{parentName:"p"},"npm workspaces"),", derfor trenger vi minst denne versjonen."))}ce.isMDXComponent=!0;const ue=(e,t,n)=>({path:e,component:t,name:n}),ke=[ue("/",se,"Hjem"),ue("/kom-i-gang",me,"Kom i gang"),ue("/lage-komponenter",ce,"Lage komponenter")],ge=[ue("/alle",(()=>w(T,{children:ie.map((({Page:e,displayName:t})=>w(e,{},t)))})),"alle")],he=[...ke,...ge];const ve=()=>{const[e,t]=d.exports.useState(""),[n,r]=d.exports.useState(!1),[a,o]=d.exports.useState(ie),{theme:i,setTheme:l}=d.exports.useContext(S),s=(e=>{const[t,n]=d.exports.useState(!1);return d.exports.useEffect((()=>{const r=window.matchMedia(e);r.matches!==t&&n(r.matches);const a=()=>{n(r.matches)};return r.addEventListener("change",a),()=>r.removeEventListener("change",a)}),[t,e]),t})("(max-width: 768px)");d.exports.useEffect((()=>{o(""===e?ie:ie.filter((({displayName:t})=>t.includes(e))))}),[e,o]);const p=()=>r(!n),m=()=>r(!n);return E(T,{children:[w("button",{onClick:p,className:"portal-menu-btn "+(n?"portal-menu-btn--close":"portal-menu-btn--open"),title:n?"Lukk meny":"Åpne meny"}),E("nav",{className:"portal-navigation "+(n?"portal-navigation--show-mobile":""),children:[w("ul",{className:"portal-navigation__list",children:ke.map((e=>w("li",{className:"portal-navigation__list__item",children:w(k,{tabIndex:s&&!n?-1:0,onClick:m,exact:!0,to:e.path.replace(" ","-"),children:e.name})},e.path)))}),E("label",{className:"portal-navigation__search",children:["Filter komponenter",w("input",{tabIndex:s&&!n?-1:0,className:"portal-navigation__search__input",type:"text",onChange:e=>t(e.target.value),value:e})]}),E("ul",{className:"portal-navigation__list",children:[ge.map((e=>w("li",{className:"portal-navigation__list__item",children:w(k,{tabIndex:s&&!n?-1:0,onClick:m,exact:!0,to:e.path.replace(" ","-"),children:e.name})},e.path))),a.map((({displayName:e})=>w("li",{className:"portal-navigation__list__item",children:w(k,{tabIndex:s&&!n?-1:0,onClick:m,exact:!0,to:`/${e.replace(" ","-")}`,children:e})},e))),0===a.length&&E("li",{className:"portal-navigation__list__item",children:["Ingen komponenter matcher ",e," 🤬",w(M,{tabIndex:s&&!n?-1:0,type:"button",onClick:()=>t(""),children:"Tøm filter"})]})]}),w("div",{className:"portal-navigation__toggle",children:w(M,{tabIndex:s&&!n?-1:0,onClick:()=>{l&&(l("rtv"===i?"strm":"rtv"),m())},children:"Bytt til "+("rtv"===i?"Strim":"RiksTV")})})]}),n&&w("button",{onClick:p,className:"portal-menu-bottom-btn",title:"Lukk meny"})]})};const fe=e=>d.exports.forwardRef(((t,n)=>{var r=t,{children:a,lookLike:o=e.lookLike,className:i=""}=r,m=p(r,["children","lookLike","className"]);const d=e.semanticElement;return w(d,s(l({className:`rds-${o} ${i}`},m),{ref:n,children:a}))})),be=fe({semanticElement:"h1",lookLike:"display-title"}),ye=fe({semanticElement:"h1",lookLike:"title-1"}),_e=fe({semanticElement:"h2",lookLike:"title-2"}),Ne=fe({semanticElement:"h3",lookLike:"title-3"}),xe=fe({semanticElement:"h4",lookLike:"title-4"}),Ce=fe({semanticElement:"p",lookLike:"body"}),je=fe({semanticElement:"p",lookLike:"sub-body"}),Le=fe({semanticElement:"span",lookLike:"tag"}),we=fe({semanticElement:"strong",lookLike:"bold"}),Ee=fe({semanticElement:"span",lookLike:"meta"});const Te={h1:e=>w(ye,l({},e)),h2:e=>w(_e,l({},e)),h3:e=>w(Ne,l({},e)),h4:e=>w(xe,l({},e)),p:e=>w(Ce,l({className:"portal-max-width"},e)),b:e=>w(we,l({},e)),strong:e=>w(we,l({},e)),pre:e=>w("div",l({},e)),a:e=>w("a",l({style:{color:"currentColor"}},e)),ul:e=>w("ul",l({className:"portal-max-width"},e)),li:e=>w("li",l({className:"portal-max-width portal-li rds-body"},e)),code:d.exports.lazy((()=>z((()=>import("./CodeBlock.e32cc1de.js")),["assets/CodeBlock.e32cc1de.js","assets/CodeBlock.1859eb40.css","assets/icon-button.dac3b01c.css","assets/vendor.029ff854.js","assets/FieldSet.8df93c8b.js","assets/FieldSet.7533e962.css"])))};const Ve=()=>{const[e,t]=d.exports.useState("rtv");return w(S.Provider,{value:{theme:e,setTheme:t},children:w(V,{brand:e,children:w(g,{basename:"rtv-ds",children:E("div",{className:"portal-layout",children:[w(H,{}),w(ve,{}),w("main",{children:w(d.exports.Suspense,{fallback:"Laster innhold",children:w(h,{components:Te,children:E(v,{children:[he.map((e=>w(f,s(l({},e),{exact:!0}),e.path))),ie.map((({displayName:e,Page:t})=>w(f,{path:`/${e.replace(" ","-")}`,exact:!0,component:t},e)))]})})})})]})})})})};b.render(w(y.StrictMode,{children:w(Ve,{})}),document.getElementById("root"));export{we as B,V as C,be as D,T as F,Ne as H,Ee as M,M as P,I as S,R as T,w as a,Ce as b,A as c,ye as d,_e as e,xe as f,je as g,Le as h,q as i,E as j};
