"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import storigami from "../../../public/storigami.svg";
import EmblaCarousel from "../../components/core/automaticCarousel/EmblaCarousel";
import "./css/base.css";
import "./css/sandbox.css";
import "./css/embla.css";
import Link from "next/link";
import Google from "../../../public/googleLogo.webp";
import Github from "../../../public/github-color.svg";

const LogIn = () => {
  const router = useRouter();

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

  const handleLoginGithub = () => {
    // Redirige al usuario al endpoint de backend para iniciar la autenticación de GitHub
    window.location.href = 'http://localhost:8080/api/sessions/github';
  };



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:8080/api/sessionLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
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
    <div className="w-full h-screen flex justify-center items-center bg-[#d7d2bf]">
      <div className="w-1/2 bg-white h-full flex flex-col justify-center px-32 gap-10">
        <div className="flex flex-col gap-10 flex-grow justify-center pt-32">
          <Image src={storigami} alt="logo" className="w-4/12" />
          <h1 className="font-extrabold text-5xl">
            <b className="font-extrabold text-[#bba583]">
              Comprá lo que necesitás
            </b>{" "}
            más caro que en otro lado.
          </h1>
          <p className="text-[#5e5e5e] w-2/4">
            Dale poné los números de la tarjeta de atrás y adelante, no te va a
            pasar nada.
          </p>
        </div>
        <div className="pb-20">
          <EmblaCarousel
            slides={[8, 2, 21, 12, 312, 312, 3, 123, 12, 32, 3]}
            options={{ loop: true }}
          />
        </div>
      </div>
      <div className="w-1/2  flex justify-center  flex-col py-5 px-32">
        <form
          onSubmit={formik.handleSubmit}
          className=" rounded-lg flex flex-col gap-10 w-[350px]">
          <h2 className="font-bold text-2xl">Iniciar sesión</h2>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col gap-3">
              <Input
                onChange={formik.handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Correo electronico"
                className="border border-[#bba583] h-14 rounded-xl w-"
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Input
                onChange={formik.handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                className="border border-[#bba583] h-14 rounded-xl w-full"
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>
            <Button
              type="submit"
              className="bg-black rounded-xl h-14 hover:shadow-lg transition-all ease-in hover:bg-black">
              Iniciar sesión
            </Button>
            <Link href={"/"} className="text-[#8e6a35] text-center">
              Olvidé mis datos
            </Link>
            <Button
              type="submit"
              className="bg-white text-black font-semibold rounded-xl h-14 flex border border-[#bba583] hover:bg-white hover:shadow-md transition-all ease-in">
              <Image src={Google} alt="Google" className="size-7 " />
              <span className="flex-grow text-center">
                Inicia sesión con Google
              </span>
            </Button>
            <Button
               onClick={handleLoginGithub}
              className="bg-white text-black font-semibold rounded-xl h-14 flex border border-[#bba583] hover:bg-white hover:shadow-md transition-all ease-in">
              <Image src={Github} alt="Github" className="size-7 " />
              <span className="flex-grow text-center">
                Inicia sesión con Github
              </span>
            </Button>

            <div className="border-b border-[#bba583]" />

            <div className="flex gap-2 justify-center">
              <h3 className="text-[#8e6a35]">¿No tienes cuenta?</h3>
              <Link href={"/register"} className="font-bold">
                Regístrate
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
