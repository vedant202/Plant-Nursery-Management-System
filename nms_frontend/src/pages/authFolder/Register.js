import styles from "../../css/register.module.css"
import { useState } from 'react';
import getCsrfToken from '../../components/CsrfTocken';
import {useNavigate  } from 'react-router-dom'


const Register = ()=>{
	const [registerForm,setRegisterForm] = useState({f_name:"",l_name:"",U_name:"",email:"",pass:"",c_pass:""})
	const navigate = useNavigate();
	const [user,setUser] = useState(false);
	const [error,setError] = useState(null)

	let register_f=
	{f_name:"",l_name:"",U_name:"",email:"",pass:"",c_pass:""}

	const handleOnChange = (event)=>{
        console.log("On Change Event");
        console.log(event.target.name,event.target.value);
        register_f[event.target.name] = event.target.value;
        setRegisterForm({...registerForm,[event.target.name]:event.target.value})

    }

   const handleSubmit = async(event)=>{
   	
   	console.log("Submit"); 
   	console.log(registerForm)
     const response = await fetch("http://localhost:8000/handleRegister/",{
	  method:"POST",
	  body:JSON.stringify(registerForm),
	  headers:(
	      {'X-CSRFToken': await getCsrfToken()}
	  ),
	  credentials:'include',
	})
	const response_data = await response.json()

   if(response_data['response']==="success"){
       setUser(true)
       setError(false)

       console.log("Register is successfull")
       console.log("User "+user)
       localStorage.setItem('token',response_data["authToken"])
       navigate('/',{replace:true})

   }else{
   		setUser(false)
       	setError(true)
     }
	// let user = this.state
    // if(user){
    //   	console.log("Navigate")
    //     
    //   
    // }

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
		                        <input type='text' className={styles.contact_form_input} id="f_name" value={registerForm.f_name} onChange={handleOnChange} name="f_name"></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Last Name:</label>
		                        <input type='text' className={styles.contact_form_input} id="l_name" name="l_name" value={registerForm.l_name} onChange={handleOnChange}></input>
		                    </div>
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Username:</label>
		                        <input type='text' className={styles.contact_form_input} id="U_name" name='U_name' value={registerForm.U_name} onChange={handleOnChange}></input>
		                    </div>
		                   	<div className={styles.col}>
		                        <label className={styles.contact_form_label} >Email:</label>
		                        <input type='email' className={styles.contact_form_input} id="email" name="email" value={registerForm.email} onChange={handleOnChange}></input>
		                    </div>
		                </div>

{/* 		                <div className={styles.row}> */}
{/* 		                    <div className={styles.col}> */}
{/* 		                        <label className={styles.contact_form_label} >Age:</label> */}
{/* 		                        <input type='text' className={styles.contact_form_input} id="age" name="age" value={registerForm.age} onChange={handleOnChange}></input> */}
{/* 		                    </div> */}
{/* 		                    <div className={styles.col}> */}
{/* 		                        <label className={styles.contact_form_label} >Sex:</label> */}
{/* 		                        <input type='text' className={styles.contact_form_input} id="sex" name="sex" value={registerForm.sex} onChange={handleOnChange}></input> */}
{/* 		                    </div> */}
{/* 		                </div> */}
{/*  */}
{/* 		                <div className={styles.row}> */}
{/* 		                    <div className={styles.col}> */}
{/* 		                        <label className={styles.contact_form_label} >Country:</label> */}
{/* 		                        <input type='text' className={styles.contact_form_input} id="country" name="country" value={registerForm.country} onChange={handleOnChange}></input> */}
{/* 		                    </div> */}
{/* 		                    <div className={styles.col}> */}
{/* 		                        <label className={styles.contact_form_label} >Mobile no:</label> */}
{/* 		                        <input type='text' className={styles.contact_form_input} id="mb_no" name="mb_no" value={registerForm.mb_no} onChange={handleOnChange}></input> */}
{/* 		                    </div> */}
{/* 		                </div> */}

		                <div className={styles.row}>
		                    
		                    {/* <div className={styles.col}> */}
		                    {/*     <label className={styles.contact_form_label} >BirthDate:</label> */}
		                    {/*     <input type='date' className={styles.contact_form_input} id="birth_date" name="birth_date" value={registerForm.birth_date} onChange={handleOnChange}></input> */}
		                    {/* </div> */}
		                </div>

		                <div className={styles.row}>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Password:</label>
		                        <input type='password' className={styles.contact_form_input} id="pass" name="pass" value={registerForm.pass} onChange={handleOnChange}></input>
		                    </div>
		                    <div className={styles.col}>
		                        <label className={styles.contact_form_label} >Confirm Password:</label>
		                        <input type='password' className={styles.contact_form_input} id="c_pass" name="c_pass" value={registerForm.c_pass} onChange={handleOnChange}></input>
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