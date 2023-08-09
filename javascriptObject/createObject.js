// Object 
var fees = { };		// Declaring empty object Using Object Literal
fees['a'] = 10;	// initializing 
fees['b'] = 20;
fees['c'] = 30;
/*
fees.a = 100;
fees.b = 200;
fees.c = 300;
*/
console.log(fees['a']);


// Declaring empty object and initializing 
var obj={a:10,b:20,c:30,total:function(){return 10+20+30}}
console.log(obj)
console.log(obj.total())


// Declaring empty object Using Object Constructor
var object_name = new Object( );
object_name.a=20
object_name["b"]=40
console.log(object_name,object_name.b)