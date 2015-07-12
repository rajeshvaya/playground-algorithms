// bubble sort

// declarations and functions
function bubble_sort(list){
	for(i=0; i<list.length; i++){
		for(j=0; j<list.length-i; j++){
			if(list[j] > list[j+1]){
				temp = list[j];
				list[j] = list[j+1];
				list[j+1] = temp;
			}
		}
	}
	return list;
}

// lets go
list = [7,2,8,3,6,4,1,9];
console.log(list);
console.log(bubble_sort(list));