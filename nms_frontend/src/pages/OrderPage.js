import { Link } from "react-router-dom";
import styles from "../css/Order.module.css"
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const OrderPage = ({cart,addToCart,removeFromcart,clearCart,subTotal})=>{
	const navigate = useNavigate()
	if(localStorage.getItem('token')===null){

		window.location.replace('/login')
		// navigate('/login');
		// return <Login></Login>
	  }
	const [count,setCount] = useState(0)
	let q = 0;
	return (
		<>
			<div className={styles.Order} >
				<div className={styles.rows}>
				<div className={styles.row}>
					<div className={styles.main_cards}>
					{Object.keys(cart).length === 0 && <div className={styles.cart}><h1>No items in the cart </h1></div>}
					{Object.keys(cart).map((k)=>{
						// setCount(cart[k].qty)
						q = cart[k].qty
						return(<div className={styles.card}>
							<div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div>

							<div className={styles.card_main1}>
								{cart[k].name}
							</div>
							<div className={styles.card_main2}>
								<span className={styles.price}>
									₹ {cart[k].price}
								</span>
								<span className={styles.rating}>
									5.0
								</span>
							</div>
							<div className={styles.card_footer}>
								<button className={styles.card_button} onClick={()=>{
									q = q + 1;
									addToCart(k,1,cart[k]['price'],cart[k]['name'],cart[k]['categeory'])
								}}> + </button> 


								<span className={styles.qtyValues}>{cart[k].qty}</span>


								<button className={styles.card_button} onClick={()=>{
									q = q - 1;
									removeFromcart(k,1,cart[k]['price'],cart[k]['name'],cart[k]['categeory'])
								}}> - </button>
							</div>
						</div>)
					})}
						
{/* 						<div className={styles.card}> */}
{/* 							<div className={styles.card_header}> */}
{/* 								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
{/* 							</div> */}
{/*  */}
{/* 							<div className={styles.card_main1}> */}
{/* 								Broken Heart Plant */}
{/* 							</div> */}
{/* 							<div className={styles.card_main2}> */}
{/* 								<span className={styles.price}> */}
{/* 									₹ 999.0 */}
{/* 								</span> */}
{/* 								<span className={styles.rating}> */}
{/* 									5.0 */}
{/* 								</span> */}
{/* 							</div> */}
{/* 							<div className={styles.card_footer}> */}
{/* 								<button className={styles.card_button}> + </button>  */}
{/* 								<span className={styles.qtyValues}>3</span> */}
{/* 								<button className={styles.card_button}> - </button> */}
{/* 							</div> */}
{/* 						</div> */}
{/* 						<div className={styles.card}> */}
{/* 							<div className={styles.card_header}> */}
{/* 								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
{/* 							</div> */}
{/*  */}
{/* 							<div className={styles.card_main1}> */}
{/* 								Broken Heart Plant */}
{/* 							</div> */}
{/* 							<div className={styles.card_main2}> */}
{/* 								<span className={styles.price}> */}
{/* 									₹ 999.0 */}
{/* 								</span> */}
{/* 								<span className={styles.rating}> */}
{/* 									5.0 */}
{/* 								</span> */}
{/* 							</div> */}
{/* 							<div className={styles.card_footer}> */}
{/* 								<button className={styles.card_button}> + </button>  */}
{/* 								<span className={styles.qtyValues}>3</span> */}
{/* 								<button className={styles.card_button}> - </button> */}
{/* 							</div> */}
{/* 						</div> */}
{/* 						<div className={styles.card}> */}
{/* 							<div className={styles.card_header}> */}
{/* 								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} /> */}
{/* 							</div> */}
{/*  */}
{/* 							<div className={styles.card_main1}> */}
{/* 								Broken Heart Plant */}
{/* 							</div> */}
{/* 							<div className={styles.card_main2}> */}
{/* 								<span className={styles.price}> */}
{/* 									₹ 999.0 */}
{/* 								</span> */}
{/* 								<span className={styles.rating}> */}
{/* 									5.0 */}
{/* 								</span> */}
{/* 							</div> */}
{/* 							<div className={styles.card_footer}> */}
{/* 								<button className={styles.card_button}> + </button>  */}
{/* 								<span className={styles.qtyValues}>3</span> */}
{/* 								<button className={styles.card_button}> - </button> */}
{/* 							</div> */}
{/* 						</div> */}

					<div> 
						<span  className={styles.Total}><h1>SubTotal : ₹ {subTotal}</h1></span>
					</div>
						
					</div>
					
					<div className={styles.button_row}>
					<Link to={"/Checkout"}>
						<div className={styles.button_row_card_footer}>
								<button className={styles.button_row_card_button}>Checkout</button>
						</div>

						</Link>
						<div className={styles.button_row_card_footer}>
							
								<button onClick={clearCart} className={styles.button_row_card_button}> Clear Cart </button>
						</div>
						
					</div>
				</div>
			</div>
			</div>
		</>
		);
}

export default OrderPage;