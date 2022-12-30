//Functions

    // Function - No input
    function farewell(){
    console.log(`Bye`);
    console.log(`Byebye`);
    console.log(`See you`);
    console.log(`Later!`);
    }
    farewell();

    console.log('**********************');

    //Function - With input
    function greetings(name){
    console.log(`Hi ${name}`);
    console.log(`Hello ${name}`);
    console.log(`Hey ${name}`);
    console.log(`Welcome ${name}`);
    }
    greetings();

    console.log('**********************');

    //Function - Multiple Arguments
    function repeat(breath, brthTimes){
        for(let i = 0; i < brthTimes; i++){
            console.log(breath)
        }
    }
    repeat("breath", 4);

    console.log('**********************');

    function rptPhrase(phrase, phrsTimes){
        let totalPhrase = '';
        for(let i = 0; i < phrsTimes; i++){
            totalPhrase += phrase;
        }
        console.log(totalPhrase);
    }

    //Function - Return
    function howManyFriends(friends){
        if (friends <= 5){
            return 'You are lonely.';
        }
        else if (friends >= 6){
            return 'You have a lot of friends.';
        }
        return "What're you saying?"  
    }

    function sumArray(x){
        let total = 0;
        for(let i = 0; i < x.length; i++){
            total += x[i];
        }
        return total;
    }

    //Function Expressions
    const add = function (x,y) {
    return x + y;
    }
    
    //Higher Order Functions
    function callTwice(func) {
        func();
        func();
    }

    function laugh(){
        console.log('HAHAHAHAHAHEHHAEHEAHS');
    }
    callTwice(laugh);

    console.log('**********************');

    //Factory Function
    function isBetweenFunc(min, max) {
        return function (num) {
            return num >= min && num <= max;
        }
    }
    // isBetweenFunc() -- will show the 'function (num)' inside;
    // const middle = isBetweenFunc(min,max) -- store the func in a variable;
    // middle(num) -- will give you true (if it's between) or false (if it isn't between);

    //Functions as Methods
    const calculator = {
        PI: 3.14159,
        multply: function(num1, num2){ //Function in an object - Long way;
            return num1 * num2;
        },
        square(num){ //Function in an object - Short way;
            return num * num;
        },
        cube(num){
            return num ** 3;
        }
        //calculator.key - call the key/value of the object (use "()" in the end to functions);
    }

    //This
    const cat = {
        name: 'Kiki',
        color: 'Grey',
        breed: 'Scottish fold',
        meow(){
            console.log(`${this.name} says 'MEOWWWWWWWWWW'`); //It refers at the key with that name in the object;
        }
    }    

    //Try/Catch
    try {
        hello.toUpperCase(); //won't work, because 'hello' doesn't exist;
    }
    catch {
        console.log('ERROR!!')
    }
    console.log("It's working!!") //even with the error, the rest of the code will run;

    console.log('**********************');

    function yell(msg) {
        try{
            console.log(msg.toUpperCase().repeat(3));
        }
        catch(e){
            console.log(e);
            console.log('Please, pass a string!');
        }
        //if input is a number, will run "catch";
    }