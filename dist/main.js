(()=>{"use strict";var e=document.querySelector(".book-name"),t=document.querySelector(".author-name"),a=document.querySelector(".book-list"),o=document.querySelector(".myForm"),n=null===localStorage.getItem("bookList")?[]:JSON.parse(localStorage.getItem("bookList"));o.onsubmit=function(){var a,o;a=e.value,o=t.value,n.push({title:a,author:o}),localStorage.setItem("bookList",JSON.stringify(n)),e.value="",t.value=""};var l=function(e){var t=n,a=t[e];t=t.filter((function(e){return e!==a}))};window.onload=n.forEach((function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];var r=document.createElement("li");r.classList.add("list-element");var c=document.createElement("span");c.classList.add("class-title"),c.textContent="".concat(e.title," by:");var s=document.createElement("span");s.classList.add("class-author"),s.textContent="".concat(e.author);var i=document.createElement("delete");i.classList.add("class-delete"),i.textContent="Delete",r.append(c,s,i),a.appendChild(r),i.addEventListener("click",(function(e){a.removeChild(r);var t=e.id;l(t),localStorage.setItem("bookList",JSON.stringify(o))}))}))})();