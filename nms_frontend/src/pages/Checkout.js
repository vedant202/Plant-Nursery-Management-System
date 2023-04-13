import { useState } from "react";
import styles from "../css/checkout.module.css"
import { Link, json } from "react-router-dom";
import getCsrfToken from '../components/CsrfTocken'
import { useNavigate } from "react-router-dom";

const Checkout = ({cart,addToCart,removeFromcart,clearCart,subTotal})=>{
    const [f_name,setFname] = useState("")
    const [l_name,setlname] = useState("")
    const [mobno1,setMobno1] = useState("")
    const [mobno2,setMobno2] = useState("")
    const [city,setCity] = useState("")
    const [state,setState] = useState("")
    const [email,setEmail] = useState("")
    const [pincode,setPincode] = useState("")
    const [addr1,setAddr1] = useState("")
    const [addr2,setAddr2] = useState("")

    let q = 0;

    
    const navigate = useNavigate()
    // const navigate = useNavigate()
	if(localStorage.getItem('token')===null){

		// window.location.replace('/login')
		navigate('/login');
		// return <Login></Login>
	  }
    const handleSubmit = async()=>{
        const data = {
            f_name:f_name,
            l_name:l_name,
            mobno1:mobno1,
            mobno2:mobno2,
            city:city,
            state:state,
            email:email,
            pincode:pincode,
            addr1:addr1,
            addr2:addr2,
            cart:cart,
            subTotal:subTotal
        }

        console.log(data)

        const response = await fetch('http://localhost:8000/checkoutInfo/',
	    {
	      method:"POST",
          body:JSON.stringify(data),
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })
        const response_data = await response.json()
        console.log(response_data)
   if(response_data['msg']==="success"){
 

    console.log("Inforamtion is added successfull")
    console.log(response_data)
    navigate('/PaymentGateway',{replace:true})

}
    }

    return (
        <>
            <div className={styles.Checkout}>
                <div className={styles.header}>
                    <h1>Checkout</h1>
                </div>
                <div className={styles.delivery}>
                    <h2>Delivery Details</h2>

                    <div className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="f_name">First Name : </label>
                                <input type="text" className={styles.form_input} value={f_name} onChange={(event)=>{setFname(event.target.value)}} id="f_name" ></input>
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="L_name">Last Name : </label>
                                <input type="text" className={styles.form_input} value={l_name} onChange={(event)=>{setlname(event.target.value)}} id="L_name" ></input>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="mb_no1">Mobile No1 : </label>
                                <input type="tel" className={styles.form_input} value={mobno1} onChange={(event)=>{setMobno1(event.target.value)}} id="mb_no1" ></input>
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="mb_no2">Mobile No2 : </label>
                                <input type="tel" className={styles.form_input} value={mobno2} onChange={(event)=>{setMobno2(event.target.value)}} id="mb_no2" ></input>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="city">City : </label>
                                <input type="text" className={styles.form_input} value={city} onChange={(event)=>{setCity(event.target.value)}} id="city" ></input>
                            </div>

                            <div className={styles.col}>
                                <label htmlFor="state">State : </label>
                                <input type="text" value={state} onChange={(event)=>{setState(event.target.value)}} className={styles.form_input} id="state" ></input>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <label htmlFor="email">Email : </label>
                                <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} className={styles.form_input} id="email" ></input>
                            </div>
                            <div className={styles.col}>
                                <label htmlFor="pincode">pincode : </label>
                                <input type="number" value={pincode} onChange={(event)=>{setPincode(event.target.value)}} className={styles.form_input} id="pincode" ></input>
                            </div>
                        </div>
                        <div className={styles.oneRow}>
                            <div className={styles.col}>
                                <label htmlFor="addr1">Address1 : </label>
                                <textarea type="text" value={addr1} onChange={(event)=>{setAddr1(event.target.value)}} className={styles.form_input} id="addr1" cols={30} rows={4}></textarea>
                            </div>
                            
                        </div>
                        <div className={styles.oneRow}>
                            <div className={styles.col}>
                                <label htmlFor="addr2">Address2 : </label>
                                <textarea type="text" value={addr2} onChange={(event)=>{setAddr2(event.target.value)}} className={styles.form_input} id="addr2" cols={30} rows={4}></textarea>
                            </div>
                            
                        </div>
                        {/* <div className={styles.row}>
                            <div className={styles.col}>
                                    <button type="button" onClick={handleSubmit} className={styles.button}>Submit</button>
                            </div>
                        </div> */}
                    </div>

                    
                </div>

                <div className={styles.reviewOrder}>
                <h2>Review Cart Items</h2>

                <div className={styles.row}>
                    <div className={styles.main_cards}>
                    {Object.keys(cart).length === 0 && <div className={styles.cart}><h1>No items in the cart </h1></div>}
					{Object.keys(cart).map((k)=>{
                        console.log(cart[k])
						// setCount(cart[k].qty)
						q = cart[k].qty

						return(<div className={styles.card}>
							{/* <div className={styles.card_header}>
								<img src={process.env.PUBLIC_URL+"images/plant.jpg"} />
							</div> */}

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
                    </div>
                    
                </div>

                <div> 
						<span className={styles.Total}><h1>SubTotal : ₹ {subTotal}</h1></span>
					</div>

                <div className={styles.button_row}>
						<div className={styles.button_row_card_footer}>
								<button onClick={handleSubmit} className={styles.button_row_card_button}>Submit</button>
						</div>

						{/* <div className={styles.button_row_card_footer}>
							
								<button onClick={clearCart} className={styles.button_row_card_button}> Clear Cart </button>
						</div> */}
						
					</div>
                </div>
            </div>
        </>
    )
}

export default Checkout;