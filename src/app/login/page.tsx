"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogIn = () => {

const router = useRouter()


  const errorMessage = (
    <div className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#FF0000"
        className="size-7"
        style={{ width: "24px", height: "24px" }}>
        <title>x</title>
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-lg font-semibold">Failed to login</span>
    </div>
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "https://preentrega-1-coder.onrender.com/api/sessionLogin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        console.log(response);
        if (response.redirected) {
          router.push("/");
        } else {
          toast(errorMessage, {
            description: "The data is not correct",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-gray-800">
      <form
        onSubmit={formik.handleSubmit}
        className="py-5 px-6 bg-white rounded-lg flex flex-col gap-10 w-[350px]">
        <h2 className="font-bold text-2xl">LogIn</h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="block font-bold text-gray-700">
              Email
            </Label>
            <Input
              onChange={formik.handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="password" className="block font-bold text-gray-700">
              Contraseña
            </Label>
            <Input
              onChange={formik.handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default LogIn;
