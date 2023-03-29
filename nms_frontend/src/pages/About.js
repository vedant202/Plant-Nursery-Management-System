import styles from "../css/about.module.css"

const About = ()=>{
	return (

		<>
			<div className={styles.container}>
				<div className={styles.about}>
					<div className={styles.abt_bgimg}>
						<img src={process.env.PUBLIC_URL+"images/about_bg_img.png"} />
					</div>
					<div className={styles.cont}>
						<div className={styles.col1}>
							<div className={styles.col1_head}>
								<h2>We are not magicians, just
								really passionate</h2>
							</div>
							<div className={styles.col1_para}>
								<p>We are a team of horticultural experts, logistical masterminds, design geniuses, and lots of dedicated worker bees trying our best to earn the smile you wear on seeing the healthy, happy plants you receive
								</p>

								<p>
									We are a young enthusiastic team of just over 200 people, working behind the scenes to invite you into the secret life of plants. To nudge you to experiment, make mistakes, play, pause, and disconnect from the noise and find your centre
								</p>
							</div>
						</div>
						<div className={styles.col1_img}>
							<img src={process.env.PUBLIC_URL+"images/about_2.avif"} />
						</div>
					</div>

					<div className={styles.cont}>
						<div className={styles.col1_img}>
							<img src={process.env.PUBLIC_URL+"images/about_1.jpg"} />
						</div>
						<div className={styles.col1}>
							<div className={styles.col1_head}>
								<h2>Why we started AyurAura</h2>
							</div>
							<div className={styles.col1_para}>
								<p>AyurAura was formed with the idea to help people pause and breathe in some peace in their busy city lives. When Siddhant returned back to India after finishing his degree in Landscape Architecture at Cal Tech, he noticed the disconnect between people and nature and decided to start Ugaoo to build a bridge between the two.
								</p>

								<p>
									Rooted firmly in his family’s century old agri-tech business, Ugaoo sprung up like a new leaf on a spring morning and is today a mighty tree that helps other smaller businesses thrive in its shade. We have formed a proudly Made in India ecosystem that grows with each passing day.
								</p>
							</div>
						</div>
					</div>

					<div className={styles.cont}>
						<div className={styles.col1}>
							<div className={styles.col1_head}>
								<h2>What we do</h2>
							</div>
							<div className={styles.col1_para}>
								<p>We are here to encourage people to discover beauty, miracles, and serendipity in their everyday lives. We are here to make the magic of plants accessible to you at your fingertips and safeguard and nurture them till they reach you - their forever homes.
								</p>

								<p>
									We make plant parenting simpler, comfortable, less intimidating and reassuring through our ideas, knowledge, and understanding. We grow our plants with passion, happiness, and utmost care so that when they reach you, they spread the same joy in your lives.
								</p>
							</div>
						</div>
						<div className={styles.col1_img}>
							<img src={process.env.PUBLIC_URL+"images/brahmi.jpeg"} width={279} />
						</div>
					</div>
				</div>
			</div>
		</>

	)
};

export default About;