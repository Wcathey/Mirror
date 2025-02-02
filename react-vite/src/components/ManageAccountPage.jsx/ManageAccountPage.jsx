import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import "./ManageAccountPage.css"

function ManageAccountPage() {
    const [password, setPassword] = useState('************')
    const user = useSelector(state => state.session.user)

    if (user) {
        return (
            <div className="manage-account-container">
                <div className="edit-account-wrapper">
                    <label>Username: {user.username}</label>
                </div>
                <div className="edit-account-wrapper">
                    <label>Email: {user.email}</label>
                </div>
                <div className="edit-account-wrapper">
                    <label>Subscription Tier: {user.subscription_id}</label>
                    <div id="account-sub-btns">
                        <button>Upgrade Subscription</button>
                        <button>Cancel Subscription</button>
                    </div>
                </div>
                <div className="edit-account-wrapper">
                    <div id="account-password-wrapper">
                        <label>Password</label>
                        <input
                            type="text"
                            value={password}
                        />
                        <button id="show-passord"><IoMdEye /></button>
                    </div>

                    <button>Change Password</button>
                </div>



            </div>
        )
    }
    else {
        return (
            <div className="no-access">
                <p>No Account found</p>
                <NavLink to="/">Return Home</NavLink>
            </div>
        )
    }
}

export default ManageAccountPage;
