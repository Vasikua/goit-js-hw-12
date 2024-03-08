import{a as v,i as u,S}from"./assets/vendor-64b55ca9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const E="42549902-185aac32f1223c9241b6c0bc7",L="https://pixabay.com/api/",c=document.querySelector(".loader");async function p(o,s){c.style.display="block";try{const i=(await v.get(L,{params:{key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data;return i.hits.length===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.style.display="none",i}catch(r){console.error("Error ",r.message)}}const q=document.querySelector(".gallery"),$=document.querySelector(".add-content"),O=new S(".gallery a",{captionPosition:"bottom",captionDelay:"250",captionsData:"alt",close:!0,animationSpeed:200,preloading:!0,loop:!0,scaleImageToRatio:!0,scrollZoomFactor:.9,overlay:!0,overlayOpacity:1,spinner:!0});function d(o){const r=o.hits.map(({webformatURL:i,largeImageURL:e,tags:t,likes:l,views:f,comments:h,downloads:b})=>`<li class="list-link">
                            
                                <a href="${e}">
                                <img class="gallery-links" src="${i}" alt="${t}"></a>
                            
                                <div class="parameters">
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">likes:</li>
                                        <li class="parameters-list-item">${l}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">views:</li>
                                        <li class="parameters-list-item">${f}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">comments:</li>
                                        <li class="parameters-list-item">${h}</li>
                                    </ul>
                                    <ul class="parameters-list">
                                        <li class="parameters-list-item">downloads:</li>
                                        <li class="parameters-list-item">${b}</li>
                                    </ul>
                            </div>
                            </li>`).join("");q.insertAdjacentHTML("beforeend",r),r.length>0&&($.style.display="block"),O.refresh()}let a=1,y;const g=document.querySelector(".gallery"),m=document.querySelector("form"),n=document.querySelector(".add-content");m.addEventListener("submit",o=>{o.preventDefault(),g.innerHTML="";const s=o.target.elements.serchfield.value.trim();s.length>0?(p(s,a).then(r=>d(r)),y=s,m.reset()):n.style.display="none"});n.addEventListener("click",o=>{a++,p(y,a).then(r=>{d(r),R(),r.hits.length<15&&(n.style.display="none",u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))})});function R(){const o=g.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:4*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
