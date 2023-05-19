function validarFormulario(){
    const txtNombre = document.getElementById('txtNombre');
    const txtApellido = document.getElementById('txtApellido');
    const txtDescripcion = document.getElementById('txtDescripcion');
    const rbSexo = document.getElementsByName('sexo');

    if(txtNombre.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'ERRORRR',
            text: 'Falta el nombre!',
           
          })
        return false;
    }
    if(txtApellido.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'ERRORRR',
            text: 'Poner apelido!',
            
          })
        return false;
    }
    if(txtDescripcion.value === ""){
        Swal.fire({
            icon: 'error',
            title: 'ERRORRR',
            text: 'Poner texto!',
            
          })
        return false;
    }
    let bool = false;
    for(let i = 0; i<rbSexo.length; i++){
        if(rbSexo[i].checked){
            bool = true;
            break;
        }
    }

    if(bool == false){
        Swal.fire({
            icon: 'error',
            title: 'ERRORRR',
            text: 'iNGRESE SEXOOO!',
            
          })
    }

    return true;

}

function guardar(){
    if (validarFormulario()){
        Swal.fire({
            icon: 'success',
            title: 'bien hecho...',
            text: 'persona creada!',
          })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'ERRORRR',
            text: 'Faltan poner datooos!',
            
          })
    }
}

