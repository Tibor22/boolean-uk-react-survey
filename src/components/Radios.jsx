export default function Radios({ handleChange, surveyAnswers }) {
  return (
    <ul>
      <li>
        <input
          onChange={handleChange}
          id="color-one"
          type="radio"
          name="color"
          value="1"
          checked={surveyAnswers.rating === "1"}
        />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input
          id="color-two"
          type="radio"
          name="color"
          value="2"
          onChange={handleChange}
          checked={surveyAnswers.rating === "2"}
        />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input
          id="color-three"
          type="radio"
          name="color"
          value="3"
          onChange={handleChange}
          checked={surveyAnswers.rating === "3"}
        />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input
          id="color-four"
          type="radio"
          name="color"
          value="4"
          onChange={handleChange}
          checked={surveyAnswers.rating === "4"}
        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}
