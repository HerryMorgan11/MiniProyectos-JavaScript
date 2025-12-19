let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accción de listar');
        break;
    case 'guardar':     
        console.log('acción de guardar')
        break;      // Si no ponemos el break continua ejecutando el siguiente case
    default:
        console.log('No se reconoce la acción');
        break;
}