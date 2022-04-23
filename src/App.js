import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  return (
    <div className="App">
      <form className="form">
        <input
          type="text"
          placeholder=" First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder=" Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <lable>Date Of Birth</lable>&nbsp;
        <input type="date" />
        <br />
        <br />
        <lable fro="Male">Male</lable>
        <input type="radio" />
        <br />
        <br />
        <lable fro="Female">Female</lable>
        <input type="radio" />
        <br />
        <br />
        <lable>Choose Language</lable>
        <br />
        <lable fro="Kannada">Kannada</lable>
        <input type="checkbox" />
        &nbsp;&nbsp;&nbsp;
        <lable fro="English">English</lable>
        <input type="checkbox" />
        &nbsp;&nbsp;&nbsp;
        <lable fro="Hindi">Hindi</lable>
        <input type="checkbox" />
        &nbsp;&nbsp;&nbsp;
        <lable fro="Telugu">Telugu</lable>
        <input type="checkbox" />
        <br />
        <br />
        <label for="cars">Choose a progrmming Language:</label>
        <br />
        <select id="cars" name="">
          <option value="Java">Java</option>
          <option value="Javascript">Javascript</option>
          <option value="Pythan">Pythan</option>
        </select>
        <br />
        <br />
        <div className="select">
          <select>
            <option value="india">+91</option>
          </select>
          <input type="number" placeholder=" Phone Number" />
        </div>
        <br />
        <input
          type="email"
          placeholder=" Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder=" Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder=" Confirme Password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
        <br />
        <br />
        <lable>Upload Resume</lable>
        <br />
        <input type="file" />
        <br />
        <br />
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}
