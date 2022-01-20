// call: node collatz.js <argument>

function collatzSteps() {
    let stepCount = 0;
    let rangeLimit = parseInt(process.argv[2])
    // positive numbers
    if (rangeLimit < 1) return    

    // to start at 2
    while (rangeLimit !== 1) {
        //even calc
        if (rangeLimit % 2 === 0) {  
            rangeLimit = rangeLimit/2; 
            stepCount++
        } else { // odd calc
            rangeLimit = rangeLimit*3 +1;
            stepCount++
        }
    }
    // no. of steps
    return stepCount
}
console.log(collatzSteps())
