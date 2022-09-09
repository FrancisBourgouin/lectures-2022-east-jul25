import { useState } from "react";

export default function QuestionForm(props) {
  const originalData = { answer: "" };
  const [formData, setFormData] = useState(originalData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(originalData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{props.question}</p>
      <input
        type="text"
        name="answer"
        placeholder="Answer!"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Check your answer</button>
    </form>
  );
}
