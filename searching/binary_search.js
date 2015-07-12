// binary search

// declarations and functions
function binary_search(list, x){
	low = 0;
	rear = list.length - 1;
	
	// search till splitting is done
	while(low <= rear){
		mid = Math.floor((low + rear) / 2);

		if(list[mid] == x)
			return mid;

		if(list[mid] > x)
			rear = mid - 1;

		if(list[mid] < x)
			low = mid + 1;

		console.log([low, mid, rear]);
	}
	return false;
}

function insertion_sort(list){
	for(i=1; i<list.length; i++){
		orphan = list[i];
		j = i - 1;
		while(j>=0 && list[j] > orphan){
			list[j+1] = list[j];
			j = j - 1;
		}
		list[j+1] = orphan;
	}
	return list;
}

// lets go
list = [7,2,8,3,6,4,1,9];
console.log(list);
list = insertion_sort(list);
console.log(list);

result = binary_search(list, 7);
console.log(result === false ? "Item not found" : "Item found at index : " + result);