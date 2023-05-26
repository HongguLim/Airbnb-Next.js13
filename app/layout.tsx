import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone Porject ",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal
            actionLabel={"Submit"}
            secondaryActionLabel={"adsada"}
            isOpen
            title={"modal"}
          />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
