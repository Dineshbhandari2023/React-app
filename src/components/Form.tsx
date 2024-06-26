import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 character (s)" }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least not less than 18 " }),
});

type FormData = z.infer<typeof schema>;
// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: 0,
  //   });

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     // if (nameRef.current !== null) person.name = nameRef.current.value;
  //     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //     console.log(person);
  //   };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, name: event.target.value });
          //   }}
          //   value={person.name}
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        ></input>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        {/* <label htmlFor="name" className="form-label">
          E-mail:
        </label>
        <input id="Email" type="text" className="form-control"></input> */}
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   onChange={(event) => {
          //     setPerson({ ...person, age: parseInt(event.target.value) });
          //   }}
          //   value={person.age}
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        ></input>
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
