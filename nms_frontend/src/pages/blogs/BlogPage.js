import styles from "../../css/blogPage.module.css"
import { useParams } from "react-router-dom";
import getCsrfToken from '../../components/CsrfTocken';
import { useState,useEffect } from 'react';

const BlogPage =()=>{
    const [blog,setBlog] = useState({})
    const {slug} = useParams()
	console.log("Slug",slug)

    const fetchdata = async()=>{
		let str = ``
		const response = await fetch('http://localhost:8000/getAllBlogs/',
	    {
	      method:"POST",
	      body:JSON.stringify({"slug":slug}),
	      headers:(
	        {'X-CSRFToken': await getCsrfToken()}
	      ),
	      credentials:'include',
	    })

	    const res_data = await response.json();
	    console.log(res_data.data)
        setBlog(res_data.data)
	    // setPlantProds(res_data.data)
	    // data = res_data.data
	    
	    // document.getElementById('cardsSet').innerHTML = str;
	    // setAHtml(str)
	    
	    
	}

    useEffect(()=>{
        fetchdata()
    },[])

    return (
    <>
        <div className={styles.Blogs}>
            <div className={styles.head}>
            <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/articles/pexels-francesco-ungaro-273687.jpg?v=1674663127&width=1500"/>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.contHead}>
                <h1>Coconut Tree: Uses & Growing Technique</h1>
                </div>

                <div className={styles.date}>January 25, 2023</div>
                <div className={styles.paras}>
                    <p className={styles.para1}>
                    A coconut palm thrives in a tropical climate and is indigenous to many parts of the world. Each of its parts can be utilized for something. For example, the fruit is used for making desserts, ice creams, and cookies, and even for quenching thirst. Coconut oil is used for culinary purposes and it is also used for skin and hair care purposes. The shell is used as fuel and the husks of the shell are used to make ropes. Similarly, there are multiple uses due to which it is popularly referred to as the ‘tree of thousand uses.  
                    </p>

                    <p className={styles.para1}>
                    About Coconut Tree 
                    It is believed that the coconut palm has existed in human civilization for hundreds of centuries. Several varieties exist in different parts of the world. They comprise tall coconut, Mayan coconut, orange dwarf coconut, green dwarf coconut, and more. Each of these varieties differs when it comes to tree height, yield and quality of nuts, and structure.   
                    </p>
                </div>
            </div>        
        </div>
    </>
    )
}

export default BlogPage;