// var a=10
// var b=20
// console.log(`${a+b}`)

function myfun (say){
    return say;
}
console.log(`${myfun("Hello")}`);


// There are 5 movie tickets Each Rs 200 and if you buy 5 tickets get discount Rs. 50 Each
// There are 5 movie tickets Each Rs 200 and if you buy less than 5 tickets get discount Rs. 0 Each
// var noofticket = 5;
// var buyticket = 4;
// var eachprice = 200;
// var disprice = 50;
// // function ticket(theory, ...rest) {}
// function ticket (theory, nticket, eprice, bticket, dprice){
//     if(bticket < 5){
// 	dprice = 0;
// 	return `${theory[0]}${nticket}${theory[1]}${eprice}${theory[2]}${bticket}${theory[3]}${dprice}${theory[4]}`
// 	} else {
// 			return `${theory[0]}${nticket}${theory[1]}${eprice}${theory[2]}${bticket}${theory[3]}${dprice}${theory[4]}`
					
// 		}
// }
			
// console.log(ticket`There are ${noofticket} movie tickets Each Rs ${eachprice} and if you buy ${buyticket} tickets get discount Rs. ${disprice} Each`);