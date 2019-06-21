function onSignIn(googleUser)
{
    //var profile=googleUser.get();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $(".")
    $("#pic").attr('src',googleUser.getimageUrl());
    $("#email").text(googleUser.getEmail());
}


function signOut()
{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( function(){
        alert("Successfully logged out.");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    })
}
$(document).ready(function(){
     
    // client id of the project

    var clientId = "826884779174-pva7uaslnmn89qtfvqgq3k59dch6sbk2.apps.googleusercontent.com";

    // redirect_uri of the project

    var redirect_uri = "http://localhost";

    // scope of the project

    var scope = "https://www.googleapis.com/auth/drive";

    // the url to which the user is redirected to

    var url = "";


    // this is event click listener for the button

    $("#login").click(function(){

       // this is the method which will be invoked it takes four parameters

       signIn(clientId,redirect_uri,scope,url);

    });

    function signIn(clientId,redirect_uri,scope,url){
     
       // the actual url to which the user is redirected to 

       url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
       +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
       +"&access_type=offline";

       // this line makes the user redirected to the url

       window.location = url;




    }



});
