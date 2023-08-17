const Sidebar=({Sideitems})=>{
    return(
        <div className="sideitem d-flex">
            <ul className="side-item-parent ">{Sideitems.map((sitems,i)=>(
                <li className="side-tem-child d-flex" key={i}>{sitems}</li>
            ))}</ul>
        </div>

    );
}
export default Sidebar;