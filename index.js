//EMAIL JS JS CODE
function validate(){
    let email = document.querySelector('.email');
    let sendBtn = document.querySelector('.normal1');

    sendBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(email.value == ""){
            emptyerror();
        }
        else{
            sendmail(email.value);
            success();
        }
    });
}

validate();

function sendmail(email){
    emailjs.send("service_jxfymrd","template_zw7phns",{
        to_name: email,
        
        });
}

function emptyerror(){
    swal("Oh No.....", "Email field cannot be empty!", "error");
}

function success(){
    swal("Good job!", "Email sent successfully", "success");
}