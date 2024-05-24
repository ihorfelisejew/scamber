import { Header } from "@/components/header";
import { MainPage } from "@/components/main-page";
import Head from "next/head";

export default function HomePage() {
  return (
    <div className="wrapper">
      <Head>
        <title>Scamber</title>
      </Head>
      <Header className="contacts__item-white" />
      <MainPage />
    </div>
  );
}
