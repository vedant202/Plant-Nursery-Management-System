import styles from "../css/home.module.css"
import { useState,useEffect } from 'react';
import getCsrfToken from '../components/CsrfTocken';
import Parser from 'html-react-parser';
import DOMPurify from 'dompurify'

const Home = ()=>{
	const [plantProds,setPlantProds] = useState([])
	const [ahtml,setAHtml] = useState("")
	function createMarkup(c) {
    return {__html: c};
  }
	let data;
	const fetchdata = async()=>{
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

	useEffect(()=>{
	fetchdata();
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
								<button className={styles.card_button}> View Plants </button>
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
								<button className={styles.card_button}> Seeds </button>
							</div>
						</div>


						<div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								Pots & Planters
							</div>
							
							<div className={styles.card_footer}>
								<button className={styles.card_button}> View Pots & Planters </button>
							</div>
						</div>

						<div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								Plant Care
							</div>
							
							<div className={styles.card_footer}>
								<button className={styles.card_button}> View Plant Care </button>
							</div>
						</div>

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
							console.log(i)
							return (
								<div className={styles.card}> 
							<div className={styles.card_header}> 
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
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
								)
							}):""}
					{/* {ahtml} */}

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

			<hr />

			<div className={styles.t1}>
				<h2>Best Sellers</h2>
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
			</div>

			<hr />

			<div className={styles.t1}>
				<h2>Ayurvedic Plants</h2>
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

			</div>


		</>

	)
};

export default Home;