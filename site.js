// Shared header, footer and department list for every page.
const DEPTS=[
["Agricultural Commissioner / Weights & Measures","Farm inspections, pest control and fair scales for every shop."],
["Animal Care & Control","Pet licensing, adoptions, strays and animal rescue."],
["Assessor","Property values and exemptions for county homeowners."],
["Auditor-Controller","County accounting, payroll and financial reporting."],
["Beaches & Harbors","Lifeguards, lakefront access and harbor facilities."],
["Board of Supervisors","The five-member governing body of the county."],
["Chief Executive Office","Budget, operations and county-wide coordination."],
["Child Support Services","Help establishing and collecting child support."],
["Children & Family Services","Child protection, foster care and adoption."],
["Consumer & Business Affairs","Complaint help, small business support and fraud prevention."],
["County Counsel","Legal advice for the county and its departments."],
["District Attorney","Prosecutes crimes and supports victims.","oem0"],
["Fire Department","Fire, rescue and paramedic response."],
["Health Services","County clinics, hospitals and community care."],
["Human Resources","County jobs, benefits and hiring."],
["Library","Books, digital resources and community programs."],
["Medical Examiner","Investigates sudden and unexpected deaths."],
["Mental Health","Counseling, crisis support and recovery services."],
["Office of Emergency Management","Disaster planning, alerts and emergency response coordination.","https://republicstates.xyz/emergency"],
["Parks & Recreation","Parks, trails, pools and community programs."],
["Probation","Supervision and rehabilitation programs."],
["Public Defender","Legal defense for people who cannot afford a lawyer."],
["Public Health","Disease prevention, inspections and health alerts."],
["Public Social Services","Food, cash and medical assistance."],
["Public Works","Roads, bridges, flood control and utilities."],
["Regional Planning","Zoning, land use and long-range planning."],
["Registrar-Recorder / County Clerk","Elections, vital records and property recording."],
["Sheriff’s Department","Law enforcement, courts and county jails.","sheriff.html"],
["Treasurer and Tax Collector","Property tax payments and county investments."]
];
const sheriff=document.body.classList.contains("sheriff");
const page=location.pathname.split("/").pop()||"index.html";
const link=(h,t,ext)=>`<a href="${h}"${page===h?' aria-current="page"':''}${ext?' target="_blank" rel="noopener"':''}>${t}</a>`;
document.body.insertAdjacentHTML("afterbegin",`
<header class="top"><div class="wrap">
<a class="brand" href="${sheriff?'sheriff.html':'index.html'}"><img src="logo.png" alt="" onerror="this.remove()">${sheriff?'Lego City County Sheriff’s Department':'County of Lego City'}</a>
<form action="departments.html" role="search"><input name="q" placeholder="Search departments" aria-label="Search departments"><button>Search</button></form>
</div></header>
<nav class="main" aria-label="Main"><div class="wrap">
${link('index.html','Home')}${link('departments.html','Departments')}${link('sheriff.html','Sheriff')}${link('https://republicstates.xyz/emergency','Emergency Management',1)}<a href="#contact">Contact</a>
</div></nav>`);
document.body.insertAdjacentHTML("beforeend",`
<footer><div class="wrap split">
<div><strong>County of Lego City</strong><br>Death Star City Court &amp; Offices<br>125 S Death Star City Dr.<br>Death Star City, RS 10003</div>
<div id="contact"><strong>Contact</strong><br><a href="mailto:hello@lccounty.republicstates.xyz">hello@lccounty.republicstates.xyz</a><br><a href="mailto:sheriff@lccounty.republicstates.xyz">sheriff@lccounty.republicstates.xyz</a> (Sheriff)</div>
</div><div class="wrap pretend">Copyright 2026 by County of Lego City. For pretend purposes only.</div></footer>`);
const grid=document.getElementById("deptGrid");
if(grid){
 const q=new URLSearchParams(location.search).get("q")||"";
 const box=document.getElementById("filter");box.value=q;
 const draw=()=>{const v=box.value.toLowerCase();
  grid.innerHTML=DEPTS.filter(d=>(d[0]+d[1]).toLowerCase().includes(v)).map(d=>{
   const u=d[2]&&d[2]!=="oem0"?d[2]:null,oem=d[0].startsWith("Office of Emergency");
   const t=u?`<a href="${u}"${u.startsWith('http')?' target="_blank" rel="noopener"':''}>${d[0]}</a>`:d[0];
   return `<div class="card${oem?' oem':''}"><h3>${t}</h3><p>${d[1]}</p></div>`}).join("")||"<p>No departments match your search.</p>";};
 box.addEventListener("input",draw);draw();
}
