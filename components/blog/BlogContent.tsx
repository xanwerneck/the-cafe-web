import type { BlogBlock } from "@/lib/blog/types";

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-5 text-[#5e2a8b]/85 leading-relaxed font-medium">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="text-xl font-black tracking-tight text-[#5e2a8b] pt-2"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc pl-5 space-y-2 marker:text-[#5e2a8b]/40">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
