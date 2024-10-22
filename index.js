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