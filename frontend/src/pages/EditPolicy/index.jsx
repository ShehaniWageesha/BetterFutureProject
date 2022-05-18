/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditPolicy() {
  const { id } = useParams();
  const [policy, setPolicy] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const tempPolicy = await getData(id);
      setPolicy(tempPolicy);
      console.log(JSON.stringify(tempPolicy));
    };

    fetchData();
  }, []);

  const getData = async (id) => {
    try {
      const finalURL = "http://localhost:3333/api/v1/policy/" + id;
      const res = await axios.get(finalURL);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setPolicy({
      ...policy,
      [name]: value,
    });
  }

  const onSubmitForm = async (e) => {
    console.log(JSON.stringify(policy));
    try {
      e.preventDefault();

      const res = await axios({
        method: "patch",
        baseURL: "http://localhost:3333",
        url: "/api/v1/policy/" + id,
        data: policy,
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

  console.log(policy);
  if (!policy) {
    return <>Loading the data</>;
  }

  return (
    <div>
      <h3>Edit Policy</h3>
      <br></br>
      <form noValidate onSubmit={(e) => onSubmitForm(e)}>
        <div className="form-group">
          <label>Title :</label>
          <input
            type="text"
            name="title"
            defaultValue={policy.title}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Subject :</label>
          <input
            type="text"
            name="subject"
            required
            className="form-control"
            defaultValue={policy.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Challenge :</label>
          <input
            type="text"
            name="challenge"
            defaultValue={policy.challenge}
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Suggestion :</label>
          <input
            type="text"
            name="suggestion"
            required
            className="form-control"
            defaultValue={policy.suggestion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Rating :</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            defaultValue={policy.rating}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Edit Policy"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditPolicy;
