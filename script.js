function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    // Data verification
    if (principal == "") {
        alert("Please enter a principal amount.");
        document.getElementById("result").innerHTML="";
        document.getElementById("principal").focus();
    }
    else if(principal <= 0) {
        alert("Please enter a principal value greater than zero.")
        document.getElementById("result").innerHTML="";
        document.getElementById("principal").focus();
    }
    
    // If the data passes the verification, output is printed.
    else 
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive interest of "+interest+",\<br\>in the year "+year+"\<br\>"
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
