//export default function sumar(value1:number, value2:number)
//{
  //  return value1 + value2
//}

//tambien se le puede escribir "export" al principio de cada funcion pero eso no molaría
function sumar(value1:number, value2:number)
{
  return value1 + value2
}

function restar(value1:number, value2:number)
{
  return value1 - value2
}

function multiplicacion(value1:number, value2:number)
{
  return value1*value2
}

function dividir(value1:number, value2:number)
{
  return value1/value2
}

export {sumar,restar,multiplicacion,dividir}