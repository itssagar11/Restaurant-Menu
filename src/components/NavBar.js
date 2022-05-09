import React from "react";
import './style.css';
import MenuCard from './MenuCard';
class NavBar extends React.Component{
    constructor(){
        super();
        this.state={
            category:"all",
        }
         this.handleEvent= this.handleEvent.bind(this);
    }
    handleEvent(e){
        console.log(e.target.name+" "+this.state.category)
        this.setState({category:e.target.name}) ;
    }
    render(){
        return(
            <>
                <div className="topnav" >
                <a className="active" name="all" onClick={this.handleEvent}>All</a>
                <a name="BreakFast" onClick={this.handleEvent}>BreakFast</a>
                <a name="Lunch" onClick={this.handleEvent}>Lunch</a>
                <a name="Dinner" onClick={this.handleEvent} >Dinner</a>
   
                </div>
                <div className='menu-container'>
                <MenuCard category={this.state.category}/>
                </div>
               

            </>
        )
    }
}
export default NavBar;