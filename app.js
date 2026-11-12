const list=document.getElementById("task-list");
const search=document.getElementById("search");
let activeFilter="Все";
function render(){
 const q=search.value.trim().toLocaleLowerCase("ru");
 const shown=tasks.filter(t=>(activeFilter==="Все"||t.group===activeFilter)&&(`${t.id} ${t.title} ${t.description}`).toLocaleLowerCase("ru").includes(q));
 document.getElementById("count").textContent=`${shown.length} ${shown.length===1?"задание":shown.length<5?"задания":"заданий"}`;
 if(!shown.length){list.innerHTML='<div class="empty">Ничего не найдено. Попробуйте изменить запрос.</div>';return}
 list.innerHTML=shown.map((t,i)=>`<article class="task-card" id="task-${t.id.replace(".","-")}">
 <div class="task-head" role="button" tabindex="0" aria-expanded="false">
 <div class="task-number">${t.id}</div><div class="task-title"><h3>${t.title}</h3><p>${t.description}</p></div><span class="tag">${t.group}</span><span class="chevron">⌄</span></div>
 <div class="task-body"><div class="detail-grid">
 <section class="panel"><div class="panel-head"><strong>РЕШЕНИЕ НА C#</strong><button class="copy" type="button">Копировать код</button></div><pre class="code"><code></code></pre></section>
 <section class="panel"><div class="panel-head"><strong>БЛОК-СХЕМА</strong><span class="tag">Алгоритм</span></div><div class="flow">${t.flow.map((s,j)=>`<div class="flow-step">${escapeHtml(s)}</div>${j<t.flow.length-1?'<div class="flow-arrow">↓</div>':''}`).join("")}</div></section></div>
 <section class="tests"><h4>ПРОВЕРОЧНЫЕ ТЕСТЫ</h4><table class="test-table"><thead><tr><th>Входные данные</th><th>Ожидаемый результат</th></tr></thead><tbody>${t.tests.map(row=>`<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td></tr>`).join("")}</tbody></table></section></div></article>`).join("");
 shown.forEach(t=>{const card=document.getElementById(`task-${t.id.replace(".","-")}`);card.querySelector("code").textContent=t.code;
 const head=card.querySelector(".task-head");const toggle=()=>{card.classList.toggle("open");head.setAttribute("aria-expanded",card.classList.contains("open"))};head.addEventListener("click",toggle);head.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();toggle()}});
 card.querySelector(".copy").addEventListener("click",async e=>{e.stopPropagation();const b=e.currentTarget;try{await navigator.clipboard.writeText(t.code);b.textContent="Скопировано ✓"}catch{b.textContent="Не удалось"}setTimeout(()=>b.textContent="Копировать код",1600)})});
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");b.classList.add("active");activeFilter=b.dataset.filter;render()}));
search.addEventListener("input",render);render();