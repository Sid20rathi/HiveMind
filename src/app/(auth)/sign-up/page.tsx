"use client"
import SignUpForm from "@/components/forms/sign-up"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

type Props = {}

const SignUpPage = (props: Props) => {
  const router = useRouter()
  return (
    <>
      <h4 className="font-bold text-base text-themeTextWhite">Sign up</h4>
      <p className="text-themeTextGray leading-tight">
        Connect globally, join communities, create your space, and grow into the
        best version of yourself.
      </p>
      <SignUpForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <GoogleAuthButton method="signup" />
      <div className="flex flex-row pt-8">
        <p className="text-themeTextGray leading-tight pl-20 font-light select-none">
          Already have an account?
          <span
            className="font-bold pl-1 cursor-pointer hover:text-blue-600"
            onClick={() => {
              router.push("/sign-in")
            }}
          >
            Sign In
          </span>{" "}
        </p>
      </div>
    </>
  )
}

export default SignUpPage
