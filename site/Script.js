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

var MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  fs = require('fs');

//Specify the Amazon DocumentDB cert
var ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];

//Create a MongoDB client, open a connection to Amazon DocumentDB as a replica set, 
//  and specify the read preference as secondary preferred
var client = MongoClient.connect(
'mongodb://<sample-user>:<password>@sample-cluster.node.us-east-1.docdb.amazonaws.com:27017/sample-database?ssl=true&replicaSet=rs0&readPreference=secondaryPreferred', 
{ 
  sslValidate: true,
  sslCA:ca,
  useNewUrlParser: true
},
function(err, client) {
    if(err)
        throw err;
        
    //Specify the database to be used
    db = client.db('emailList');
    
    //Specify the collection to be used
    col = db.collection('emailList-collection');

    //Insert a single document
    col.insertOne({'hello':'Amazon DocumentDB'}, function(err, result){
      //Find the document that was previously written
      col.findOne({'hello':'Amazon DocumentDB'}, function(err, result){
        //Print the result to the screen
        console.log(result);
        
        //Close the connection
        client.close()
      });
   });
});

