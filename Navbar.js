import React from "react";//im
class NavBar extends React.Component{
    firstAgnger="Home"
    render(){
        
       return<div className="container mt-5">
           <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Primary</button>
           <button type="button" class="btn btn-primary m-1">Primary</button>
<button type="button" class="btn btn-secondary m-1">Secondary</button>
<button type="button" class="btn btn-success m-1">Success</button>
<button type="button" class="btn btn-danger m-1">Danger</button>
<button type="button" class="btn btn-warning m-1">Warning</button>
<button type="button" class="btn btn-info m-1">Info</button>
<button type="button" class="btn btn-light m-1">Light</button>
 

 
     </div>
       
    
    }

}
 
export default NavBar ;




