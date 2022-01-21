//The asking user to enter his/her name as input.

var YourName = 
prompt("What is your name?");

//The asking user to enter his/her gender as input.

var YourGender = 
prompt("Your gender [Male] OR [Female] ?");

//The asking user to enter his/her age as input.

var YourAge = 
prompt("Enter your age please.\nYou must be over 18 years old.");

// Exception if an age error occurs.

if(YourAge <= 0) {
    alert("Error: your age is equal 0 OR less");
} else{
    alert("Next");

}

//The asking user to confirm if he wants to skip the welcoming message.

var Skip =
confirm("Do you want to skip?");


//welcoming message with the informetion if NOT skip

if (Skip == false){

    if (YourGender.toUpperCase() == "MALE" ){
        alert("Hallo Mr." + YourName );
    } else if (YourGender.toUpperCase() == "FEMALE"){
        alert("Hallo Ms." + YourName );

    } else {
        alert("Hallo" + YourName );
    }

}



