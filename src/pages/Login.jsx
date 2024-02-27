import { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export const Login = () => {
  const [nombre, setNombre] = useState('');
  const [error,setError]=useState('');
  const [formulario,setFormulario]=useState(false);
  
  const handleChange = (event) => {
    setNombre(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!nombre.trim()){
      setError("Invalid name");
      return;
    }
    setError('')
   console.log('Nombre de usuario: ' + nombre);
   setNombre('')
   setFormulario(true);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form" >
        <label>Username:
        </label>
        {error && <p>{error}</p>}
        <input type="text" value={nombre} onChange={handleChange} />
        <button className="send" type="submit">Sing in</button>
      </form>
      {formulario && <Link className="continue" to='/start'><p>Let's go!!</p></Link>}
    </div>
  )
}
