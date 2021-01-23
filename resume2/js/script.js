
window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})


// aside
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalnavList=navList.length,
      allSelection=document.querySelectorAll(".section"),
      totalSection=allSelection.length;
 
for(let i=0; i<totalnavList; i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
        removeBackSectionClass();
        for(let i=0; i<totalSection; i++){
        allSelection[i].classList.remove("back-section");
    }
        
        for(let j=0; j<totalnavList; j++){
           if(navList[j].querySelector("a").classList.contains("active")){
               
               addBackSectionClass(j);
               //allSelection[j].classList.add("back-section");
           }
            navList[j].querySelector("a").classList.remove("active");
        }
        
        this.classList.add("active");
        showSection(this);
        
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSectionClass(){
     for(let i=0; i<totalSection; i++){
        allSelection[i].classList.remove("back-section");
    }
}

function addBackSectionClass(num){
    allSelection[num].classList.add("back-section");
}

function showSection(Element){
    for(let i=0; i<totalSection; i++){
        allSelection[i].classList.remove("active");
    }
    const target=Element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
    
    
}

const navTogglerBtn=document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",() =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
     for(let i=0; i<totalSection; i++){
        allSelection[i].classList.toggle("open");
    }
}

function updateNav(Element){
    for(let i=0; i<totalnavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target=Element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
    
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
})



