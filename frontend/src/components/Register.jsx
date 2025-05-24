import { useState } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })
  const { name, email, password, password2 } = formData;

  console.log(formData)

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => { 
    e.preventDefault();
    if(password !== password2) {
      alert('Fjalekalimet nuk perputhen');
    }
    else{
      alert("Forma u dergua me sukses");
      setFormData({
        name: '', 
        email: '', 
        password: '', 
        password2: ''
      })
    }
  };

  return (
    <>
      <section className="heading">
        <h1><FaUser /> Register</h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input required type="text" className="form-control" id="name" name="name" placeholder="Please enter your name" value={name} onChange={onChange} />
          </div>

          <div className="form-group">
            <input required type="email" className="form-control" id="email" name="email" placeholder="Please enter your email" value={email} onChange={onChange} />
          </div>

          <div className="form-group">
            <input required type="password" className="form-control" id="password" name="password" placeholder="Please enter your password" value={password} onChange={onChange} />
          </div>

          <div className="form-group">
            <input required type="password2" className="form-control" id="password2" name="password2" placeholder="Please retype your password" value={password2} onChange={onChange} />
          </div>


          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Register
