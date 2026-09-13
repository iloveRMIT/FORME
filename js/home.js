document.addEventListener('DOMContentLoaded',()=>{const root=qs('#featuredProducts');if(root){root.innerHTML=activeInventory().slice(0,4).map(productCard).join('');bindProductCards(root);}});
