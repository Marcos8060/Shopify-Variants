import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-screen py-4">
      <div>
        <img className="w-2/12 mx-auto" src="/shopify.png" alt="" />
      </div>
      <section className="flex items-center justify-center h-[70vh] text-center md:w-6/12 mx-auto">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl">
            Bring your ideas to life for $1/month
          </h1>
          <p className="text-xl">The future of business is yours to shape.</p>
          <div>
            <Link href="/dashboard/product">
              <button className="bg-black rounded-3xl text-white px-6 py-3 text-sm">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
