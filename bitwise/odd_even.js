// odd or even

// declarations and functions
function odd_even(num){
	return (num & 1);
}

// lets go
console.log(odd_even(5) ? "ODD" : "EVEN");
console.log(odd_even(62) ? "ODD" : "EVEN");