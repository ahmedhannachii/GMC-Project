var messageRef = firebase.database().ref('workshop');

function submitForm(){

   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var phone = document.getElementById('phone').value;
   var message = document.getElementById('textArea').value;
   saveForm(name,email,phone,message);
}

function saveForm(Name,Email,Phone,Message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: Name,
        email: Email,
        phone: Phone,
        message:Message,
    })
}

    document.getElementById('sub').addEventListener('click', submitForm);
    

$('#sub').click(function(){
      alert("Votre demande a bien été prise en compte");
      location.reload(true);
})
    