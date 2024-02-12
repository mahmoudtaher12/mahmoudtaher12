var user=[{username:"mahmoud",password:"lool1"},
{username:"mahmoud2",password:"lool2"},
{username:"mahmoud3",password:"lool3"},
{username:'mahmoud11', password:"L@@l123"}
]
function login(){
var usr = document.getElementById('unpuser').value;
var pas = document.getElementById('inppass').value;
if(usr==""|| pas==""){
    alert('fill data plz')
    return;
  }
  for(let i=0;i<user.length;i++){
  if(user[i].username==usr&&user[i].password==pas){
    alert('login succesfully');
    window.location.href="cart .html"
    return;
  }

  
}{
    alert('username or password not valid')
}
  
}
function signup(){
    var letters = /[a-zA-Z]/;
    var numbers=/\d/;
    var special_char=/[!@#$%^&*()?]/;
    var user_name = document.getElementById('userid').value;
    var pass_word = document.getElementById('passid').value;
    var age = document.getElementById('agee').value;
    // var rad = document.getElementById('red1').value;
    var phonenum = document.getElementById('phone').value; 
    if(age<18 || age>60)   {
      alert('age between 18 and 60')
    }
      if(phonenum.length!=11){
        alert('phone num must 11')
        return;
      }
    
      if (user_name !== "" && pass_word !== "") {
        if(letters.test(pass_word)&& numbers.test(pass_word)&&special_char.test(pass_word)&& pass_word.length>=8)               
        {
            var mego = {username:user_name,password:pass_word};
        user.push(mego)
         console.log(user);
         alert('sign up complte');
         return true;
         }
        else
        {
          alert(' weak Password please ');
          return false;
        }
        
       } else {
         alert('fill data');
         return false;
       }
       
    }
    function forget(){
        var userforget = document.getElementById('userid1').value;
        var passforget = document.getElementById('passid1').value;
        let r=false;
        if(userforget=="" ||passforget==""){
            alert("Check empty Filde");
        }
        else
        {
            for(let i=0; i<user.length;i++) 
            {
                if(user[i].username==userforget)
                {
                    user[i].password = passforget;
                    alert("Changed Succseefylly");
                    r = true;
                    console.log(user)
                    break;
                    
                }
            }
        }
    }


