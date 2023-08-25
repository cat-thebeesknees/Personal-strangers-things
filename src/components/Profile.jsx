import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//GET/users/me in the herokuapp helper page. This route is used to grab an already logged in user's relevant data. Messages, etc. Must pass a valid token or it will be rejected.
const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Profile() {
  const navigate = useNavigate();
  const [meProfile, setMeProfile] = useState([]);

  useEffect(() => {
    const myProfile = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        console.log(result);
        setMeProfile(response.user);
      } catch (err) {
        console.error(err);
      }
    };
    myProfile();
  }, []);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>
        {meProfile.map((user) => (
          <div key={user._id} id="userId">
            <p>Posts: {user.posts}</p>
            <p>Messages: {user.messages}</p>
            <p>Username: {user.username}</p>
            
          </div>
        ))}

        <Link to="/" className="returnButton">
          <button className="goBack" onClick={() => navigate("/")}>
            Return
          </button>
        </Link>
      </div>
    </div>
  );
}
Profile.propTypes = {
  token: PropTypes.string,
};
Profile.defaultProps = {
  token: null,
};