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
            <img src={blog.img_url}/>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.contHead}>
                <h1>{blog.BlogTitle}</h1>
                </div>

                <div className={styles.date}>{blog.BlogDate}</div>
                <div className={styles.paras}>
                    <p className={styles.para1}>
                    {blog.para1}  
                    </p>

                    <p className={styles.para1}>
                    {blog.para2}   
                    </p>
                    <p className={styles.para1}>
                    {blog.para3}   
                    </p>
                    <p className={styles.para1}>
                    {blog.para4}   
                    </p>
                </div>
            </div>        
        </div>
    </>
    )
}

export default BlogPage;