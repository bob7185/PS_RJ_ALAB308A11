let counter = 0;


function foo()
{
    counter++;
    return foo();
}


try{
    foo();
}
catch(err)
{
    console.log(err);
    console.log(counter);
}

// recursively flaaten the arrray. 
function flatten(arr) {
    const result = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            result.push(...flatten(element));
        } else {
            result.push(element);
        }
    });
    return result;
}
