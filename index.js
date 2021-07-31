// function Person(name , exp){
//     this.name = name;
//     this.exp = exp;

// }

// var Manish = new Person('manish','2')

// console.log(Manish.me, Manish.exp)
// console.log(Manish);

// var people = ['manish', 'goku' , 'vegeta' , 'goten' , ""];

// people.forEach((person,index) => {
//      console.log(person , index)
//  })

// var another_arr = people.map((person , index)=>{
//     return person + ' great day'
// })

// var filter_fn = people.filter(person=>{
//     return !!person
// })

// console.log(another_arr)
// console.log(filter_fn)
// console.log(people)

// var index = people.indexOf('100');
// console.log(index)

// var joins = people.join(':');
// console.log(joins)

// var slice = people.slice(0,3)
// console.log(slice)

// var fruit = ['manish', { key:"objvalue" , lists: [1,2,3,4]}];

// const val = fruit[1].lists[3]
// console.log(val)

// var text = 'this is a string'
// const split = text.split("a");
// console.log(split)

// const user = {
//     "id":10,
//     "age":21,
//     "color": "blue"
// }

// var keys = Object.values(user);
// console.log(keys, typeof keys)

 var decon = function(callback,next){
     return function(value){
         callback (next) (value)
     }
 };

 var first = function(p2){
     return function(n1){
         p2(n1)
     }
 }

 var second = function(p3){
     console.log('printing=>',p3)
 }

 var third = decon(first,second);
 third('pointer pe pointer');