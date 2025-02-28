import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";


const useFormHandlers = () => {
    const router = useRouter();

  const handleSignUpSubmit = ({values, formApi}) => {
    return (values) => {
      onSubmit(values); 
      toast.success('Successfully signed up!');
      router.push("/products");   
      handleClear();
    };
  };

  const handleClear = () => {
    if (formRef.current) {
      formRef.current.reset(); 
    }
  };

  return {
    handleSignUpSubmit,
    handleClear,
  };
};

export default useFormHandlers;
