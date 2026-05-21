import { useRef } from "react";

const UncontrolledForms = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited");

    let newUser = {
      email:  emailRef.current.value,
      password: passwordRef.current.value,
    }

    console.log(newUser);
    

    emailRef.current.value = ""
    passwordRef.current.value=""


  };
  return (
    <>
      <h1>Uncontrolled forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" ref={emailRef}/>
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" name="password" id="password"  ref={passwordRef}/>
        <br />
        <br />

        <button>Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForms;
