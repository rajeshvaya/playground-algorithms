// circular binary search

// declarations and functions
function circular_binary_search(list, x){
	low = 0;
	rear = list.length -1;
	while(low <= rear){
		mid = Math.floor((low + rear) / 2);
		
		if(list[mid] == x)
			return mid;

		// check if right side of the mid is already sorted
		if(list[mid] <= list[rear]){
			if(x > list[mid] && x <= list[rear])
				low = mid + 1;
			else
				rear = mid - 1;
		}

		if(list[mid] >= list[low]){
			if(x < list[mid] && x >= list[low])
				rear = mid - 1;
			else
				low = mid + 1;
		}
	}
	return false;
}


// lets go
list = [10,12,14,16,20,22,1,4,6,7,8,9]; // circular sorted
result = circular_binary_search(list, 14);
console.log(result === false ? "Item not found" : "Item found at position : " + result);