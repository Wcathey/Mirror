import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdEye } from "react-icons/io";
import { getCurrentUserSubscription } from "../../redux/subscription";
import "./ManageAccountPage.css"

function ManageAccountPage() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('************')

    const user = useSelector(state => state.session.user)
    const subscriptionData = useSelector(state => state.subscription)


    useEffect(() => {
        dispatch(getCurrentUserSubscription(user.subscription_id))
    }, [dispatch])

    const upgradeSubscription = () => {
        
    }

    if (user && subscriptionData) {
        return (
            <div className="manage-account-container">
                <h1 id="manage-headline">Manage Account</h1>

                <div className="edit-user-cred-wrapper">
                    <h1>User Details</h1>
                    <p>Username: <span>{user.username}</span></p>
                    <p>Email: <span> {user.email}</span></p>
                    <div className="edit-password-wrapper">
                        <div id="password-container">
                            <p>Password</p>
                            <input
                                type="text"
                                value={password}
                            />
                            <button id="show-password"><IoMdEye></IoMdEye></button>
                        </div>
                        <button className="manage-btn">Change Password</button>
                    </div>
                </div>
                <div className="edit-subscription-wrapper">
                    <h1>Subscription</h1>
                    <h2>Current Plan</h2>
                    <p>Tier: <span>{subscriptionData.tier}</span></p>
                    {subscriptionData.tier !== 'free' &&
                        <div id="paid-tier-wrapper">
                            <p>Price: <span>${subscriptionData.price}</span></p>
                            <p>Duration: <span>{subscriptionData.duration}</span></p>
                        </div>
                    }
                    <div id="account-sub-btns">
                        <button className="manage-btn">Upgrade Subscription</button>
                        {subscriptionData.tier !== 'free' &&
                        <button className="manage-btn">Cancel Subscription</button>
                        }
                    </div>
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
