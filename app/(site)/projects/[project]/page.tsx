import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    project: string;
  };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <h1>{project?.name}</h1>
      {project.image && (
        <Image
          height={600}
          width={600}
          alt="project image"
          src={project.image}
        />
      )}
    </div>
  );
};

export default Project;
