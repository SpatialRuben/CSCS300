function createPage() {
    var topDiv = document.createElement ('div');
    topDiv.setAttribute('class','topNavDiv'); 
    document.body.appendChild(topDiv);

    var mainDiv = document.createElement ('div');
    mainDiv.setAttribute('class','mainNavDiv'); 
    mainDiv.setAttribute('id','mainDiv');
    document.body.appendChild(mainDiv);

    var mainBody = document.createElement ('div');
    mainBody.setAttribute('id','contactDiv');
    document.body.appendChild(mainBody);
    var swEl = document.createElement('P');
    var swText = document.createTextNode('Enter a GIS Day activity such as: Drones, Mapping Exercises or GPS activities and and click submit');
    swEl.appendChild(swText);
    document.getElementById('contactDiv').appendChild(swEl) 

    var botDiv = document.createElement ('div');
    botDiv.setAttribute('class','bottomDiv');
    botDiv.setAttribute('id','bottomText');
    document.body.appendChild(botDiv);
}
function newInput() {
    var inpEl = document.createElement('input');
    inpEl.setAttribute('type', 'text');
    inpEl.setAttribute('id', 'myInput');
    document.getElementById('contactDiv').appendChild(inpEl);
}
function newInBtn() {
    var inBtnEl = document.getElementById('contactDiv');
    var inBtn = document.createElement('button');
    var inBtnTxt = document.createTextNode('Submit');
    inBtn.onclick = function() {myFunction()};
    inBtn.appendChild(inBtnTxt);
    inBtnEl.appendChild(inBtn);
}
function swPText(text) {
    var swP = document.createElement('P');
    var swPDiv = document.getElementById('contactDiv');
    swP.setAttribute('id', 'myPTxt');
    swPDiv.appendChild(swP);
}
function myFunction() {
    var text;
    var gisActvities = document.getElementById('myInput').value;
  
    switch(gisActvities) {
      case 'Drones':
        text = 'The Center for Spatial Studies has plenty of drones and expertise!';
      break;
      case 'Mapping Exercises':
      text = 'The Center for Spatial Studies can provide plenty of mapping exercises.';
      break;
      case 'GPS activities':
      text = 'The Center for Spatial Studies can provide many GPS activities';
      break;
      default:
      text = 'We don\'t have info on that activity.  Please contact the Center for Spatial Studies for more info.';
    }
    document.getElementById('myPTxt').innerHTML = text;
  }
function createButton( label, url ){
    var navBar = document.getElementById( 'mainDiv' );
    var btn = document.createElement( 'button' );
    var btnTxt = document.createTextNode( label );
    btn.setAttribute('onclick', 'document.location.href="' + url + '"' );  
    btn.setAttribute('class','allBtns');
    btn.appendChild( btnTxt );
    navBar.appendChild( btn );                              
}
function makeText (){
    var newEl = document.createElement('P');
    var textNode = document.createTextNode('Welcome to the Center for Spatial Studies');   
    newEl.appendChild(textNode);
    document.getElementById('bottomText').appendChild(newEl);
}
function init(){
    var navBtn = [['HOME', 'index.html'], ['ABOUT', 'about.html'], ['EVENTS', 'events.html'], ['CONTACT', 'contact.html']];
    createPage(); 
    for (var i=0; i < navBtn.length; i++ ) {            
    createButton(navBtn[i][0], navBtn[i][1] ); 
    }
    makeText ();
    newInput();
    newInBtn();
    swPText();
}                                           