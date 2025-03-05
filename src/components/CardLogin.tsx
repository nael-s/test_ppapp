import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { PasswordInput } from "./ui/input-password";
import { Button } from "./ui/button";
import { LockOpen, MoveLeft } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { notifError, notifSucces } from "./ui/alert";

const authSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

const CardLogin = () => {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (value: z.infer<typeof authSchema>) => {
    await signIn("credentials", {
      username: value.username,
      password: value.password,
      redirect: false,
    }).then((res) => {
      if (res?.status === 200) {
        router.push("/");
        notifSucces("Welcome to Dashboard");
      } else {
        notifError(`${res?.error}`);
      }
    });
  };

  return (
    <>
      <div className="absolute top-14 left-20">
        <Card className="bg-gray-50/40 backdrop-blur-md w-[400px]">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-20">
              <div className="relative">
                <Image
                  src="/images/dppapp.svg"
                  alt="dppapp"
                  width="100"
                  height="100"
                  className="object-contain"
                />
              </div>
              <div className="relative">
                <Image
                  src="/images/tp_pkk.svg"
                  alt="tp_pkk"
                  width="100"
                  height="100"
                  className="object-contain"
                />
              </div>
            </CardTitle>
            <CardDescription>
              <h1 className="text-primary mt-2">
                Mohon masukkan <i>username</i> dan <i>password</i> anda untuk
                mengakses dashboard
              </h1>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <PasswordInput placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-start justify-between gap-10 mt-4">
                  <Button
                    type="submit"
                    className=" bg-primary text-white rounded-xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary uppercase w-max "
                  >
                    <div className="flex gap-2">
                      <div>Login</div>
                      <LockOpen />
                    </div>
                  </Button>
                  <Button
                    variant="link"
                    className="border-2 border-[#8B84D7] uppercase"
                  >
                    Registrasi
                  </Button>
                </div>
              </form>
            </Form>
            <Button variant="link" size="link" className=" mt-3">
              Lupa Password
            </Button>
            <div className="flex items-center justify-center gap-2 mt-4">
              <MoveLeft className="w-5 h-5" />
              <span className="text-primary">Kembali ke halaman utama</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex mt-4 bg-white p-2 gap-2 items-center justify-center rounded-xl">
          <div className="relative">
            <Image
              src="/images/logo_bkkbn.svg"
              alt="bkkbn"
              width="100"
              height="100"
              className="object-contain"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/logo_carik_jakarta.svg"
              alt="carikjakarta"
              width="100"
              height="100"
              className="object-contain"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/logo_sim_pkk.svg"
              alt="sim_pkk"
              width="100"
              height="100"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
