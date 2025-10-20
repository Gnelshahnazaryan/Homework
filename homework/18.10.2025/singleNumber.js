var singleNumber = function(nums) {
  
	let size = nums.length;
	let result = 0;

	for(let i 0; i < size; ++i){

		result ^= nums[i];

	}

	return result;

};
