import { Link } from "react-router-dom"
import st from './catagories.module.css'
function Catagory({cat}){
    return(
        <Link to={cat.url} className={st.container}>
            <img className={st.img} src={cat.src}></img>
            <p className={st.text}><span className={st.span}>{cat.text}</span></p>
        </Link>
    )
}
export  default Catagory 