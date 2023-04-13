 import styles from "../css/AllSeeds.module.css"
 import { useState,useEffect } from 'react';
import getCsrfToken from '../components/CsrfTocken'
import { Link } from "react-router-dom";
// import styles from "../css/home.module.css"

const AllSeeds = ()=>{
	const [seedProds,setSeedProds] = useState([])
	let data;
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
		console.log("State ",seedProds)
				
		},[])


 	return (
 		<>
 			<div className={styles.AllPlants}>
 				
 				<div>
				 <div className={styles.rows}>
						<div className={styles.row}>
							<div className={styles.main_cards}>
				 {seedProds.data? seedProds.data.map(i=>{
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
								<button className={styles.card_button}> Add to cart </button>
							</div>
 						</div>
 						</Link>
								)
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
 				</div>
 			</div>
 		</>
	);
 }

export default AllSeeds;