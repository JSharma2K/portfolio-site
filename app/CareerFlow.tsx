"use client";

import {
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  useNodesState,
} from "@xyflow/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type JourneyData = {
  date: string;
  title: string;
  copy: string;
  detail: string;
  brand: "foundation" | "here" | "msci" | "future";
};

type JourneyNode = Node<JourneyData, "journey">;

const initialNodes: JourneyNode[] = [
  {
    id: "foundation",
    type: "journey",
    position: { x: 0, y: 0 },
    data: {
      date: "2018 to 2021",
      title: "Foundations in data science",
      copy: "SP Jain, applied AI study and projects across statistics, NLP, vision and deep learning.",
      detail: "Built the modelling foundation across statistics, classical machine learning, NLP, computer vision and sequence architectures.",
      brand: "foundation",
    },
  },
  {
    id: "here",
    type: "journey",
    position: { x: 0, y: 112 },
    data: {
      date: "2021 to 2024",
      title: "Production ML and graph systems",
      copy: "HERE Technologies, mapping intelligence, geospatial ML, graph learning and resilient pipelines.",
      detail: "Moved into production geospatial intelligence through GraphSAGE, GNN-based alignment, LightGBM classification and self-healing map pipelines.",
      brand: "here",
    },
  },
  {
    id: "msci",
    type: "journey",
    position: { x: 0, y: 224 },
    data: {
      date: "2024 to Present",
      title: "Generative and agentic AI",
      copy: "MSCI, enterprise document intelligence, evaluation, orchestration and conversational extraction.",
      detail: "Advanced document extraction from retrieval-ranked LLM calls into evaluated, tool-using agentic workflows deployed on GCP and Vertex AI.",
      brand: "msci",
    },
  },
  {
    id: "future",
    type: "journey",
    position: { x: 0, y: 336 },
    data: {
      date: "What comes next",
      title: "Wider AI product and systems ownership",
      copy: "Building reliable AI products across domains, from architecture and evaluation to delivery.",
      detail: "The next step is broader ownership of AI products, platforms and teams, connecting technical depth with measurable business outcomes.",
      brand: "future",
    },
  },
];

const edgeColors = ["#9ab6ff", "#48dad0", "#b8ff5a"];

const edges: Edge[] = ["foundation", "here", "msci"].map((source, index) => ({
  id: `${source}-to-${initialNodes[index + 1].id}`,
  source,
  target: initialNodes[index + 1].id,
  type: "straight",
  style: { stroke: edgeColors[index], strokeWidth: 2 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: edgeColors[index],
    height: 14,
    width: 14,
  },
}));

function JourneyMark({ brand }: { brand: JourneyData["brand"] }) {
  if (brand === "here") {
    return <Image src="/here-logo-white.svg" alt="HERE Technologies" height={56} width={64} />;
  }

  if (brand === "msci") {
    return <Image src="/msci-logo.svg" alt="MSCI" height={24} width={70} />;
  }

  return <span aria-hidden="true">{brand === "future" ? "→" : "01"}</span>;
}

function JourneyNodeCard({ data }: NodeProps<JourneyNode>) {
  return (
    <article className={`career-flow-node career-flow-${data.brand}`}>
      <Handle className="career-flow-handle" type="target" position={Position.Top} />
      <div className="career-flow-brand">
        <JourneyMark brand={data.brand} />
      </div>
      <div className="career-flow-copy">
        <span className="career-flow-date">{data.date}</span>
        <strong>{data.title}</strong>
      </div>
      <Handle className="career-flow-handle" type="source" position={Position.Bottom} />
    </article>
  );
}

const nodeTypes = { journey: JourneyNodeCard };

export default function CareerFlow() {
  const [nodes, , onNodesChange] = useNodesState<JourneyNode>(initialNodes);
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeJourney = useMemo(
    () => nodes.find((node) => node.id === activeId)?.data,
    [activeId, nodes],
  );

  return (
    <div className="career-flow-shell">
      <div className="career-flow">
        <ReactFlow
          aria-label="Interactive career journey from data science foundations to future AI product ownership"
          edges={edges}
          elementsSelectable
          fitView
          fitViewOptions={{ padding: 0.1 }}
          maxZoom={1.4}
          minZoom={0.52}
          nodes={nodes}
          nodesConnectable={false}
          nodesDraggable
          nodeTypes={nodeTypes}
          onNodeClick={(_, node) => setActiveId(node.id)}
          onNodesChange={onNodesChange}
          onPaneClick={() => setActiveId(null)}
          panOnDrag
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          zoomOnDoubleClick
          zoomOnPinch
          zoomOnScroll={false}
        >
          <Controls position="top-right" showInteractive={false} />
        </ReactFlow>
      </div>
      {activeJourney ? (
        <div className={`career-flow-inspector career-flow-${activeJourney.brand}`} aria-live="polite">
          <span>{activeJourney.date}</span>
          <strong>{activeJourney.title}</strong>
          <div>
            <p>{activeJourney.copy}</p>
            <p>{activeJourney.detail}</p>
          </div>
        </div>
      ) : (
        <div className="career-flow-inspector career-flow-empty" aria-live="polite">
          <span>Explore</span>
          <strong>Click any career stage to see the details below.</strong>
        </div>
      )}
    </div>
  );
}
