/*mygscripts.js*/ 
/*Join prayer group*/

function myFunction() {
  const message = document.getElementById("p05");
  message.innerHTML = "";
  let x = document.getElementById("demo5").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 24)  throw "not accepted";
    if(x == 25)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 26)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>'; 
    if(x == 27)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 28)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 29)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 30)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 31)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 32)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 33)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 34)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 35)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 36)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 37)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 38)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 39)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 40)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 41)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 42)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 43)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 44)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 45)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 46)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 47)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 48)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 49)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 50)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 51)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 52)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 53)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 54)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 55)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 56)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 57)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 58)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 59)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x == 60)  throw 'accepted, click on the join button <a class="nav-link" href="/tigfprayergroup.html"><button class="box41">JOIN</button></a>';
    if(x > 61)   throw "not accepted";
  }
  catch(person) {
    message.innerHTML = "Input is " + person;
  }
}

 