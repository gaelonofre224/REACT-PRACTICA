export const getStudent = (estaReprobado:boolean): Promise<string> => 
    {
        return new Promise((resolve,reject)=> 
        {
            setTimeout(() => 
                
                {
                if(estaReprobado){
                    reject('El alumno está reprobado')
                }
                resolve('El alumno está aprobado')
                },3000
            );
            

           // reject('MAL')
        }
    )

    }