const projects = [
  {
    title: "LLM Reasoning for Cancer Outcome Prediction",
    bullets: [
      "Designed structured and unstructured clinical prompts for patient-level survival prediction",
      "Implemented GRPO-based reasoning to align LLM outputs with clinical decision logic",
      "Analyzed interpretability differences across cancer types and data representations"
    ]
  },
  {
    title: "MLOps Pipeline with Ray + MLflow",
    bullets: [
      "Built distributed training pipelines using Ray with experiment tracking via MLflow",
      "Implemented dataset versioning and retraining workflows with persistent artifact storage",
      "Deployed reproducible pipelines supporting iterative model improvements"
    ]
  },
  {
    title: "DCGAN on FashionMNIST",
    bullets: [
      "Implemented custom generator and discriminator architectures in PyTorch",
      "Conducted stability analysis across learning rates and batch sizes",
      "Generated and evaluated synthetic image quality over 50 training epochs"
    ]
  },
]

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-10 text-indigo-600">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-3">
              {project.title}
            </h3>

            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-400">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
