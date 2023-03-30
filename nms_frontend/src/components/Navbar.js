import { Outlet, Link } from 'react-router-dom'
import styles from '../css/navbar.module.css'
import { useRef,useState } from "react";

const Navbar = ()=>{
	
	const [dis,setdis] = useState("none");

	let myStyle = {
		display:dis,
	}
	const showDropdown = ()=>{
		console.log("Hiiii");
		
		if(dis==="none"){
			setdis("block");
		}
		else{
			setdis("none");
		}

		
		console.log(myStyle)

		// dgBox_dropdown.style.display = "block";
	}


	return (

		<>
			<div className={styles.container}>
				<nav className="nav">
					<div className={styles.navbar}>
					<div className={styles.logo}>AyurAura</div>
					<div className={styles.search_box}>
						<input className={styles.search_input} id="search_input" placeholder="Search flowers" />
						<button className={styles.serach_btn} id="search_btn" > <img src={process.env.PUBLIC_URL+"images/images.jpeg"} /> </button>

					</div>
					<div className={styles.main}>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<Link to="/blogs">Blogs</Link>
							</li>
						</ul>
					</div>

					<div className={styles.userButton}>
						<div className={styles.uBC} onClick={showDropdown}>
							<img src={process.env.PUBLIC_URL+"images/login_user.jpeg"} />
							<p>Hi, Guest</p>
							
						</div>
						<div className={styles.dgBox}  >
								<ul style={myStyle} className={styles.dgBox_ul}>
									<li className={styles.dgBox_li}>
										<Link to="/login"><span>Login</span></Link>
									</li>

									<li className={styles.dgBox_li}>
										<Link to="/register"><span>Signup</span></Link>
									</li>

									<li className={styles.dgBox_li}>
										<Link to="/OrderPage"><span>My Orders</span></Link>
									</li>
								</ul>
							</div>
					</div>

				</div>
				</nav>
			</div>
			 <Outlet />
		</>

	)
};

export default Navbar;