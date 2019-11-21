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
    botDiv.setAttribute('id','bottomText');
    document.body.appendChild(botDiv);
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
function createP(){
    var botTxt = getElementById('bottomText');
    var newBotEl = createElement('p');
    var newBotTxt = createTextNode('Welcome to hell.');
    newBotEl.appendChild(newBotTxt);
    botTxt.appendChild(newBotEl);
}
function init(){
    var navBtn = [['HOME', 'index.html'], ['ABOUT', 'about.html'], ['EVENTS', 'events.html'], ['CONTACT', 'contact.html']];
    createPage(); 
    for (var i=0; i < navBtn.length; i++ ) {
        createButton(navBtn[i][0], navBtn[i][1] );    
    }
    
}