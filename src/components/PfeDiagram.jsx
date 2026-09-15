import { useLanguage } from "../hooks/useLanguage";
import {
  FaCommentDots, FaRobot, FaCogs, FaCloudUploadAlt,
  FaServer, FaClock, FaDatabase, FaKey, FaExchangeAlt, FaBoxOpen, FaHdd,
} from "react-icons/fa";

const FLOW_STYLE = [
  { icon: FaCommentDots, accent: "border-sky-400/50", color: "text-sky-500" },
  { icon: FaRobot, accent: "border-violet-400/50", color: "text-violet-500" },
  { icon: FaCogs, accent: "border-amber-400/50", color: "text-amber-500" },
  { icon: FaCloudUploadAlt, accent: "border-emerald-400/50", color: "text-emerald-500" },
];
const FLOW_POS = [
  { x: 25, y: 15 },
  { x: 75, y: 15 },
  { x: 125, y: 15 },
  { x: 175, y: 15 },
];

function Node({ x, y, icon: Icon, title, accent = "border-brand-purple/40", color = "text-brand-purple" }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[104px] sm:w-[118px]"
      style={{ left: `${(x / 200) * 100}%`, top: `${(y / 100) * 100}%` }}
    >
      <div className={`card ${accent} p-2 text-center`}>
        <Icon className={`mx-auto mb-1 ${color}`} size={15} />
        <div className="text-[11px] font-semibold leading-tight">{title}</div>
      </div>
    </div>
  );
}

export default function PfeDiagram() {
  const { t } = useLanguage();
  const { steps, note } = t.experience.flow;
  const a = t.experience.arch;

  const archNodes = [
    { x: 35, y: 72, icon: FaServer, title: a.appService, accent: "border-blue-400/50", color: "text-blue-500" },
    { x: 65, y: 72, icon: FaClock, title: a.containerJob, accent: "border-amber-400/50", color: "text-amber-500" },
    { x: 95, y: 72, icon: FaDatabase, title: a.database, accent: "border-emerald-400/50", color: "text-emerald-500" },
    { x: 135, y: 60, icon: FaKey, title: a.keyVault, accent: "border-violet-400/50", color: "text-violet-500" },
    { x: 175, y: 60, icon: FaExchangeAlt, title: a.serviceBus, accent: "border-rose-400/50", color: "text-rose-500" },
    { x: 135, y: 88, icon: FaBoxOpen, title: a.acr, accent: "border-cyan-400/50", color: "text-cyan-500" },
    { x: 175, y: 88, icon: FaHdd, title: a.storage, accent: "border-slate-400/50", color: "text-slate-500" },
  ];

  return (
    <div className="my-3 border border-dashed border-brand-line rounded-lg p-4 bg-brand-purple/[0.03]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono text-muted uppercase tracking-wide">
          Copilot skill → Azure
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          LIVE
        </span>
      </div>

      {/* Desktop / tablet: full node diagram */}
      <div className="hidden sm:block relative w-full" style={{ aspectRatio: "2 / 1" }}>
        <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <marker id="pfe-arrow-sky" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-sky-400" />
            </marker>
            <marker id="pfe-arrow-violet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-violet-400" />
            </marker>
            <marker id="pfe-arrow-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-amber-400" />
            </marker>
            <marker id="pfe-arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-emerald-400" />
            </marker>
          </defs>
          <g fill="none" strokeWidth="0.7">
            <path d="M 40 15 L 59 15" className="stroke-sky-400/60" markerEnd="url(#pfe-arrow-sky)" />
            <path d="M 90 15 L 109 15" className="stroke-violet-400/60" markerEnd="url(#pfe-arrow-violet)" />
            <path d="M 140 15 L 159 15" className="stroke-amber-400/60" markerEnd="url(#pfe-arrow-amber)" />
            <path d="M 122 22 Q 90 35 65 41" className="stroke-amber-400/50" strokeDasharray="2,2" markerEnd="url(#pfe-arrow-amber)" />
            <path d="M 128 22 Q 150 32 155 41" className="stroke-amber-400/50" strokeDasharray="2,2" markerEnd="url(#pfe-arrow-amber)" />
            <path d="M 178 22 Q 165 35 40 64" className="stroke-emerald-400/50" strokeDasharray="2,2" markerEnd="url(#pfe-arrow-emerald)" />
          </g>
        </svg>

        {/* Azure boundary, contains every provisioned resource */}
        <div
          className="absolute border border-brand-purple/30 rounded-lg bg-brand-purple/[0.02]"
          style={{ left: "2%", top: "40%", width: "96%", height: "58%" }}
        >
          <span className="absolute -top-2.5 left-2 text-[9px] font-mono font-semibold text-brand-purple bg-brand-surface px-1">
            {a.azure}
          </span>

          {/* VNet sub-region */}
          <div
            className="absolute border border-dashed border-brand-line rounded-lg"
            style={{ left: "6%", top: "18%", width: "52%", height: "72%" }}
          >
            <span className="absolute -top-2.5 left-2 text-[9px] font-mono text-muted bg-brand-surface px-1">
              {a.vnet}
            </span>
          </div>
        </div>

        {FLOW_POS.map((pos, i) => (
          <Node key={steps[i].title} x={pos.x} y={pos.y} title={steps[i].title} {...FLOW_STYLE[i]} />
        ))}
        {archNodes.map((n) => (
          <Node key={n.title} {...n} />
        ))}
      </div>

      {/* Mobile: simplified stacked flow */}
      <div className="sm:hidden space-y-2">
        {steps.map((step, i) => {
          const { icon: Icon, color } = FLOW_STYLE[i];
          return (
            <div key={step.title} className="card p-2 flex items-center gap-2">
              <Icon className={`shrink-0 ${color}`} size={15} />
              <div className="text-xs font-semibold">{i + 1}. {step.title}</div>
            </div>
          );
        })}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {[a.vnet, a.appService, a.containerJob, a.database, a.keyVault, a.serviceBus, a.acr, a.storage].map((s) => (
            <span key={s} className="chip text-[10px] px-2 py-0.5">{s}</span>
          ))}
        </div>
      </div>

      <div className="mt-3 space-y-1">
        {steps.map((step, i) => (
          <p key={step.title} className="text-xs text-muted">
            <span className={`font-semibold ${FLOW_STYLE[i].color}`}>{i + 1}. {step.title}:</span> {step.desc}
          </p>
        ))}
      </div>
      <p className="text-xs text-muted italic mt-2">{note}</p>
    </div>
  );
}
