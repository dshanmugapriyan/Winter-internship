import {useState} from 'react'
import {z} from 'zod'
const registerSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    email: z.string().email({message: "Enter a valid email address"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
})
const Register = () => {
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
const handleChange = (event) => {
  const { name, value } = event.target
  setFormData((FormData) => ({ ...FormData, [name]: value }))
}
const handleSubmit = (event) => {
  event.preventDefault()
  const result=registerSchema.safeParse(formData)
  if(result.success){
    console.log("Form submitted successfully!")
  } else {
    alert(result.error.issues[0].message)
  }
}
  return (
    <div>
        <h1>Register form</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"/>
         <br/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"/>
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"  />
        <br/>
        <button type="submit">Register</button>
        </form>
    </div>
  )
}
export default Register