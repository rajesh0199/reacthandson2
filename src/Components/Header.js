import React from "react";

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            Name : "",
            Department : "",
            Rating : "",
            items : []
        }
    }

    getinput= (event)=>{
        // console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    show=(event)=>{
        event.preventDefault()
        let obj = {
            Name : this.state.Name,
            Department :  this.state.Department,
            Rating :  this.state.Rating,
           
        }
        console.log(obj);
        const arr = this.state.items
        arr.push(obj)
        console.log(arr);
        console.log(arr.length);
        this.setState({
            Name : "",
            Department :  "",
            Rating :  "",
            items : [...arr] 
        })  
    }
    
    render(){
        return(
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <div className="box_1">
                    {/* <form> */}
                        <label className="label">Name :</label>
                        <input className="text" type="text" name="Name" value={this.state.Name} onChange={this.getinput}/>
                        <br/>
                        <label className="label">Department :</label>
                        <input className="text" type="text" name="Department" value={this.state.Department} onChange={this.getinput}/>
                        <br/>
                        <label className="label">Rating :</label>
                        <input className="text" type="number" name="Rating" value={this.state.Rating} onChange={this.getinput}/>
                        <br/>
                        <button className="btn" onClick={this.show}>Submit</button>
                    {/* </form> */}
                </div>
                <div className="box_2">
                    {
                        this.state.items.map((value,index)=>{
                            return(
                                <div className="subdiv">
                                   Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )   
    }
}
export default Header




