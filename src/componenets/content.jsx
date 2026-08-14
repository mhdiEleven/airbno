import st from './content.module.css'
import React, { useState } from 'react'
import info from './info'
import { motion, stagger } from 'motion/react'
import Product from './Product'
function Desc({ data }) {
    return (<div className={st.desc_container}>
        <h2 className={st.text}>{data}</h2>
        <div className={st.circle}>
            <img className={st.arrow} src="/arrow.png" alt="" />
        </div>
    </div>)
}
//PRODUCT ARGUMENTS ARE : src, guest , isfav , price , rating
const container ={
    hidden : {opacity:0},
    visible : {opacity:1 , transition:{staggerChildren:0.2}}
}

function Content() {
    const [liked, change_state] = useState(JSON.parse(localStorage.getItem("liked")) || [])
    localStorage.setItem("liked", JSON.stringify(liked))
    return (<div className={st.everything}>

        {Object.values(info).map((inf) => {
            const Sp_id = inf
            return (
                <React.Fragment key={inf.id}>
                    <Desc data={inf.description} />
                    <motion.div className={st.wrapper}
                    variants={container} initial="hidden" animate="visible">
                        {inf.content.map(
                            p => <Product liked={liked} change_state={change_state} data={{ ...p, full_id:`${p.id}${inf.id}` }} key={p.id} ></Product>

                        )}
                    </motion.div>

                </React.Fragment>)
        }
        )}

    </div>)
}
export default Content