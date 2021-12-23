import React, { Component } from 'react'
import MedicineService from '../services/MedicineService';

class CreateMedicineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            medicine_name:'',
            quantity: '',
            amount: ''
            
           
        }
       
    }

    // step 3
    
    saveOrOrderMedicine = (e) => {
        e.preventDefault();
        let medicine = {quantity: this.state.quantity, amount: this.state.amount, medicine_name: this.state.medicine_name};
        console.log('medicine => ' + JSON.stringify(medicine));

        // step 5
        if(this.state=== '_add'){
            MedicineService.createMedicine(medicine).then(res =>{
                this.props.history.push('/medicines');
            });
        }else{
           MedicineService.OrderMedicine(medicine, this.state).then( res => {
                this.props.history.push('/medicines');
            });
        }
    }
    
    changequantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changeamountHandler= (event) => {
        this.setState({amount: event.target.value});
    }

    changemanufacturerHandler= (event) => {
        this.setState({medicine_name: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/medicines');
    }

    getTitle(){
        if(this.state === '_add'){
            return <h3 className="text-center">Add Medicine</h3>
        }else{
            return <h3 className="text-center">Order Medicine</h3>
        }
    }
    render() {
        return (
            <div>
 <div style={{backgroundImage:"url(https://thumbs.dreamstime.com/z/many-colorful-medicines-white-background-close-up-79891460.jpg)",width:'100%',
    height:'700px',}}>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>medicinename: </label>
                                            <input placeholder="medicinename" name="medicinename" className="form-control" 
                                                value={this.state.medicinename} onChange={this.changemedicinenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> quantity: </label>
                                            <input placeholder="quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> amount: </label>
                                            <input placeholder="amount" name="amount" className="form-control" 
                                                value={this.state.amount} onChange={this.changeamountHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrOrderCustomer}>Order</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                   </div>
            </div>
        )
    }
}

export default CreateMedicineComponent
