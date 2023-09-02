import { useNavigate } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import supplierImg from './assets/supplierImg.png';
import categoryImg from './assets/categoryImg.jpg';
import productsListImg from './assets/productsListImg.png';
import orderImg from './assets/orderImg.png';
import usersListImg from './assets/usersListImg.png';
import backgroundImg from './assets/backgroundImg.jpg';

function Admin() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <AdminNavBar />
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="text-success container">
                    <div className="row">
                        <div className="col-md-2 text-center d-flex flex-column align-items-center mb-3">
                            <img src={supplierImg} alt="All Suppliers" className="img-fluid mb-2" style={{ maxWidth: "100px" }} />
                            <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/admin/farmer')}>All Suppliers</button>
                        </div>
                        <div className="col-md-2 text-center d-flex flex-column align-items-center mb-3">
                            <img src={categoryImg} alt="Product Category" className="img-fluid mb-2" style={{ maxWidth: "100px" }} />
                            <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/admin/category')}>Product Category</button>
                        </div>
                        <div className="col-md-2 text-center d-flex flex-column align-items-center mb-3">
                            <img src={productsListImg} alt="Products List" className="img-fluid mb-2" style={{ maxWidth: "100px" }} />
                            <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/admin/productslist')}>Products List</button>
                        </div>
                        <div className="col-md-2 text-center d-flex flex-column align-items-center mb-3">
                            <img src={orderImg} alt="Orders List" className="img-fluid mb-2" style={{ maxWidth: "100px" }} />
                            <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/admin/order')}>Orders List</button>
                        </div>
                        <div className="col-md-2 text-center d-flex flex-column align-items-center mb-3">
                            <img src={usersListImg} alt="Registered Buyers" className="img-fluid mb-2" style={{ maxWidth: "100px" }} />
                            <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/admin/userslist')}>Buyers List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 text-muted">
                Copyright &copy; 2023 &mdash; Online Dairy World
            </div>
        </div>
    );
}

export default Admin;
