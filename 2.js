function LookAndSay(start, n) {
    let result = start.toString();
    for(let i=0; i<n; i++){
        result = sayOnce(result);
    }

    return result;
}

function sayOnce(numStr){
    const nums = [];
    let count = 0;
    let current = numStr[0];
    for(let i=0; i<numStr.length; i++){
        if(current != numStr[i]){
            nums.push(count);
            nums.push(current);
            count = 0;
        }
        current = numStr[i];
        count++;
    }

    nums.push(count);
    nums.push(current);

    return nums.join('');
}

console.log(LookAndSay(11, 3))