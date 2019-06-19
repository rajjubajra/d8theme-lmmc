//main menu ui variable
const mainMenu = document.querySelector('ul.main-nav');
const menuIcon = document.querySelector("#icon");
//console.log(mainMenu, menuIcon);

//RESPONSIVE MENU
window.innerWidth > 768 
? mainMenu.classList.add('desktop') & menuIcon.classList.add('hide')
: mainMenu.classList.add('tablet', 'hide') & menuIcon.classList.add('show');

//on window size change change menu class
function reportWindowSize() {
  let innerWidth = window.innerWidth;    
  console.log( innerWidth)
  if(innerWidth <= 768){

    menuIcon.classList.remove('hide'); 
    mainMenu.classList.remove('desktop'); 
    menuIcon.classList.add('show'); 
    mainMenu.classList.add('tablet', 'hide');   

  }else{

    menuIcon.classList.remove('show');
    menuIcon.classList.add('hide');
    mainMenu.classList.remove('tablet', 'hide');
    mainMenu.classList.add('desktop');
  }
}
window.addEventListener('resize', reportWindowSize);



function viewMenuList(e){
  console.log(e.target.id);
  if(e.target.id === 'icon'){
    mainMenu.classList.toggle('hide');
    mainMenu.classList.toggle('show');
  }  
}

//Tablet view on click view menu list
window.addEventListener('click', viewMenuList);

