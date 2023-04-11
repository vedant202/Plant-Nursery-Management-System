import styles from "../css/payment.module.css"
const PaymentGateway = ({subTotal})=>{
    
    return (
        <>
            <div className={styles.Cont}>
                <div className={styles.paymentImg}>
                <img src={process.env.PUBLIC_URL+"images/payment.jpeg"} />
                </div>
                <div className={styles.total}>
                    <span>SubTotal :- {subTotal}</span>
                </div>
                <div className={styles.Instruction}>
                    <h3>Important Instruction</h3>

                    <ul>
                        <li>
                            Scan the QR Code and make payment of exact amount.
                        </li>
                        <li>
                            After Payment Take Screenshot of the payment and send to email laukeekk@gmail.com
                        </li>
                        <li>
                            Our Team will validate payment and Dispatch Your order with in 24 hours. You will get confirmination mail and message from our team.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PaymentGateway;