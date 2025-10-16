import Image from "next/image";
import { redirect } from "next/navigation";
import Page from "./[page]/page";

export default function Home() {
  redirect("/1");
  return null;
}
