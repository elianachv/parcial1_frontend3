import { useState } from "react";
import Card from "../Card/Card";
import "./Form.css";

function Form() {
  const [errors, setErrors] = useState([]);
  const [ok, setOk] = useState(false);

  const [info, setInfo] = useState({
    name: "",
    color: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    validateForm();
  };

  const handleFormChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    // console.log(info);
  };

  const validateForm = () => {
    errors.length = [];
    setErrors([...errors]);
    setOk(false);
    // console.log("Validando info ...", info);
    // console.log("Validando errores ...", errors.length);

    if (info.name.length < 3) {
      errors.push("Debes ingresar un nombre válido");
    }

    if (info.color.length < 6 || !info.color.includes("#")) {
      errors.push("Debes ingresar un código de color válido");
    }

    setErrors([...errors]);
    if (errors.length === 0) {
      setOk(true);
    }

    console.log(errors, errors.length, ok);
  };

  const resetForm = () => {
    setInfo({ name: "", color: "" });
    setErrors([]);
    setOk(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <label>Escribe tu nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={info.name}
          onChange={(e) => handleFormChange(e)}
        />

        <label>Escribe el código de tu color favorito</label>
        <input
          type="text"
          id="color"
          name="color"
          value={info.color}
          onChange={(e) => handleFormChange(e)}
        />

        <div className="buttons">
          <button type="submit">Enviar</button>
          <button type="reset" onClick={resetForm}>
            Borrar
          </button>
        </div>

        <div className="note">
          Puedes usar esta página para probar <br />
          <a href="https://htmlcolorcodes.com/es/" target="_blank">
            https://htmlcolorcodes.com/es/
          </a>
        </div>
      </form>

      {errors.length > 0 ? (
        <div className="errors">
          <p>Corrige el formulario: </p>
          {errors.map((error) => {
            return (
              <p key={error} className="error">
                {error}
              </p>
            );
          })}
        </div>
      ) : null}

      {ok && <Card name={info.name} color={info.color} />}
    </div>
  );
}

export default Form;
