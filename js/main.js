
// Nav
// Show and Hide Bundle on Small Screen
const logIn = document.querySelector(".log-in-sm");
const bundle = document.querySelector(".bundle");

logIn.addEventListener("click",(e)=>{
    if(bundle.classList.contains("hide")){
        bundle.classList.remove("hide")
        bundle.classList.add("show")
    }else{
        bundle.classList.remove("show")
        bundle.classList.add("hide")
    }
})

// Close when clicked outside 
window.addEventListener("click",(e)=>{
    if(bundle.classList.contains("show")){
        if(!e.target.classList.contains("log-in-sm")){
            bundle.classList.add("hide");
        }
    }
})

//Close Bundel if it still open on large screen

const matchObj = window.matchMedia("(min-width:991px)");
matchObj.addEventListener("change",(e)=>{
    if(e.target.matches){
        if(bundle.classList.contains("show")){
            bundle.classList.remove("show")
            bundle.classList.add("hide")
        }
    }
})


/*********Modal***********/

const openBtn = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

openBtn.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
        modal.style.display = "block"
    })
})

closeBtn.addEventListener("click",(e)=>{
    modal.style.display = "none"
})

// Close if it clicked from outside

window.addEventListener("click",(e)=>{
    if(e.target == modal){
        modal.style.display = "none"
    }
})

/*Tabs*/

// Buttons 

const listBtns = document.querySelectorAll(".btns-list button");
const subLine = document.querySelector(".sub-line")
const btnOne = document.querySelector(".event-btn-1")


listBtns.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
        listBtns.forEach(btn => btn.classList.remove("active-btn"));
        btn.classList.add("active-btn");
        
        //Moving line
        let activeBtn = document.querySelector(".active-btn");
        if(activeBtn.classList.contains("event-btn-1")){
            subLine.classList.remove("sub-line-2","sub-line-3")
            subLine.classList.add("sub-line-1")
        }else if(activeBtn.classList.contains("event-btn-2")){
            subLine.classList.remove("sub-line-1","sub-line-3")
            subLine.classList.add("sub-line-2")
        }else if(activeBtn.classList.contains("event-btn-3")){
            subLine.classList.remove("sub-line-1","sub-line-2")
            subLine.classList.add("sub-line-3")
        }

        //Changing Backgroud-image
        changeBackround(activeBtn)

        //Show Tab Content
        showTabContent(activeBtn)
    })
})


// Tabs
const tabs = document.querySelector("#tabs")
const tabsContent = document.querySelectorAll(".tab-content")

subLine.addEventListener("click",(e)=>{
    listBtns.forEach(btn => btn.classList.remove("active-btn"));
    btnOne.classList.add("active-btn");
    subLine.classList.remove("sub-line-2","sub-line-3")
    subLine.classList.add("sub-line-1");
    //Activate tab one
    tabs.classList.remove("tab-2","tab-3")
    tabs.classList.add("tab-1")
})

function changeBackround(active){
    let activeTab = active.dataset.btn;
    if(activeTab === "sports"){
        tabs.classList.remove("tab-2","tab-3")
        tabs.classList.add("tab-1")
    }else if(activeTab === "news"){
        tabs.classList.remove("tab-1","tab-3")
        tabs.classList.add("tab-2")
    }else if(activeTab === "events"){
        tabs.classList.remove("tab-1","tab-2")
        tabs.classList.add("tab-3")
    }
}


/*Show and Hide Tab Content*/
function showTabContent(activeBtn){
    let id = activeBtn.dataset.btn;
    const activeTab = document.querySelector(`#${id}`);

    // Delete Active Tab content first
    tabsContent.forEach(tab => tab.classList.remove("active-content"));
    
    //Add Active Tab Content
    activeTab.classList.add("active-content");
}

/* Select Your plan section logic*/

const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle button");
const bundlePlanHaed = document.querySelector(".bundle-plans-heads");
const basePlanHead = document.querySelector(".base-plans-heads");

const baseCols = document.querySelector(".base-cols")
const bundleCols = document.querySelector(".bundle-cols")

toggle.addEventListener("click",(e)=>{
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")){
        /// Head
        basePlanHead.style.display = "none";
        bundlePlanHaed.style.display = "grid";
        // Info
        baseCols.style.display = "none";
        bundleCols.style.display = "block";
    }else{
        //Head
        bundlePlanHaed.style.display = "none";
        basePlanHead.style.display = "grid";
        // Info
        bundleCols.style.display = "none";
        baseCols.style.display = "block";
    }
})

/*Accordion */

// const addHide = document.querySelector(".adds-btn.hide")
const addBtn = document.querySelector(".adds-btn")
const adds = document.querySelector(".adds")

addBtn.addEventListener("click",(e)=>{
    if(addBtn.classList.contains("show")){
        addBtn.innerHTML = `Hide Add-ons <i class="fa-solid fa-angle-down"></i>`;
        addBtn.classList.remove("show");
        addBtn.classList.add("hide");
        adds.classList.add("show-adds");
    }else if(addBtn.classList.contains("hide")){
        addBtn.innerHTML = `Show Add-ons <i class="fa-solid fa-angle-up"></i>`;
        addBtn.classList.remove("hide")
        addBtn.classList.add("show")
        adds.classList.remove("show-adds")
    }
})

/* Footer*/

const linksHeader = document.querySelectorAll(".footer-links h5");
const browseList = document.querySelector(".browse-lists")
const helpList = document.querySelector(".help .links-list")
const aboutList = document.querySelector(".about-us .links-list")

linksHeader.forEach(function(h5){
    h5.addEventListener("click",(e)=>{
        if(h5.classList.contains("show-list")){
            h5.classList.remove("show-list");
            h5.classList.add("hide-list");
            // Icons
            if(h5.id === "browse__"){
                h5.innerHTML = `Browse <i class="fa-solid fa-angle-up show-icon icon"></i>`
                browseList.classList.add("show-browse-list")
            }else if(h5.id === "help__"){
                h5.innerHTML = `Help <i class="fa-solid fa-angle-up show-icon icon"></i>`
                helpList.classList.add("show-help-list")
            }else if(h5.id === "about__"){
                h5.innerHTML = `About <i class="fa-solid fa-angle-up show-icon icon"></i>`
                aboutList.classList.add("show-help-list")
            }
            //Content
            }else{
                h5.classList.remove("hide-list");
                h5.classList.add("show-list");
                if(h5.id === "browse__"){
                    h5.innerHTML = `Browse <i class="fa-solid fa-angle-down show-icon icon"></i>`
                    browseList.classList.remove("show-browse-list")
                }else if(h5.id === "help__"){
                    h5.innerHTML = `Help <i class="fa-solid fa-angle-down show-icon icon"></i>`
                    helpList.classList.remove("show-help-list")
                }else if(h5.id === "about__"){
                    h5.innerHTML = `About <i class="fa-solid fa-angle-down show-icon icon"></i>`
                    aboutList.classList.remove("show-help-list")
                }
            }
    })
})

