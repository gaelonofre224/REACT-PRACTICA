interface EstudianteProps
{
  name:string,
  lastname:string,
  age:number
}

export const FirstComponent = ({name, lastname, age}:EstudianteProps) => {
      
  return (
    
    <div>
      <h1>{name}</h1>
      <h2>{lastname}</h2>
      <h3>{age}</h3>
    </div>
  )
}
