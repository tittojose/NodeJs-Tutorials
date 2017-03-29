var events = require('events');
var util = require('util')

var Person = function(name){
  this.name = name;
};



util.inherits(Person, events.EventEmitter);

var james = new Person('james');

var dave = new Person('dave');

var mary = new Person('mary');

var people = [james, dave, mary];

var onPersonSpeaks = function(name,msg){
  console.log(name + " said "+ msg);
};

// people.forEach(function(person){
//   person.on('speak', onPersonSpeaks);
// });

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name +" - "+msg);
  });
});

james.emit('speak', 'hello');


//
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(msg){
//   console.log(msg);
// })
//
// myEmitter.emit('someEvent','the event was emitted');
