export const dynamic = 'force-static';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: "We are a social media company"
}

export default async function About() {

  return (
    <main className="bg-slate-50 h-screen text-slate-800 px-6 space-y-6">
      <h1 className="text-4xl pt-10">About us</h1>
      <p className="text-lg">We are a social media company that wants to bring people together</p>
    </main>
  )
}