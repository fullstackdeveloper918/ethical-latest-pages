import React from 'react'
import Layout from '../../../components/super-adminLayout/Layout'
import Styles from './product-sync.module.css'
import { BsFillBoxFill } from 'react-icons/bs'
// import { IoMdCart } from 'react-icons/io'
// import { CiUser } from 'react-icons/ci'
// import { IoKeyOutline } from 'react-icons/io5'
// import useFetch from '../../../lib/useFetch'
function index() {



    // const [
    //     count,
    //     { response: countResponse, loading: countLoading, error: countError },
    //   ] = useFetch(`/sadm/count`, {
    //     method: 'get',
    //   })
    return (
        <Layout>
            {/* Customer data table */}

            <div className="container mt-5">
              <div className={Styles.SyncWrapper}>
              <div className={`${Styles.cardDiv} col-md-10 col-sm-12 mx-auto`}>
                <div className="row justify-content-center mt-5 gap-4">
                    <div className="card" style={{ width: "18rem" }}>
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Products</h5>
                            <div className="d-flex flex-column align-items-center">
                                <div className="mt-2">
                                    <span>
                                        <BsFillBoxFill color="#a2d061" fontSize={30} />
                                    </span>
                                </div>
                                <div className="row justify-content-center align-items-center mt-2" style={{ height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#f0f0f0", fontSize: "24px" }}>
                                    34
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Products of U.S</h5>
                            <div className="d-flex flex-column align-items-center">
                                <div className="mt-2">
                                    <span>
                                        <BsFillBoxFill color="#a2d061" fontSize={30} />
                                    </span>
                                </div>
                                <div className="row justify-content-center align-items-center mt-2" style={{ height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#f0f0f0", fontSize: "24px" }}>
                                    34
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body text-center">
                            <h5 className="card-title">Total Products of Canada</h5>
                            <div className="d-flex flex-column align-items-center">
                                <div className="mt-2">
                                    <span>
                                        <BsFillBoxFill color="#a2d061" fontSize={30} />
                                    </span>
                                </div>
                                <div className="row justify-content-center align-items-center mt-2" style={{ height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#f0f0f0", fontSize: "24px" }}>
                                    34
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className={Styles.btnSyncWrapper}>
                <button className={Styles.btnSync}>Sync Products</button>
                </div>
                </div>
              </div>
            </div>


        </Layout>
    )
}

export default index