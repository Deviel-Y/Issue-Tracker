import authOption from "@/app/api/auth/AuthOptions";
import Signup from "@/public/signup.jpg";
import { Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { permanentRedirect } from "next/navigation";
import SignUpForm from "./SignUpForm";

const SignUpPage = async () => {
  const session = await getServerSession(authOption);
  if (session) permanentRedirect("/");

  return (
    <Grid align="center" columns={{ initial: "1", sm: "2" }}>
      <Image
        className="max-md:hidden"
        src={Signup}
        alt="SignUp form vector image"
      />
      <SignUpForm />
    </Grid>
  );
};

export const metadata: Metadata = {
  title: "Issue Tracker - Sign Up",
};

export const dynamic = "force-static";

export default SignUpPage;
