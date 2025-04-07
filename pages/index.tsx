import { Assistant } from "@/components/app/assistant";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-700 dark:to-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <div className="text-center mb-8 animate-slide-down">
          <h1 className="text-5xl font-extrabold mb-4 font-heading bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent drop-shadow-sm animate-pulse-slow">
            Food Finder AI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-body leading-relaxed">
            <span className="font-accent text-accent-500 dark:text-accent-400">
              Hungry?
            </span>{" "}
            Chat with Paula to discover nearby restaurants, explore delicious
            menus, and secure your table with pre-selected favorites!
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl animate-fade-in relative">
        <Assistant />
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in font-accent">
        <p>
          © {new Date().getFullYear()} Fast Food Voice Assistant. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
