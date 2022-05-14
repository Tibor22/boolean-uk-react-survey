import AnswersItem from "./AnswersItem";

export default function AnswersList({ userData, setUserData }) {
  // console.log("Inside AnswersList: ", props);

  console.log(userData);

  return (
    <ul>
      {userData.map((data, i) => (
        <AnswersItem
          userData={userData}
          setUserData={setUserData}
          data={data}
          key={i}
        />
      ))}
    </ul>
  );
}
