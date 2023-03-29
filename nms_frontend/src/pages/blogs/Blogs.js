import styles from '../../css/blogs.module.css'

const Blogs = ()=>{
	return(
		<>
			<div className={styles.Blogs}>
				<div className={styles.head}>
					<h1>Blogs</h1>
					<hr></hr>
				</div>
				<div className={styles.mc}>
					<div className={styles.rows}>
						<div className={styles.row}>
							<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/jasmine.png"}/>
									</div>

									<div className={styles.card_main}>
										<div className={styles.card_Title}>
											<h2>Fantastic Facts About Juhi/ Jasminum Auriculatum Plant</h2>
										</div>

										<div className={styles.b_date}>
											January 29, 2023
										</div>
										<div className={styles.b_para}>
											The jasmine plant is grown all over the tropical regions of Asia and Africa. Termed Juhi in India, the small, white flowers are regarded as sacred and often offered to...
										</div>
									</div>

									<div className={styles.b_footer}>
										<button className={styles.b_btn}>
											Read More
										</button>
									</div>

							</div>

							<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/jasmine.png"} />
									</div>

									<div className={styles.card_main}>
										<div className={styles.card_Title}>
											<h2>Fantastic Facts About Juhi/ Jasminum Auriculatum Plant</h2>
										</div>

										<div className={styles.b_date}>
											January 29, 2023
										</div>
										<div className={styles.b_para}>
											The jasmine plant is grown all over the tropical regions of Asia and Africa. Termed Juhi in India, the small, white flowers are regarded as sacred and often offered to...
										</div>
									</div>

									<div className={styles.b_footer}>
										<button className={styles.b_btn}>
											Read More
										</button>
									</div>

							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/jasmine.png"}/>
									</div>

									<div className={styles.card_main}>
										<div className={styles.card_Title}>
											<h2>Fantastic Facts About Juhi/ Jasminum Auriculatum Plant</h2>
										</div>

										<div className={styles.b_date}>
											January 29, 2023
										</div>
										<div className={styles.b_para}>
											The jasmine plant is grown all over the tropical regions of Asia and Africa. Termed Juhi in India, the small, white flowers are regarded as sacred and often offered to...
										</div>
									</div>

									<div className={styles.b_footer}>
										<button className={styles.b_btn}>
											Read More
										</button>
									</div>

							</div>

							<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/jasmine.png"} />
									</div>

									<div className={styles.card_main}>
										<div className={styles.card_Title}>
											<h2>Fantastic Facts About Juhi/ Jasminum Auriculatum Plant</h2>
										</div>

										<div className={styles.b_date}>
											January 29, 2023
										</div>
										<div className={styles.b_para}>
											The jasmine plant is grown all over the tropical regions of Asia and Africa. Termed Juhi in India, the small, white flowers are regarded as sacred and often offered to...
										</div>
									</div>

									<div className={styles.b_footer}>
										<button className={styles.b_btn}>
											Read More
										</button>
									</div>

							</div>
						</div>
					</div>
				</div>
			</div>

		</>

		);
}

export default Blogs;