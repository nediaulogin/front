import { api } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { SubmitButton } from '../btn/btn';
import styles from "../form/Form.module.css";
import Input from "../form/Input";
import Select from "../form/Select";

export default function ProjectForm({ handleSubmit, projectData }: any) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    const { data, isError, isLoading } = useQuery({ queryKey: ['category-list'], queryFn: api.getCategories })


    const submit = (e: any) => {
        e.preventDefault()
        handleSubmit(project)

    }

    const handleChange = (e: any) => {
        setProject({ ...project, [e.target.name]: e.target.value })

    }

    const handleCategory = (e: any) => {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input
                type="text"
                name="text"
                text="Nome do projeto:"
                placeholder="insira o nome do projeto"
                handleOnChange={handleChange} />


            <Input
                type="number"
                name="budget"
                text="Orçamento do projeto:"
                placeholder="insira o orçamento do projeto"
                handleOnChange={handleChange} />

            <Select
                name="category_id"
                text="Selecione"
                options={data}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''} />

            <SubmitButton
                text="Criar Projeto" />


        </form>
    )
}