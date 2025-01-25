import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import { ImageContext } from "../AdminDashBoard/ImageContext";

const Profile = () => {
  const { setImage } = useContext(ImageContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [about, setabout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("displayName", displayName);
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipCode", zipCode);
    formData.append("country", country);
    formData.append("phone", phone);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("pinterest", pinterest);
    formData.append("linkedin", linkedin);
    formData.append("about", about);

    // Submit form data to the backend
    fetch("your-backend-url", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="profile-main">
      <h2>Update your Profile!</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label>
            <img src="" alt="image" className="profileuserimage" />
          </label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="nameprofile">
          <div className="form-group">
            <label>First Name</label>
            <input
              className="profileinput"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="JHON"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="profileinput"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="WICK"
            />
          </div>
          <div className="form-group">
            <label>Display Name</label>
            <input
              className="profileinput"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              placeholder="JHON001"
            />
          </div>
        </div>
        <div>
          <div className="ProfileAddress">
            <div className="form-group">
              <label>Permanent Address </label>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
                placeholder="Your Address "
                className="profileinput"
              />
            </div>
            <div className="form-group">
              <label>Temporary Address </label>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Your Address "
                className="profileinput"
              />
            </div>
          </div>
        </div>
        <div className="profileDetailName">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="Bangalore "
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              placeholder="Karnataka "
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>Zip Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              placeholder="560001 "
              className="profileinput"
            />
          </div>
        </div>
        <div className="ProfileCountry">
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              placeholder="India "
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="987654000 "
              className="profileinput"
            />
          </div>
        </div>

        <div className="Profileurl">
          <div className="form-group">
            <label>Facebook URL</label>
            <input
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              placeholder="http://facebook.com/jhon"
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>Twitter URL</label>
            <input
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="http://twitter.com/jhon"
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>pinterest URL</label>
            <input
              type="text"
              value={pinterest}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="http://twitter.com/jhon"
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>Linkedin URL</label>
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="http://twitter.com/jhon"
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>Instagram URL</label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setTwitter(e.target.value)}
              placeholder="http://twitter.com/jhon"
              className="profileinput"
            />
          </div>
        </div>

        <div className="form-group">
          <label>About</label>
          <textarea
            value={about}
            onChange={(e) => setOtherInfo(e.target.value)}
            className="profileinput"
          ></textarea>
        </div>

        <div className="ProfilePasswordf">
          <div className="form-group">
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              className="profileinput"
            />
          </div>
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="profileinput"
            />
          </div>
        </div>

        <div className="ButtonsForProfile">
          <button type="submit" className="submit-btn">
            Save Profile
          </button>
          <button type="submit" className="submit-btn">
            Download
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
