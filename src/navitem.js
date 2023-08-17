import { Link } from "react-router-dom";

const Navitems=({navitems})=>{
    return(
        <div className="menu d-flex justify-content-between">
            <img className="logo" src="logo.png" alt="menu"
            />
            <div className="items d-flex ">
            <ul className="nav-item-parent d-flex">
                {navitems.map((item,i)=>(
                    <li className="nav-item-child d-flex" key={i}>
                        <Link to={item.path}>{item.name}</Link>
                        </li>
                ))}

            </ul>

            </div>
            

        </div>

    );
};
export default Navitems;