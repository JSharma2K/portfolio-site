const systemsJourney = [
  {
    step: "01",
    era: "Foundations",
    title: "Statistical learning and classical ML",
    copy: "Built the core discipline of turning raw data into testable models through ETL, exploratory analysis, feature engineering, dimensionality reduction and model comparison.",
    tags: ["Linear models", "Random forest", "SVM", "PCA", "Gradient boosting"],
    measurement: "Accuracy, precision, recall, F1, RMSE and R²",
  },
  {
    step: "02",
    era: "Language and sequences",
    title: "NLP, conversational AI and time series",
    copy: "Applied sentiment analysis to market intelligence, designed intent and entity flows in Rasa, and compared LSTM sequence models with dense and classical baselines.",
    tags: ["Sentiment", "Rasa", "LSTM", "Text pipelines", "APIs"],
    measurement: "Intent accuracy, entity F1, task completion and validation loss",
  },
  {
    step: "03",
    era: "Perception",
    title: "Deep learning and computer vision",
    copy: "Created and labeled image datasets, trained CNN variants, and studied how filters, depth, padding, normalization and data splits changed model behavior.",
    tags: ["CNN", "PyTorch", "Image data", "Regularization", "Tuning"],
    measurement: "Validation accuracy, cross-entropy loss and error analysis",
  },
  {
    step: "04",
    era: "Connected data",
    title: "Graph and geospatial ML",
    copy: "Represented road networks as graphs, learned node embeddings, combined positional and neighborhood context, and scored candidate feature matches across map sources.",
    tags: ["GNN", "GraphSAGE", "GCN", "GeoPandas", "Cosine matching"],
    measurement: "Match quality, coverage, false positives and false negatives",
  },
  {
    step: "05",
    era: "Production intelligence",
    title: "Evaluated ML products and resilient pipelines",
    copy: "Combined LightGBM, SHAP, graph logic and streaming state into mapping systems that could be explained, monitored, repaired and improved against product KPIs.",
    tags: ["LightGBM", "SHAP", "Streaming", "CI/CD", "Evaluation"],
    measurement: "F1, regression checks, pipeline health and product KPIs",
  },
  {
    step: "06",
    era: "Generative systems",
    title: "Retrieval, language models and agentic AI",
    copy: "Joined retrieval, semantic ranking, structured prompting, extraction, tools, memory, context and human review into production systems for regulated document intelligence.",
    tags: ["BM25", "BERT", "RAG", "CrewAI", "LangGraph", "AG-UI"],
    measurement: "Grounding, precision, recall, tool success and task completion",
  },
];

const capabilities = [
  {
    title: "Agentic AI, text and NLP systems",
    index: "A",
    copy: "I design the full path from a user question or methodology to retrieval, reasoning, tool execution, structured output and human review. The result is a working product, not an isolated model call.",
  },
  {
    title: "Retrieval and document intelligence",
    index: "B",
    copy: "BM25 and semantic page detection narrow large documents to the right evidence. Prompt construction, extraction and post-processing then convert that evidence into traceable data and insight.",
  },
  {
    title: "Quality engineering and evaluation",
    index: "C",
    copy: "Ground-truth datasets, precision and recall, hallucination checks, failure taxonomies and regression tests make model and agent behavior measurable before it reaches users.",
  },
  {
    title: "Graph and geospatial systems",
    index: "D",
    copy: "Graph neural networks, spatial features, clustering and conflation logic connect imperfect map sources. Evaluation pipelines turn those models into dependable location products.",
  },
  {
    title: "Classical ML, deep learning and vision",
    index: "E",
    copy: "Tree models, linear methods, LSTMs and CNNs provide the right level of complexity for each problem. Feature engineering and controlled comparison keep architecture choices evidence based.",
  },
  {
    title: "Cloud and production delivery",
    index: "F",
    copy: "Python services, GCP, Vertex AI, APIs, data pipelines and CI/CD connect models to secure workflows. Monitoring and evaluation remain part of the product after deployment.",
  },
];

const projects = [
  {
    type: "Conversational AI",
    title: "Nutrition assistant using Rasa",
    copy: "Designed intents, entities, stories and custom actions for a conversational nutrition assistant. Integrated Edamam and Spoonacular APIs for meal plans, BMI calculations and health information.",
    outcome: "Measured by intent accuracy, entity F1 and task completion",
  },
  {
    type: "Time series",
    title: "COVID-19 sequence modelling",
    copy: "Built an end-to-end analysis covering ETL, EDA, feature engineering and training. Created windowed sequences for an LSTM and compared it with SVM and dense-network baselines.",
    outcome: "Compared through validation loss, MAE and RMSE",
  },
  {
    type: "Computer vision",
    title: "CNN image classifier",
    copy: "Created and labeled an original hand-image dataset. Trained CNN variants across filter sizes, depth, padding and normalization, then selected the final model through controlled validation.",
    outcome: "Selected through accuracy, loss and class-level errors",
  },
  {
    type: "Classical ML",
    title: "Wine classification with H2O.ai",
    copy: "Explored a wine dataset, used PCA to identify the variables that separated classes, and compared random forest with gradient boosting models in H2O.ai.",
    outcome: "Compared through accuracy, F1 and feature contribution",
  },
  {
    type: "NLP and forecasting",
    title: "Election sentiment analysis",
    copy: "Analyzed historical election data, collected public social signals and applied TextBlob sentiment analysis. Built a linear regression model to estimate vote counts.",
    outcome: "Evaluated through sentiment distribution, R² and RMSE",
  },
  {
    type: "Embedded AI",
    title: "Voice-enabled security prototype",
    copy: "Explored Intel Movidius and Google AIY, then built a Raspberry Pi security-camera prototype with facial recognition, Alexa integrations and AWS services.",
    outcome: "Framed around recognition quality, latency and reliability",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function CompanyLogo({ company }: { company: "msci" | "here" }) {
  const isMsci = company === "msci";
  return (
    <span className={`company-logo ${isMsci ? "msci-logo" : "here-logo"}`}>
      <img
        src={isMsci ? "/msci-logo.svg" : "/here-logo.svg"}
        alt={isMsci ? "MSCI" : "HERE Technologies"}
      />
    </span>
  );
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
          <p className="eyebrow">Data scientist / Generative AI / Agentic systems</p>
          <h1>
            I build AI systems that turn <em>complex problems</em> into dependable products.
          </h1>
          <p className="hero-lede">
            Data scientist and AI engineer with more than five years across NLP,
            computer vision, graph learning, geospatial intelligence, classical ML
            and generative AI. I connect model design, evaluation and cloud delivery
            to build systems people can use and trust.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <Arrow /></a>
            <a className="button button-secondary" href="#contact">Start a conversation</a>
          </div>
        </div>

        <aside className="career-map" aria-label="Career journey">
          <div className="career-map-header">
            <span>Career journey</span>
            <span>2018 / Forward</span>
          </div>
          <div className="career-track">
            <article className="career-stage">
              <span className="career-node">01</span>
              <div>
                <span className="career-date">2018 to 2021</span>
                <strong>Foundations in data science</strong>
                <p>SP Jain, applied AI study and projects across statistics, NLP, vision and deep learning.</p>
              </div>
            </article>
            <article className="career-stage">
              <span className="career-node logo-node"><CompanyLogo company="here" /></span>
              <div>
                <span className="career-date">2021 to 2024</span>
                <strong>Production ML and graph systems</strong>
                <p>HERE Technologies, mapping intelligence, geospatial ML, graph learning and resilient pipelines.</p>
              </div>
            </article>
            <article className="career-stage">
              <span className="career-node logo-node msci-node"><CompanyLogo company="msci" /></span>
              <div>
                <span className="career-date">2024 to Present</span>
                <strong>Generative and agentic AI</strong>
                <p>MSCI, enterprise document intelligence, evaluation, orchestration and conversational extraction.</p>
              </div>
            </article>
            <article className="career-stage career-future">
              <span className="career-node">→</span>
              <div>
                <span className="career-date">What comes next</span>
                <strong>Wider AI product and systems ownership</strong>
                <p>Building reliable AI products across domains, from architecture and evaluation to delivery.</p>
              </div>
            </article>
          </div>
        </aside>
      </section>

      <section className="ticker" aria-label="Core technology areas">
        <div>
          <span>Classical machine learning</span><i>◆</i><span>Deep learning</span><i>◆</i>
          <span>Computer vision</span><i>◆</i><span>Graph AI</span><i>◆</i>
          <span>NLP</span><i>◆</i><span>Generative AI</span><i>◆</i>
          <span>Production delivery</span>
        </div>
      </section>

      <section className="section experience-section" id="work">
        <div className="section-heading">
          <p className="section-number">01 / Experience</p>
          <h2>From model experiments to enterprise AI systems.</h2>
          <p>My work has grown from focused modelling problems into complete products that connect data, architecture, evaluation and delivery.</p>
        </div>

        <article className="experience-card featured-experience msci-experience">
          <div className="experience-meta">
            <div className="company-heading">
              <CompanyLogo company="msci" />
              <p>MSCI</p>
            </div>
            <span>Apr 2024 to Present</span>
            <span>AI/NLP Engineer</span>
          </div>
          <div className="experience-body">
            <p className="experience-kicker">Enterprise document intelligence and agentic AI</p>
            <h3>Advanced a production extraction platform from retrieval-ranked language-model calls to an evaluated agentic system.</h3>
            <p>
              Within MSCI&apos;s AI Engineering and GenAI Solutions team, I worked on the
              document-intelligence layer that transforms unstructured, regulated company
              disclosures into commercial data products. My scope covered the complete
              extraction path: evidence discovery, prompt construction, structured extraction,
              data cleansing, validation, hallucination control, ground-truth evaluation,
              agent orchestration and cloud delivery.
            </p>
            <p>
              The platform evolved as model capabilities changed. I helped move it from a
              single extraction flow into a set of specialized agents that could interpret
              methodologies, use tools, preserve context, challenge unsupported results and
              involve people where domain judgment mattered. Target workflows reached more
              than 85 to 90 percent recall and exceeded 80 percent precision against agreed
              ground-truth benchmarks.
            </p>

            <div className="delivery-strip msci-strip">
              <div><strong>Evidence</strong><span>Hybrid retrieval and semantic page detection</span></div>
              <div><strong>Control</strong><span>Grounding, schemas and hallucination checks</span></div>
              <div><strong>Scale</strong><span>Agents, context, tools and Vertex AI</span></div>
            </div>

            <div className="ownership-panel msci-ownership">
              <h4>What changed under my ownership</h4>
              <ul>
                <li><strong>Retrieval became semantic.</strong> Extended BM25 page ranking with BERT-based semantic detection and reranking. This increased relevant-page coverage and improved the evidence presented to downstream extraction.</li>
                <li><strong>Prompts became methodology aware.</strong> Applied few-shot patterns and structured instructions, then designed a prompt-builder agent that interpreted methodology documents and assembled task-specific extraction prompts.</li>
                <li><strong>Extraction became controlled.</strong> Added preprocessing, schema-aware post-processing, data cleansing, validation, evidence checks and explicit hallucination controls before outputs could move forward.</li>
                <li><strong>Quality became measurable.</strong> Built a ground-truth assessment pipeline that calculated precision and recall at the data-point level, compared prompt and model variants, exposed failure modes and supported regression testing.</li>
                <li><strong>The workflow became agentic.</strong> Re-architected extraction with CrewAI agents for prompt building, document extraction, cleansing and validation. Agents used defined tools and skills instead of relying on one oversized prompt.</li>
                <li><strong>Orchestration became task aware.</strong> Designed sequential and hierarchical flows, agent-to-agent communication, context services and memory patterns that preserved methodology, evidence and intermediate decisions.</li>
                <li><strong>Delivery became conversational.</strong> Extended the system into an AG-UI experience where users could upload documents, explain the requested data and guide extraction while the same evaluation and human-review controls remained in place.</li>
                <li><strong>Evaluation moved beyond the model.</strong> Deployed workflows on GCP and Vertex AI, then assessed grounding, tool execution, handoffs and end-to-end completion across the full agent system.</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="experience-card here-experience">
          <div className="experience-meta">
            <div className="company-heading">
              <CompanyLogo company="here" />
              <p>HERE Technologies</p>
            </div>
            <span>2022 to Mar 2024</span>
            <span>Data Scientist</span>
          </div>
          <div className="experience-body">
            <p className="experience-kicker">Geospatial ML, graph learning and production mapping</p>
            <h3>Built learning, alignment and evaluation systems for map intelligence.</h3>
            <p>
              At HERE, I worked where machine learning met large-scale digital mapping.
              The problems involved incomplete features, heterogeneous sources, streaming
              updates and strict product quality. I combined predictive models, graph
              representations and evaluation workflows so road attributes could be classified,
              matched, merged and monitored in production.
            </p>

            <div className="delivery-strip here-strip">
              <div><strong>~74% F1</strong><span>Lane-marking style and color classification</span></div>
              <div><strong>Graph ML</strong><span>Road-network embeddings and source alignment</span></div>
              <div><strong>Patent work</strong><span>Stateful self-healing map pipeline</span></div>
            </div>

            <div className="ownership-panel here-ownership">
              <h4>Systems and outcomes delivered</h4>
              <ul>
                <li><strong>Lane-marking intelligence.</strong> Developed and tuned a LightGBM classifier for lane-marking style and color. Engineered predictive features, used SHAP to select high-value inputs and achieved approximately 74 percent F1.</li>
                <li><strong>Road-network alignment.</strong> Implemented a GNN-based approach that generated node embeddings with positional, attribute and higher-order neighborhood context, then ranked candidate matches through cosine similarity.</li>
                <li><strong>Multi-source conflation.</strong> Built association and clustering logic that identified equivalent road features and merged attributes across heterogeneous map sources.</li>
                <li><strong>Resilient streaming pipelines.</strong> Implemented a stateful, self-healing map workflow that continuously incorporated fresher streaming data while preserving conflated feature state. The work contributed to a related patent filing.</li>
                <li><strong>Product evaluation.</strong> Built a full evaluation pipeline for BMW Urban Cruise Control map features. It identified false positives and negatives, guided production POCs and improved measured KPIs by approximately five percent.</li>
                <li><strong>Feature quality.</strong> Developed classification and feature-selection models for UCC attributes, then introduced graph-based dimensionality-reduction methods to reduce false positives and improve product accuracy.</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="earlier-roles">
          <article>
            <span>2021</span>
            <div><h3>Data Science Intern / HERE Technologies</h3><p>Processed geospatial data, transformed map tiles across coordinate systems, supported production ML components and researched network alignment with GraphSAGE, HinSAGE, GCNs and PyTorch Geometric.</p></div>
          </article>
          <article>
            <span>2021</span>
            <div><h3>Consultant Data Scientist / Edelman</h3><p>Built NLP and social-listening workflows for market intelligence, including sentiment analysis for Qualcomm and web-scraping plus gap analysis for Logitech.</p></div>
          </article>
        </div>
      </section>

      <section className="section systems-section" id="systems">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">02 / Systems and data science journey</p>
            <h2>Architectures expanded. System thinking stayed consistent.</h2>
          </div>
          <p>
            Each stage added a new way to represent a problem: tables, sequences,
            images, graphs, documents and finally multi-agent workflows. The model
            changed, but every system still needed the right data, metrics, failure
            analysis and path to production.
          </p>
        </div>

        <div className="journey-grid">
          {systemsJourney.map((item) => (
            <article className="journey-card" key={item.step}>
              <div className="journey-topline"><span>{item.step}</span><span>{item.era}</span></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="measurement">
                <span>Measured through</span>
                <strong>{item.measurement}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="section-heading">
          <p className="section-number">03 / Product delivery</p>
          <h2>Technical depth that comes together in working systems.</h2>
          <p>Models create value when they are connected to evidence, services, evaluation, interfaces and operational feedback.</p>
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
        <div className="stack-line" aria-label="Technology stack">
          <span>Python</span><span>Scikit-learn</span><span>LightGBM</span><span>PyTorch</span>
          <span>PyTorch Geometric</span><span>GraphSAGE</span><span>CNN</span><span>LSTM</span>
          <span>BM25</span><span>BERT</span><span>LangGraph</span><span>LangChain</span>
          <span>CrewAI</span><span>RAG</span><span>GCP</span><span>Vertex AI</span>
          <span>SQL</span><span>GeoPandas</span><span>NetworkX</span><span>SHAP</span>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading split-heading">
          <div>
            <p className="section-number">04 / Selected projects</p>
            <h2>Earlier foundations that still inform the work.</h2>
          </div>
          <p>These projects built range across conversational AI, sequence modelling, computer vision, classical ML, NLP and embedded systems.</p>
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
        <p className="section-number">05 / Contact</p>
        <h2>Building an AI product that needs strong models and <em>dependable systems?</em></h2>
        <div className="contact-row">
          <a href="mailto:sharmajivitesh2@gmail.com">sharmajivitesh2@gmail.com <Arrow /></a>
          <div>
            <a href="https://www.linkedin.com/in/jivitesh-sharma-8b7905171/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/JSharma2K" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <span>Jivitesh Sharma / Data Scientist and AI Systems Engineer</span>
        <span>Models, evaluation, architecture and delivery.</span>
      </footer>
    </main>
  );
}
