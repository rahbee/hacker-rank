function validate(input) {
    const newline = String.fromCharCode(0x80);
    const escapedPipe = String.fromCharCode(0x81);
    const escapedTilde = String.fromCharCode(0x82);
    let convertedInput = input
        .replace(/~n/g, newline)
        .replace(/~|/g, escapedPipe)
        .replace(/~~/g, escapedTilde)
    if(convertedInput.indexOf('~') >= 0){
        return '0:0:0:format_error';
    }

    let arr = convertedInput.split(newline);
    arr = arr.slice(0, arr.length - 1);
    const recordCount = arr.length - 1;
    const headers = arr[0].split('|');
    let lastItem = headers[headers.length-1];
    let empty = 0;
    let maxField = headers.length - 1;
    for(let i=1; i<arr.length; i++){
        const item = arr[i];
        const a = item.split('|');
        if(a.length - 1 > maxField)
            maxField = a.length - 1;
        
        empty += a.filter(x => !x || x.length === 0).length - 1
    }

    if (maxField > headers.length - 1){
        lastItem = `${lastItem}_${maxField - headers.length + 1}`;
    }
    

    return `${recordCount}:${maxField}:${empty}:${lastItem}`;
}

console.log(validate('|name|address|~n|bappi|bankstown|~n'))