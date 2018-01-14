
(function(){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) {
var content = names[name];
var character = content.charAt(0);
 character= character.toLowerCase();  

  if (character == 'j') {
     byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}


})();

