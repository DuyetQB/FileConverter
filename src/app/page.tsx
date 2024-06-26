import Header from "./components/Header";
import UploadFile from "./components/forms/Upload";

export default function Home() {
  return (
    <main className="p-24">
      <section className="flex flex-col text-center gap-2" style={{
        // background:'linear-gradient(-90deg, #6d6d6d25 1px, transparent 0), linear-gradient(#6d6d6d25 1px, transparent 0), linear-gradient(-90deg, #6d6d6d25 1px, transparent 0), linear-gradient(#6d6d6d25 1px, transparent 0), linear-gradient(transparent 6px, transparent 0, transparent 156px, transparent 0), linear-gradient(-90deg, #6d6d6d25 1px, transparent 0), linear-gradient(-90deg, transparent 6px, transparent 0, transparent 156px, transparent 0), linear-gradient(#6d6d6d25 1px, transparent 0), 0 0',
        // backgroundSize: '32px 32px, 32px 32px, 256px 256px, 256px 256px, 256px 256px, 256px 256px, 256px 256px, 256px 256px'
      }}>
        <Header />
        <UploadFile />
      </section>
    </main>
  );
}
