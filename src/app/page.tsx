import HomePage from "./home/page"
import { PaddleLoader } from "@/app/components/PaddleLoader"
import ButtonCheckout from "@/app/components/ButtonCheckout"

export default function Page() {
  return (
    <main className="bg-[#f5f6f7]">
       <PaddleLoader />
      <HomePage />
      <ButtonCheckout />
    </main>
  );
}
