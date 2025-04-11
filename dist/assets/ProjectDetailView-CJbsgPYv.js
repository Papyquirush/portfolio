import{k as $,e as b,j as C,c as o,d as I,w as L,a as s,h as l,t as a,F as u,f as g,m as V,r as N,o as i,b as h,n as B}from"./index-DuE0CTdk.js";import{p as F}from"./projects-BLn6DPC5.js";import"./skills-Cc3MeyL6.js";const D={class:"p-6 md:p-12 max-w-5xl mx-auto"},T={key:0,class:"bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8"},z={class:"relative w-full overflow-hidden rounded-xl shadow-lg"},E=["src","alt"],M={key:0},P={class:"text-4xl font-extrabold text-center text-indigo-800 dark:text-indigo-200"},R={key:0},S={class:"text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2"},W={class:"text-gray-700 dark:text-gray-300 leading-relaxed text-justify"},q={key:1},A={class:"text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2"},G={class:"list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300"},H={key:2},J={class:"text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4"},K={class:"flex flex-wrap gap-2"},O=["src","alt"],Q={key:3},U={class:"text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4"},X={class:"space-y-2"},Y=["href"],Z={key:4,class:"text-center text-gray-500 dark:text-gray-400 mt-10 text-lg"},ee={key:1,class:"text-center text-gray-500 dark:text-gray-400 mt-10 text-lg"},ae={__name:"ProjectDetailView",setup(te){const{t:d}=$(),v=V(),t=b(null),r=b(0);C(()=>{const e=v.params.id;t.value=F.projets.find(m=>m.id===e)});const _=()=>{var e;(e=t.value)!=null&&e.images&&(r.value=(r.value+1)%t.value.images.length)},k=()=>{var e;(e=t.value)!=null&&e.images&&(r.value=(r.value-1+t.value.images.length)%t.value.images.length)},y=e=>e.includes("github.com")?"fab fa-github":e.includes("gitlab.")?"fab fa-gitlab":e.includes("http")?"fas fa-globe":"fas fa-link",j=e=>e.includes("github.com")||e.includes("gitlab.")?d("projects.sourceCode"):e.includes("http")?d("projects.website"):d("projects.link");return(e,m)=>{var p,x,f;const w=N("router-link");return i(),o("div",D,[I(w,{to:"/projects",class:"text-indigo-600 dark:text-indigo-400 hover:underline mb-6 inline-block text-sm"},{default:L(()=>[h(" ← "+a(e.$t("projects.backToList")),1)]),_:1}),t.value?(i(),o("div",T,[s("div",z,[s("img",{src:t.value.images[r.value]||"/default-project.png",alt:t.value.title,class:"w-full h-80 object-cover transition-all duration-300"},null,8,E),t.value.images.length>1?(i(),o("div",M,[s("button",{onClick:k,class:"absolute top-1/2 left-2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700"}," ‹ "),s("button",{onClick:_,class:"absolute top-1/2 right-2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700"}," › ")])):l("",!0)]),s("h1",P,a(e.$t("projects."+t.value.id+".title")),1),e.$t("projects."+t.value.id+".context")?(i(),o("div",R,[s("h2",S,a(e.$t("projects.context")),1),s("p",W,a(e.$t("projects."+t.value.id+".context")),1)])):l("",!0),(p=t.value.contributions)!=null&&p.length?(i(),o("div",q,[s("h2",A,a(e.$t("projects.myWork")),1),s("ul",G,[(i(!0),o(u,null,g(t.value.contributions,(n,c)=>(i(),o("li",{key:c},a(e.$t("projects."+t.value.id+".contributions."+n)),1))),128))])])):l("",!0),(x=t.value.skills)!=null&&x.length?(i(),o("div",H,[s("h2",J,a(e.$t("projects.technologies")),1),s("div",K,[(i(!0),o(u,null,g(t.value.skills,n=>(i(),o("span",{key:n.name,class:"bg-indigo-50 dark:bg-indigo-400/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm inline-flex items-center border border-indigo-100 dark:border-indigo-800"},[s("img",{src:n.logo,alt:n.name,class:"h-4 w-4 mr-2"},null,8,O),h(" "+a(e.$t(n.name)),1)]))),128))])])):l("",!0),(f=t.value.links)!=null&&f.length?(i(),o("div",Q,[s("h2",U,a(e.$t("projects.links")),1),s("ul",X,[(i(!0),o(u,null,g(t.value.links,(n,c)=>(i(),o("li",{key:c},[s("a",{href:n,target:"_blank",rel:"noopener noreferrer",class:"text-indigo-600 dark:text-indigo-300 hover:underline break-all flex items-center gap-2"},[s("i",{class:B(y(n))},null,2),h(" "+a(j(n)),1)],8,Y)]))),128))])])):(i(),o("div",Z,a(e.$t("projects.noLinks")),1))])):(i(),o("div",ee,a(e.$t("projects.notFound")),1))])}}};export{ae as default};
