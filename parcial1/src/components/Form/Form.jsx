import { useState } from "react";

function Form() {
  const [errors, setErrors] = useState([]);

  const [student, setStudent] = useState({
    name: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleFormChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(estudiante);
  };

  const validateForm = () => {};

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <label>Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => handleFormChange(e)}
        />

        <button>Enviar</button>
      </form>

      <div className="errors">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Form;
