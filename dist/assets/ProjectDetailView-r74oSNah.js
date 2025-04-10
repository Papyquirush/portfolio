import{k as h,e as p,j as k,c as e,d as b,w as v,a as o,t as i,h as r,F as _,f as m,m as y,r as f,o as s,b as j}from"./index--7x5Xvd2.js";import{p as w}from"./projects-CY5WtvTU.js";import"./skills-xSeGLDd-.js";const V={class:"p-6 md:p-12"},$={key:0,class:"bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"},N={class:"w-full"},B=["src","alt"],C={class:"text-3xl font-bold text-center text-indigo-800 dark:text-indigo-200 mb-4"},F={key:0,class:"mb-6"},D={class:"text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2"},L={class:"text-gray-600 dark:text-gray-300"},T={key:1,class:"mb-6"},E={class:"text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2"},I={class:"list-disc list-inside text-gray-600 dark:text-gray-300"},M={key:2,class:"mb-6"},P={class:"text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2"},R={class:"list-disc list-inside text-gray-600 dark:text-gray-300"},S={key:1,class:"text-center text-gray-500 dark:text-gray-400"},G={__name:"ProjectDetailView",setup(W){h();const x=y(),t=p(null);return k(()=>{const a=x.params.id;t.value=w.projets.find(c=>c.id===a)}),(a,c)=>{var d,u;const g=f("router-link");return s(),e("div",V,[b(g,{to:"/projects",class:"text-indigo-600 dark:text-indigo-400 hover:underline mb-4 inline-block"},{default:v(()=>[j(" ← "+i(a.$t("projects.backToList")),1)]),_:1}),t.value?(s(),e("div",$,[o("div",N,[o("img",{src:t.value.logo||"/default-project.png",alt:t.value.title,class:"object-cover object-center"},null,8,B)]),o("h1",C,i(t.value.title),1),t.value.context?(s(),e("div",F,[o("h2",D,i(a.$t("projects.context")),1),o("p",L,i(t.value.context),1)])):r("",!0),(d=t.value.contributions)!=null&&d.length?(s(),e("div",T,[o("h2",E,i(a.$t("projects.myWork")),1),o("ul",I,[(s(!0),e(_,null,m(t.value.contributions,(n,l)=>(s(),e("li",{key:l},i(n),1))),128))])])):r("",!0),(u=t.value.skills)!=null&&u.length?(s(),e("div",M,[o("h2",P,i(a.$t("projects.technologies")),1),o("ul",R,[(s(!0),e(_,null,m(t.value.skills,(n,l)=>(s(),e("li",{key:l},i(n.name),1))),128))])])):r("",!0)])):(s(),e("div",S,i(a.$t("projects.notFound")),1))])}}};export{G as default};
