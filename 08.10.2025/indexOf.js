function my_indexOf(array,searchElem,fromIndex){

	for(let i = fromIndex; i < array.length; ++i){

		if(array[i] === searchElem){

			return i;

		}

	}
	
	return -1;

}


let arr = [1,3,5,4,7,2];

console.log(my_indexOf(arr,4,4));
