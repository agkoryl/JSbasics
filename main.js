alert ("Welcome Jane Austen fans");

var welcomeText = document.getElementById("welcome");
welcomeText.innerHTML = "Wow wow it's changed";

/*Inserting an element*/

var newLi = document.createElement("li");
var newA = document.createElement("a");

var menu = document.getElementById("test-id").getElementsByTagName("ul")[0];
menu.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML = "JS inserted A";
newA.setAttribute("class", "navigation__element");

/*Insert beofre another element*/
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);

/* Remove an element*/
var parent = document.getElementById("test-id").getElementsByTagName("ul")[0];
var child = parent.getElementsByTagName("li")[0];

var removed = parent.removeChild(child);

/*Events*/
/*On clicking*/
var welcome = document.getElementById("welcome");
welcome.onclick = function(){
    alert("you clicked me");
};
/*On hover*/
welcome.onmouseover = function() {
   ("mouse hover function");
};
