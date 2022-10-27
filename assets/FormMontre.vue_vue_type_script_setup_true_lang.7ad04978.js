import{d as m,o as d,l as h,w as p,a as e,t as x,n as v,j as w,f as b,r as F,g as A,c as K,e as s,m as C,i as V,s as k,u as D}from"./index.7eea98b7.js";import{_ as M}from"./MontreProfil.vue_vue_type_script_setup_true_lang.0802bd4f.js";const N="/assets/montreFaceLogo.2f3e1ffc.svg",R="/assets/montreProfilLogo.3b76d68a.svg",P={"#FFFFFF":"Blanc","#C1C1C1":"Gris","#000000":"Noir","#FFD875":"Or","#FFCAC3":"Or rose","#FFA9C8":"Rose","#6C253F":"Rose fonc\xE9","#FFAEAE":"Rouge pastel","#C83C3C":"Rouge","#511818":"Bordeaux","#D4B1E0":"Violet","#8ACFF5":"Bleu","#1D4594":"Bleu fonc\xE9","#ABDAA4":"Vert","#175138":"Vert fonc\xE9","#FAFFC0":"Jaune pastel","#FFD392":"Orange","#C88B77":"Argile"},T={"#000000":"Noir","#FFFFFF":"Blanc"},j=[{value:"",label:"Plastique"},{value:"/images/cuir.webp",label:"Cuir"},{value:"/images/metal.webp",label:"M\xE9tal"}],q={class:"sr-only"},B=m({__name:"FormKitColors",props:{name:null,label:null},setup(t){return(r,i)=>{const o=b("FormKit");return d(),h(o,{name:t.name,label:t.label,value:"#FFFFFF",type:"radio",options:w(P),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex flex-wrap gap-2","wrapper-class":"my-1"},{label:p(a=>[e("div",{class:"h-10 w-10 rounded-full border-2 peer-checked:border-4 peer-checked:border-gold-normal md:h-8 md:w-8",style:v({backgroundColor:a.option.value})},[e("span",q,x(a.option.label),1)],4)]),_:1},8,["name","label","options"])}}}),E=m({__name:"FormKitTexture",props:{name:null,label:null},setup(t){return(r,i)=>{const o=b("FormKit");return d(),h(o,{name:t.name,label:t.label,value:"",type:"radio",options:w(j),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex flex-wrap gap-5","wrapper-class":"my-1"},{label:p(a=>[e("div",{class:"peer-checked:border-6 w-fit border-2 bg-cover py-2 px-4 text-white peer-checked:border-gold-normal",style:v({background:`linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),url('${a.option.value}')`})},[e("p",null,x(a.option.label),1)],4)]),_:1},8,["name","label","options"])}}}),O={class:"sr-only"},S=m({__name:"FormKitEcrans",props:{name:null,label:null},setup(t){return(r,i)=>{const o=b("FormKit");return d(),h(o,{name:"ecran",label:"\xC9cran",value:"#FFFFFF",type:"radio",options:w(T),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex flex-wrap gap-2","wrapper-class":"my-1"},{label:p(a=>[e("div",{class:"h-14 w-14 rounded-full border-2 peer-checked:border-4 peer-checked:border-gold-normal md:h-10 md:w-10",style:v({backgroundColor:a.option.value})},[e("span",O,x(a.option.label),1)],4)]),_:1},8,["options"])}}}),z={class:"flex flex-col-reverse items-start justify-between gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:justify-items-center"},L={class:"h-fit max-w-3xl p-5"},G=e("h2",{class:"tiktak-h2 text-gold-rose light:text-black"}," Personnalisez votre montre connect\xE9e TiK\xB7TaK ",-1),J={class:"m-auto h-fit w-fit"},U={class:"mx-auto my-4 flex w-fit gap-5"},W=e("img",{src:N,alt:"vue de face",class:"h-10 w-10"},null,-1),H=e("span",{class:"sr-only"},"Afficher la vue de face de la montre",-1),I=[W,H],Q=e("img",{src:R,alt:"vue de profil",class:"h-10 w-10"},null,-1),X=e("span",{class:"sr-only"},"Afficher la vue de profil de la montre",-1),Y=[Q,X],Z=e("span",{class:"sr-only"},"Montre vue de face",-1),ee=e("span",{class:"sr-only"},"Montre vue de profil",-1),oe=m({__name:"FormMontre",props:{data:null,id:null},async setup(t){var y;let r,i;const o=t,a=D(),_=F(!0),f=F(!1),c=F((y=o.data)!=null?y:{});if(o.id){let{data:u,error:l}=([r,i]=A(()=>k.from("montre").select("*").eq("id_montre",o.id)),r=await r,i(),r);l?console.log("n'a pas pu charger le table montre :",l):c.value=u[0]}async function $(u,l){const{data:g,error:n}=await k.from("montre").upsert(u);n?l.setErrors([n.message]):(l.setErrors([]),a.push("/montre"))}return(u,l)=>{const g=b("FormKit");return d(),K("div",z,[e("section",L,[G,s(g,{type:"form",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=n=>c.value=n),onSubmit:$,"submit-label":"Terminer la personnalisation","submit-attrs":{classes:{input:"tiktak-button-fill bg-gold-normal my-8 text-black md:mx-0 m-auto"}},config:{classes:{form:"m-4",input:"tiktak-input max-w-md",label:"tiktak-label text-gold-rose light:text-black"}}},{default:p(()=>[s(g,{name:"libelle_montre",label:"Nom de la montre","aria-label":"Nom de la montre",value:"",placeholder:"My Watch 01",type:"text",required:""}),s(B,{name:"boitier",label:"Boitier - couleurs","aria-label":"Boitier - couleurs"}),s(B,{name:"bracelet",label:"Bracelet - couleurs","aria-label":"Bracelet - couleurs"}),s(S,{name:"ecran",label:"\xC9cran - couleurs","aria-label":"\xC9cran - couleurs"}),s(E,{name:"boitier",label:"Boitier - mat\xE9riaux","aria-label":"Boitier - mat\xE9riaux"}),s(E,{name:"bracelet",label:"Bracelet - mat\xE9riaux","aria-label":"Bracelet - mat\xE9riaux"})]),_:1},8,["modelValue"])]),e("section",J,[e("div",U,[e("button",{class:"rounded-full bg-red-200 p-5 font-bold",onClick:l[1]||(l[1]=n=>(_.value=!0,f.value=!1))},I),e("button",{class:"rounded-full bg-red-200 p-5 font-bold",onClick:l[2]||(l[2]=n=>(_.value=!1,f.value=!0))},Y)]),e("div",null,[s(V,C({class:"h-60 w-60 lg:h-96 lg:w-96"},c.value,{class:{hidden:f.value},"aria-controls":"faceView"}),null,16,["class"]),Z,s(M,C({class:"h-60 w-60 lg:h-96 lg:w-96"},c.value,{class:{hidden:_.value},"aria-controls":"profilView"}),null,16,["class"]),ee])])])}}});export{oe as _};
