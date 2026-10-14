// Creamos un objeto llamado Global para guardar
// las direcciones base de las APIs que utilizaremos.
var Global = {

    // URL de la API OData de Northwind.
    // Se puede utilizar para consultar datos como productos,
    // clientes, empleados y pedidos de Northwind.
    urlNorthwinf: "https://services.odata.org/V4/Northwind/Northwind.svc/",

    // URL base de la API de empleados.
    // La utilizaremos para realizar peticiones relacionadas
    // con los empleados.
    urlApiEmpleados: "https://apiempleadosspgs.azurewebsites.net/",

    // URL base de la API de departamentos.
    // La utilizaremos para consultar o gestionar departamentos.
    urlApiDepartamentos: "https://apicruddepartamentospgs.azurewebsites.net/"

}

// Exportamos el objeto para poder importarlo desde otros archivos.
export default Global