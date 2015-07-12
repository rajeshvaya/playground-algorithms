// selection sort


// lets go
function sort(list){
    var min;
    var temp;

    for(i = 0; i < list.length; i++){
        min = i; // assume that 'i' is minimum
        for(j = i+1; j < list.length;  j++){
            min = list[j] < list[min] ? j : min; // check if the assumed 'i' as min was actually the min
        }
        // swap the places
        temp  = list[i];
        list[i] = list[min];
        list[min] = temp;
    }
    return list;
}; // end of sort()


// list of values
var list = [7,2,5,3,8,1];
console.log(sort(list));



