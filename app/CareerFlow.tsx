"use client";

import {
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import Image from "next/image";

type JourneyData = {
  date: string;
  title: string;
  copy: string;
  brand: "foundation" | "here" | "msci" | "future";
};

type JourneyNode = Node<JourneyData, "journey">;

const nodes: JourneyNode[] = [
  {
    id: "foundation",
    type: "journey",
    position: { x: 0, y: 0 },
    data: {
      date: "2018 to 2021",
      title: "Foundations in data science",
      copy: "SP Jain, applied AI study and projects across statistics, NLP, vision and deep learning.",
      brand: "foundation",
    },
  },
  {
    id: "here",
    type: "journey",
    position: { x: 0, y: 128 },
    data: {
      date: "2021 to 2024",
      title: "Production ML and graph systems",
      copy: "HERE Technologies, mapping intelligence, geospatial ML, graph learning and resilient pipelines.",
      brand: "here",
    },
  },
  {
    id: "msci",
    type: "journey",
    position: { x: 0, y: 256 },
    data: {
      date: "2024 to Present",
      title: "Generative and agentic AI",
      copy: "MSCI, enterprise document intelligence, evaluation, orchestration and conversational extraction.",
      brand: "msci",
    },
  },
  {
    id: "future",
    type: "journey",
    position: { x: 0, y: 384 },
    data: {
      date: "What comes next",
      title: "Wider AI product and systems ownership",
      copy: "Building reliable AI products across domains, from architecture and evaluation to delivery.",
      brand: "future",
    },
  },
];

const edgeColors = ["#9ab6ff", "#48dad0", "#b8ff5a"];

const edges: Edge[] = ["foundation", "here", "msci"].map((source, index) => ({
  id: `${source}-to-${nodes[index + 1].id}`,
  source,
  target: nodes[index + 1].id,
  type: "smoothstep",
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
        <p>{data.copy}</p>
      </div>
      <Handle className="career-flow-handle" type="source" position={Position.Bottom} />
    </article>
  );
}

const nodeTypes = { journey: JourneyNodeCard };

export default function CareerFlow() {
  return (
    <div className="career-flow">
      <ReactFlow
        aria-label="Career journey from data science foundations to future AI product ownership"
        edges={edges}
        elementsSelectable={false}
        fitView
        fitViewOptions={{ padding: 0.035 }}
        nodes={nodes}
        nodesConnectable={false}
        nodesDraggable={false}
        nodeTypes={nodeTypes}
        panOnDrag={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        zoomOnScroll={false}
      />
    </div>
  );
}
