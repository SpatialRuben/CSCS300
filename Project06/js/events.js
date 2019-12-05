function createPage() {
    var topDiv = document.createElement ('div');
    topDiv.setAttribute('class','topNavDiv'); 
    document.body.appendChild(topDiv);

    var mainDiv = document.createElement ('div');
    mainDiv.setAttribute('class','mainNavDiv'); 
    mainDiv.setAttribute('id','mainDiv');
    document.body.appendChild(mainDiv);

    var mainBody = document.createElement ('div');
    mainBody.setAttribute('id','eventDiv');
    document.body.appendChild(mainBody);
    
    var botDiv = document.createElement ('div');
    botDiv.setAttribute('class','bottomDiv');
    botDiv.setAttribute('id','bottomText');
    document.body.appendChild(botDiv);
}
function createEventP() {
    var eventPDiv = document.getElementById('eventDiv');
    var eventP = document.createElement('P');
    var eventTxt = document.createTextNode('Please help us determine your level of GIS experience. How many years of GIS experience do you have?');
    eventP.appendChild(eventTxt);
    eventPDiv.appendChild(eventP);
}
function eventInput() {
    var eventEl = document.createElement('input');
    eventEl.setAttribute('type', 'number');
    eventEl.setAttribute('id', 'gisNumTxt');
    document.getElementById('eventDiv').appendChild(eventEl);
}
function eventBtn() {
    var eventBtnDiv = document.getElementById('eventDiv');
    var eventBtn = document.createElement('button');
    var eventBtnTxt = document.createTextNode('Submit');
    eventBtn.appendChild(eventBtnTxt);
    eventBtnDiv.appendChild(eventBtn);
    eventBtn.onclick = function() {submitNumber()};
}
function submitNumber() {
    var gisTxtIn = document.getElementById('gisNumTxt').value;

    if (gisTxtIn <= 2)              //This meets the IF requirement
    {
    document.getElementById('answer').innerText ='You are a novice or beginner';
    }
    else
    {
    document.getElementById('answer').innerHTML = 'You are intermediate and may be on your way to being an expert!';
    }
}
function createEventAns() {
    var eventAnsrDiv = document.getElementById('eventDiv');
    var eventAnsrP = document.createElement('P');
    var eventAnsrTxt = document.createTextNode('');
    eventAnsrP.setAttribute('id', 'answer');
    eventAnsrP.appendChild(eventAnsrTxt);
    eventAnsrDiv.appendChild(eventAnsrP);
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
    createEventP(); 
    makeText ();
    eventInput();
    eventBtn();
    //submitNumber();  This is nested in an anonymous Fn
    createEventAns(); 
}                                           