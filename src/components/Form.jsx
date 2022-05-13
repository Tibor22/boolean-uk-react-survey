import { useState } from "react";
import Checkboxes from "./Checkboxes";
import Radios from "./Radios";
const initialData = {
  swimming: false,
  bathing: false,
  chatting: false,
  noTime: false,
  rating: "",
  review: "",
  name: "",
  email: "",
};

export default function Form({ userData, setUserData }) {
  const [surveyAnswers, setSurveyAnswers] = useState(initialData);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    switch (name) {
      case "color":
        setSurveyAnswers({ ...surveyAnswers, rating: value });
        break;
      case "spend-time":
        setSurveyAnswers({ ...surveyAnswers, [value]: checked });
        break;
      case "review":
        setSurveyAnswers({ ...surveyAnswers, review: value });
        break;
      case "email":
        setSurveyAnswers({ ...surveyAnswers, email: value });
        break;
      case "username":
        setSurveyAnswers({ ...surveyAnswers, name: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prevAnswers) => [...prevAnswers, surveyAnswers]);
    console.log(surveyAnswers);
    setSurveyAnswers(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <Radios surveyAnswers={surveyAnswers} handleChange={handleChange} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes surveyAnswers={surveyAnswers} handleChange={handleChange} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          onChange={handleChange}
          name="review"
          cols="30"
          rows="10"
          value={surveyAnswers.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={surveyAnswers.name}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={surveyAnswers.email}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}