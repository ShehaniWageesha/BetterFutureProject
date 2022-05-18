/** @format */
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddPolitician() {
  const [data, setData] = useState({
    fullname: "",
    dob: new Date(),
    gender: "",
    email: "",
    officeAddress: "",
    homeAddress: "",
    officePhone: "",
    homePhone: "",
    school: "",
    maxQualification: "",
    fb: "",
    utube: "",
    web: "",
    secretary: "",
    secPhone: "",
    secEmail: "",
    party: "",
    position: "",
    district: "",
    previousTerms: "",
    projectOngoing: "",
    rating: 5
  });

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setData({
      ...data,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const res = await axios({
        method: "post",
        baseURL: "http://localhost:3333",
        url: "/api/v1/politician/",
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      alert("Data Saved Successfully!");
      window.location.assign("http://localhost:3000/politicians");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Add Politician</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)} style={{ float: "left", width: "30rem" }}>
      <h5>BASIC INFO</h5>
      <br></br>
        <div className="form-group">
          <label>Fullname :</label>
          <input
            type="text"
            name="fullname"
            required
            className="form-control"
            value={data.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth :</label>
          <div>
            <DatePicker
              name="dob"
              selected={data.dob}
              onChange={(newDate) =>
                setData({
                  ...data,
                  dob: newDate,
                })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <label>Gender :</label>
          <input
            type="text"
            name="gender"
            required
            className="form-control"
            value={data.gender}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <h5>CONTACT INFO</h5>
      <br></br>
        <div className="form-group">
          <label>Email Address :</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address - Office :</label>
          <input
            type="text"
            name="officeAddress"
            className="form-control"
            value={data.officeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address - Home :</label>
          <input
            type="text"
            name="homeAddress"
            className="form-control"
            value={data.homeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number - Office :</label>
          <input
            type="text"
            name="officePhone"
            className="form-control"
            value={data.officePhone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number - Home :</label>
          <input
            type="text"
            name="homePhone"
            className="form-control"
            value={data.homePhone}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <h5>EDUCATIONAL INFO</h5>
      <br></br>
        <div className="form-group">
          <label>School :</label>
          <input
            type="text"
            name="school"
            className="form-control"
            value={data.school}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Maximum Qualification :</label>
          <input
            type="text"
            name="maxQualification"
            className="form-control"
            value={data.maxQualification}
            onChange={handleChange}
          />
        </div>
        </form>
        <form noValidate onSubmit={(e) => onSubmitForm(e)} style={{ float: "right", width: "30rem" }}>
        <h5>SOCIAL MEDIA INFO</h5>
      <br></br>
        <div className="form-group">
          <label>Facebook :</label>
          <input
            type="text"
            name="fb"
            className="form-control"
            value={data.fb}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Youtube :</label>
          <input
            type="text"
            name="utube"
            className="form-control"
            value={data.utube}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Web Site :</label>
          <input
            type="text"
            name="web"
            className="form-control"
            value={data.web}
            onChange={handleChange}
          />
        </div>
        <h5>POLITICAL INFO</h5>
      <br></br>
        <div className="form-group">
          <label>Secretary :</label>
          <input
            type="text"
            name="secretary"
            className="form-control"
            value={data.secretary}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Secretary Phone :</label>
          <input
            type="text"
            name="secPhone"
            className="form-control"
            value={data.secPhone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Secretary Email :</label>
          <input
            type="text"
            name="secEmail"
            className="form-control"
            value={data.secEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Party :</label>
          <input
            type="text"
            name="party"
            className="form-control"
            value={data.party}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Position :</label>
          <input
            type="text"
            name="position"
            className="form-control"
            value={data.position}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>District :</label>
          <input
            type="text"
            name="district"
            className="form-control"
            value={data.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Previous Terms :</label>
          <input
            type="text"
            name="previousTerms"
            className="form-control"
            value={data.previousTerms}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ongoing Projects :</label>
          <input
            type="text"
            name="projectsOngoing"
            className="form-control"
            value={data.projectOngoing}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating :</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            value={data.rating}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Add Politician"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default AddPolitician;
