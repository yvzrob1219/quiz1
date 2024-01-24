import Footer from "./components/Footer";
import Header from "./components/Header";
import Members from "./components/Members";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-10">
      <Header />
      <div className={"flex flex-col min-h-screen justify-center text-center align-middle"}>
        <h1>
          Who we are
        </h1>
        <p className={"mx-40 text-md"}>
        We are the Innoventors, a vibrant team of first-year software engineering students united by our passion for innovation and our drive to invent. With diverse backgrounds but a shared vision
        </p>
      </div>
      <Members />
      <Projects />
      <Footer />
    </main>
  );
}
