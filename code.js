///Function Chaining 





var obj = function() {

	this.i = 0;

	this.add = function(item) {

		this.i +=item;

		//return this;

		// return something from here which has all the functions which we need to chain.  

	}

	this.subtract = function(item){

		this.i -=item;

		//return this;

	}

	this.printItToConsole = function(){

		console.log(this.i)

	}

}



	var x = new obj();

	x.add(4);

	x.subtract(2);

	x.add(3);



	x.printItToConsole()

	console.log(x.add(2).subtract(1));



// Diff between normal function and arrow function with example 





function greetWithRegularFunction() {

	console.log(this);

}



const greetWithArrowFunction = () => {

	console.log(this);

}



greetWithRegularFunction();

greetWithArrowFunction();



const myobject = {

	a:1, 

	b:2,

	method: function(){

		console.log(this, ' inside method');

	},

	method2: ()=> {

		console.log(this,' arrow ')

	}

}



myobject.method();

myobject.method2();




new  greetWithRegularFunction() // works fine 

new greetWithArrowFunction() // type error with this 





Prototypal Inheritance 









Example 1:  Inherit properties from its prototype



let shape = {

	height: '20mm',

	width: '10mm',

}



let circle = {

	radius :'2mm'

}

let square = {

	name: 'square'

}



square.__proto__ = shape;

circle.__proto__ = shape;



console.log(circle.width);



Another example :  





let netFlixuser ={

	showAccess: true

	ads: true,

}



let premiumUser = {

	ads: false

}



premiumUser.__proto__ = user;



console.log(premiumUser.showAccess)





Example 2 : Inherit methods from its prototype 



let netFlixuser ={

	email: 'me@kiran.cc',

	showAccess: true,

	get accountInfo() {

		return `${this.email}`

	},

	set accountInfo(value){

		this.email = value;

	}

}



let premiumUser = {

	__proto__:netFlixuser,

	ads: false

}



console.log(premiumUser.accountInfo)

premiumUser.accountInfo = 'devsnest@kiran.cc'



console.log(premiumUser.accountInfo)





Example 3 : Three tier inheritance 



let netFlixuser ={

	email: 'me@kiran.cc',

	showAccess: true,

	get accountInfo() {

		return `${this.email}`

	},

	set accountInfo(value){

		this.email = value;

	}

}



let premiumUser = {

	__proto__:netFlixuser,

	ads: false

}



let familyMembership = {

	__proto__: premiumUser,

	multipleDevices: true

}



let me = {

	__proto__:familyMembership,

	email:'personalemail@kiran.cc'

}



console.log(me.accountInfo);





Example 4 : using prototype with function constructor to give some new properties 



function Person(first, last, age, eyecolor) {

	this.firstName = first;

	this.lastName = last;

	this.age = age;

	this.eyeColor = eyecolor;

}

Person.prototype.occupation = 'Doctor';



const myfather = new Person('John','fill',34,'green');



myfather.occupation = 'Engineer';



const mymother = new Person('Johnathan','Nikoloas',34,'blue');



console.log(myfather.occupation)

console.log(mymother.occupation)



console.log(Object.getPrototypeOf(myfather)





Classes and SubCLasses 



class Person {

	constructor(first, last,age,eyeColor) {

		this.first = first;

		this.last = last;

		this.age = age;

		this.eyeColor = eyeColor;

	}

	fullName() {

		return `${this.first} ${this.last}`

	}

}



let myFather = new Person('John','fill',34,'green');



let myMother = new Person('Johnathan','Nikoloas',33,'blue') 



console.log(myFather.fullName())

console.log(myMother.fullName())





How Javascript compiles classes? 



function Person(first, last,age,eyeColor) {

		this.first = first;

		this.last = last;

		this.age = age;

		this.eyeColor = eyeColor;

	}





Person.prototype.fullName = function() {

	return `${this.first} ${this.last}` 

}



console.log(myFather.fullName())

console.log(myMother.fullName())





Sub classes 





In existing code add this 





class Kid extends Person {

	constructor(first,last,school) {

		super(first,last);

		this.school = school;

	}

}



let myKid = new Kid('fuddu','bacha','PPS');

console.log(myKid)







