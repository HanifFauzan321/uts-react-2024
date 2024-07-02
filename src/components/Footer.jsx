import { Layers } from "lucide-react";
import { AtSignIcon } from "lucide-react";
import { Github } from "lucide-react";

export default function Fouter() {
  return (
      <div className="relative -bottom-64 justify-center h-20 text-center flex gap-5 p-8 bg-slate-900">
        <AtSignIcon className="text-white" size={30} />
        <p className="text-white">haniffauzann55@gmail.com</p>
        <Github className="text-white" size={30} />
        <p className="text-white">haniffauzann321</p>
        <Layers />

    </div>
  );
}

