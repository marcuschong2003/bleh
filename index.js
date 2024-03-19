let counter=0;
let button = document.getElementById("textdiv");
let contentcontainer = document.getElementById("contentcontainer");
let close = document.getElementById("close");
let authortext = document.getElementById("author");
let next =  document.getElementById("next");
let pic = document.getElementById("pic");
let caption = document.getElementById("caption");
let mine = document.getElementById("minehehe");
let timedisplay = document.getElementById("timedisplay");
let start = new Date(2023,6,14,22,16,00)
console.log(start);
let now = new Date()

author = ["Nabihah","Nabihah","Nabihah","Nabihah","Nabihah","Isabell","Isabell","Isabell","Isabell","Isabell","Isabell","Isabell","Marcus"]

sources = ["nabihah.jpeg","nabihah2.jpeg","nabihah3.jpeg","nabihah4.jpeg","nabihah5.jpeg","isabell1.jpeg","isabell2.jpeg","isabell3.jpeg","isabell4.jpeg","isabell5.jpeg","isabell6.jpeg","isabell7.jpeg"]

captiontext= ["rain rain go away come again another day angellie wants to play rain rain go away","","","","","It's the first powerpuff girl trip❤️✈️","Cny 2024 gathering🧧","Last presentation in Uni tgt (IOIO)","BYE BYE PCV💙The unforgettable  exco team we worked together thank you presi","LOML💗","We Mind 2024🫶","Thanks for coming to my 21th birthday and now you're turning 22🎉😚😚old ppl dy"]

function Display(n){
    for(var i=0; i<author.length; i++){
        console.log("content"+i.toString());
        document.getElementById("content"+(i).toString()).display = "none";
    }
    document.getElementById("content"+n.toString()).display = "block";
}

button.onclick = function(){
    contentcontainer.style.display="block";
}

close.onclick = function(){
    contentcontainer.style.display = "none"
}

next.onclick = function(){
    counter++;
    if(counter%author.length!=(author.length-1)){
        mine.style.display="none";
        authortext.innerHTML = "From: " + author[(counter)%author.length];
        caption.innerHTML = captiontext[(counter)%author.length];
        pic.src="./resources/" + sources[(counter)%author.length];
    }
    else{
        authortext.innerHTML = "From: " + author[(counter)%author.length];
        mine.style.display = "block";
        setInterval(renewtime,250);
    }
}

function renewtime(){
    now = new Date();
    seconddiff = Math.floor((now-start)/1000);
    second = seconddiff%60;
    minute = Math.floor((seconddiff%(60*60))/60);
    hour = Math.floor((seconddiff - second - minute*60)/(60*60))%24;
    day = Math.floor((seconddiff)/(24*60*60));
    console.log(day,hour,minute,second);
    timedisplay.innerHTML = " "+day+" d "+hour+" hr "+minute+" min "+second+" sec ";
}
