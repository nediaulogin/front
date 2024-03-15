'use client'
import { api } from "@/api/api";
import { LinkButton } from "@/componentes/btn/btn";
import ProjectCard from "@/componentes/project/ProjectCard";
import { useQuery } from "@tanstack/react-query";
export default function Projects() {


    const { data, isError, isLoading } = useQuery({ queryKey: ['project-list'], queryFn: api.getProjects })

    return (
        <div className="min-h-2/3 justify-between flex">
            <div className="m-6">
                <h1 className="h1">Meus Projetos</h1>
                <div className="flex">

                    {isLoading && <p>Carregando...</p>}

                    {isError && <p>Erro ao carregar</p>}

                    {data && data.map((project: any) => (
                        <div className="flex mt-6" key={project.id}>
                            <ProjectCard {...project} />

                        </div>))}

                </div>
            </div>
            <div className="m-4">
                <LinkButton to="/newProject" text="Criar projeto" />
            </div>
        </div>
    )
}