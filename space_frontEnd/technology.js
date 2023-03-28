fetch('data.json')
.then(Response => Response.json())
.then(data => {

     // display data in slide1
     document.getElementById('hd1').textContent = data.technology[0].name;
     document.getElementById('p1').textContent = data.technology[0].description;
     document.getElementById('capsule').src = data.technology[0].images.portrait;



    // display data in slide2
    document.getElementById('hd2').textContent = data.technology[1].name;
    document.getElementById('p2').textContent = data.technology[1].description;
    document.getElementById('spaceport').src = data.technology[1].images.portrait;


     // display data in slide3
     document.getElementById('hd3').textContent = data.technology[2].name;
     document.getElementById('p3').textContent = data.technology[2].description;
     document.getElementById('vehicle').src = data.technology[2].images.portrait;

});


//switch between the tabs 
function changetab(tabName){  

    // store the tab_content in an array
    const planet = document.getElementsByClassName('tab_content');

    //hide all the active tab-content
    for(let i = 0; i < planet.length; i++){
        planet[i].classList.remove('active');
    }

    //deactivate all the active tab of tab
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i< tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    
 }