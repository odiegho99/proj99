/*CV*/
function myFunction() {
  const message = document.getElementById("p05");
  message.innerHTML = "";
  let x = document.getElementById("demo5").value;
  try { 
    if(x == "")  throw "empty"; if(isNaN(x)) throw "not a number";  x = Number(x);  if(x < 48)  throw "not accepted";  if(x == 49)  throw 'accepted, click on the view button <a class="nav-link" href="/curriculumvitae.html"><button class="box41">View CV</button></a>';  if(x == 23449)  throw 'accepted, click on the view button <a class="nav-link" href="/curriculumvitae.html"><button class="box41">View CV</button></a>';  if(x == 36949)  throw 'accepted, click on the view button <a class="nav-link" href="/curriculumvitae.html"><button class="box41">View CV</button></a>';  if(x > 50)   throw "not accepted";
  }
  catch(person) {
    message.innerHTML = "Input is " + person;
  }
}
 