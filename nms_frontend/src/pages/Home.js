import styles from "../css/home.module.css"
import { useState,useEffect } from 'react';
import getCsrfToken from '../components/CsrfTocken';
import Parser from 'html-react-parser';
import DOMPurify from 'dompurify'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// import Login from "./authFolder/Login";
const Home = ()=>{
	const navigate = useNavigate()
	if(localStorage.getItem('token')===null){

		// window.location.replace('/login')
		navigate('/login');
		// return <Login></Login>
	  }
	const [plantProds,setPlantProds] = useState([])
	const [ahtml,setAHtml] = useState("")
	let count=0;
	function createMarkup(c) {
    return {__html: c};
  }
	let data;
	const fetchdataSeeds = async()=>{
		let str = ``
		const response = await fetch('http://localhost:8000/getAllPlantsProducts/',
	    {
	      method:"GET",
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })

	    const res_data = await response.json();
	    console.log(res_data.data)
	    setPlantProds(res_data)
	    data = res_data.data
	    
	    // document.getElementById('cardsSet').innerHTML = str;
	    // setAHtml(str)
	    
	    
	}
	const [seedProds,setSeedProds] = useState([])
	const fetchdata = async()=>{
		let str = ``
		const response = await fetch('http://localhost:8000/getAllSeedsProducts/',
	    {
	      method:"GET",
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })

	    const res_data = await response.json();
	    console.log(res_data.data)
	    setSeedProds(res_data)
	    data = res_data.data
	    
	    // document.getElementById('cardsSet').innerHTML = str;
	    // setAHtml(str)
	    
	    
	}


	useEffect(()=>{
	fetchdata();
	fetchdataSeeds();
	console.log("State ",plantProds)
			
	},[])

// 	const putData = (data)=>{
// 		console.log("inside Put data")
// 		if(data){
// 
// 
// 			let str= ``
// 			let d = Array(data.data).map((i)=>{
// 						console.log("Putting")
// 						console.log(i)
// 						i.map(j=>{
// 							console.log(j)
// 							str += `<div className={styles.card}>
// 								<div className={styles.card_header}>
// 									<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
// 								</div>
// 
// 								<div className={styles.card_main1}>
// 									${j.plant_name}
// 								</div>
// 								<div className={styles.card_main2}>
// 									<span className={styles.price}>
// 										₹ ${j.price}
// 									</span>
// 									<span className={styles.rating}>
// 										${j.reviews}
// 									</span>
// 								</div>
// 								<div className={styles.card_footer}>
// 									<button className={styles.card_button}> Add to card </button>
// 								</div>
// 							</div>`
// 						})
// 								
// 							})
// 			setRes(str)
// 			}
// 		{res?
// 						:
// 						()=>{return (
// 						<div className={styles.card}>
// 							<div className={styles.card_header}>
// 								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
// 							</div>
// 
// 							<div className={styles.card_main1}>
// 								Broken Heart Plant
// 							</div>
// 							<div className={styles.card_main2}>
// 								<span className={styles.price}>
// 									₹ 999.0
// 								</span>
// 								<span className={styles.rating}>
// 									5.0
// 								</span>
// 							</div>
// 							<div className={styles.card_footer}>
// 								<button className={styles.card_button}> Add to card </button>
// 							</div>
// 					</div>)}}
// 	}


// id
// : 
// 1
// img_caption
// : 
// "Ashwandha plant"
// plant_name
// : 
// "Ashwagandha"
// price
// : 
// "99.00"
// product_desc
// : 
// "dqwdnlkdn"
// product_details
// : 
// {uses: 'strength'}
// product_img

// reviews
// : 
// "4.0"
	return (

		<>
			<div className={styles.home} >
				<div className={styles.bg_img}>
					<img src={process.env.PUBLIC_URL+"images/home_bg.webp"} />
				</div>
				<div className={styles.main_c}>
					<h1> Plants </h1>

					<p>Plants are a great addition to our homes and life for both their physical and psychological benefits. Over time, Ugaoo has made it easier to buy plants online by upping the standard not only for online plants, but also for providing gardening knowledge. Explore Ugaoo’s curated list of green plants and enjoy the online plant shopping experience.

					</p>
				</div>

				
			</div>

			<div className={styles.t1}>
				<h2>What are you looking for?</h2>
			</div>

			<div className={styles.rows}>
				<div className={styles.row}>
					<div className={styles.main_cards}>
	

						<div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								Plants
							</div>
							
							<div className={styles.card_footer}>
							<Link to={"/all_plants"}>
								<button className={styles.card_button}> View Plants </button>
								</Link>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								Seeds
							</div>
							
							<div className={styles.card_footer}>
							<Link to={"/all_seeds"}>
								<button className={styles.card_button}> Seeds </button>
								</Link>
							</div>
						</div>


						{/* <div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								Pots & Planters
							</div>
							
							<div className={styles.card_footer}>
								<button className={styles.card_button}> View Pots & Planters </button>
							</div>
						</div> */}

						{/* <div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								Plant Care
							</div>
							
							<div className={styles.card_footer}>
							<Link to={"/all_seeds"}>
								<button className={styles.card_button}> View Plant Care </button>
								</Link>
							</div>
						</div> */}

					</div>
				</div>
			</div>

			<hr />

			<div className={styles.t1}>
				<h2>New Arrivals</h2>
			</div>

			<div className={styles.rows}>
				<div className={styles.row}>
					<div className={styles.main_cards} id="cardsSet">
						{plantProds.data? plantProds.data.map(i=>{
							
							count = count +1;
							if(count<9){
								
								console.log(i)
							
							return (
								<Link to={"/ProductPage/"+i.id}>
								<div className={styles.card} > 
							<div className={styles.card_header}> 
								{/* <img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
								{/* <img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
								<img src={i.img_url} />
							{/* <img src={"D:/NurseryManagementSystem/nms_frontend/public/images"+"images/plant.jpg"} /> */}
							</div>

							<div className={styles.card_main1}>
								{i.plant_name}
							</div>
							<div className={styles.card_main2}>
								<span className={styles.price}>
									₹ {i.price}
								</span>
								<span className={styles.rating}>
									{i.reviews}
								</span>
							</div>
							<div className={styles.card_footer}>
								<button className={styles.card_button}> Add to card </button>
							</div>
 						</div>
 						</Link>
								)
							}
							
							
							}):""}
							{count = 0}
					{/* {ahtml} */}

 						
 						 
					</div>
				</div>

			</div>

			<hr />

			<div className={styles.t1}>
				<h2>Seeds</h2>
			</div>

			<div className={styles.rows}>
						<div className={styles.row}>
							<div className={styles.main_cards}>
				 {seedProds.data? seedProds.data.map(i=>{
							count = count +1;
							if(count<9){
								console.log(i.img_url)
								return (

									<Link to={"/SeedProductPage/"+i.slug}>
									<div className={styles.card} > 
								<div className={styles.card_header}> 
								{/* <img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
								<img src={i.img_url} />
								{/* <img src={"D:/NurseryManagementSystem/nms_frontend/public/images"+"images/plant.jpg"} /> */}
								</div>

								<div className={styles.card_main1}>
									{i.seed_name}
								</div>
								<div className={styles.card_main2}>
									<span className={styles.price}>
										₹ {i.price}
									</span>
									<span className={styles.rating}>
										{i.reviews}
									</span>
								</div>
								<div className={styles.card_footer}>
									<button className={styles.card_button}> Add to card </button>
								</div>
							</div>
							</Link>
									)
							}
							}):""}
 					{/* <div className={styles.rows}>
						<div className={styles.row}>
							<div className={styles.main_cards}>
								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>


								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div className={styles.rows}>
						<div className={styles.row}>
							<div className={styles.main_cards}>
								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>


								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>
								<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
									</div>

									<div className={styles.card_main1}>
										Broken Heart Plant
									</div>
									<div className={styles.card_main2}>
										<span className={styles.price}>
											₹ 999.0
										</span>
										<span className={styles.rating}>
											5.0
										</span>
									</div>
									<div className={styles.card_footer}>
										<button className={styles.card_button}> Add to card </button>
									</div>
								</div>
							</div>
						</div>

					</div> */}
					</div>
					</div>
					</div>

			<hr />

		


		</>

	)
};

export default Home;