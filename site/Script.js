/*open defultopen tab on load*/
/*
 * pieces of code were taken from:
 * https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
 * https://www.w3schools.com/w3css/w3css_sidebar.asp
 */

window.onload = function () {
    startTab();
};

function startTab() {
    document.getElementById("defaultOpen").click();

}

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = '#f7a800';
    w3_close();
}

function w3_open() {
    document.getElementById("main").style.marginLeft = "30vw";
    document.getElementById("mySidebar").style.width = "30vw";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}


function addEmail(emailField) {
    alert("Added");
}