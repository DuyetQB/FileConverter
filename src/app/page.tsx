import Header from "./components/Header";
import UploadFile from "./components/forms/UploadFileImage";

export default function Home() {
  return (
    <main className="lg:p-24 pt-24 px-2">
      <section className="flex flex-col text-center gap-2">
        <Header />
        <UploadFile />
      </section>
    </main>
  );
}
