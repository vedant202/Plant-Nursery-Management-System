import styles from "../css/Order.module.css"

const OrderPage = ()=>{
	return (
		<>
			<div className={styles.Order} >
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
								<button className={styles.card_button}> + </button> 
								<span className={styles.qtyValues}>3</span>
								<button className={styles.card_button}> - </button>
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
								<button className={styles.card_button}> + </button> 
								<span className={styles.qtyValues}>3</span>
								<button className={styles.card_button}> - </button>
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
								<button className={styles.card_button}> + </button> 
								<span className={styles.qtyValues}>3</span>
								<button className={styles.card_button}> - </button>
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
								<button className={styles.card_button}> + </button> 
								<span className={styles.qtyValues}>3</span>
								<button className={styles.card_button}> - </button>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		</>
		);
}

export default OrderPage;