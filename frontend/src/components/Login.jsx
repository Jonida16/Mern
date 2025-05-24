import { FaUser } from 'react-icons/fa'
import { useState } from "react"

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  
  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
 
  const onSubmit = e => {
    e.preventDefault()
  }
return (
    <>
      <section className="heading">
        <h1><FaUser /> Login</h1>
        <p>Please enter your credentials</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
      

          <div className="form-group">
            <input required type="email" className="form-control" id="email" name="email" placeholder="Please enter your email" value={email} onChange={onChange} />
          </div>

          <div className="form-group">
            <input required type="password" className="form-control" id="password" name="password" placeholder="Please enter your password" value={password} onChange={onChange} />
          </div>


          <div className="form-group">
            <button type="submit" className="btn btn-block">Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login