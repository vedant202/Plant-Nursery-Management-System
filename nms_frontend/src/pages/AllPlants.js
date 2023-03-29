 import styles from "../css/AllPlants.module.css"
// import styles from "../css/home.module.css"

const AllPlants = ()=>{
 	return (
 		<>
 			<div className={styles.AllPlants}>
 				
 				<div>
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
 				</div>
 			</div>
 		</>
	);
 }

export default AllPlants;