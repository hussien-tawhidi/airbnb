import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useLoginModal } from "@/hooks/useLoginModal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from ".";
import Heading from "./Heading";
import Inputs from "../utils/Inputs";
import Buttons from "../utils/Buttons";

export default function LoginModal() {
  const router = useRouter();
  const resgisterModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Login Successfully");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback?.error);
      }
    });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome back' subTitle='Login to your account' />
      <Inputs
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
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
        <p className=''>Or ?</p>
        <p
          className='text-neutral-800 cursor-pointer hover:undeline'
          onClick={resgisterModal.onOpen}>
          Register
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
