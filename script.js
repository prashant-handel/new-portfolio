window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
  })

  let footerEl = document.querySelector("footer");
  const headerLinks = document.querySelectorAll(".navLink");

  const footerLinks = document.querySelectorAll(".footerLink");

  const contactMeBtnEl = document.querySelector(".contactMeBtn");
  const contactMeEl = document.querySelector("#contactMe");
  
  headerLinks.forEach(link => {
    const linkIdEl = document.getElementById(link.getAttribute("data-link"));
    link.addEventListener("click", ()=>{
      window.scrollTo(0, linkIdEl.offsetTop - footerEl.offsetHeight + 60);
      console.log(footerEl.offsetHeight);
    })
  });
  
  footerLinks.forEach(link => {
    const linkIdEl = document.getElementById(link.getAttribute("data-link"));
    link.addEventListener("click", ()=>{
      window.scrollTo(0, linkIdEl.offsetTop - footerEl.offsetHeight + 60);
    })
  });

  contactMeBtnEl.addEventListener("click",()=>{
    window.scrollTo(0, contactMeEl.offsetTop - footerEl.offsetHeight + 60)
  })
  
  const scrollDownEl = document.getElementById("scrollDown");
  
      const linkIdEl = document.getElementById(scrollDownEl.getAttribute("data-link"));
  
        scrollDownEl.addEventListener("click", ()=>{
          window.scrollTo(0, linkIdEl.offsetTop - footerEl.offsetHeight + 40);
        })
    

  const upScrollEl = document.getElementById("upScroll");

  upScrollEl.addEventListener("click",()=>{
    window.scrollTo(0,0);
  })
 
  window.addEventListener("scroll", ()=>{
    if(window.pageYOffset == 0){
      upScrollEl.style.display = "none";
    }
    else{
      upScrollEl.style.display = "block";
    }
  })

  let hamburgerNavEl = document.getElementById('hamburgerNav');
  let hamburgerIconEl = document.getElementById('hamburgerIcon');
  let closeIconEl = document.getElementById('closeIcon');

  hamburgerIconEl.addEventListener("click",()=>{
      hamburgerNavEl.style.display = "block";
      hamburgerNavEl.style.width = "50vw";
      closeIconEl.style.display = "block";
    })
    
    closeIconEl.addEventListener("click",()=>{
    hamburgerNavEl.style.display = "none";
    hamburgerNavEl.style.width = "0";
    closeIconEl.style.display = "none";
  })