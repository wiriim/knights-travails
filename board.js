// Chessboard
// lowest value = 0
// highest value = 7

function inRange(value){
    if (value >= 0 && value <= 7) return true;
    return false;
}

function isVisited(value, visited){
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        // Check each element for strict equality
        return arr1.every((element, index) => {
            return element === arr2[index];
        });
    };
    return visited.some(nestedArray => {
        return areArraysEqual(nestedArray, value);
    });
}

function printPath(start, end, allMoves){
    let find = [...end];
    let path = [];
    allMoves.forEach(array => {
        if (array[1].every((element, index) => element === find[index])){
            path.unshift(array[1]);
            find = [...array[0]];
        }
    });
    path.unshift(start)
    path.forEach(array => {
        console.log(array);
    });
}

//all possible moves:
//y+2, x+1
//y+1, x+2
//y-1, x+2
//y-2, x+1
//y-2, x-2
//y-2, x-1
//y+1, x-2
//y+2, x-1
export function knightMoves(start, end){ // assumption: always valid value
    let isFound = false;
    let queue = [];
    let st = [...start];
    let visited = [st];
    let moves = isVisited(end, visited) ? 0 : 1;
    let startX = st[0];
    let startY = st[1];
    let tempQueue = [];
    let allMoves = [];
    if (inRange(startY + 2) && inRange(startX + 1) && !isVisited([startX+1, startY+2], visited)){
        queue.push([[...st], [startX+1, startY+2]]);
        visited.push([startX+1, startY+2]);
        allMoves.unshift([[...st], [startX+1, startY+2]]);
    }

    if (inRange(startY + 1) && inRange(startX + 2) && !isVisited([startX+2, startY+1], visited)){
        queue.push([[...st], [startX+2, startY+1]]);
        visited.push([startX+2, startY+1]);
        allMoves.unshift([[...st], [startX+2, startY+1]]);
    }

    if (inRange(startY - 1) && inRange(startX + 2) && !isVisited([startX+2, startY-1], visited)){
        queue.push([[...st], [startX+2, startY-1]]);
        visited.push([startX+2, startY-1]);
        allMoves.unshift([[...st], [startX+2, startY-1]]);
    }

    if (inRange(startY - 2) && inRange(startX + 1) && !isVisited([startX+1, startY-2], visited)){
        queue.push([[...st], [startX+1, startY-2]]);
        visited.push([startX+1, startY-2]);
        allMoves.unshift([[...st], [startX+1, startY-2]]);
    }

    if (inRange(startY - 2) && inRange(startX - 2) && !isVisited([startX-2, startY-2], visited)){
        queue.push([[...st], [startX-2, startY-2]]);
        visited.push([startX-2, startY-2]);
        allMoves.unshift([[...st], [startX-2, startY-2]]);
    }

    if (inRange(startY - 2) && inRange(startX - 1) && !isVisited([startX-1, startY-2], visited)){
        queue.push([[...st], [startX-1, startY-2]]);
        visited.push([startX-1, startY-2]);
        allMoves.unshift([[...st], [startX-1, startY-2]]);
    }

    if (inRange(startY + 1) && inRange(startX - 2) && !isVisited([startX-2, startY+1], visited)){
        queue.push([[...st], [startX-2, startY+1]]);
        visited.push([startX-2, startY+1]);
        allMoves.unshift([[...st], [startX-2, startY+1]]);
    }

    if (inRange(startY + 2) && inRange(startX - 1) && !isVisited([startX-1, startY+2], visited)){
        queue.push([[...st], [startX-1, startY+2]]);
        visited.push([startX-1, startY+2]);
        allMoves.unshift([[...st], [startX-1, startY+2]]);
    }

    while (!isVisited(end, visited)){
        while (queue.length != 0){

            let next = queue.shift();
            st = next[1];
            startX = st[0];
            startY = st[1];
            if (inRange(startY + 2) && inRange(startX + 1) && !isVisited([startX+1, startY+2], visited)){
                tempQueue.push([[...st], [startX+1, startY+2]]);
                visited.push([startX+1, startY+2]);
                allMoves.unshift([[...st], [startX+1, startY+2]]);
            }
        
            if (inRange(startY + 1) && inRange(startX + 2) && !isVisited([startX+2, startY+1], visited)){
                tempQueue.push([[...st], [startX+2, startY+1]]);
                visited.push([startX+2, startY+1]);
                allMoves.unshift([[...st], [startX+2, startY+1]]);
            }
        
            if (inRange(startY - 1) && inRange(startX + 2) && !isVisited([startX+2, startY-1], visited)){
                tempQueue.push([[...st], [startX+2, startY-1]]);
                visited.push([startX+2, startY-1]);
                allMoves.unshift([[...st], [startX+2, startY-1]]);
            }
        
            if (inRange(startY - 2) && inRange(startX + 1) && !isVisited([startX+1, startY-2], visited)){
                tempQueue.push([[...st], [startX+1, startY-2]]);
                visited.push([startX+1, startY-2]);
                allMoves.unshift([[...st], [startX+1, startY-2]]);
            }
        
            if (inRange(startY - 2) && inRange(startX - 2) && !isVisited([startX-2, startY-2], visited)){
                tempQueue.push([[...st], [startX-2, startY-2]]);
                visited.push([startX-2, startY-2]);
                allMoves.unshift([[...st], [startX-2, startY-2]]);
            }
        
            if (inRange(startY - 2) && inRange(startX - 1) && !isVisited([startX-1, startY-2], visited)){
                tempQueue.push([[...st], [startX-1, startY-2]]);
                visited.push([startX-1, startY-2]);
                allMoves.unshift([[...st], [startX-1, startY-2]]);
            }
        
            if (inRange(startY + 1) && inRange(startX - 2) && !isVisited([startX-2, startY+1], visited)){
                tempQueue.push([[...st], [startX-2, startY+1]]);
                visited.push([startX-2, startY+1]);
                allMoves.unshift([[...st], [startX-2, startY+1]]);
            }
        
            if (inRange(startY + 2) && inRange(startX - 1) && !isVisited([startX-1, startY+2], visited)){
                tempQueue.push([[...st], [startX-1, startY+2]]);
                visited.push([startX-1, startY+2]);
                allMoves.unshift([[...st], [startX-1, startY+2]]);
            }
        }
        moves++;
        queue = [...tempQueue];
        tempQueue = [];
        
    }
    
    if (isVisited(end, visited)){
        console.log(`=> Start: [${start}] End: [${end}]`);
        console.log(`=> You made it in ${moves} move(s)!  Here's your path:`);
        printPath(start, end, allMoves);
    }
}

// [0,0] [3,1]
// queue :

// 1: [ 
//     [[0,0], [1,2]], 
//     [[0,0], [2,1]] 
//     ]

// 2: [ 
//     [[2,1], [0,4]], 
//     [[2,1], [2,4]], 
//     [[2,1], [3,3]], 
//     [[2,1], [3,1]], 
//     [[1,2], [0,2]],
//     [[1,2], [1,3]],
//     [[1,2], [3,3]],
//     [[1,2], [4,0]],
//     ]

// [0,0], [2,1], [3,1]

// [0,0] [1,3]
// queue :

// 1: [ 
//     [[0,0], [1,2]], 
//     [[0,0], [2,1]] 
//     ]

// 2: [ 
//     [[2,1], [0,4]], 
//     [[2,1], [2,4]], 
//     [[2,1], [3,3]], 
//     [[2,1], [3,1]], 
//     [[1,2], [0,2]],
//     [[1,2], [1,3]],
//     [[1,2], [3,3]],
//     [[1,2], [4,0]],
//     ]

// [0,0], [1,2], [1,3]