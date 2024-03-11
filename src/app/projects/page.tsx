'use client'
import { api } from "@/api/api";
import ProjectCard from "@/componentes/project/ProjectCard";
import { useQuery } from "@tanstack/react-query";
export default function Projects() {


    const { data, isError, isLoading } = useQuery({ queryKey: ['project-list'], queryFn: api.getProjects })

    return (
        <div className="min-h-2/3">
            {data && data.map((project: any) => (
                <div key={project.id}>
                    <ProjectCard {...project} />

                </div>))}
        </div>
    )
}