import styles from "../css/footer.module.css"
import { Link } from 'react-router-dom'

const Footer = ()=>{

	return (
		<>
		<hr></hr>
			<div className={styles.footer}>
				<div className={styles.row}>
					<div className={styles.col1}>
						<div className={styles.col_head}>
							<h1>About Us</h1>
						</div>
						<div className={styles.col_main}>
							<ul>
								<li>Our Story</li>
								<li>Contact Us</li>
								<li>Own Garden</li>
							</ul>
						</div>
					</div>

					<div className={styles.col1}>
						<div className={styles.col_head}>
							<h1>About Website</h1>
						</div>
						<div className={styles.col_main}>
							<ul>
								<li>Home</li>
								<li>About Us</li>
								<li>Privacy Policy</li>
							</ul>
						</div>
					</div>

					<div className={styles.col1}>
						<div className={styles.col_head}>
							<h1>Sign Up for</h1>
						</div>
						<div className={styles.col_main}>
							<p>For Plant care, tips, Plant info, Ayurvedic plants info, soil info, Read Our Blogs</p>
						</div>
					</div>

					<div className={styles.col1}>
						<div className={styles.col_head}>
							<h1>Follow us</h1>
						</div>
						<div className={styles.col_main}>
							<ul>
								<li><Link to="">Facebook</Link></li>
								<li><Link to="">Twitter</Link></li>
								<li><Link to="">Instagram</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>	
	)
}

export default Footer;