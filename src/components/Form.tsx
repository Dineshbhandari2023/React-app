import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        ></input>
        {/* <label htmlFor="name" className="form-label">
          E-mail:
        </label>
        <input id="Email" type="text" className="form-control"></input> */}
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        ></input>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
