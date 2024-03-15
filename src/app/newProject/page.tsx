'use client'
import { useCreateProject } from "@/componentes/mutations/useCreate";
import ProjectForm from "@/componentes/project/ProjectForm";
import { useRouter } from "next/navigation";


export default function NewProject() {


    const router = useRouter()
    const createMutation = useCreateProject()
    const submit = (project: any) => {
        createMutation.mutate(project)

    }
    // project.cost = 0
    // project.services = []

    // fetch('http://localhost:3001/projects', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(project),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success:', data);
    //         router.push('/projects')
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     })



    return (
        <div className="flex justify-center items-center min-h-2/3">
            <div className="flex flex-col justify-center ">
                <h1 className="h1 my-4">Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <ProjectForm handleSubmit={submit} />
            </div>
        </div>
    )
}