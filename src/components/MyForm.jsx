import React, { Component } from 'react';
import "./formstyles.css"

class MyForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname : "",
            lastname :"",
            email : "",
            gender: "",
            number: "",
          
    
    }
        

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })

       

    }


    

    handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
    this.setState ({
        firstname : "",
        lastname :"",
        email : "",
        gender: "hello",
        number: "",
      
 })
        
    }

    render() {
        return (
            <div>
             <form className ="classForm-section" onSubmit = {this.handleSubmit}>
                <h1>FORM PRACTICE</h1>
               <label htmlFor="firstname" className="heading">Enter Your First Name</label>
               <    input type="text" 
                    value={this.state.firstname} 
                    onChange = {this.handleChange}   
                    name ="firstname"
                   
               />
               <br />

               <label htmlFor="lastname" className="heading">Enter Your Last Name</label>
               <    input type="text" 
                    value={this.state.lastname} 
                    onChange = {this.handleChange}   
                    name ="lastname"
                   
               />
               <br />

               

               <label htmlFor="email" className="heading">Enter Your Email:</label>
               <     input type="email" 
                     value ={this.state.email} 
                     onChange = {this.handleChange} 
                     name ="email"
               />

               <br />

               <label htmlFor="gender" className="heading">Gender</label>

                <select  name = "gender" value ={this.state.gender}  onChange = {this.handleChange} > 
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option  value="Female">Female</option>
                
                </select>
                        

               <br />

               <label htmlFor="number"className="heading" >Enter Your Phone Number:</label>
               <        input type="number" 
                        value = {this.state.number} 
                        onChange = {this.handleChange} 
                        name ="number" 
                        className ="number"
                 />

               <br />
               <input type="submit" className="submit-btn"/>
            </form>
            </div>
        );
    }
}

export default MyForm;
