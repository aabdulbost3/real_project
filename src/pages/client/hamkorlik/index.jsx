import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios';
import "./style.css"
function PostPage() {
    const navigate = useNavigate();
    const [price, setPrice] = useState([])
    const [title, setTitle] = useState([])
    const [sale, setSale] = useState([])
    const [sharx, setSharx] = useState([])
    const HandleClic = (e) => {
        const kere = {
            price: price,
            title: title,
            sharx:sharx,
            image: videoSelect,
            sale : sale
        }
        const response = axios.post("http://localhost:8000/posts", kere)
        navigate("/")
        console.log(response);
    }
    const [videoSelect, setvideoSelect] = useState()
    const [loading2, setLoading2] = useState(false)
    const [VideoData, setVideoData] = useState([])
    const Change = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "v8gxbibt")
        setLoading2(true)
        const postVideo2 = async () => {
            try {
                const response = await axios.post("https://api.cloudinary.com/v1_1/dugfn5qgj/upload", formData)
                setvideoSelect(response?.data.secure_url)
                console.log(response?.data.secure_url);
                setLoading2(false)
            } catch (error) {
                console.error(error);
            }
        }
        postVideo2()


    }
    useEffect(() => {
        fetch("http://localhost:8000/posts")
            .then(res => res.json())
            .then(result => setVideoData(result))
    }, [VideoData])

    const HandleClick2 = async (e) => {
        e.preventDefault();
        const body = {
            imgage: videoSelect,
            price: price,
            title: title,
            sharx:sharx,
            sale : sale
        }
        const resPost = axios.post("http://localhost:8000/posts", body)
        window.localStorage.setItem("id", e.target.value)
        console.log(resPost);
    }
    return (
        <>
            <section className='PostImg'>
                <div className="container">
                    <div className="ccvf">
                <div className="Form-box">
                            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="FISH" className="fish" />
                            <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="TEL:"  className="fish"/>
                            <input type="text" onChange={(e) => setSale(e.target.value)} placeholder="EMAIL"  className="fish"/>
                            <input type="text" onChange={(e) => setSharx(e.target.value)} placeholder="SHARX"  className="fish"/>
                            <button className='fisha' onClick={HandleClic} >Send</button>
                        </div>
                    <div className="bags-post">
                        <form className='for' onSubmit={HandleClick2}>
                        <label for="images" class="drop-container">
                        <span class="drop-title">Drop files here</span>
                        
                        <input type="file" id="file images" onChange={Change} />
                        <label className="custom-file-upload">
                            <span className="span-download">
                                <ion-icon name="cloud-download-outline"></ion-icon>
                            </span>
                            uploaded
                        </label>
                        </label>
                        {
                            loading2 ? (<>
                                <span>loading</span>
                            </>) : null
                        }
                       
                        </form>
                    </div>
                </div>
                </div>
            </section>
          
        </>
    )
}
export default PostPage