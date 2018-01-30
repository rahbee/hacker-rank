const charMap = ['0', 'a', 't', 'l', 's', 'i', 'n'];
function convert(num) {
    return num
        .toString(7)
        .split('')
        .map(c => parseInt(c))
        .map(n => charMap[n])
        .join('');
}

console.log(convert(7792875));