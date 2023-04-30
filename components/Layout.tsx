import Head from "next/head";
import { layoutProps } from "@/types";
import Navbar from "./navbar";
import RegisterModal from "./modal/RegisterModal";
import LoginModal from "./modal/LoginModal";
// import getCurrentUser from "@/actions/getCurrentUser";

export default function Layout({ title, descriptions, children }: layoutProps) {
  // const currentUser = getCurrentUser();
  // console.log(currentUser)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={descriptions}></meta>
        <meta name='author' content='Hussien Tawhidi'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
      </Head>
      <main>
        <Navbar />
         <RegisterModal />
        <LoginModal /> 
        {children}
      </main>
    </>
  );
}
