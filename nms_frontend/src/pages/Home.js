import styles from "../css/home.module.css"

const Home = ()=>{
	return (

		<>
			<div className={styles.home}>
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

			<dv className={styles.rows}>
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

			</dv>

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