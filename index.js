import{a as d,S as u,i as l}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();d.defaults.baseURL="https://pixabay.com/api/";function m(o){return d.get("",{params:{q:o,key:"49577455-ade522c1ef99167d118a0e5b7",image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>{if(t.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data.hits})}function f(){const o=document.querySelector(".gallery");o.innerHTML=""}function p(){document.querySelector(".load").classList.add("loader")}function n(){document.querySelector(".load").classList.remove("loader")}function g(o){const t=document.querySelector(".gallery");t.innerHTML="";const i=o.map(e=>`<li class="gallery-item">
                <div class="image-container">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img
                        class="gallery-image"
                        src="${e.webformatURL}"
                        data-source="${e.largeImageURL}"
                        alt="${e.tags}"
                        />
                    </a>
                </div>
                <ul class="info">
                    <li class="info-item">
                        <p class="info-tag">Likes</p>
                        <p>${e.likes}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Views</p>
                        <p>${e.views}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Comments</p>
                        <p>${e.comments}</p>
                    </li>
                    <li class="info-item">
                        <p class="info-tag">Downloads</p>
                        <p>${e.downloads}</p>
                    </li>
                </ul>
            </li >`).join("");t.insertAdjacentHTML("afterbegin",i),new u(".gallery a").refresh()}const c=document.querySelector("input"),y=document.querySelector(".form");y.addEventListener("submit",o=>{o.preventDefault(),c.value.trim()!=""?(f(),p(),m(c.value.trim()).then(t=>{n(),g(t)}).catch(t=>{n(),l.show({title:"Error",message:t.message,color:"red",position:"topRight"})})):l.show({title:"Error",message:"Input field is empty. Please provide search instructions.",color:"red",position:"topRight"})});
//# sourceMappingURL=index.js.map
