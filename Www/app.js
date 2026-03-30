let state={roms:[],images:[],current:0};let paths={roms:"",saves:"",images:""};const CORES={nds:"nds",gba:"gba",gb:"gb",gbc:"gbc",nes:"nes",sfc:"sfc"};
async function pickFolder(type){alert("Sélectionne le dossier "+type+" dans ton navigateur (ou futur app)");}
function render(){const c=document.getElementById("carousel");c.innerHTML="";state.roms.forEach((r,i)=>{const d=document.createElement("div");d.className="slot";d.innerText=r.name;d.onclick=()=>launch(i);c.appendChild(d);});}
function launch(i){state.current=i;alert("Lancement jeu: "+state.roms[i].name);}
function setTheme(t){document.body.className=t;localStorage.setItem("theme",t);}
function loadTheme(){setTheme(localStorage.getItem("theme")||"dsi");}
loadTheme();