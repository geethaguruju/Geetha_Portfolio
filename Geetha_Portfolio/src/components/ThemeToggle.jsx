export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm hover:shadow transition"
    >
      🌙 / ☀️
    </button>
  )
}
