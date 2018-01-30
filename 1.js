function find(list, sublist) {
    const listArr = convertToString(list);
    const sublistArr = convertToString(sublist);
    return getSubarrayIndex(listArr, sublistArr);
}

function convertToString(head) {
    if(!head)
        return [];
    let p = head;
    const array = [];
    while(true){
        array.push(p.val);
        p = p.next;
        if(!p)
            break;
    }

    return array;
}

function getSubarrayIndex(mainArray, subArray) {
    for (let i = 0; i < mainArray.length; i += 1) {
      for (let j = 0; j < subArray.length; j += 1) {
        if (mainArray[i + j] !== subArray[j]) {
          break;
        }
        if (j === subArray.length - 1) {
          return i;
        }
      }
    }
    return -1;
  };




const x = {
    val: 23,
    next: {
        val: 3,
        next: null
    }
};
const y = {
    val: 232,
    next: null
};
console.log(find(x, y));