
import { useState } from "react"
import st from "./Favs.module.css"
import info from "../componenets/info"
import Product from "../componenets/Product"
export function Favs(){
    let [liked, change_state] = useState(JSON.parse(localStorage.getItem("liked")) || [])
    liked.filter(x => x !== null)
    return(<div className={st.fav}>
        
            {
            [...liked].reverse().map( p =>{
                const idp = Math.floor(p/100)
                const idc = p %100
                return(
                <Product liked={liked} change_state={change_state} data={{...info[idc].content[idp-11] , full_id:p}} key={p}></Product>)}
            )}
    </div>
    )
}