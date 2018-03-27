var Cat = function(name,url) {
  this.name = name;
  this.url = url;
  this.clicks = 0;
  this.running = 0;
};

Cat.prototype.render = function() {
  if(this.running ===0){

    reset();

    document.getElementById('button__container').innerHTML = "";

    //To get the correct object name
    var full = this.name.toLowerCase();

    $('#button__container').append('<h2>'+this.name+'</h2>');
    $('#button__container').append('<p id="click__count">Click-counts: '+this.clicks+'</p>');
    $('#click__count').text("Click-counts: "+ this.clicks);
    $('#button__container').append('<button id="button' + this.name + '"  onclick="' +full+ '.onclick()"><img src='+this.url+'></button>');
    this.running = 1;
  }else {
    reset();

    document.getElementById('button__container').innerHTML = "";
  }
};

Cat.prototype.onclick = function() {
  this.clicks++;
  $('#click__count').text("Click-counts: "+ this.clicks);
};
