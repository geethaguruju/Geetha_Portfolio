export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-semibold">Geetha Guruju</span>
        <button
          onClick={() => setDark(!dark)}
          className="text-sm border px-3 py-1 rounded"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  )
}
