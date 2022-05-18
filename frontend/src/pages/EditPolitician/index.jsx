/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function EditPolitician() {
  const { id } = useParams();
  const [politician, setPolitician] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempPolitician = await getData(id);
      setPolitician(tempPolitician);
      console.log(JSON.stringify(tempPolitician));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:3333/api/v1/politician/" + id;
      const res = await axios.get(finalURL);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setPolitician({
      ...politician,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(politician));
    try {
      e.preventDefault();

      const res = await axios({
        method: "patch",
        baseURL: "http://localhost:3333",
        url: "/api/v1/politician/" + id,
        data: politician,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      window.location.assign("http://localhost:3000");
      alert("Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(politician);
  if (!politician) {
    return <>Loading the data</>;
  }

  return (
    <div>
      <h3>Edit Politician Info</h3>
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
            defaultValue={politician.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth :</label>
          <div>
            <DatePicker
              name="dob"
              selected={politician.dob}
              onChange={(newDate) =>
                setPolitician({
                  ...politician,
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
            defaultValue={politician.gender}
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
            defaultValue={politician.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address - Office :</label>
          <input
            type="text"
            name="officeAddress"
            className="form-control"
            defaultValue={politician.officeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address - Home :</label>
          <input
            type="text"
            name="homeAddress"
            className="form-control"
            defaultValue={politician.homeAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number - Office :</label>
          <input
            type="text"
            name="officePhone"
            className="form-control"
            defaultValue={politician.officePhone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number - Home :</label>
          <input
            type="text"
            name="homePhone"
            className="form-control"
            defaultValue={politician.homePhone}
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
            defaultValue={politician.school}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Maximum Qualification :</label>
          <input
            type="text"
            name="maxQualification"
            className="form-control"
            defaultValue={politician.maxQualification}
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
            defaultValue={politician.fb}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Youtube :</label>
          <input
            type="text"
            name="utube"
            className="form-control"
            defaultValue={politician.utube}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Web Site :</label>
          <input
            type="text"
            name="web"
            className="form-control"
            defaultValue={politician.web}
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
            defaultValue={politician.secretary}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Secretary Phone :</label>
          <input
            type="text"
            name="secPhone"
            className="form-control"
            defaultValue={politician.secPhone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Secretary Email :</label>
          <input
            type="text"
            name="secEmail"
            className="form-control"
            defaultValue={politician.secEmail}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Party :</label>
          <input
            type="text"
            name="party"
            className="form-control"
            defaultValue={politician.party}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Position :</label>
          <input
            type="text"
            name="position"
            className="form-control"
            defaultValue={politician.position}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>District :</label>
          <input
            type="text"
            name="district"
            className="form-control"
            defaultValue={politician.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Previous Terms :</label>
          <input
            type="text"
            name="previousTerms"
            className="form-control"
            defaultValue={politician.previousTerms}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ongoing Projects :</label>
          <input
            type="text"
            name="projectOngoing"
            className="form-control"
            defaultValue={politician.projectOngoing}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating :</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            defaultValue={politician.rating}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Politician"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditPolitician;
