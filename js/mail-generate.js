function generateMail(){

    userName = document.getElementById("form_name").value()
    userEmail = document.getElementById("form_email").value()
    userSubject = document.getElementById("form_subject").value()
    userMessage = document.getElementById("form_message").value()
    mailLink = "mailto:rajputsahil.2204@gmail.com?from = " + userEmail + "&subject = " + userSubject + "&body = Hello " + userName + ", /n/n" + userMessage 

    console.log(mailLink)

    

}