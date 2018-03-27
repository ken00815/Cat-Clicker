//config
var catObject = [
  kitty = new Cat("Kitty","img/cat1.jpg"),
  chewy = new Cat("Chewy","img/cat2.jpg"),
  jetske = new Cat("Jetske","img/cat3.jpg"),
  angry = new Cat("Angry","img/cat4.jpg"),
  wow = new Cat("Wow","img/cat5.jpg")
]

//initial UI
function createCatList() {

    $('#cat__list').append('<h1>The Name List of The Cats</h1>');
    $('#cat__list').append('<li id="nameList"></li>');

    for (var i = 0; i < catObject.length; i++) {
      var full = catObject[i].name.toLowerCase();
      $('#nameList').append('<ul id="cat'+ full +'" onclick="'+ full +'.render();">' + catObject[i].name + '</ul>');
    };
}

//change the status of cat (show/hide)
function reset() {
  for(var i = 0; i<catObject.length; i++) {
    catObject[i].running = 0;
  };
}

//start the app
createCatList();
