import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();let a;function f(r){r.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function c(){const r=document.querySelector(".loader");r&&r.remove()}function d(r){const n=document.querySelector(".gallery"),o=r.map(t=>`
      <a href="${t.largeImageURL}" class="gallery-link">
        <img class="img-gallery"
          src="${t.webformatURL}"
          alt="${t.tags}" 
          loading="lazy" />
        <ul class="list-wrapper">
          <li class="text-content"><b>Likes:</b> ${t.likes}</li>
          <li class="text-content"><b>Views:</b> ${t.views}</li>
          <li class="text-content"><b>Comments:</b> ${t.comments}</li>
          <li class="text-content"><b>Downloads:</b> ${t.downloads}</li>
        </ul>
      </a>
  `).join("");n.innerHTML=o,a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function h(){const r=document.querySelector(".gallery");r.innerHTML=""}function m(r){l.info({title:"Info",message:r,position:"topRight",backgroundColor:"red",messageColor:"white",titleColor:"white"})}const y="https://pixabay.com/api/",p="46020556-902bd777cf965228c32d535d7";async function g(r){const n=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${y}?${n.toString()}`;try{const t=await fetch(o);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const e=await t.json();return console.log(e),e}catch(t){throw console.error("There was an error with the fetch operation:",t),t}}const b=document.querySelector(".search-form"),w=document.querySelector('[name="searchQuery"]'),L=document.querySelector(".gallery");b.addEventListener("submit",r=>{r.preventDefault();const n=w.value.trim();if(!n){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(),f(L),g(n).then(o=>{if(c(),!o||o.hits.length===0){m("Sorry, there are no images matching your search query. Please try again!");return}d(o.hits)}).catch(o=>{console.error("Error fetching images:",o),l.error({title:"Error",message:`Error: ${o.message}`,position:"topRight"})}).finally(()=>{c()})});
//# sourceMappingURL=index.js.map
