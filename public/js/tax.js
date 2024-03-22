let taxSwitch = document.querySelector(".check-tax");
window.onload = function() {
    taxSwitch.checked = false; // or true, based on your requirement
};

taxSwitch.addEventListener("click", ()=>{
  let taxInfo = document.querySelectorAll(".tax-info");
  let beforetaxInfo = document.querySelectorAll(".before-tax-info");
    for(beforeinfo of beforetaxInfo){
        if(beforeinfo.style.display != "none"){
            beforeinfo.style.display ="none";
        }
        else{
            beforeinfo.style.display ="contents";
        }
      }
    for(info of taxInfo){
        if(info.style.display != "contents"){
            info.style.display ="contents";
        }
        else{
            info.style.display ="none";
        }
  }
})