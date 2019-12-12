
function reg(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dept = document.getElementById("dept").value;

    var str = name+email+dept+"0123456789";
    var result = "";

    for(i=0;i<10;i++)
    {
        result = result + str.charAt(Math.floor(Math.random() * str.length));
    }

    var un = name+dept.charAt(0);

    document.getElementById("user").value = un;
    document.getElementById("pass").value = result;
    //console.log(result);
}

