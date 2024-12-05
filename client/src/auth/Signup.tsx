import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signupInputState, userSignupSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState<signupInputState>({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });
  const [error, setErrors] = useState<Partial<signupInputState>>({});

  const { signup, loading } = useUserStore();

  const navigate = useNavigate();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const signupSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    //form validation check starts
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<signupInputState>);
      return;
    }

    //login api implementation starts here
    try {
      await signup(input);
      navigate("/verify-email");
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={signupSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lge md:border border-gray-200"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Hunger.. Eat Here</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className="pl-10 focus-visible:ring-1"
              value={input.fullName}
              onChange={changeEventHandler}
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.fullName}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="pl-10 focus-visible:ring-1"
              value={input.email}
              onChange={changeEventHandler}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="pl-10 focus-visible:ring-1"
              value={input.password}
              onChange={changeEventHandler}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.password}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="contact"
              placeholder="Enter Contact Number"
              className="pl-10 focus-visible:ring-1"
              value={input.contact}
              onChange={changeEventHandler}
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-xs text-red-500">{error.contact}</span>
            )}
          </div>
        </div>
        <div className="mt-5 mb-8">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Signup
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2 text-gray-500">
          Already have an account?{"  "}
          <Link
            to="/login"
            className="text-orange hover:text-hoverOrange hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
