function validaccion() {
    //validación del nombre
    if (document.fvalida.nombre.value.length==0){
        alert("Escriba su nombre.")
        document.fvalida.nombre.focus()
        return 0;
    }

    //validación del correo electronico
    correoElectronico = document.fvalida.correoElectronico.value
    correoElectronico = validaEntero(correoElectronico)
    document.fvalida.correoElectronico.value=correoElectronico
    if (correoElectronico==""){
        alert("Introduzca un correo válido.")
        document,fvalida.correoElectronico.focus()
        return 0;
    }

    //validación del mensaje
    if (document.fvalida.mensaje.selectedIndex==0){
        alert("Introduzca su mensaje.")
        document.fvalida.mensaje.focus()
        return 0;
    }

    //el formulario se envia
    alert("Su formulario ha sido enviado.");
    document.fvalida.submit();
}