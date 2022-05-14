import { useState } from "react";
import Form from "./Form.jsx";
import AnswersList from "./AnswersList.jsx";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState([]);
  console.log(userData);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        {userData && (
          <AnswersList userData={userData} setUserData={setUserData} />
        )}
      </section>
      <section className="main__form">
        <Form userData={userData} setUserData={setUserData} />
      </section>
    </main>
  );
}

export default Main;
