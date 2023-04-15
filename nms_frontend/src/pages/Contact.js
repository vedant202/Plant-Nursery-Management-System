import styles from "../css/contact.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import getCsrfToken from '../components/CsrfTocken'


const Contact = ()=>{
	const [f_name,setFname] = useState("")
    const [l_name,setlname] = useState("")
    const [mobno1,setMobno1] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")
    const [email,setEmail] = useState("")
    const [comment,setcomment] = useState("")

	const navigate = useNavigate()
	if(localStorage.getItem('token')===null){

		window.location.replace('/login')
		navigate('/login');
		// return <Login></Login>
	  }
	const handleSubmit = async()=>{
		const data = {
            f_name:f_name,
            l_name:l_name,
            mobno1:mobno1,
            city:city,
            state:state,
            email:email,
            comment:comment
        }
	console.log(data)
	const response = await fetch('http://localhost:8000/saveContact/',
	    {
	      method:"POST",
          body:JSON.stringify(data),
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })
        const response_data = await response.json()
        console.log(response_data)
	}
	return (

		<>
			<div className={styles.container}>
				
				<div className={styles.contact}>
					<div className={styles.ct_bgimg}>
							<img src={process.env.PUBLIC_URL+"images/contact.png"} />
					</div>


					<div className={styles.box}>
						<div className={styles.col1}>
							<div className={styles.contact_form}>
								<div className={styles.contact_head}>
									<h2>Get in touch</h2>
								</div>

								<form>
									<div className={styles.field}>
										<input type="text" id="contact_name" className={styles.input_field} placeholder="First Name" value={f_name} onChange={(event)=>{setFname(event.target.value)}}></input>
									</div>
									<div className={styles.field}>
										<input type="text" id="contact_name" className={styles.input_field} placeholder="Last Name" value={l_name} onChange={(event)=>{setlname(event.target.value)}}></input>
									</div>
									<div className={styles.field}>
										<input type="email" id="contact_email" className={styles.input_field} placeholder="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input>
									</div>
									<div className={styles.field}>
										<input type="tel" id="contact_pno" className={styles.input_field} placeholder="Phone Number" value={mobno1} onChange={(event)=>{setMobno1(event.target.value)}}></input>
									</div>
									<div className={styles.field}>
										<input type="text" id="contact_pno" className={styles.input_field} placeholder="city" value={city} onChange={(event)=>{setCity(event.target.value)}}></input>
									</div>
									<div className={styles.field}>
										<input type="text" id="contact_pno" className={styles.input_field} placeholder="state" value={state} onChange={(event)=>{setState(event.target.value)}} ></input>
									</div>
									<div className={styles.field}>
										<textarea id="contact_comment" rows="10" className={styles.c_input_field} placeholder="Comment" value={comment} onChange={(event)=>{
											setcomment(event.target.value)
										}} ></textarea>
									</div>

									<div className={styles.c_button}>
										<button type="button" onClick={handleSubmit} className={styles.btn}>Send Message</button>
									</div>
								</form>
							</div>
						</div>

						<div className={styles.col2}>
							<img src={process.env.PUBLIC_URL+"images/contact_mail.png"} />
						</div>
					</div>
				</div>
			</div>
		</>

	)
};

export default Contact;