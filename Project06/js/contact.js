function createPage() {
    var topDiv = document.createElement ('div');
    topDiv.setAttribute('class','topNavDiv'); 
    document.body.appendChild(topDiv);

    var mainDiv = document.createElement ('div');
    mainDiv.setAttribute('class','mainNavDiv'); 
    mainDiv.setAttribute('id','mainDiv');
    document.body.appendChild(mainDiv);

    var mainBody = document.createElement ('div');
    mainBody.setAttribute('class','mainBodyDiv');
    document.body.appendChild(mainBody);

    var botDiv = document.createElement ('div');
    botDiv.setAttribute('class','bottomDiv');
    document.body.appendChild(botDiv);

    <button onclick="myFunction()">Submit Idea</button>
    <p id="demo"></p>
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
function myFunction() {
    var text;
    var favActivity = prompt("What type of GIS Day event are you interested in?", "Drones, GPS, Etc.");
    switch(favActivity) {
      case "Drones":
        text = "The Center for Spatial Studies has multiple Drones & activities.";
        break;
      case "GPS":
        text = "The Center for Spatial Studies has many GPS related activities!";
        break;
      case "Mapping":
        text = "The Center for Spatial Studies ";
        break;
      default:
        text = "Please contact us to provide more information on this. Email us at spatialstudies@redlands.edu";
    }
    document.getElementById("botDiv").innerHTML = text;
  }
function init(){
    var navBtn = [['HOME', 'index.html'], ['ABOUT', 'about.html'], ['EVENTS', 'events.html'], ['CONTACT', 'contact.html']];
    createPage(); 
    for (var i=0; i < navBtn.length; i++ ) {
        createButton(navBtn[i][0], navBtn[i][1] );    
    }
    
}