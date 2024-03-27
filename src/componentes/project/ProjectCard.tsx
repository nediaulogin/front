import { LuPen, LuTrash2 } from "react-icons/lu";




export default function ProjectCard(project: any) {
    return (
        <div className="flex-col card">

            <h4 className="card-name">{project.text}</h4>
            <p className="card-p">
                <span className="card-span">Orçamento: </span>R${project.budget}
            </p>
            <p className="card-p">
                <span></span>{project.category.name}
            </p>
            <div className="flex justify-between">
                <p className="card-edit"><LuPen />editar</p>
                <p className="card-remove"><LuTrash2 />excluir</p>
            </div>

        </div>
    )
}