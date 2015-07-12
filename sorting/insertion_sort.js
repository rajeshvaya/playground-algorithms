// insertion sort

// declarations and functions
function insertion_sort(list){
	for(i=1; i<list.length; i++){
		orphan = list[i];
		j = i -1;

		while(j >=0 && list[j] > orphan){
			list[j+1] = list[j];
			j--;
		}

		list[j+1] = orphan;
	}
	return list;
}

// lets go
list = [7,2,8,3,6,4,1,9];
console.log(list);
console.log(insertion_sort(list));