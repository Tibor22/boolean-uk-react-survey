import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import Form from "./Form.jsx";
import AnswersList from "./AnswersList.jsx";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState([]);
  const { data } = useFetch("http://localhost:3001/surveys");

  // useEffect(() => {
  //   && setUserData(data);
  // }, []);

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
        {data && (
          <Form userData={userData} data={data} setUserData={setUserData} />
        )}
      </section>
    </main>
  );
}

export default Main;
