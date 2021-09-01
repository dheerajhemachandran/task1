

$(window).on("resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 760) {
            $("#join").removeClass("btn-primary").addClass("btn-outline-dark move-up");
    }
    if (viewportWidth >= 760) {
            $("#join").addClass("btn-primary").removeClass("btn-outline-dark move-up");
    }
});

$(window).on("load", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 760) {
            $("#join").removeClass("btn-primary").addClass("btn-outline-dark move-up");
    }
    if (viewportWidth >= 760) {
            $("#join").addClass("btn-primary").removeClass("btn-outline-dark move-up");
    }
});

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

function togglefunc(){
    var signin =document.getElementById('signin')
    if(signin.innerHTML=="sign in")
        {
            document.getElementsByClassName("smsize")[1].innerHTML='Sign in'
        document.getElementsByClassName("smsize")[2].style.display = 'none'
        document.getElementsByClassName("smsize")[3].style.display = 'none'
        document.getElementsByClassName("smsize")[6].style.display = 'none'
        document.getElementsByClassName("smsize")[7].innerHTML = 'Sign in'
        document.getElementsByClassName("smsize")[10].style.display = 'block'
        document.getElementById("question").innerHTML = "Dont't have an account?"
        document.getElementById("signin").innerHTML = "create account"
}
     else
     {
        document.getElementsByClassName("smsize")[1].innerHTML='Create account'
        document.getElementsByClassName("smsize")[2].style.display = 'inline-block'
        document.getElementsByClassName("smsize")[3].style.display = 'inline-block'
        document.getElementsByClassName("smsize")[6].style.display = 'inline-block'
        document.getElementsByClassName("smsize")[7].innerHTML = 'creat account'
        document.getElementsByClassName("smsize")[10].style.display = 'none'
        document.getElementById("question").textContent = "Already have an account?"
        document.getElementById("signin").innerHTML = "sign in" 
        }  
}

function joinfunc()
{
    var join=document.getElementById('join')
    if(join.innerHTML=='join group')
        join.innerHTML='leave group'
    else if(join.innerHTML=='leave group')
        join.innerHTML='join group'
}