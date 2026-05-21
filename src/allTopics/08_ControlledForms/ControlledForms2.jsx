import { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    course: "",
    skills: [],
  });

  const handleChange = (e) => {
    // console.log(e);
    let { name, value, checked, type } = e.target;
    if (type == "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          skills: [...formData.skills, value],
        });
      } else {
        setFormData({
          ...formData,
          skills: formData.skills.filter((skill) => skill !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(formData);
    let existingUser = JSON.parse(localStorage.getItem("users")) || [];
    existingUser.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUser));
    console.log(existingUser);
    alert("user created🕵️‍♀️");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Learn Controlled Form</h1>
      <p style={{ color: "blue" }}>
        Handling multiple input using single state
      </p>
      <hr />
      <br />
      <br />

      <form onSubmit={handleSubmit} style={{ color: "orange", padding:"5px" }}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Name"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          onChange={handleChange}
        />
        Male{" "}
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          onChange={handleChange}
        />
        Female
        <br />
        <br />
        <label htmlFor="skills">Skills: </label>
        <input
          type="checkbox"
          name="skills"
          id="html"
          value="html"
          onChange={handleChange}
        />
        HTML
        {"  "}
        <input
          type="checkbox"
          name="skills"
          id="css"
          value="css"
          onChange={handleChange}
        />
        CSS
        {"  "}
        <input
          type="checkbox"
          name="skills"
          id="js"
          value="js"
          onChange={handleChange}
        />
        JS
        {"  "}
        <input
          type="checkbox"
          name="skills"
          id="react"
          value="react"
          onChange={handleChange}
        />
        REACT
        <br />
        <br />
        <select name="course" value={formData.course} onChange={handleChange} style={{color:"olive"}}>
          <option value="">Select Option</option>
          <option value="Java FullStack">Java FullStack</option>
          <option value="Python FullStack">Python FullStack</option>
          <option value="Mern Stack">Mern Stack</option>
        </select>
        <br />
        <br />
        <button style={{backgroundColor:"olive", color: "white", border: "none", padding: "5px"}}>Submit</button>
      </form>
    </>
  );
};

export default ControlledForm2;
