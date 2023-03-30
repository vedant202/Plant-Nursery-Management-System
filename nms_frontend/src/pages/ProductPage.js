import styles from "../css/ProductPage.module.css"

const ProductPage = ()=>{
	return (
		<>
			
			<div className={styles.ProductPage}>
				<div className={styles.container}>
					<div className={styles.cont1}>
						<div className={styles.imgCont}>
							<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
						</div>
					</div>
					<div className={styles.cont2}>
						<div className={styles.header}>
							<h3>Broken Heart Plant</h3>
						</div>

						<div className={styles.main}>
							<div className={styles.price}>
								₹ 999.0
							</div>
							<p>Withania somnifera, known commonly as ashwagandha or winter cherry, is an evergreen shrub in the Solanaceae or nightshade family that grows in India, the Middle East, and parts of Africa. Several other species in the genus Withania are morphologically similar.</p>
						</div>

						<div className={styles.card_footer}>
								<button className={styles.card_button}> Add to card </button>
							</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductPage;