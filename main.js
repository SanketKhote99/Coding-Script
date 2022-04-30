function updatedlist() {
     const titles = [...document.querySelectorAll('h1,h2')].sort((a,b)=>{
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);

     });

     document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

     document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
   }

   updatedlist();
   window.addEventListener('scroll',() =>{
      updatedlist();
   })



   // function openNav() {
   //    document.getElementById("mySidepanel").style.width = "100%";
   //  }
    
   //  /* Set the width of the sidebar to 0 (hide it) */
   //  function closeNav() {
   //    document.getElementById("mySidepanel").style.width = "0";
   //  }
    