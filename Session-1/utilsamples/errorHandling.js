class NotValidAgeError extends Error{

    constructor(args){
        super(args);
        this.name="Invalid Age";
    }
}

function checkAge(){
    let age=17;
    if(age>=18)
    {
        console.log("Valid for voting");
    }
    else{
        throw new NotValidAgeError("Not Valid for Voting");
    }
}
function display(){
    try {
        checkAge();
    } catch (error) {
        console.log(error);
    }
    console.log("Program working fine")
}
display();