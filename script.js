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

// ! chart ************** bar **********************
var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Earnings in $',
            data: [2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300, 2900],
            backgroundColor: [
                '#b30000',
                '#e6d800',
                '#1a53ff',
                '#5ad45a',
                '#d0f400',
                '#9b19f5',
                '#00bfa0',

            ],
            // borderColor: 'rgb(68, 68, 68)', 

            borderWidth: 4
        }]
    },
    options: {
        responsive: true
    }
});

// ! boughnut chart *************************************

var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Academic', 'Non-Academic', 'Administration', 'Others'],
        radius: 2,
        datasets: [{
            label: 'Employees',
            data: [42, 12, 8, 6],
            backgroundColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderColor: [
                'rgba(41, 155, 99, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(120, 46, 139,1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});

// ! chart ************** jijig chart **********************
var ctx = document.getElementById('jijg_chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['data0', 'data1', 'data2'],
        datasets: [{
            // label: 'Earnings in $',
            data: [0, 2050, 100],
            backgroundColor: [
                '#b30000',
                '#e6d800',
                '#1a53ff',
                '#5ad45a',
                '#d0f400',
                '#9b19f5',
                '#00bfa0',

            ],
            borderColor: 'rgb(68, 68, 68)', 

            borderWidth: 4
        }]
    },
    options: {
        responsive: true
    }
});