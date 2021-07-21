import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const mail = () => {
  const { user } = useUser();
  const router = useRouter();
  if (!user) return null;
  useEffect(() => {
    if (user.email_verified) {
      router.replace("/")
    }
  }, []);
  return (
    <>
    <Header />
    <div className="d-flex justify-content-center align-items-center" style={{height: "80vh" , width: "100vw"}}>
    <div className="d-flex justify-content-center align-items-center p-3" style={{height: "100px" , width: "auto" , backgroundColor : "#4FB2BF" , borderRadius : "15px" , color : "white"}}>
      <b>
        Please verify your e-mail to gain full access , Make sure that you
        re-login after verfiying your e-mail
      </b>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default mail;
