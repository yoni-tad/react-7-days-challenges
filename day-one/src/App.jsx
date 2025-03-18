import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);

  function handleChanges(event) {
    const { name, value } = event.currentTarget;

    setFormData((prevData) => {
      const updateData = {
        ...prevData,
        [name]: value,
      };

      setErrors(validationForm(updateData));
      return updateData;
    });
  }

  const validationForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters";
    }

    if (!data.email.trim()) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password.trim()) {
      errors.password = "Password required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  function submitForm() {
    const errors = validationForm(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSignupSuccess(true);
    } else {
      setSignupSuccess(false);
    }
  }

  return (
    <main className="bg-white rounded-xl w-96 m-8 p-8 flex flex-col items-center">
      <Header />
      <Form
        onChange={handleChanges}
        errors={errors}
        signUpStatus={signupSuccess}
      />
      <Button submit={submitForm} />
    </main>
  );
}
