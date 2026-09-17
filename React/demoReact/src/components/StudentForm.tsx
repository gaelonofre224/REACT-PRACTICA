import { useState } from 'react';
import { type Student, StudentCard } from './StudentCard';


export const StudentForm = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [matricula, setMatricula] = useState('');
  const [carrera, setCarrera] = useState('');
  const [edad, setEdad] = useState(0);
  const [semestre, setSemestre] = useState(0);
  const [correo, setCorreo] = useState('');
  const [studentsList, setStudentsList] = useState<Student[]>([]);

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent: Student = {
      nombre: nombre,
      apellido: apellido,
      matricula: matricula,
      carrera: carrera,
      edad: edad,
      Semestre: semestre,
      correo: correo,
    };

    setStudentsList([...studentsList, newStudent]);

    
    setNombre('');
    setApellido('');
    setMatricula('');
    setCarrera('');
    setEdad(0);
    setSemestre(0);
    setCorreo('');
  };

  const handleDeleteStudent = (matriculaToDelete: string) => {
    setStudentsList(studentsList.filter((s) => s.matricula !== matriculaToDelete));
  };

  return (
    <main className="page">
      <div className="container">
        <section className="card" aria-labelledby="student-form-title">
          <header className="card__header stack stack--tight">
            <h1 id="student-form-title">Registrar estudiante</h1>
            <p className="text-muted">
              Completa la información para agregar un estudiante al sistema.
            </p>
          </header>

          <form className="stack" onSubmit={handleCreateStudent}>
            <div className="grid">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Ej. Juan"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  id="apellido"
                  type="text"
                  placeholder="Ej. Pérez"
                  required
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>
            </div>

            <div className="grid">
              <div className="form-group">
                <label htmlFor="matricula">Matricula</label>
                <input
                  id="matricula"
                  type="text"
                  placeholder="Ej. 2024001"
                  required
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="carrera">Carrera</label>
                <input
                  id="carrera"
                  type="text"
                  placeholder="Ej. Ingeniería en Sistemas"
                  required
                  value={carrera}
                  onChange={(e) => setCarrera(e.target.value)}
                />
              </div>
            </div>

            <div className="grid">
              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input
                  id="edad"
                  type="number"
                  placeholder="Ej. 20"
                  required
                  value={edad}
                  onChange={(e) => {
                  const value = e.target.value;
                  const ageConverter = value === '' ? 0 : Number.parseFloat(value);
                  setEdad(ageConverter);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="semestre">Semestre</label>
                <input
                  id="semestre"
                  type="number"
                  placeholder="Ej. 4"
                  required
                  value={semestre}
                  onChange={(e) => { 
                  const value = e.target.value;
                  const semesterConverter = value === '' ? 0 : Number.parseFloat(value);
                  setSemestre(semesterConverter);}
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                type="email"
                placeholder="ejemplo@universidad.edu.mx"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <footer className="card__footer cluster cluster--spread">
             <button className="btn btn--secondary" type="reset">
                Limpiar
             </button>

              <button className="btn btn--primary" type="submit">
                Guardar estudiante
              </button>
            </footer>
          </form>
        </section>

        <section className="stack" style={{ marginTop: '2rem' }}>
          <h2>Estudiantes registrados </h2>

            {studentsList.map((student) => (
              <StudentCard key={student.matricula}
                onDelete={handleDeleteStudent}
                student={student}
              />
            ))}
          
        </section>
      </div>
    </main>
  );
};