// addition 

// declarations and functions
function add(num1, num2){

	// run a loop while there is no carry left on the num2
	while(num2){
		carry = num1 & num2; // get the carry
		num1 = num1 ^ num2; // sum the value with XOR
		num2 = carry << 1; // shift the carry with 1
	}
	return num1; // num1 will have the sum of num1 and num2

}

// lets go
console.log(add(25, 10));