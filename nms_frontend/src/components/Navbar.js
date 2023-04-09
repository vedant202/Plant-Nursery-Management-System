import { Outlet, Link } from 'react-router-dom'
import styles from '../css/navbar.module.css'
import { useRef,useState,useEffect } from "react";
import getCsrfToken from './CsrfTocken';

const Navbar = ()=>{
	
	const [dis,setdis] = useState("none");
	const [disnav,setdisNav] = useState("none");
	// const [submitClicked,setSubmitClicked] = useState(false)

	const [searchValue,setSearchValue] = useState("")
	const [products,setProducts] = useState({})

	const onChangeInput = (event)=>{
		console.log(event.target.value)
		setSearchValue(event.target.value)
	}

	const onSearch = (serachItem)=>{
		console.log(serachItem)
	}

	const fetchSearch = async()=>{
		// searchNavbar
		let str = ``
		const response = await fetch('http://localhost:8000/searchNavbar/',
	    {
	      method:"POST",
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
		  body:JSON.stringify(searchValue),
	      credentials:'include',
	    })

	    const res_data = await response.json();
	    console.log(res_data.data)
		setProducts(res_data.data)
	}
	useEffect(()=>{
		console.log("Navbar use effect")
		
		// checkProductsEmpty()
	},[searchValue])

	let myStyle = {
		display:dis,
	}
	let myNavStyle = {
		display:disnav,
	}

	const checkProductsEmpty = ()=>{
		if(disnav==="none"){
			setdisNav("block")
		}
		else{
			setdisNav("none");
		}
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
						<input className={styles.search_input} id="search_input" value={searchValue} onChange={onChangeInput} placeholder="Search flowers" />
						<button className={styles.serach_btn} id="search_btn" onClick={()=>{
							onSearch(searchValue)
							// setSubmitClicked(true)
							fetchSearch()
							checkProductsEmpty()
						}}> <img src={process.env.PUBLIC_URL+"images/images.jpeg"} /> </button>

					</div>
					<div className={styles.dgBox2}  >
								<ul style={myNavStyle} className={styles.dgBox_ul}>
									{Object.keys(products).map((p)=>{
										console.log(p)
										return (<Link to={"ProductPage/"+ products[p].id}><li>{products[p].slug}</li></Link>)
									})}
								</ul>
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