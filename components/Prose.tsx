import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const inlineComponents: Components = {
  // Strip the outer <p> ReactMarkdown adds, so this can be slotted
  // into existing <p>/<span> containers without nesting block elements.
  p: ({ children }) => <>{children}</>,
  a: ({ children, href }) => {
    const external = href?.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="text-moss-700 underline underline-offset-2 hover:text-moss-900"
      >
        {children}
      </a>
    );
  },
};

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={inlineComponents}>
      {children}
    </ReactMarkdown>
  );
}

export function Prose({
  paragraphs,
  className = "space-y-5 text-lg leading-relaxed text-bark/85",
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i}>
          <Markdown>{p}</Markdown>
        </p>
      ))}
    </div>
  );
}
