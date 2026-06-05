"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

export default function LoginPage() {

  const router =
    useRouter();

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const response =
          await fetch(

            "http://localhost:5000/api/auth/login",

            {

              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                email,

                password,
              }),
            }
          );

        const data =
          await response.json();

        if (!response.ok) {

          throw new Error(
            data.message
          );
        }

        // SAVE TOKEN
        localStorage.setItem(
          "token",
          data.token
        );

        // redirect
        router.push(
          "/planner/daily"
        );

      } catch (error) {

        console.error(error);

        alert(error.message);

      } finally {

        setLoading(false);
      }
    };

  return (

    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-[#fdf8f4]
        via-[#f8f2ff]
        to-[#f4f8ff]
        px-6
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-white/70
          backdrop-blur-xl
          rounded-[40px]
          p-10
          shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          border
          border-white/40
        "
      >

        <div className="mb-8">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-zinc-400
              mb-3
            "
          >

            ORGANON

          </p>

          <h1
            className="
              text-5xl
              font-semibold
              leading-tight
              text-zinc-800
            "
          >

            Welcome back

          </h1>

          <p
            className="
              mt-4
              text-zinc-500
              leading-relaxed
            "
          >

            today is a fresh page

          </p>

        </div>

        <form
          onSubmit={handleLogin}

          className="
            space-y-4
          "
        >

          <input
            type="email"

            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }

            className="
              w-full
              p-4
              rounded-2xl
              bg-white/80
              border
              border-zinc-200
              outline-none
            "
          />

          <input
            type="password"

            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }

            className="
              w-full
              p-4
              rounded-2xl
              bg-white/80
              border
              border-zinc-200
              outline-none
            "
          />

          <button
            type="submit"

            disabled={loading}

            className="
              w-full
              p-4
              rounded-2xl
              bg-zinc-900
              text-white
              font-medium
              mt-4
              hover:opacity-90
              transition
            "
          >

            {
              loading
                ? "Entering..."
                : "Enter Organon"
            }

          </button>

        </form>

      </div>

    </main>
  );
}