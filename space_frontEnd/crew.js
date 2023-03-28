//load the Json file

fetch('data.json')
.then(Response => Response.json())
.then(data => {

     // display data in slide1
     document.getElementById('crew1').textContent = data.crew[0].role;
     document.getElementById('crew-name1').textContent = data.crew[0].name;
     document.getElementById('crew-details1').textContent = data.crew[0].bio;
     document.getElementById('c_image').src = data.crew[0].images.png;



    // display data in slide2
    document.getElementById('crew-role2').textContent = data.crew[1].role;
    document.getElementById('crew-name2').textContent = data.crew[1].name;
    document.getElementById('crew-details2').textContent = data.crew[1].bio;
    document.getElementById('c_image2').src = data.crew[1].images.png;


     // display data in slide3
     document.getElementById('crew-role3').textContent = data.crew[2].role;
     document.getElementById('crew-name3').textContent = data.crew[2].name;
     document.getElementById('crew-details3').textContent = data.crew[2].bio;
     document.getElementById('c_image3').src = data.crew[2].images.png;


      // display data in slide4
      document.getElementById('crew-role4').textContent = data.crew[3].role;
      document.getElementById('crew-name4').textContent = data.crew[3].name;
      document.getElementById('crew-details4').textContent = data.crew[3].bio;
      document.getElementById('c_image4').src = data.crew[3].images.webp;

});

function changetab(tabName){
  
      //store all content in an array
      const ajeet = document.getElementsByClassName('slider');
      //hide all content
      for(let i = 0; i < ajeet.length; i++){
        ajeet[i].classList.remove('active');
      }
      //deactive all tabs
      const achal = document.getElementsByClassName('btn');
      for(let i = 0; i < achal.length; i++){
        achal[i].classList.remove('active');
      }
      document.getElementById(tabName).classList.add('active');
      event.currentTarget.classList.add('active');
    } 