<?php
// selection sort

// lets go
function selection_sort($list = array()){
    // some validation
    if(!is_array($list))
        return false;
    
    for($i = 0; $i < count($list); $i++){
        $min = $i; // assume 'i' is the min for now
        for($j = $i+1; $j < count($list); $j++){ // now check if there is any other element lesser than i
            $min = $list[$j] < $list[$min] ? $j : $min;
        }
        $temp = $list[$min];
        $list[$min] = $list[$i];
        $list[$i] = $temp;
    }
    // return the sorted array
    return $list;
}


$list = [7,2,5,3,8,1];
$sorted_list = selection_sort($list);
echo implode(",", $sorted_list);
?>
