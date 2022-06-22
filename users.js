const btn_toggle = document.querySelector('.btn_toggle');
const sidebar = document.querySelector('.sidebar');
const logo = document.querySelector('.logo');
const text = document.getElementsByClassName('logo_text')[0];
const news_page = document.querySelector('.news_page');

text.style.display  = "none"
btn_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");  
    //  text.style.display = "none"   
    //? ene yu we
    if(sidebar.classList.contains('active')) {
        text.style.display  = "block"
        logo.setAttribute("style", "display:flex");
        news_page.setAttribute("style", "left:240px;width: calc(100% - 240px)");
        return
    }
    text.style.display  = "none"
    // text.setAttribute("style", "display:none");
    logo.setAttribute("style", "color: var(--bg-color);");
    news_page.setAttribute("style", "left:85px");
})

