<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $to = "pederneraleonardo.tec@gmail.com";
    $subject = "Nuevo mensaje desde tu web ESTUDIO JURÍDICO";
    $body = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";
    $headers = "From: $correo\r\nReply-To: $correo";

    if(mail($to, $subject, $body, $headers)){
        echo "¡Mensaje enviado correctamente! Gracias por contactarte.";
    } else {
        echo `Error al enviar el mensaje. to: ${$to} - subject: 
        ${$subject} - body: ${$body} - headers: ${$headers}.`;
    }
}
?>
