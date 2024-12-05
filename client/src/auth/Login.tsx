import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginInputState, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState<loginInputState>({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState<Partial<loginInputState>>({});

  const { loading, login } = useUserStore();
  const navigate = useNavigate();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fiedError = result.error.formErrors.fieldErrors;
      setErrors(fiedError as Partial<loginInputState>);
      return;
    }
    try {
      await login(input);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Hunger.. Eat Here</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="pl-10 focus-visible:ring-1"
              value={input.email}
              onChange={changeEventHandler}
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-sm text-red-500">{error.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="pl-10 focus-visible:ring-1"
              value={input.password}
              onChange={changeEventHandler}
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {error && (
              <span className="text-sm text-red-500">{error.password}</span>
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
              Login
            </Button>
          )}
          <div className="mt-4">
            <Link
              to="/forget-password"
              className="text-orange hover:text-hoverOrange hover:underline"
            >
              Forget Password
            </Link>
          </div>
        </div>
        <Separator />
        <p className="mt-2">
          Don't have an account?{"  "}
          <Link
            to="/signup"
            className="text-orange hover:text-hoverOrange hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
