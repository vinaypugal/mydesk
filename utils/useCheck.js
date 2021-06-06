import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useCheck = (user, role) => {
  const [status, setStatus] = useState();
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const response = await axios.get(`/api/check`);
      const data = response.data;
      setStatus(data);
    };
    if (user["https://mydesk.app/roles"] !== role && !user.email_verified) {
      router.replace("/");
    } else {
      check();
      if (status === "denied"){
        router.replace(`/`)
      }
      else if (status === "mail") {
        router.replace(`/mail`);
      } 
      else if (status === "create") {
        router.replace(`/register_${role}`);
      } 
    }
  },[status]);
};

export default useCheck;
