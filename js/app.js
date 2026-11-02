/**
 * DevMaster Academy – Shared Interactive Engine
 * Copy buttons, Git simulator, VS Code shortcuts, Python sandbox, Exercises
 */
document.addEventListener('DOMContentLoaded',()=>{
  initCopy();
  initGitSim();
  initShortcuts();
  initSandbox();
  initExercises();
});

/* ========== Toast ========== */
function toast(msg){
  let box=document.querySelector('.toast-box');
  if(!box){box=document.createElement('div');box.className='toast-box';document.body.appendChild(box)}
  const t=document.createElement('div');t.className='toast';t.textContent=msg;box.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300)},2400);
}

/* ========== Copy buttons ========== */
function initCopy(){
  document.querySelectorAll('.btn-copy').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const code=btn.closest('.code-block')?.querySelector('code');
      if(!code)return;
      navigator.clipboard.writeText(code.innerText).then(()=>{
        const orig=btn.innerHTML;
        btn.classList.add('copied');btn.textContent='✓ Đã sao chép';
        toast('📋 Đã sao chép!');
        setTimeout(()=>{btn.classList.remove('copied');btn.innerHTML=orig},2000);
      });
    });
  });
}

/* ========== Git Simulator ========== */
function initGitSim(){
  const screen=document.getElementById('sim-screen');
  const input=document.getElementById('sim-input');
  const lane=document.getElementById('commits-row');
  if(!input||!screen)return;

  const S={
    branch:'main',
    working:['app.py','utils.py'],
    staged:[],
    commits:[
      {id:'C1',hash:'8f2a1b4',msg:'Initial commit'},
      {id:'C2',hash:'4e9c7d2',msg:'Cấu hình cơ bản'}
    ],
    pushed:2
  };

  function pr(html){const d=document.createElement('div');d.innerHTML=html;screen.appendChild(d);screen.scrollTop=screen.scrollHeight}
  function updateUI(){
    const els=document.querySelectorAll('.git-stage');
    if(els[0])els[0].querySelector('.stage-val').innerHTML=S.working.length?`<span style="color:var(--c-red)">${S.working.length} thay đổi</span>`:'Sạch';
    if(els[1]){els[1].querySelector('.stage-val').innerHTML=S.staged.length?`<span style="color:var(--c-green)">${S.staged.length} file</span>`:'Trống';els[1].classList.toggle('lit',S.staged.length>0)}
    if(els[2])els[2].querySelector('.stage-val').innerHTML=`<span style="color:var(--c-blue)">${S.commits.length} commits</span>`;
    const diff=S.commits.length-S.pushed;
    if(els[3])els[3].querySelector('.stage-val').innerHTML=diff>0?`<span style="color:var(--c-orange)">+${diff} chưa push</span>`:'<span style="color:var(--c-green)">Đồng bộ</span>';
    if(lane){
      lane.innerHTML='';
      S.commits.forEach((c,i)=>{
        const n=document.createElement('div');n.className='cnode';
        const isHead=i===S.commits.length-1;
        n.innerHTML=`<div class="dot ${i===0?'first':''}" title="${c.msg}">${c.id}</div><div class="hash">${c.hash}${isHead?' ← HEAD':''}</div>`;
        lane.appendChild(n);
      });
    }
  }

  function run(raw){
    const cmd=raw.trim();if(!cmd)return;
    pr(`<span style="color:#a6e3a1">$</span> <b>${cmd}</b>`);
    const lc=cmd.toLowerCase();
    if(lc==='clear'){screen.innerHTML='';return}
    if(lc==='git status'){
      let o=`<div style="color:#89b4fa">On branch ${S.branch}</div>`;
      if(S.staged.length)o+=`<div style="color:#a6e3a1">Staged: ${S.staged.join(', ')}</div>`;
      if(S.working.length)o+=`<div style="color:#f38ba8">Modified: ${S.working.join(', ')}</div>`;
      if(!S.staged.length&&!S.working.length)o+=`<div style="color:#6c7086">nothing to commit, working tree clean</div>`;
      pr(o);
    }else if(lc.startsWith('git add')){
      if(!S.working.length){pr('<div style="color:#6c7086">Không có file cần add.</div>')}
      else{S.staged.push(...S.working);S.working=[];pr('<div style="color:#a6e3a1">✔ Đã thêm tất cả vào Staging Area.</div>')}
    }else if(lc.startsWith('git commit')){
      if(!S.staged.length){pr('<div style="color:#f38ba8">Staging rỗng – hãy git add . trước!</div>')}
      else{
        let msg='update';const m=cmd.match(/-m\s+["'](.+?)["']/);if(m)msg=m[1];
        const h=Math.random().toString(16).slice(2,9);
        const id='C'+(S.commits.length+1);
        S.commits.push({id,hash:h,msg});
        const n=S.staged.length;S.staged=[];
        pr(`<div style="color:#a6e3a1">[${S.branch} ${h}] ${msg} – ${n} file(s)</div>`);
        setTimeout(()=>{if(!S.working.length){S.working.push('feature.py');updateUI()}},2500);
      }
    }else if(lc.startsWith('git push')){
      const diff=S.commits.length-S.pushed;
      if(diff<=0)pr('<div style="color:#6c7086">Already up-to-date.</div>');
      else{S.pushed=S.commits.length;pr(`<div style="color:#a6e3a1">✔ Pushed ${diff} commit(s) to origin/${S.branch}</div>`)}
    }else if(lc==='git log'||lc==='git log --oneline'){
      pr([...S.commits].reverse().map(c=>`<div><span style="color:#f9e2af">${c.hash}</span> ${c.msg}</div>`).join(''));
    }else if(lc.startsWith('git branch')&&cmd.split(' ').length>2){
      pr(`<div style="color:#a6e3a1">Created branch ${cmd.split(' ')[2]}</div>`);
    }else if(lc.startsWith('git checkout -b ')||lc.startsWith('git switch -c ')){
      S.branch=cmd.split(' ').pop();pr(`<div style="color:#a6e3a1">Switched to new branch '${S.branch}'</div>`);
    }else{
      pr(`<div style="color:#f38ba8">Lệnh không hỗ trợ trong mô phỏng. Hãy thử: git status, git add ., git commit -m "...", git push, git log, clear</div>`);
    }
    updateUI();
  }

  input.addEventListener('keydown',e=>{if(e.key==='Enter'){run(input.value);input.value=''}});
  document.querySelectorAll('.cmd-btn').forEach(b=>b.addEventListener('click',()=>{run(b.dataset.cmd)}));
  updateUI();
}

/* ========== VS Code Shortcuts ========== */
const SC_DATA=[
  {a:'Mở nhanh tệp',k:['Ctrl','P'],d:'Quick Open – nhảy đến file bất kỳ',cat:'nav'},
  {a:'Bảng lệnh',k:['Ctrl','Shift','P'],d:'Command Palette – toàn bộ lệnh VS Code',cat:'nav'},
  {a:'Nhân bản dòng xuống',k:['Shift','Alt','↓'],d:'Copy nguyên dòng hiện tại xuống bên dưới',cat:'edit'},
  {a:'Di chuyển dòng',k:['Alt','↑ / ↓'],d:'Đẩy dòng code lên hoặc xuống',cat:'edit'},
  {a:'Multi-Cursor dọc',k:['Ctrl','Alt','↑/↓'],d:'Tạo nhiều con trỏ ở nhiều dòng',cat:'multi'},
  {a:'Chọn từ trùng tiếp theo',k:['Ctrl','D'],d:'Tô chọn lần xuất hiện kế tiếp',cat:'multi'},
  {a:'Format Document',k:['Shift','Alt','F'],d:'Định dạng mã theo chuẩn (Prettier/Black)',cat:'edit'},
  {a:'Toggle Terminal',k:['Ctrl','`'],d:'Mở / đóng Terminal tích hợp',cat:'term'},
  {a:'Toggle Comment',k:['Ctrl','/'],d:'Comment / uncomment dòng / khối',cat:'edit'},
  {a:'Rename Symbol',k:['F2'],d:'Đổi tên biến / hàm trên toàn dự án',cat:'edit'},
  {a:'Go to Definition',k:['F12'],d:'Nhảy tới vị trí khai báo',cat:'nav'},
  {a:'Peek Definition',k:['Alt','F12'],d:'Xem định nghĩa trong popup',cat:'nav'},
  {a:'Global Search',k:['Ctrl','Shift','F'],d:'Tìm kiếm toàn bộ dự án',cat:'nav'},
  {a:'Source Control',k:['Ctrl','Shift','G'],d:'Mở giao diện Git GUI',cat:'term'},
  {a:'Split Editor',k:['Ctrl','\\'],d:'Chia đôi màn hình soạn thảo',cat:'nav'},
];
function initShortcuts(){
  const box=document.getElementById('sc-grid');
  const inp=document.getElementById('sc-search');
  if(!box)return;
  let cat='all',q='';
  function render(){
    const list=SC_DATA.filter(s=>{
      if(cat!=='all'&&s.cat!==cat)return false;
      const lq=q.toLowerCase();
      return s.a.toLowerCase().includes(lq)||s.d.toLowerCase().includes(lq)||s.k.join(' ').toLowerCase().includes(lq);
    });
    if(!list.length){box.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--c-text-3)">Không tìm thấy kết quả.</div>';return}
    box.innerHTML=list.map(s=>`<div class="sc-card"><div><h4>${s.a}</h4><p>${s.d}</p></div><div class="kbd-combo">${s.k.map(k=>`<kbd>${k}</kbd>`).join('<span style="color:var(--c-text-3);font-size:.7rem;margin:0 1px">+</span>')}</div></div>`).join('');
  }
  if(inp)inp.addEventListener('input',e=>{q=e.target.value;render()});
  document.querySelectorAll('.pill[data-cat]').forEach(p=>{
    p.addEventListener('click',()=>{
      document.querySelectorAll('.pill[data-cat]').forEach(x=>x.classList.remove('active'));
      p.classList.add('active');cat=p.dataset.cat;render();
    });
  });
  render();
}

/* ========== Python Sandbox ========== */
const PY_PRESETS={
basic:`# Biến, Kiểu dữ liệu & F-String
ten = "Nguyễn Văn A"
tuoi = 21
gpa = 3.75

print(f"Xin chào {ten}, {tuoi} tuổi!")
print(f"GPA: {gpa}")

nam_sinh = 2026 - tuoi
print(f"Năm sinh: {nam_sinh}")`,
conditions:`# If - Elif - Else
diem = 8.5

if diem >= 9.0:
    xep_loai = "Xuất sắc"
elif diem >= 8.0:
    xep_loai = "Giỏi"
elif diem >= 6.5:
    xep_loai = "Khá"
else:
    xep_loai = "Yếu"

print(f"Điểm: {diem} → Xếp loại: {xep_loai}")`,
loops:`# Vòng lặp For & While
print("Số chẵn từ 2-10:")
for i in range(2, 11, 2):
    print(f"  {i}")

langs = ["Python", "JavaScript", "SQL"]
for idx, lang in enumerate(langs, 1):
    print(f"{idx}. {lang}")`,
datastruct:`# List & Dictionary
sv = {
    "id": "SV001",
    "ten": "Trần Thị Mai",
    "mon": ["Python", "Git", "SQL"],
    "gpa": 8.8
}

print(f"Sinh viên: {sv['ten']}")
for m in sv["mon"]:
    print(f" - {m}")`,
functions:`# Hàm & Tham số mặc định
def tinh_hoc_phi(tin_chi, don_gia=450000, giam=0.1):
    tong = tin_chi * don_gia
    return tong * (1 - giam)

hp = tinh_hoc_phi(15)
print(f"Học phí 15 TC: {int(hp):,} VNĐ")`,
exceptions:`# Try - Except
def chia(a, b):
    try:
        return f"{a} / {b} = {a/b}"
    except ZeroDivisionError:
        return "Lỗi: chia cho 0!"

print(chia(10, 2))
print(chia(5, 0))`
};
function initSandbox(){
  const ta=document.getElementById('py-editor');
  const con=document.getElementById('py-console');
  const runBtn=document.getElementById('py-run');
  const sel=document.getElementById('py-preset');
  if(!ta||!con)return;
  ta.value=PY_PRESETS.basic;
  if(sel)sel.addEventListener('change',e=>{if(PY_PRESETS[e.target.value])ta.value=PY_PRESETS[e.target.value]});
  function log(t,cls){const d=document.createElement('div');if(cls)d.className=cls;d.textContent=t;con.appendChild(d);con.scrollTop=con.scrollHeight}
  function exec(){
    con.innerHTML='';log('▶ Executing...','info');
    const vars={};let output=false;
    ta.value.split('\n').forEach(raw=>{
      const line=raw.trim();
      if(!line||line.startsWith('#'))return;
      if(line.startsWith('print(')&&line.endsWith(')')){
        const inner=line.slice(6,-1).trim();output=true;log(evalPy(inner,vars));return;
      }
      if(line.includes('=')&&!line.includes('==')&&!/^(if|elif|else|for|while|def|try|except|return)/.test(line)){
        const eq=line.indexOf('=');const v=line.slice(0,eq).trim();const e=line.slice(eq+1).trim();
        if(/^[a-zA-Z_]\w*$/.test(v))try{vars[v]=parseVal(e,vars)}catch(_){}
      }
    });
    if(!output)log('Chương trình chạy hoàn tất (không có output).','info');
    else log('\n✔ Done.','ok');
  }
  if(runBtn)runBtn.addEventListener('click',exec);
  ta.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();const s=ta.selectionStart;ta.value=ta.value.slice(0,s)+'    '+ta.value.slice(ta.selectionEnd);ta.selectionStart=ta.selectionEnd=s+4}});
}
function parseVal(e,v){
  e=e.trim();
  if(e==='True')return true;if(e==='False')return false;
  if(/^-?\d+$/.test(e))return+e;if(/^-?\d+\.\d+$/.test(e))return+e;
  if((e[0]==='"'&&e.at(-1)==='"')||(e[0]==="'"&&e.at(-1)==="'"))return e.slice(1,-1);
  if(v[e]!==undefined)return v[e];
  // simple math
  let ex=e;for(const k of Object.keys(v))if(typeof v[k]==='number')ex=ex.replace(new RegExp('\\b'+k+'\\b','g'),v[k]);
  if(/^[\d+\-*/().\s]+$/.test(ex))try{return Function(`'use strict';return(${ex})`)()}catch(_){}
  return e;
}
function evalPy(expr,v){
  expr=expr.trim();
  if(expr.startsWith('f"')||expr.startsWith("f'")){
    let t=expr.slice(2,-1).replace(/\\n/g,'\n');
    return t.replace(/\{([^}]+)\}/g,(_,p)=>{
      const clean=p.split(':')[0].trim();
      if(v[clean]!==undefined)return v[clean];
      let ex=clean;for(const k of Object.keys(v))if(typeof v[k]==='number')ex=ex.replace(new RegExp('\\b'+k+'\\b','g'),v[k]);
      if(/^[\d+\-*/().\s]+$/.test(ex))try{return Function(`'use strict';return(${ex})`)()}catch(_){}
      return clean;
    });
  }
  if((expr[0]==='"'&&expr.at(-1)==='"')||(expr[0]==="'"&&expr.at(-1)==="'"))return expr.slice(1,-1).replace(/\\n/g,'\n');
  if(v[expr]!==undefined)return String(v[expr]);
  return expr;
}

/* ========== Exercises (Quiz + Terminal fill) ========== */
function initExercises(){
  // Multiple choice
  document.querySelectorAll('[data-quiz]').forEach(quiz=>{
    const correct=+quiz.dataset.quiz;
    const fb=quiz.querySelector('.quiz-feedback');
    let done=false;
    quiz.querySelectorAll('.quiz-opt').forEach((opt,i)=>{
      opt.addEventListener('click',()=>{
        if(done)return;done=true;
        if(i===correct){opt.classList.add('correct');fb.className='quiz-feedback show ok';fb.textContent='✅ Chính xác! '+fb.dataset.ok}
        else{opt.classList.add('wrong');quiz.querySelectorAll('.quiz-opt')[correct].classList.add('correct');fb.className='quiz-feedback show nok';fb.textContent='❌ Sai. '+fb.dataset.nok}
      });
    });
  });

  // Terminal fill exercises
  document.querySelectorAll('[data-term]').forEach(ex=>{
    const answers=ex.dataset.term.split('||').map(a=>a.trim().toLowerCase());
    const inp=ex.querySelector('input');
    const btn=ex.querySelector('button');
    const res=ex.querySelector('.term-result');
    let done=false;
    function check(){
      if(done)return;
      const val=inp.value.trim().toLowerCase();
      if(answers.includes(val)){done=true;res.className='term-result show pass';res.textContent='✅ Chính xác!';inp.style.borderColor='#a6e3a1'}
      else{res.className='term-result show fail';res.textContent='❌ Chưa đúng – hãy thử lại!'}
    }
    if(btn)btn.addEventListener('click',check);
    if(inp)inp.addEventListener('keydown',e=>{if(e.key==='Enter')check()});
  });
}

