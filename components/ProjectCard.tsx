import { Github, ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export default function ProjectCard({ title, description, tech, github, live }: Props) {
  return (
    <div className="rounded-xl border p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {tech.map((t) => (
          <span key={t} className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a href={github}>
          <Github />
        </a>
        <a href={live}>
          <ExternalLink />
        </a>
      </div>
    </div>
  );
}
