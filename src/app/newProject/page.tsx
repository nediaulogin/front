'use client'
import ProjectForm from "@/componentes/project/ProjectForm";


export default function NewProject() {
    return (
        <div className="flex justify-center items-center min-h-2/3">
            <div className="flex flex-col justify-center ">
                <h1 className="h1 my-4">Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProjectForm />
            </div>
        </div>
    )
}