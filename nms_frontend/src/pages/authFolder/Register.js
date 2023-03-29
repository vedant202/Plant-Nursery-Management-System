import styles from "../../css/register.module.css"
import { useState } from 'react';

const Register = ()=>{
	const [registerForm,setRegisterForm] = useState({"register_form":{f_name:"",l_name:"",U_name:"",age:"",sex:"",country:"",mb_no:"",email:"",birth_date:"",pass:"",c_pass:""}})

	const [user,setUser] = useState(false);
	const [error,setError] = useState(null)

	let register_f=
	{f_name:"",l_name:"",U_name:"",age:"",sex:"",country:"",mb_no:"",email:"",birth_date:"",pass:"",c_pass:""}

	const handleOnChange = (event)=>{
        console.log("On Change Event");
        console.log(event.target.name,event.target.value);
        register_f[event.target.name] = event.target.value;
        setRegisterForm({register_form:register_f})

    }

   const handleSubmit = async(event)=>{ console.log("Submit"); console.log
   (registerForm)
        // const response = await fetch("http://localhost:8000/handleRegister/",{
        //     method:"POST",
        //     body:JSON.stringify(registerForm),
        //     headers:(
        //         {'X-CSRFToken': await getCsrfToken()}
        //     ),
        //     credentials:'include',
        // })
    }

	return(
		<>
			  <div className={styles.container}>
            
			  	<div className={styles.row}>
			  		<div className={styles.cont2}>
	            		<img src={process.env.PUBLIC_URL+"images/register1.png"} />

	            	</div>

	            
		            <div className={styles.cont}>
			            <div className={styles.head}>
			            Register
			            </div>
		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >First Name:</label>
		                        <input type='text' className={styles.contact_form_input} id="f_name" value={registerForm.register_form.f_name} onChange={handleOnChange} name="f_name"></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Last Name:</label>
		                        <input type='text' className={styles.contact_form_input} id="l_name" name="l_name" value={registerForm.register_form.l_name} onChange={handleOnChange}></input>
		                    </div>
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Username:</label>
		                        <input type='text' className={styles.contact_form_input} id="U_name" name='U_name' value={registerForm.register_form.U_name} onChange={handleOnChange}></input>
		                    </div>
		                   
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Age:</label>
		                        <input type='text' className={styles.contact_form_input} id="age" name="age" value={registerForm.register_form.age} onChange={handleOnChange}></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Sex:</label>
		                        <input type='text' className={styles.contact_form_input} id="sex" name="sex" value={registerForm.register_form.sex} onChange={handleOnChange}></input>
		                    </div>
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Country:</label>
		                        <input type='text' className={styles.contact_form_input} id="country" name="country" value={registerForm.register_form.country} onChange={handleOnChange}></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Mobile no:</label>
		                        <input type='text' className={styles.contact_form_input} id="mb_no" name="mb_no" value={registerForm.register_form.mb_no} onChange={handleOnChange}></input>
		                    </div>
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Email:</label>
		                        <input type='email' className={styles.contact_form_input} id="email" name="email" value={registerForm.register_form.email} onChange={handleOnChange}></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >BirthDate:</label>
		                        <input type='date' className={styles.contact_form_input} id="birth_date" name="birth_date" value={registerForm.register_form.birth_date} onChange={handleOnChange}></input>
		                    </div>
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Password:</label>
		                        <input type='password' className={styles.contact_form_input} id="pass" name="pass" value={registerForm.register_form.pass} onChange={handleOnChange}></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Confirm Password:</label>
		                        <input type='password' className={styles.contact_form_input} id="c_pass" name="c_pass" value={registerForm.register_form.c_pass} onChange={handleOnChange}></input>
		                    </div>
		                </div>
		                
		                <div className={styles.contact_form_row}>
		                  <div className={styles.contact_form_submit}>
		                    <button type='submit' className={styles.submit_btn} id="submit" onClick={handleSubmit}>Submit</button>
		                  </div>
		                </div>
		            </div>
			  	</div>
	            
        </div>
		</>
		)
}

export default Register;