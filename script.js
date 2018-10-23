var links = document.getElementsByTagName("a");

/*Basic loop*/

for (i=1; i<= links.length; i++) {
    console.log("This is link number " + i);
}
document.write("All links looped");

alert("Yes");

/*Function structure*/
function getAverage (a,b,c) {
    var average = (a + b + c) / 3
    return average;
 }

 var theResult = getAverage(3, 24, 9);
 console.log("The result of this is " + theResult);

 var oneString="Twoja twarz brzmi znajomo";

 if (oneString.indexOf("ble") === -1) {
console.log("This word is not here");
 }
 
/*Creating an array directly*/
var thingsToDo = ["cooking", "cleaning", "ironing"];

/*Creating an empty array and adding values*/
var clothes = new Array();
clothes[0] = "skirt";
clothes[1] = "jeans";
clothes[2] = "blouse";

 /*Creating an object*/
 var myMobile = new Object();
 myMobile.battery = "very good one";
 myMobile.screenSize = 6;

 console.log(myMobile.screenSize);

 myMobile.ring = function() {
     console.log("drrrr, drrrrrnnn, drrrn");
 };

 /*Creating an object shortcut*/
 var mySecondMobile = {
     battery: "poor one", 
     screenSize: 4, 
     ring: function() {
    console.log("beeep, beeep, beeep");
} ,
logBattery: function() {
    console.log("the battery of this mobile is a " + this.battery);
}
};
/*Construction function, name variables starting with capital letter*/
var Mobile = function(battery, screenSize, ring) {
this.battery = battery;
this.screenSize = screenSize;
this.ring = function() {
    console.log("drrrr, drrrrrnnn, drrrn");
};
}

var mobile1 = new Mobile("average one", 3, "ding dong");

