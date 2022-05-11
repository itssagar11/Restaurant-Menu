import React,{Components} from "react";
import  Menu  from './Menu';
import  MenuData from './dishes';


class MenuCard extends React.Component{
   constructor(props){
   
       super(props)
      
        this.state={
            category:this.props.category,
        }
       
   }
    render(){
       
        
        return(
                
            MenuData.filter(MenuData=> (MenuData.category===this.props.category) || (this.props.category=== "all")).map((curr=>{
                document.title= "QuickBite- " +this.props.category;    
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