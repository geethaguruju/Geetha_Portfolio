export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Geetha Guruju
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Software Engineer • MLOps • LLM Systems
      </p>

      <p className="max-w-2xl text-gray-700 dark:text-gray-300 mb-8">
        MS in Computer Engineering at NYU. Former Software Engineer at JPMorgan Chase.
        I build scalable backend systems, ML pipelines, and production-ready LLM applications.
      </p>

      <div className="flex gap-4">
        <a
          href="/Geetha_Guruju_Resume.pdf"
          download
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/yourusername"
          className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}
