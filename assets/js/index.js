function reg() 
{
  var first_name = document.getElementById("fname");
  var last_name = document.getElementById("lname");
  var email = document.getElementById("email");
  var password = document.getElementById("pwd");

  var firstname_status = false
  var lastname_status = false
  var email_status = false
  var password_status = false


  if (first_name.value == "") {
    setError(first_name,"First Name cannot be empty")
    }
  else{
      firstname_status=true
      setSuccess(first_name)
    }
  

  if (last_name.value == "") {
    setError(last_name,"Last Name cannot be empty")
    }
  else{
      lastname_status=true
      setSuccess(last_name)
  }
  
  if (email.value == "" ) {
      setError(email,"Email cannot be empty")    
    }
  else{
        email_status = true
        setSuccess(email)
    }

  if (password.value == ""){
        setError(password,"Password cannot be empty")      
      }else{
          password_status = true
          setSuccess(password)
        }

  if (firstname_status && lastname_status && email_status && password_status)
  {

        alert("Thanks for registering");
        var link = "/";
        window.location.href = link;
  }


}

 function setError(u, msg) 
{
  var parentBox = u.parentElement;
  parentBox.className = "input-field error"; 
  var span = parentBox.querySelector("span");
  span.innerText = msg;
}

function setSuccess(u) {
  var parentBox = u.parentElement;
  parentBox.className = "input-field success";
 
}

