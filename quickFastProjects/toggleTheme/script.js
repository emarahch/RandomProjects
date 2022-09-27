const toggle = document.getElementById("toggle");

toggle.addEventListener("change",(e)=>{
    document.body.classList.toggle("pink", e.target.checked);

});

