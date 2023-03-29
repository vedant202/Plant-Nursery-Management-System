import styles from "../css/contact.module.css"

const Contact = ()=>{
	return (

		<>
			<div className={styles.container}>
				
				<div className={styles.contact}>
					<div className={styles.ct_bgimg}>
							<img src={process.env.PUBLIC_URL+"images/contact.png"} />
					</div>


					<div className={styles.box}>
						<div className={styles.col1}>
							<div className={styles.contact_form}>
								<div className={styles.contact_head}>
									<h2>Get in touch</h2>
								</div>

								<form>
									<div className={styles.field}>
										<input id="contact_name" className={styles.input_field} placeholder="Name"></input>
									</div>
									<div className={styles.field}>
										<input id="contact_email" className={styles.input_field} placeholder="Email"></input>
									</div>
									<div className={styles.field}>
										<input id="contact_pno" className={styles.input_field} placeholder="Phone Number"></input>
									</div>
									<div className={styles.field}>
										<textarea id="contact_comment" rows="10" className={styles.c_input_field} placeholder="Comment" ></textarea>
									</div>

									<div className={styles.c_button}>
										<button className={styles.btn}>Send Message</button>
									</div>
								</form>
							</div>
						</div>

						<div className={styles.col2}>
							<img src={process.env.PUBLIC_URL+"images/contact_mail.png"} />
						</div>
					</div>
				</div>
			</div>
		</>

	)
};

export default Contact;