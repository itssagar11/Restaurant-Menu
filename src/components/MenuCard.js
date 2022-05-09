import React,{Components} from "react";
import  Menu  from './Menu';
import  MenuData from './dishes';


class MenuCard extends React.Component{
   constructor(props){
       super(props)

   }
    render(){
       
        
        return(
                
            MenuData.filter(MenuData=> (MenuData.category==this.props.category) || (this.props.category== "all")).map((curr=>{
                
               return (
                
                 <>
                
                 <Menu  key={curr} name={curr.name} img={curr.img} description={curr.description}/>
                 
                 </>
                   );
         
             }))
        )
    }
}

export default MenuCard;