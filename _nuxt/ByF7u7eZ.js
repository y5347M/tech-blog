import{u,_}from"./NjHQV9wM.js";import{g as p,j as m,q as h,l as A,k as y,c as f,a as e,t as c,n,b as D,o as k}from"./mNqbNE8q.js";const g=r=>{const t=p();return u("useQiitaArticleDetailFetcher",async()=>await $fetch("https://qiita.com/api/v2/items/"+r,{method:"GET",headers:{Authorization:`Bearer ${t.qiitaToken}`}}))},q={class:"article-wrapper uk-grid"},v={class:"article uk-width-3-4@m"},w=["innerHTML"],B={class:"uk-width-1-4@m"},b=m({__name:"[id]",async setup(r){let t,s;const o=h(),l=A(()=>{const a=o.params.id;return Array.isArray(a)?a[0]:a}),i=([t,s]=y(()=>g(l.value)),t=await t,s(),t).data;return(a,x)=>{const d=_;return k(),f("div",q,[e("div",v,[e("h1",null,c(n(i).title),1),e("p",null,c(n(i).created_at),1),e("div",{innerHTML:n(i).rendered_body},null,8,w)]),e("div",B,[D(d)])])}}});export{b as default};
