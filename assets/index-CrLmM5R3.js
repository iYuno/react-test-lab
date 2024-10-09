import{r as i,u as C,j as s,I as N,g as x,m as b,n as j,o as y,B as P}from"./index-qVM6I5Mu.js";function S(){const[o,a]=i.useState(""),[r,t]=i.useState(""),[u,d]=i.useState(!1),[m,l]=i.useState({userName:"",userPhone:"",isAgreed:""}),h=e=>e?"":"Обязательное поле",g=e=>{const n=/^\+7[0-9]{10}$/;return e?n.test(e)?"":"Невереный номер телефона":"Обязательное поле"},p=e=>e?"":"Необходимо согласиться с условиями";return{userName:o,userPhone:r,isAgreed:u,errors:m,handleNameChange:e=>{a(e),l(n=>({...n,userName:h(e)}))},handlePhoneChange:e=>{e===""?t(""):(e.startsWith("+7")||(e=`+7${e.replace(/\D/g,"")}`),t(e)),l(n=>({...n,userPhone:g(e)}))},handleAgreementChange:e=>{d(e),l(n=>({...n,isAgreed:p(e)}))}}}const v=async o=>{const a=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),r=await a.json();return{status:a.status,formData:r}};function D(){const{userName:o,userPhone:a,isAgreed:r,errors:t,handleNameChange:u,handlePhoneChange:d,handleAgreementChange:m}=S(),[l,h]=i.useState(!1),{toast:g}=C(),p=async c=>{c.preventDefault(),!t.userName&&!t.userPhone&&r?(h(!0),await v({userName:o,userPhone:a,isAgreed:r}).then(f=>{g({title:`Спасибо, ${f.formData.userName}, форма успешно отправлена.`,description:`Дата и время отправки: ${new Date().toLocaleString("ru")}`})}).catch(()=>{g({variant:"destructive",title:"Что-то пошло не так, попробуйте еще раз.",description:`Дата и время отправки: ${new Date().toLocaleString("ru")}`})}),h(!1)):(u(o),d(a),m(r))};return s.jsxs("div",{className:"py-20 space-y-11",id:"testForm",children:[s.jsx("h2",{className:"text-center max-md:text-h4",children:"Отправь форму"}),s.jsxs("form",{onSubmit:p,className:"grid grid-cols-12 xs:gap-5 md:gap-6 lg:gap-8",children:[s.jsx(N,{value:o,onChange:c=>u(c.target.value),className:x("xs:cols-start-1 xs:col-span-full md:col-start-1 md:col-span-6 lg:col-start-3 lg:col-span-4 pr-6",t.userName&&"!border-destructive"),placeholder:"Имя",suffix:t.userName||!o?s.jsx(b,{className:"p-0.5 size-5 absolute right-4 top-0 bottom-0 self-center rounded-full bg-destructive text-white"}):s.jsx(j,{className:"size-5 absolute right-4 top-0 bottom-0 self-center bg-secondary text-white rounded-full"}),errorMessage:t.userName}),s.jsx(N,{value:a,onChange:c=>d(c.target.value),className:x("xs:cols-start-1 xs:col-span-full md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-4 pr-6",t.userPhone&&"!border-destructive"),type:"tel",placeholder:"Телефон",suffix:t.userPhone||!a?s.jsx(b,{className:"p-0.5 size-5 absolute right-4 top-0 bottom-0 self-center rounded-full bg-destructive text-white"}):s.jsx(j,{className:"size-5 absolute right-4 top-0 bottom-0 self-center bg-secondary text-white rounded-full"}),errorMessage:t.userPhone}),s.jsxs("div",{className:"xs:cols-start-1 xs:col-span-full md:col-start-1 md:col-span-6 lg:col-start-3 lg:col-span-4 flex gap-4 relative",children:[s.jsx(y,{checked:r,onClick:()=>m(!r),className:x("my-0.5",t.isAgreed&&"border-destructive")}),s.jsx("p",{className:"text-[16px]/[28px] self-start",children:"Согласен, отказываюсь"})]}),s.jsx(P,{type:"submit",disabled:l,className:"xs:cols-start-1 xs:col-span-full md:col-start-7 md:col-span-6 lg:col-start-7 lg:col-span-4 !text-h5 text-primary-foreground",children:l?"Отправка...":"Отправить"})]})]})}export{D as TestForm};
