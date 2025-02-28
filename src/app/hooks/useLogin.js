import { useState } from "react";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (values) => {
    console.log("Form Values:", values); // Debug log
    if (!values) {
      console.error("No values received in handleSubmit");
      return;
    }

    const { email, password } = values.values; // Ensure destructuring safety

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (email === "abhijith.v@webandcrafts.in" && password === "Abhijith@123") {
      router.push("/products");   
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return { handleSubmit, errorMessage };
};

export default useLogin;
