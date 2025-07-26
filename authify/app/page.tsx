import { cookies } from "next/headers";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {

  const isLogin = cookies().get("authUser")
  return (
    <>
      <main className="flex items-center justify-start h-screen px-[200px]">
        <div className="flex flex-col gap-5 h-[50vh]">
          {/* title */}
          <div className="flex flex-col">
            <span className="text-start text-[70px] font-bold cursor-default">
              Welcome to Authify!
            </span>
            {/* sub title */}
            <span className="text-4xl cursor-default">
              Authentication Made Simple, Fast, and Secure
            </span>
          </div>
          <div className="mt-5 text-xl">
            <Link href={isLogin ? "/dashboard" : "/auth"} className="border dark:border-slate-50 px-6 py-2"> Let's Start</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
