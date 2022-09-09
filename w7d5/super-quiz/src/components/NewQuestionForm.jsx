import useFormData from "../hooks/useFormData";

export default function NewQuestionForm(props) {
  const originalData = { answer: "", question: "" };
  const { formData, handleChange, handleSubmit } = useFormData(
    originalData,
    props.onSubmit
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Question!"
        onChange={handleChange}
        value={formData.question}
      />
      <input
        type="text"
        name="answer"
        placeholder="Answer!"
        onChange={handleChange}
        value={formData.answer}
      />
      <button>Add your question!</button>
    </form>
  );
}
