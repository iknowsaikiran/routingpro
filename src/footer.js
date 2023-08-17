const Footer=()=>{
    return(
        
        <div className=" border-top footer d-flex justify-content-between">
            <div className="about d-flex align-items-end">
            Lorem ipsum is a term that refers to a type of placeholder text that 
            is commonly used in graphic design, publishing, and web development. 
            It is a way of filling up the space where the actual content will be 
            placed, without distracting the reader or the designer from the layout

            </div>
            <div className="contact d-flex align-items-center">
                <blockquote>saikiran kondeti  guntur</blockquote>
         
            
            </div>
            <div className="complaints ">
                <input type="text" placeholder="enter you mail id"/>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                <buttun className="btn btn-primary">submit</buttun>

            </div>
            

        </div>
        

    )
};
export default Footer;