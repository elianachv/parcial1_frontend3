import { useState } from "react";
import { Form } from "../components";

const Home = () => {
  const [students, setStudents] = useState([]);

  return (
    <div>
      <h1>Carga de Estudiantes</h1>
      <Form  />

   


    </div>
  );
};

export default Home;
