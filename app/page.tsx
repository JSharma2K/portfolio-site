const journey = [
  {
    step: "01",
    title: "Find the evidence",
    copy: "Rank candidate pages with BM25, then improve coverage with BERT-based semantic detection and reranking.",
    tags: ["BM25", "BERT", "Retrieval"],
  },
  {
    step: "02",
    title: "Extract with control",
    copy: "Turn complex methodologies into structured prompts, grounded outputs and schema-conformant data points.",
    tags: ["LLMs", "Few-shot", "Grounding"],
  },
  {
    step: "03",
    title: "Prove the quality",
    copy: "Evaluate against ground truth, track precision and recall, inspect failures and prevent regressions.",
    tags: ["Evals", "GT", "Guardrails"],
  },
  {
    step: "04",
    title: "Orchestrate the work",
    copy: "Coordinate prompt-builder, extraction, cleansing and validation agents through sequential and hierarchical flows.",
    tags: ["CrewAI", "A2A", "Tools & skills"],
  },
  {
    step: "05",
    title: "Put people in the loop",
    copy: "Deliver conversational document extraction with durable context, memory and targeted human review.",
    tags: ["AG-UI", "Memory", "Vertex AI"],
  },
];

const capabilities = [
  {
    title: "Agentic AI systems",
    index: "A",
    copy: "Multi-agent orchestration, agent-to-agent communication, tool use, skills, context engineering and memory services.",
  },
  {
    title: "LLM quality engineering",
    index: "B",
    copy: "Ground-truth assessment, precision/recall evaluation, hallucination checks, regression testing and evidence grounding.",
  },
  {
    title: "Document intelligence",
    index: "C",
    copy: "Retrieval, semantic page detection, methodology-aware prompting, structured extraction and post-processing.",
  },
  {
    title: "Production ML",
    index: "D",
    copy: "Classical ML, deep learning, graph neural networks, geospatial analytics, feature engineering and model evaluation.",
  },
  {
    title: "Cloud delivery",
    index: "E",
    copy: "GCP and Vertex AI deployment patterns for evaluated, production-grade LLM and agent workflows.",
  },
  {
    title: "Cross-functional execution",
    index: "F",
    copy: "Translating research and business methodologies into reliable systems with Product, Data, Research and Engineering.",
  },
];

const projects = [
  {
    type: "Graph ML",
    title: "Road-network graph alignment",
    copy: "Generated GNN node embeddings that captured positional, attribute and higher-order neighborhood information, then scored candidate matches with cosine similarity.",
    outcome: "Multi-source alignment",
  },
  {
    type: "Production ML",
    title: "Urban Cruise Control evaluation",
    copy: "Built an evaluation pipeline for BMW map features, identified false positives and negatives and guided production POCs.",
    outcome: "~5% KPI improvement",
  },
  {
    type: "Computer vision",
    title: "CNN image classifier",
    copy: "Created an original hand-image dataset and compared CNN architectures across filter sizes, depth, padding and validation performance.",
    outcome: "End-to-end model study",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jivitesh Sharma, home">
          <span className="brand-mark">JS</span>
          <span>Jivitesh Sharma</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#systems">Systems</a>
          <a href="#projects">Projects</a>
          <a className="nav-cta" href="mailto:sharmajivitesh2@gmail.com">
            Let&apos;s talk <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> AI/NLP engineer · Generative AI · Agentic systems</p>
          <h1>
            I build AI systems that turn <em>messy documents</em> into reliable decisions.
          </h1>
          <p className="hero-lede">
            Five years across production machine learning, document intelligence and
            agentic AI—moving systems from retrieval-ranked LLM calls to evaluated,
            human-guided multi-agent workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <Arrow /></a>
            <a className="button button-secondary" href="#contact">
              Start a conversation
            </a>
          </div>
        </div>

        <aside className="signal-card" aria-label="Current focus and key outcomes">
          <div className="signal-topline">
            <span className="status-dot" />
            <span>Building production AI</span>
            <span className="signal-code">01 / 03</span>
          </div>
          <div className="signal-visual" aria-hidden="true">
            <span className="signal-node node-a">DOC</span>
            <span className="signal-node node-b">CTX</span>
            <span className="signal-node node-c">AI</span>
            <span className="signal-node node-d">✓</span>
            <span className="signal-path path-a" />
            <span className="signal-path path-b" />
            <span className="signal-path path-c" />
          </div>
          <div className="signal-metrics">
            <div><strong>90%+</strong><span>recall reached</span></div>
            <div><strong>80%+</strong><span>precision delivered</span></div>
            <div><strong>5%</strong><span>production KPI lift</span></div>
          </div>
        </aside>
      </section>

      <section className="ticker" aria-label="Core technology stack">
        <div>
          <span>LLM evaluation</span><i>◆</i><span>Agent orchestration</span><i>◆</i>
          <span>Document intelligence</span><i>◆</i><span>Vertex AI</span><i>◆</i>
          <span>Graph neural networks</span><i>◆</i><span>Human-in-the-loop</span>
        </div>
      </section>

      <section className="section experience-section" id="work">
        <div className="section-heading">
          <p className="section-number">01 · Experience</p>
          <h2>From model experiments to enterprise AI systems.</h2>
          <p>Hands-on ownership across the entire path: evidence, models, evaluation, orchestration and delivery.</p>
        </div>

        <article className="experience-card featured-experience">
          <div className="experience-meta">
            <p>MSCI</p>
            <span>Apr 2024—Present</span>
            <span>AI/NLP Engineer</span>
          </div>
          <div className="experience-body">
            <p className="experience-kicker">Enterprise document intelligence</p>
            <h3>Progressed a production extraction platform from LLM pipeline to agentic system.</h3>
            <p>
              Within MSCI&apos;s AI Engineering and GenAI organization, I worked at the
              document-intelligence layer—translating complex methodologies and company
              disclosures into structured, traceable data points. I owned major stages of
              the system: retrieval, prompting, extraction, post-processing, grounding,
              hallucination checks, evaluation and agent orchestration.
            </p>
            <div className="impact-grid">
              <div><strong>85–90%+</strong><span>recall across target deliverables</span></div>
              <div><strong>80%+</strong><span>precision against ground truth</span></div>
              <div><strong>End-to-end</strong><span>ownership from evidence to evals</span></div>
            </div>
            <details>
              <summary>What changed under my ownership <span>+</span></summary>
              <ul>
                <li>Modernized page detection from lexical BM25 ranking to BERT-based semantic retrieval and reranking.</li>
                <li>Built methodology-aware prompting, schema validation, post-processing and hallucination controls.</li>
                <li>Created ground-truth evaluation for precision, recall, failure analysis and regression testing.</li>
                <li>Designed CrewAI workflows with prompt-builder, extraction, cleansing and validation agents.</li>
                <li>Implemented sequential and hierarchical flows, A2A communication, tools, skills, context and memory patterns.</li>
                <li>Extended the workflow into an AG-UI conversational extraction experience on GCP and Vertex AI.</li>
              </ul>
            </details>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-meta">
            <p>HERE Technologies</p>
            <span>2022—Mar 2024</span>
            <span>Data Scientist</span>
          </div>
          <div className="experience-body">
            <p className="experience-kicker">Geospatial ML · Graph learning · Production systems</p>
            <h3>Built learning and evaluation systems for map intelligence.</h3>
            <p>
              Developed a LightGBM lane-marking classifier, a GNN-based road-network
              alignment approach and source-conflation logic for heterogeneous map data.
              Also delivered a self-healing streaming map pipeline and evaluation workflows
              for BMW Urban Cruise Control features.
            </p>
            <div className="impact-grid compact-impact">
              <div><strong>~74%</strong><span>F1 on lane-marking classification</span></div>
              <div><strong>~5%</strong><span>improvement across measured UCC KPIs</span></div>
              <div><strong>Patent</strong><span>contribution to self-healing map system</span></div>
            </div>
          </div>
        </article>

        <div className="earlier-roles">
          <article>
            <span>2021</span>
            <div><h3>Data Science Intern · HERE Technologies</h3><p>Geospatial analytics, graph-based network alignment and ML for mapping systems.</p></div>
          </article>
          <article>
            <span>2021</span>
            <div><h3>Consultant Data Scientist · Edelman</h3><p>NLP pipelines, sentiment analysis and market intelligence for global client work.</p></div>
          </article>
        </div>
      </section>

      <section className="section systems-section" id="systems">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">02 · Systems journey</p>
            <h2>One pipeline.<br />Five layers of reliability.</h2>
          </div>
          <p>
            The architecture evolved with the models—but the objective stayed the same:
            return the right data point, grounded in the right evidence, every time.
          </p>
        </div>

        <div className="journey-grid">
          {journey.map((item) => (
            <article className="journey-card" key={item.step}>
              <div className="journey-step">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <p className="section-number">03 · Capabilities</p>
          <h2>Technical depth, shaped around delivery.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="stack-line">
          <span>Python</span><span>LangGraph</span><span>LangChain</span><span>CrewAI</span>
          <span>GCP</span><span>Vertex AI</span><span>PyTorch</span><span>Scikit-learn</span>
          <span>LightGBM</span><span>PyTorch Geometric</span><span>SQL</span><span>GeoPandas</span>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">04 · Selected projects</p>
            <h2>Earlier foundations,<br />still informing the work.</h2>
          </div>
          <p>Selected systems that built the path from classical ML and computer vision to today&apos;s agentic AI work.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">0{index + 1}</div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <span className="project-outcome">{project.outcome}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-number">05 · Contact</p>
        <h2>Building something that needs to be both <em>intelligent</em> and <em>reliable?</em></h2>
        <div className="contact-row">
          <a href="mailto:sharmajivitesh2@gmail.com">sharmajivitesh2@gmail.com <Arrow /></a>
          <div>
            <a href="https://www.linkedin.com/in/jivitesh-sharma-8b7905171/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/JSharma2K" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <span>Jivitesh Sharma · AI/NLP Engineer</span>
        <span>Built around evidence, evaluation and outcomes.</span>
      </footer>
    </main>
  );
}
