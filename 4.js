const blockCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPosition = 0;
let isHolding = false;
function compute(instructions) {
    instructions
        .split('')
        .forEach(ins => {
            switch(ins){
                case 'P':
                    pickup();
                    break;
                case 'M':
                    move();
                    break;
                case 'L':
                    lower();
                    break;
                default:
                    // do nothing.
            }
        });
    return blockCount
        .map(n => n.toString(16).toUpperCase())
        .join('');
}

function pickup(){
    currentPosition = 0;
    isHolding = true;
}

function move(){
    if(currentPosition < 9)
        currentPosition++;
}

function lower(){
    if(!isHolding)
        return;
    
    if(blockCount[currentPosition] >= 15)
        return;
    
    blockCount[currentPosition]++;
    isHolding = false;
}

console.log(compute('PLPLPLPLPLPLPLPLPLPL'))