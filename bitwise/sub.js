// subtraction

// declarations and functions
function sub(num1, num2){
	// just negate the num2 and  then send it to add (like 3 - 2 becomes 3 + (-2))
	// since the negate return a value less than the result we need to add back 1
	
	num2 = ~num2; // if the value was 3, it will return -4
	num2 = add(num2, 1); // this will make -4 to -3; so now we are good to go for actual substraction

	return add(num1, num2);

}

function add(num1, num2){
	while(num2){
		carry = num1 & num2;
		num1 = num1 ^ num2; // apply the XOR operator to get the sum (it leaves out the carry)
		num2 = carry << 1; // shift the carry and try to add that to num1 again
	}
	return num1;
}

// declarations and functions
function odd_even(num){
	return (num & 1);
}


//lets go
console.log(sub(7,2));

// lets go
console.log(odd_even(5) ? "ODD" : "EVEN");
console.log(odd_even(62) ? "ODD" : "EVEN");