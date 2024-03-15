



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
            <p className={`card-${project.category.name}`}>editar</p>
            <p className="card-p">remover</p>

        </div>
    )
}