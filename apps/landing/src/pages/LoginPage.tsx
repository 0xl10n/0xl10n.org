import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";


export const LoginPage = () => {
  const { ready, authenticated, login, user } = usePrivy();


  useEffect(() => {
    login();
  }, [ready])



  return (
    <div className="flex content-center items-center">

    </div>
  );
};
