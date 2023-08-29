'use client'
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const {data, status} = useSession();
  const router = useRouter()

  if(status === "loading") {
    return <p>Redirecting...</p>
  } else if(status === "authenticated") {
    router.push("/cart")
  }
  
  return (
    <div className=" p-4 h-[calc(100vh-7rem)] md:h-[calc(100vh-11rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[90%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/menu/spiritual.jpeg" alt="" fill className="object-cover"/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md items-center" onClick={() => signIn("google")}>
            <FaGoogle />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md items-center">
            <FaFacebook />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;