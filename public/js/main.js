document.addEventListener("DOMContentLoaded",  () => {

    const form = document.getElementById("form");

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        console.log('submit clicked!')

        const formData = { 
            name: name.value, 
            email: email.value,
            message: message.value }

        // localStorage.setItem("form", JSON.stringify(form));

        let request = new XMLHttpRequest();
        request.open('POST', '/');
        request.setRequestHeader('content-type', 'application/json')
        request.onload = function(){

            if (request.responseText == 'success') {
                alert('Message sent!')
                form.reset();
                
            } else {
                alert('An error has occurred.')
                
            }
        }

        request.send(JSON.stringify(formData))
        
        console.log(formData)
        
    });



}); //LOAD