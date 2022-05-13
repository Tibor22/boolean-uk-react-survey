import AnswersItem from "./AnswersItem";

export default function AnswersList({ userData }) {
  // console.log("Inside AnswersList: ", props);

  console.log(userData);

  return (
    <ul>
      {userData.map((data, i) => (
        <AnswersItem data={data} key={i} />
      ))}
    </ul>
  );
}
