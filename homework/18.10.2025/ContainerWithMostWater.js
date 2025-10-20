var maxArea = function(height) {
	let start = 0;
    let end = height.length - 1;
    let max = 0;
    let CurrentArea = 0;

    while(start != end){

        CurrentArea = Math.min(height[start],height[end]) * (end - start);

        if(height[start] > height[end]){

            --end;

        }else{

            ++start;

        }

        if(CurrentArea > max){

            max = CurrentArea;

        }

    }

    return max;

};
