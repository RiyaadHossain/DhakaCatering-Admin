import React from "react";
import Adventure from "../../components/Adventure";
import SignInInputs from "../../components/SignInInputs";

export default function SignIn() {

  return (
    <div>
      <div className="hidden md:block">
        <Adventure children={<SignInInputs />} />
      </div>
      <div className="md:hidden w-full h-[100vh] justify-center flex items-center">
        <SignInInputs />
      </div>
    </div>
  );
}
