import{a as q,i as p,S as L}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const $="42549902-185aac32f1223c9241b6c0bc7",O="https://pixabay.com/api/",m=document.querySelector(".loader");async function d(r,s,l){m.style.display="block";try{const e=(await q.get(O,{params:{key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:l}})).data;return e.hits.length===0&&p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m.style.display="none",e}catch(o){console.error("Error ",o.message)}}const y=document.querySelector(".gallery");y.querySelectorAll("img");const w=document.querySelector(".add-content"),E=new L(".gallery a",{captionPosition:"bottom",captionDelay:"250",captionsData:"alt",close:!0,animationSpeed:200,preloading:!0,loop:!0,scaleImageToRatio:!0,scrollZoomFactor:.9,overlay:!0,overlayOpacity:1,spinner:!0});function g(r){const s=r.hits,l=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:b,comments:S,downloads:v})=>`<li class="list-link">
                            <a href="${e}">
                                <img class="gallery-links" src="${o}" alt="${t}"></a>
                            <div class="parameters">
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">likes:</li>
                                        <li class="parameters-list-item">${i}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">views:</li>
                                        <li class="parameters-list-item">${b}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">comments:</li>
                                        <li class="parameters-list-item">${S}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">downloads:</li>
                                        <li class="parameters-list-item">${v}</li>
                                    </ul>
                            </div>
                        </li>`).join("");y.insertAdjacentHTML("beforeend",l),s.length>14&&(w.style.display="block"),E.refresh()}let n,a;const f=15,h=document.querySelector(".gallery"),u=document.querySelector("form"),c=document.querySelector(".add-content");u.addEventListener("submit",r=>{r.preventDefault(),h.innerHTML="",a=r.target.elements.serchfield.value.trim(),a.length>0?(d(a,n,f).then(s=>g(s)),n=1,u.reset()):c.style.display="none"});c.addEventListener("click",()=>{n++,d(a,n,f).then(r=>{g(r),P(),r.hits.length<15&&(c.style.display="none",p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))})});function P(){const r=h.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
