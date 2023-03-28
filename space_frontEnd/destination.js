fetch('data.json')
.then(Response => Response.json())
.then(data =>{
 
    //show data in moon tab
    document.getElementById('Hd1').textContent = data.destinations[0].name;
    document.getElementById('p1').textContent = data.destinations[0].description;
    document.getElementById('distance1').textContent = data.destinations[0].distance;
    document.getElementById('travel1').textContent = data.destinations[0].travel;
    document.getElementById('moon1').src = data.destinations[0].images.png;

    //show data in mars tab
    document.getElementById('Hd2').textContent = data.destinations[1].name;
    document.getElementById('p2').textContent = data.destinations[1].description;
    document.getElementById('distance2').textContent = data.destinations[1].distance;
    document.getElementById('travel2').textContent = data.destinations[1].travel;
    document.getElementById('mars1').src = data.destinations[1].images.png;

    //show data in europa tab
    document.getElementById('Hd3').textContent = data.destinations[2].name;
    document.getElementById('p3').textContent = data.destinations[2].description;
    document.getElementById('distance3').textContent = data.destinations[2].distance;
    document.getElementById('travel3').textContent = data.destinations[2].travel;
    document.getElementById('europa1').src = data.destinations[2].images.png;

    //show data in titan tab
    document.getElementById('Hd4').textContent = data.destinations[3].name;
    document.getElementById('p4').textContent = data.destinations[3].description;
    document.getElementById('distance4').textContent = data.destinations[3].distance;
    document.getElementById('travel4').textContent = data.destinations[3].travel;
    document.getElementById('titan1').src = data.destinations[3].images.png;
    
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