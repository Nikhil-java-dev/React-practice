import { useState } from "react";

const ControlledForm1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleSkills = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills((prev) => [...prev, value]);
    } else {
      setSkills((prev) => prev.filter((skill) =>    skill !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { username, email, password, course, gender, skills };
    console.log(newUser);
  };

  return (
    <>
      <h1>Learn Controlled Forms</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
        <input
          type="radio"
          name="gender"
          id="gender"
          value="male"
          onChange={handleGender}
        />
        Male
        <input
          type="radio"
          name="gender"
          id="gender"
          value="female"
          onChange={handleGender}
        />
        Female
        <br />
        <br />
        <lable htmlFor="skils" value={skills}>
          Skils:
        </lable>
        <input
          type="checkbox"
          name="html"
          id="html"
          value="html"
          onChange={handleSkills}
        />
        HTML
        <input
          type="checkbox"
          name="css"
          id="html"
          value="css"
          onChange={handleSkills}
        />
        CSS
        <input
          type="checkbox"
          name="js"
          id="js"
          value="js"
          onChange={handleSkills}
        />
        JS
        <input
          type="checkbox"
          name="react"
          id="react"
          value="react"
          onChange={handleSkills}
        />
        REACT
        <br />
        <br />
        <label htmlFor="course">Select Course</label>
        <select
          name="course"
          id="course"
          value={course}
          onChange={handleCourse}
        >
          <option value="" disabled selected>
            Select Here
          </option>
          <option value="Java FullStack">Java FullStack</option>
          <option value="Python FullStack">Python FullStack</option>
          <option value="MERN Stack">MERN Stack</option>
        </select>
        <br />
        <br />
        <button>submit</button>
      </form>
    </>
  );
};

export default ControlledForm1;
