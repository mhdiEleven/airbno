import st from './content.module.css'
import { useState } from 'react'
const info = {
//PRODUCT ARGUMENTS ARE : desc ,src, guest , isfav , price , rating
    11:{description:'Popular homes in Oran',
        type:'homes',
        content:[
            {id:1 ,desc:'hello', src:'test', guestfav:true , isfav:true ,price:"yo left kidney" , rating:'5'},
            {id:2, src:'test', guestfav:false , isfav:true ,price:"yo left kidney" , rating:'5'},
            {id:3, src:'test', guestfav:true , isfav:true ,price:"yo left kidney" , rating:'5'},
            {id:4, src:'test', guestfav:true , isfav:true ,price:"yo left kidney" , rating:'5'},
        ]
    },
    12:{description:'Popular homes in my ass',
        type:'homes',
        content:[
            {id:1, src:null, guestfav:true , isfav:true ,price:"yo left kidney" , rating:'5'}
        ]
    },
}
function liked(e){
    alert('nigga you dont have favorite code written yet')
}
function Desc({data}){
    return(<div className={st.desc_container}>
        <h2 className={st.text}>{data}</h2>
        <div className={st.circle}>
            <img className={st.arrow} src="/arrow.png" alt="" />
        </div>
    </div>)
}
//PRODUCT ARGUMENTS ARE : src, guest , isfav , price , rating
function Product({data}){
    return(<div className={st.card}>
        <div className={st.img_container}>
            <img src={'/products/'+data.src+'.png'} className={st.img}/>

                
            {data.guestfav && <p className={st.guest}>Guest favorite</p>}
            {data.isfav ? (
            <button className={st.active_container} onClick={liked}>
                <svg className={st.active} width="40px" height="40px" viewBox="0 0 24 24" fill="hsl(0deg,0%,25%)" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            ) : (
            <button className={st.active} onClick={liked}></button>
            )}

        </div>
        <div className={st.text_container}>
            <p>{data.desc}</p>
            <div className={st.rating}>
                <p className={st.price}>{data.price}</p>
                
                <svg width="20" height="20" viewBox="0 0 100 100">
                    <polygon points="50,5 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
                    fill="gold"/>
                </svg>
                <p className={st.rating_text}>{data.rating}</p>
            </div>
        </div>
    </div>)
}
function Content({data , fav ,setfav}){
    return(<div className={st.everything}>
        
        {Object.values(info).map((inf) =>
            <>
                <Desc data={inf.description} key={info}/>
                <div className={st.wrapper}>
                    {inf.content.map(
                        p =><Product data={p} key={p.id}></Product>
                    
                    )}
                </div>

            </>
        )}

    </div>)
}
export default Content