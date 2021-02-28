// Your code here
function mapToNegativize(array){
    let count = 0
    let newArray = []
    while (count < array.length) {
        newArray.push(-array[count])
        count++
    }
    return newArray
}

function mapToNoChange(array){
    let count = 0
    let newArray = []
    while (count < array.length) {
        newArray.push(array[count])
        count++
    }
    return newArray
    // return array
}

function mapToDouble(array){
    let count = 0
    let newArray = []
    while (count < array.length) {
        newArray.push(array[count]*2)
        count++
    }
    return newArray
}

function mapToSquare(array){
    let count = 0
    let newArray = []
    while (count < array.length) {
        newArray.push(Math.pow(array[count],2))
        count++
    }
    return newArray
}

function reduceToTotal(array,start = 0){
    let count = 0
    let total = start
    while (count < array.length) {
       total += array[count]
        count++
    }
    return total
}

function reduceToAllTrue(array){
    let count = 0
    let total = 0
    while (count < array.length) {
       if (array[count] != false){
           total++
       }
        count++
    }

    if(count === total){
        return true}else{
            return false
        }
}

function reduceToAnyTrue(array){
    console.log(array)
    let count = 0
    let total = 0
    while (count < array.length) {
       if (array[count] == true){
           total++
       }
        count++
    }

    if(total > 0){
        return true}else{
            return false
        }
}