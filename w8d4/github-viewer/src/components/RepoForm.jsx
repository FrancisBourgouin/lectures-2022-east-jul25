import useFormData from "../hooks/useFormData";

export default function RepoForm(props) {
  const initialData = {
    owner: "",
    repo: "",
  };
  const { formData, handleChange, handleSubmit } = useFormData(
    initialData,
    props.onSubmit
  );

  return (
    <section>
      <h2>Enter owner & repo name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="owner"
          value={formData.owner}
          placeholder="Enter owner"
        />
        <input
          type="text"
          onChange={handleChange}
          name="repo"
          value={formData.repo}
          placeholder="Enter repo"
        />
        <button>Fetch commits</button>
      </form>
    </section>
  );
}
