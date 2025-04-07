import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Add a script to check for dark mode preference on initial load
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 md:p-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${inter.className}`}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <div className="text-center mb-8 animate-slide-down">
          <h1 className="text-4xl font-bold mb-4 text-primary-600 dark:text-primary-400">
            Fast Food Voice Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Talk with Paula to find fast food restaurants, browse menus, and
            make reservations with pre-selected dishes.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl animate-fade-in">
        <Assistant />
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
        <p>
          © {new Date().getFullYear()} Fast Food Voice Assistant. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
