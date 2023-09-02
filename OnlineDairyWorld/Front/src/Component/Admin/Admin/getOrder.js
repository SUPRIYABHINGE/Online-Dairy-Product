import { useEffect, useState } from 'react';
import farmerServices from '../../Services/farmer.services';
import { useNavigate} from "react-router-dom";
import AdminNavBar from './AdminNavBar';

function GetOrder() {

    const [allOrder, setallOrder] = useState([]);
    const navigate = useNavigate();

    const init = () => {
       fetch("https://localhost:7132/api/Orders")
            .then(response => response.json())
            .then(pkgs => setallOrder(pkgs))
                
            };
           /* .catch(error => {
                console.log('Something went wrong', error);
            })*/
    }

    useEffect(() => {
        init();
    }, []);

    

    return (
        <div>
            <AdminNavBar />
            <div className="container">
                <h3 className='mt-2'>Orders</h3>
                <hr />
                <div>

                   
                    <table className="table table-bordered table-striped text-center">
                        <thead className="thead-dark">
                            <tr>
                          
                                <th>Order Id</th>
                                <th>Delivery Date</th>
                                <th>Delivery Status</th>
                                <th>Payment Status</th>
                                <th>User Id</th>
                                <th>Order Details</th>
                                <th>User</th>
                         
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrder.map((allor,i) => {
                                    return <tr>
                                        <td>{allor.orderId}</td>
                                        <td><b>{allor.deliveryDate}</b></td>
                                        <td>{allor.deliveryStatus}</td>
                                        <td>{allor.paymentStatus}</td>
                                        <td>{allor.placeOrderDate}</td>
                                        <td>{allor.userId}</td>
                                        <td>{allor.orderDetails}</td>
                                        <td>{allor.user}</td>
                                    </tr>
                                    })
                                
                                    /*<tr key={o.orderId}>
                                        <td>{farmers.indexOf(f) + 1}</td>
                                        <td>{f.firstname}</td>
                                        <td>{f.lastname}</td>
                                        <td>{f.phoneNo}</td>
                                        <td>{f.email}</td>
                                        <td>{f.address}</td>
                                        <td className='text-center'>
                                            <button type="button" className="btn btn-info mx-1" onClick={() =>
                                                navigate(`/admin/updatefarmer/${f.farmerId}`)}>Update</button>

                                            <button type="button" className="btn btn btn-success mx-3" onClick={() =>
                                                navigate(`/admin/addproduct/${f.farmerId}`)}>Add Product</button>

                                            <button className="btn btn-danger ml-2" onClick={() => {
                                                handleDelete(f.farmerId);
                                            }}>Delete</button>
                                        </td>
                                    </tr>*/
                                
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            <div className="text-center  text-muted" style={{marginTop: '100px', marginBottom: '35px'}}>
                Copyright &copy; 2023 &mdash; Online Dairy World
            </div>
        </div>
    );


export default FarmersList;