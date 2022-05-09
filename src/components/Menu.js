import React,{Components} from "react";
import "./style.css";


class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

            <>
           <div className="card" >
                <img className="img" src={this.props.img} ></img>
                <div className="container">
                    <h4><b>{this.props.name}</b></h4>
                    <p>
                    {this.props.description}
                    </p>
                </div>

           </div>
            
            </>
        )
    }
}

export default Menu;