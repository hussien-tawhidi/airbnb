import { useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from ".";
import Heading from "./Heading";
import Inputs from "../utils/Inputs";
import Buttons from "../utils/Buttons";

export default function RegisterModal() {
  const resgisterModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        resgisterModal.onClose();
        toast.success("User registered Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subTitle='Create an account' />
      <Inputs
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs
        id='name'
        label='Name'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
      <Inputs
        id='password'
        label='Password'
        type='password'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-4'>
      <hr />
      <Buttons
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Buttons
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className='text-neutral-500 text-center mt-4 font-light'>
        <p className=''>Aleady have an account ?</p>
        <p className='text-neutral-800 cursor-pointer hover:undeline' onClick={resgisterModal.onClose}>Login</p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={resgisterModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={resgisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
