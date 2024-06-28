import Header from "./components/Header";
import UploadFile from "./components/forms/UploadFileImage";

export default function Home() {
  return (
    <main className="p-24">
      <section className="flex flex-col text-center gap-2">
        <Header />
        <UploadFile />
      </section>
    </main>
  );
}
