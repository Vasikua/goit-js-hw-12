import{a as h,i as m,S as b}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const v="42549902-185aac32f1223c9241b6c0bc7",S="https://pixabay.com/api/",n=document.querySelector(".loader");async function u(a){n.style.display="block";try{const s=(await h.get(S,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data;return s.hits.length===0&&m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",s}catch(r){console.error("Error ",r.message)}}const L=document.querySelector(".gallery"),q=document.querySelector(".add-content"),E=new b(".gallery a",{captionPosition:"bottom",captionDelay:"250",captionsData:"alt",close:!0,animationSpeed:200,preloading:!0,loop:!0,scaleImageToRatio:!0,scrollZoomFactor:.9,overlay:!0,overlayOpacity:1,spinner:!0});function d(a){const s=a.hits.map(({webformatURL:l,largeImageURL:e,tags:t,likes:o,views:y,comments:f,downloads:g})=>`<li class="list-link">
                            
                                <a href="${e}">
                                <img class="gallery-links" src="${l}" alt="${t}"></a>
                            
                                <div class="parameters">
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">likes:</li>
                                        <li class="parameters-list-item">${o}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">views:</li>
                                        <li class="parameters-list-item">${y}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">comments:</li>
                                        <li class="parameters-list-item">${f}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">downloads:</li>
                                        <li class="parameters-list-item">${g}</li>
                                    </ul>
                            </div>
                            </li>`).join("");L.insertAdjacentHTML("beforeend",s),s.length>0&&(q.style.display="block"),E.refresh()}let p;const O=document.querySelector(".gallery"),c=document.querySelector("form"),i=document.querySelector(".add-content");c.addEventListener("submit",a=>{a.preventDefault(),O.innerHTML="";const r=a.target.elements.serchfield.value.trim();r.length>0?(u(r).then(s=>d(s)),p=r,c.reset()):i.style.display="none"});i.addEventListener("click",a=>{u(p).then(s=>d(s)),$()});function $(){data.totalHits<=array&&(i.style.display="none",m.error({message:"We're sorry, but you've reached the end of search results."}))}
//# sourceMappingURL=commonHelpers.js.map
