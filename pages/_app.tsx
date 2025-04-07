import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { headingFont, bodyFont, accentFont, fallbackFont } from "@/lib/fonts";
import { DisplayProvider } from "@/context/DisplayContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DisplayProvider>
      <div
        className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} ${fallbackFont.variable} font-body`}
      >
        <Component {...pageProps} />
      </div>
    </DisplayProvider>
  );
}
