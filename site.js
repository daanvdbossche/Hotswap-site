(function(){
  const c=window.HOTSWAP_CONFIG||{};
  document.querySelectorAll("[data-email]").forEach(el=>{
    el.textContent=c.supportEmail||"support@example.com";
    el.href="mailto:"+(c.supportEmail||"support@example.com");
  });
  document.querySelectorAll("[data-appstore]").forEach(el=>{
    el.href=c.appStoreUrl||"#";
    if(!c.appStoreUrl||c.appStoreUrl==="#") el.addEventListener("click",e=>e.preventDefault());
  });
  document.querySelectorAll("[data-instagram]").forEach(el=>{
    el.href=c.instagramUrl||"#";
    if(!c.instagramUrl||c.instagramUrl==="#") el.addEventListener("click",e=>e.preventDefault());
  });
})();
