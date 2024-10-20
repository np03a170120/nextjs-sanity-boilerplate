import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className=" flex items-center justify-center">
      <div>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.id}>
            {project.image && (
              <Image
                height={100}
                width={100}
                alt="project image"
                src={project.image}
              />
            )}
            <p>{project.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
