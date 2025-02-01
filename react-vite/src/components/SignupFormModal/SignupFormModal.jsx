import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [subscription, setSubscription] = useState("");

  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleChange = (e) => {
    setSubscription(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Selected subscriptions: ${subscription}}`);

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (

    <div className="signup-modal-container">
      <h1 id="signup-title">Sign Up</h1>
      {errors.server && <p>{errors.server}</p>}
      <form id="signup-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && <p>{errors.username}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
         <div className="subscription-form-container">

                <h1>Select a subscription plan</h1>
                <div className="tier-wrapper">
                    <label>
                        <input
                        type="radio"
                        name="subscription"
                        value="free"
                        checked={subscription === 'free'}
                        onChange={handleChange}
                        />
                        Free
                    </label>
                    <p>Basic facial scanning with recommendations to accessories and 2 filters</p>
                </div>
                <div className="tier-wrapper">
                    <label>
                        <input
                        type="radio"
                        name="subscription"
                        value="standard"
                        checked={subscription === 'standard'}
                        onChange={handleChange}
                        />
                        Standard
                    </label>
                    <p>Unlocks all filters with optional in app purchases for tutorials</p>
                </div>
                <div className="tier-wrapper">
                    <label>
                        <input
                        type="radio"
                        name="subscription"
                        value="premium"
                        checked={subscription === 'premium'}
                        onChange={handleChange}
                        />
                        Premium
                    </label>
                    <p>Includes Everything that standard provides along with access to all brands and tutorials</p>
                </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
