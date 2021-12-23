import React, { Component } from 'react'
import MedicineService from '../services/MedicineService'

class ListMedicineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                medicines: []
        }
        this.addMedicine = this.addMedicine.bind(this);
    }

    deleteMedicine(id){
       MedicineService.deleteMedicine(id).then( res => {
            this.setState({medicine: this.state.medicines.filter(medicine => medicine.id !== id)});
        });
    }
   
    editMedicine(id){
        this.props.history.push(`/add-medicine/${id}`);
    }

    componentDidMount(){
        MedicineService.getMedicines().then((res) => {
            this.setState({medicines: res.data});
        });
    }

    addMedicine(){
        this.props.history.push('/add-medicine/_add');
    }
       render() {

       return(
            <div>
                 <div style={{backgroundImage:"url(https://il6.picdn.net/shutterstock/videos/9168080/thumb/1.jpg)",width:'100%',
    height:'1000px',}}>
                 <h2 className="text-center">Medicines List</h2>
                 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addMedicine}> Add Medicine</button>
                   </div>
                   <br></br> 
                 
                 
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> medicinename</th>
                                    <th> quantity</th>
                                    <th> amount</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.medicines.map(
                                        medicine => 
                                        <tr key = {medicine.id}>
                                             <td> { medicine.medicinename} </td>   
                                             <td> {medicine.quantity}</td>
                                             <td> {medicine.amount}</td>
                                             <td>
                
                                                 <button onClick={ () => this.editMedicine(medicine.id)} className="btn btn-info">Order</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMedicine(medicine.id)} className="btn btn-danger">Delete </button>
                                                 
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
                 </div>
                 </div>
            
       ) 
    }
}

export default ListMedicineComponent

                                       
                                        
                                        