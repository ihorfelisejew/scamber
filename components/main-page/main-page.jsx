import { MainAboutUs } from "./about-us";
import { MainContactUs } from "./contact-us";
import { Main } from "./main";
import { MainOrderForm } from "./order-form";

export function MainPage() {
  return (
    <div>
      <Main />
      <MainAboutUs />
      <MainOrderForm />
      <MainContactUs />
    </div>
  );
}
