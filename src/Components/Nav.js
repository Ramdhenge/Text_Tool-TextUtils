import { NavLink } from "react-router-dom"
import { useState } from "react";


function Nav(props) {
    
    const [menu, setmenu] = useState('')
    const [endItem, setendItem] = useState('')
    
    const handleMenu = ()=>{
        if(menu==='none'){
            setmenu('block')
            setendItem('-104px')
        }
        else{
            setmenu('none')
            setendItem('')
        }
    }

    return (
        <nav className="nav">
            <ul>
                <li><NavLink to='/'><h1><span className="l-1">Text</span><span>Utils</span></h1></NavLink></li>
                <li className="list-item" style={{display:`${menu}`}}><NavLink to='/'>{props.m1}</NavLink></li>
                <li className="list-item" style={{display:`${menu}`}}><NavLink to='/about' >{props.m2}</NavLink></li>
                <li className="list-item" style={{display:`${menu}`}}><NavLink to='/' >{props.m3}</NavLink></li>
            </ul>
            <div className="end-items" style={{marginTop : `${endItem}`}}>
                <p>Mode</p>
                <div className="switch" style={{ background: `${props.bg}` }} onClick={props.toggleMode}>
                    <div className="circle" style={{ marginLeft: `${props.btn}`, background: '' }}></div>
                </div>
                <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Menu"><path d="M20 5H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H4c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1z" fill="#d85b53" className="color000000 svgShape"></path></svg>
            </div>
        </nav>
    )
}

export default Nav


Nav.defaultProps = {
    m1: "Home",
    m2: "About",
    m3: "Contact"
}