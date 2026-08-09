import st from './top_nav.module.css'
import Searchbar from './searchbar'
import Catagory from './catagories'

function Top_nav(){
    const cats = [
        {id:1 , text:"all" , src:'./globe.png' , url:'/'},
        {id:2 , text:"homes", src:'./home.png' , url:'homes'},
        {id:3 , text:"Experiences" , src:'./bell.png',url:"experiences"},
        {id:4 , text:"Services",url:'services' },
    ]
    return(
        <div className={st.sticky}>
            <Searchbar></Searchbar>
            <div className={st.wrapper}>
                {cats.map( items => (
                    <Catagory cat = {items} key={items.id} />
                ))}
            </div>
        </div>
    )
}
export default Top_nav
