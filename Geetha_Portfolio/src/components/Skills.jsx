export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-8 text-indigo-600">
        Skills
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold mb-2">Languages</h3>
          <p className="text-gray-700 dark:text-gray-400">
            Python, Java, Scala, SQL
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">ML & LLMs</h3>
          <p className="text-gray-700 dark:text-gray-400">
            PyTorch, Ray, MLflow, LLM Fine-tuning, Prompt Engineering
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Systems & Cloud</h3>
          <p className="text-gray-700 dark:text-gray-400">
            AWS, Spark, Airflow, Distributed Systems
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <p className="text-gray-700 dark:text-gray-400">
            Git, Docker, Linux, Postgres
          </p>
        </div>
      </div>
    </section>
  )
}
