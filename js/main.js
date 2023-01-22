const dropdownIcon = document.querySelectorAll('.arrow-down')
const dropdownIconList = dropdownIcon.length
console.log(dropdownIconList);
for (let i = 0; i < dropdownIcon.length; i++) {
        dropdownIcon[i].addEventListener("mouseover", (e)=>{
            
                e.target.src= "/images/icon-arrow-up.svg"
        },false)
        
        

}

// Nav
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    




