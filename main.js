var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }

}
//var userPrompt = prompt('Please enter the name for your reservation');
var userPrompt;
// function to lookup table names regardless of casing;
//-------------------------------------------------------
var lookupTable = function(t) {

  //loop the key names for table names
  for (i=0 ; i< Object.keys(reservations).length; i++) {
  //check tablenames and function input both at lower case;
    if (t.toLowerCase() == Object.keys(reservations)[i].toLowerCase()) {
      return true;
    }

  }
 // returns false if no matches returned true
 return false;
}
//-------------------------------------------------------


// function to set reservation status (gets name as string and status in Boolean)
//-------------------------------------------------------
var reservationStatusSet = function(n,setStat) {


  //loop the key names for table names
 for (ii=0 ; ii< Object.keys(reservations).length; ii++) {

    if (n.toLowerCase() == Object.keys(reservations)[ii].toLowerCase()) {

     reservations[Object.keys(reservations)[ii]].claimed= setStat;

    }

  }
}
//----------------------------------------------------


var getReservationStatus = function(rn) {

  for (iii=0 ; iii< Object.keys(reservations).length; iii++) {

    if (rn.toLowerCase() == Object.keys(reservations)[iii].toLowerCase()) {

     return reservations[Object.keys(reservations)[iii]].claimed;

    }

  }
}


// claimReservation
//-------------------------------------------------------

var claimReservation = function (u) {
    //Log the if the prompt matched a table

    if (!lookupTable(userPrompt)) {

   document.write("Hello "+"<b>"+userPrompt+"</b>"+", your name was not found but we have tables available so your reservation is aproved and claimed ");
   // alert("Nothing under your name but we have tables available so your reservation is aproved and claimed ");

    reservations[userPrompt]={ claimed: true};
  //  document.write(reservations);

  }

else if (getReservationStatus(u)) {


    document.write("Hello "+"<b>"+userPrompt+"</b>"+", your reservation has been already claimed");



   for (i=0 ; i< Object.keys(reservations).length; i++) {

    if (userPrompt.toLowerCase() === Object.keys(reservations)[i].toLowerCase()) {
    //  document.write(userPrompt.toLowerCase()+"="+Object.keys(reservations)[i].toLowerCase());
    //  document.write(Object.keys(reservations)[i]);

    }
   }

    //document.write(reservations);
  }

  else {
    reservationStatusSet(u,true)
    document.write("Welcome "+u+", you just claimed your reservation");
  }

}

//var userPrompt = document.getElementById("name").value ;

document.getElementById("checkBtn").onclick = function() {

userPrompt=document.getElementById("name").value;
if (userPrompt.length<2) {
document.write("name too short");
}
  else
{
claimReservation(userPrompt);
}
//  userPrompt = document.getElementById("name").value;
//  claimReservation(userPrompt);
};
