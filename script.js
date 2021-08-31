let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let homes = document.getElementById('home-page');
let courses = document.getElementById('courses-page');
let contacts = document.getElementById('contact-page');
let abouts = document.getElementById('about-page');
courses.style.display = 'none';
contacts.style.display = 'none';
abouts.style.display = 'none';
homes.style.display = 'block';



closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});



function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}



function home(){
  courses.style.display = 'none';
  contacts.style.display = 'none';
  abouts.style.display = 'none';
  homes.style.display = 'block';
  
  
}

function course(){
  homes.style.display = 'none';
  contacts.style.display = 'none';
  abouts.style.display = 'none';
  courses.style.display = 'block';




}
function about(){


  courses.style.display = 'none';
  contacts.style.display = 'none';
  homes.style.display = 'none';
  abouts.style.display = 'block';
}
function contact(){
  courses.style.display = 'none';
  homes.style.display = 'none';

  abouts.style.display = 'none';
  contacts.style.display = 'block';
}

var link = [""]
var courseName =["css","js","python","java","android","jquery","ruby","ihdjhdj","8765367","678ujh"];
var description =["css style","js program","python code","java objects","android program","jquery objects","ruby code","oiuhjidiuhd","oiuyhj","jhghu"];
var cardnumber = ["10","9","8","7","6","5","4","3","2","1"]
var dynamic = document.querySelector('.container');  
for (var i = 0; i < courseName.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `
  <div class="card">
        <div class="box">
          <div class="content">
            <h2>${cardnumber[i]}</h2>
            <h3>Card Two</h3>
            <p>${description[i]}</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>` + fetch ; 
    
} 


