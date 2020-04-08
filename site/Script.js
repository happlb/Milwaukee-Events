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
    makeList();

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


function addEmail(emailField) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField)) {
        alert("Added");
    } else {
        alert("You have entered an invalid email address!");
    }
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Added");
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}

function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ],
        // Make a container element for the list
        listContainer = document.createElement('div'),
        // Make the list
        listElement = document.createElement('ul'),
        // Set up a loop that goes through the items in listItems one at a time
        numberOfListItems = listData.length,
        listItem,
        i;

    // Add it to the page
    document.getElementsByClassName('eventList')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

