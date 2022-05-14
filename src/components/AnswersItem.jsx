// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list, values }) {
  return (
    <ul>
      {list.map((item, i) => {
        return values[i] && <li key={i}>{answersSet[item]}</li>;
      })}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  data: {
    name,
    rating,
    swimming,
    bathing,
    chatting,
    noTime,
    review,
    editActive,
  },
  userData,
  setUserData,
}) {
  const timeSpent = {
    swimming: swimming,
    bathing: bathing,
    chatting: chatting,
    noTime: noTime,
  };

  const handleEdit = (e) => {
    console.log("EDIT");
    setUserData((prevData) => {
      console.log("EDIT", prevData);
      return prevData.map((dataA) =>
        dataA.name === name
          ? { ...dataA, editActive: true }
          : { ...dataA, editActive: false }
      );
    });
  };

  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{rating}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList
            list={Object.keys(timeSpent)}
            values={Object.values(timeSpent)}
          />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>

          <span className="answer__line">{review}</span>
        </p>
        <button onClick={handleEdit} className="edit">
          EDIT SURVEY
        </button>
      </article>
    </li>
  );
}
