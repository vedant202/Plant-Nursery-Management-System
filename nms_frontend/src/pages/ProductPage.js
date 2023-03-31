import styles from "../css/ProductPage.module.css"
// import plant from "../../public/images/plant.jpg"
import { useParams } from "react-router-dom";
import getCsrfToken from '../components/CsrfTocken';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";


const ProductPage = ({cart,addToCart,removeFromcart,clearCart,subTotal})=>{
	
	const { id } = useParams()
	const [plantProds,setPlantProds] = useState([])
	const fetchdata = async()=>{
		let str = ``
		const response = await fetch('http://localhost:8000/getAllPlantsProducts/',
	    {
	      method:"POST",
	      body:JSON.stringify({"id":id}),
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })

	    const res_data = await response.json();
	    console.log(res_data.data)
	    setPlantProds(res_data.data)
	    // data = res_data.data
	    
	    // document.getElementById('cardsSet').innerHTML = str;
	    // setAHtml(str)
	    
	    
	}
	useEffect(()=>{
	fetchdata();
	console.log("State ",plantProds)
			
	},[])
	if(plantProds.length != 0){
		console.log("State ",plantProds[0]['product_img'])
		return (
		<>
			
			<div className={styles.ProductPage}>
				<div className={styles.container}>
					<div className={styles.cont1}>
						<div className={styles.imgCont}>
							{/* <img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
						<img 
      src={plantProds[0]['img_url']}
      alt="new"
      />
						</div>
					</div>
					<div className={styles.cont2}>
						<div className={styles.header}>
							<h3>{plantProds[0]['plant_name']}</h3>
						</div>

						<div className={styles.main}>
							<div className={styles.price}>
								₹ {plantProds[0]['price']}
							</div>
							<p>{plantProds[0]["product_desc"]}</p>
						</div>

						<div className={styles.card_footer}>
								<button className={styles.card_button} onClick={()=>{
									addToCart(plantProds[0]['slug'],1,plantProds[0]['price'],plantProds[0]['plant_name'],plantProds[0]['categeory'])
								}}> Add to card </button>
							</div>
					</div>
				</div>
			</div>
		</>
	)
	}else{
		console.log("State ",plantProds)
		return (
		<>
			
			<div className={styles.ProductPage}>
				<div className={styles.container}>
					<div className={styles.cont1}>
						<div className={styles.imgCont}>
							<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
						{/* <img src={plantProds.data[0].product_img} /> */}
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
								<button onClick={()=>{
									addToCart(plantProds[0]['slug'],1,plantProds[0]['price'],plantProds[0]['plant_name'],plantProds[0]['categeory'])
								}} className={styles.card_button}> Add to card </button>
							</div>
					</div>
				</div>
			</div>
		</>
	)
	}

	// console.log("id "+ plantProds.data[0].product_img)

	
}

export default ProductPage;