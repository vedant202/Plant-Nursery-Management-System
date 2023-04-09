import styles from '../../css/blogs.module.css'
import { useState,useEffect } from 'react';
import getCsrfToken from '../../components/CsrfTocken';
import { Link } from 'react-router-dom';


const Blogs = ()=>{
	const [blogs,setBlogs] = useState({})

	

	const fetchblogs = async()=>{
		let str = ``
		const response = await fetch('http://localhost:8000/getAllBlogs/',
	    {
	      method:"GET",
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })

	    const res_data = await response.json();
	    console.log(res_data.data)
	    setBlogs(res_data.data)
	    // data = res_data.data
	}

	useEffect(()=>{
		fetchblogs();
		console.log("State ",blogs)
				
		},[])

	const handleClick=()=>{
		console.log("handle click ")
	}
	
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
							{Object.keys(blogs).map((b)=>{
								console.log(b)
								return (<div className={styles.card}>
									<div className={styles.card_header}>
										<img src={process.env.PUBLIC_URL+"images/jasmine.png"}/>
									</div>

									<div className={styles.card_main}>
										<div className={styles.card_Title}>
											<h2>{blogs[b].BlogTitle}</h2>
										</div>

										<div className={styles.b_date}>
										{blogs[b].BlogDate}
										</div>
										<div className={styles.b_para}>
											{blogs[b].subpara}
										</div>
									</div>

									<div className={styles.b_footer}>
										<Link to={"/BlogPage/"+blogs[b].slug}>
										<button className={styles.b_btn} >
											Read More
										</button>
										</Link>
									</div>

							</div>)
							})}
							

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

						{/* <div className={styles.row}>
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
						</div> */}
					</div>
				</div>
			</div>

		</>

		);
}

export default Blogs;