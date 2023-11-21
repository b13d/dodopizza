import Image from "next/image";
import Header from "@/components/header/page";
import Container from "@/components/container/page";
import Nav from "@/components/nav/page";
import StoriesList from "@/components/storiesList/page";
import Orders from "@/components/orders/page";
import Products from "@/components/products/page";
import GetData from "@/components/getData/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container>
        {/* <GetData /> */}
        <Header />
        <Nav />
        <StoriesList />
        <Orders />
        <Products />
      </Container>
      <Footer />
    </main>
  );
}
