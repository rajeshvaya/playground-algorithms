// merge sort

// declarations and functions
function merge_sort(list){
	// check if array has >= 2 elements
	if(list.length < 2)
		return list;

	mid = Math.floor(list.length / 2);
	left = [];
	right = [];

	for(i=0; i<mid; i++){
		// prepare the left array
		left.push(list[i]);
		
	}

	for(i=mid; i<list.length; i++){
		// prepare the right array
		right.push(list[i]);
	}
	console.log([left, right]);
	return merge(merge_sort(left), merge_sort(right));

}

function merge(left, right){
	result = [];
	i = 0;
	j = 0;

	while(i < left.length && j < right.length){
		if(left[i] <= right[j]){
			result.push(left[i]);
			i++;
		}

		if(left[i] > right[j]){
			result.push(right[j]);
			j++;
		}
	}

	while(i < left.length){
		result.push(left[i]);
		i++;
	}

	while (j < right.length){
		result.push(right[j]);
		j++;
	}
	

	return result;
}

//lets go
list = [7,2,8,3,6,4,1,9];
console.log(list);
console.log(merge_sort(list));