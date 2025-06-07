import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types/Project";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  project: Project | null;
}

export const ProjectModal = ({ open, onOpenChange, project }: Props) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl bg-slate-950 text-white border-none animate-pop-in-violent">
      {project && (
        <>
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-6 max-h-[70vh] overflow-y-auto pr-2">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md object-cover w-full max-h-60 md:max-h-[30rem]"
            />

            <div className="text-white text-sm md:text-base leading-relaxed break-words whitespace-pre-line w-full ">
              <p>{project.details}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techs.map((t) => (
                <span key={t} className="bg-white/10 px-2 py-1 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="underline text-blue-400"
                >
                  Código fuente
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="underline text-blue-400"
                >
                  Demo en vivo
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </DialogContent>
  </Dialog>
);
