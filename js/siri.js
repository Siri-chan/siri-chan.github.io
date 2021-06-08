window.onload = () => {
    const d = new Date();
    function formatDate(date) { 
        var year = date.getFullYear();
        var month = date.getMonth() + 1; // In the wacky land of JavaScript, months start at 0, not 1;
        var day = date.getDate();
        var result = year + pad(month) + pad(day);
        return result;
    }
    function pad(value, padding) {
        padding = padding || 2;
        var string = value.toString();
        while (string.length < 2) {
            string = '0' + string;
        }
        string = "-" + string;
        return string;
    }
    var dateText = "Site loaded @: " + formatDate(d)
    var htmlFoot = "<footer> \
            <div class=\"footr\"> \
                <div class=\"row\"> \
                    <div class=\"col\"> \
                        <p>  Created by Siri</p></div> \
                    <div class=\"col\"> \
                        <div id=\"i\"></div> \
                    </div> \
                    <div class=\"col\"></div> \
                    <div class=\"col\" style=\"text-align: right;\"><a href=\"resources.html\">Resources  </a></div> \
                </div> \
            </div> \
        </footer>" 
        //feel free to put your name in the footer
    document.getElementById("f").innerHTML = htmlFoot;
    var htmlDate = "<p>"+ dateText + "</p>"
    console.log(dateText);
    //document.getElementById("i").innerHTML = htmlDate;
    //sorry mobile users i'll fix this to not be shit later
    var htmlHead = "<header> <div class=\"headr\"> <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\"> <ul class=\"navbar-nav\"> \
    <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li> \
    <a class=\"navbar-brand\" href=\"index.html\"> <img src=\"./img/logo.svg\" alt=\"logo\" style=\"width:38px;\"> </a> \
    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"index.html#\">Home</a> </li> \
    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"index.html#about\">About</a> </li> \
    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"code.html\">Code</a> </li> \
    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"write.html\">Writings</a> </li> \
    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"music.html\">Music</a> </li> \
    <li class=\"nav-item\"> <a class=\"nav-link\" href=\"elsewhere.html\">Elsewhere</a> </li> \
    <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</li> </ul> </nav> </div> </header>"
    document.getElementById("h").innerHTML = htmlHead;
}
function e_noMusic(){
    alert("Nothing here, still in production.");
    return;
}