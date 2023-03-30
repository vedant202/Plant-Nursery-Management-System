import styles from "../../css/login.module.css"
import {useState} from 'react';
import getCsrfToken from '../../components/CsrfTocken';

import { useNavigate } from 'react-router-dom'

const Login = ()=>{

	const [u_name,setUname] = useState("");
	const [pass,setPass] = useState("");
	const [user,setUser] = useState(false);
	const [error,setError] = useState(null);
	const navigate = useNavigate()

	const handleOnChange = (event)=>{
    
    console.log("Change")
    console.log(event.target,event.target.value)
    // this.setState({[event.target.name]:event.target.value})
    if(event.target.name === "u_name"){
    	setUname(event.target.value)
    }
    else if(event.target.name === "pass"){
    	setPass(event.target.value)
    }
  }

  const handleSubmit = async(event)=>{
  	
    // const {isUserLoggedIn,userAuthentication} = this.props
    console.log("Submit is clicked");
    const data = {"u_name":u_name,"pass":pass,"user":user,"error":error}
    const response = await fetch('http://localhost:8000/handleLogin/',
    {
      method:"POST",
      headers:(
        {'X-CSRFToken': await getCsrfToken()}
      ),
      body:JSON.stringify(data),
      credentials:'include',
    })

    const res_data = await response.json();
    console.log("Data",res_data)

    if(res_data['response']==="success"){
     
      console.log("Login is successfull")
      // save the token and redirect
      localStorage.setItem('token',res_data["authToken"])
      navigate('/',{replace:true})
      // window.location.replace("http://localhost:3000/");
      // this.props.history.push("/")
    }
    

    
      
  }



	return (
		<>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.cont2}>
		            		<img src={process.env.PUBLIC_URL+"images/login.jpg"} />

	            	</div>
			        <div className={styles.cont}>
			        	<div className={styles.head}>
			            	Log In
			            </div>
				          <div className={styles.login_row}>
				                      <div className={styles.col}>
				                          <label className={styles.contact_form_label} >Username:</label>
				                          <input type='text' className={styles.contact_form_input} name="u_name" value={u_name} onChange={handleOnChange} id="u_name"></input>
				                      </div>
				                      <div className={styles.col}>
				                          <label className={styles.contact_form_label} >Password:</label>
				                          <input type='password' className={styles.contact_form_input} value={pass} name="pass" onChange={handleOnChange} id="pass"></input>
				                      </div>
				          </div>

			          <div className={styles.contact_form_row}>
			                  <div className={styles.contact_form_submit}>
			                    	<button type='submit' className={styles.submit_btn} onClick={handleSubmit}>Submit</button>
			                  </div>
			          </div>

			        </div>
		        </div>


    		</div>		
		</>
	)
}

export default Login;