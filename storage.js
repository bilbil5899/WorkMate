/* Penyimpanan lokal: seluruh data tersimpan di browser perangkat ini (localStorage). */
(function(){
var K="mm_local_db",D={},mem=false;
try{D=JSON.parse(localStorage.getItem(K)||"{}")}catch(e){mem=true;D={}}
var LS=[];function NT(){LS.slice().forEach(function(f){try{f()}catch(e){}})}
window.addEventListener("storage",function(e){if(e.key==K){try{D=JSON.parse(e.newValue||"{}")}catch(x){}NT()}});
function sv(){NT();if(mem)return;try{localStorage.setItem(K,JSON.stringify(D))}catch(e){alert("Penyimpanan browser penuh atau tidak tersedia.")}}
function rid(){var a=new Uint8Array(10);crypto.getRandomValues(a);return Array.from(a).map(function(x){return x.toString(16).padStart(2,"0")}).join("")}
function cp(v){return JSON.parse(JSON.stringify(v))}
function doc(p){var id=p.split("/").pop();return{id:id,
 get:async function(){var v=D[p];return{exists:v!==undefined,data:function(){return v===undefined?undefined:cp(v)},id:id}},
 set:async function(d){D[p]=cp(d);sv()},
 update:async function(d){D[p]=Object.assign(D[p]||{},cp(d));sv()},
 delete:async function(){delete D[p];sv()}}}
var DB={doc:doc,collection:function(p){return{doc:function(id){return doc(p+"/"+(id||rid()))},where:function(f,op,v){return{onSnapshot:function(cb){function run(){cb({docs:Object.keys(D).filter(function(k){return k.indexOf(p+"/")==0&&k.slice(p.length+1).indexOf("/")<0}).filter(function(k){var x=D[k][f];return op=="array-contains"?Array.isArray(x)&&x.indexOf(v)>-1:x===v}).map(function(k){return{id:k.slice(p.length+1),data:function(){return cp(D[k])}}})})}LS.push(run);run()}}}}}};
window.claude={use:async function(n){
 if(n=="user")return{me:async function(){return{id:"local",email:""}}};
 if(n=="db")return DB;
 if(n=="downloads")return{save:async function(o){var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([o.data],{type:"text/csv;charset=utf-8"}));a.download=o.filename;document.body.appendChild(a);a.click();a.remove()}};
 return null}};
})();
