import st from './content.module.css'
import React, { useState } from 'react'
import info from './info'
import { motion } from 'motion/react'   
export default function Product({ data, liked, change_state }) {
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }
    function handleLike() {
        
        const newlike = liked.includes(data.full_id) ?
            liked.filter(x => x !== data.full_id) :
            [...liked, data.full_id]
        console.log(newlike)
        localStorage.setItem("liked", JSON.stringify(newlike))
        console.log(`like = ${JSON.parse(localStorage.getItem('liked')) }`)
        


        change_state(newlike)
    }
    return (<motion.div className={st.card} 
    variants={item}>
    
        <div className={st.img_container}>
            <img src={'/products/' + data.src + '.png'} className={st.img} />


            {data.guestfav && <p className={st.guest}>Guest favorite</p>}

            {liked.includes(data.full_id)? (
                <button className={`${st.active_container} ${st.colored}`} onClick={() => handleLike(data.full_id)}>
                    <svg className={st.active} width="40px" height="40px" viewBox="0 0 24 24" fill="hsl(0deg,50%,50%)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            ) : (
                <button className={st.active_container} onClick={() => handleLike(data.full_id)}>
                    <svg className={st.active} width="40px" height="40px" viewBox="0 0 24 24" fill="hsl(0deg,0%,25%)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            )}

        </div>
        <div className={st.text_container}>
            <p>{data.desc}</p>
            <div className={st.rating}>
                <p className={st.price}>{data.price}</p>
                <img className={st.star} src='/star.svg'></img>
                <p className={st.rating_text}>{data.rating}</p>
            </div>
        </div>
    </motion.div>)

}