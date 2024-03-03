import { useEffect, useState } from 'react';
import { SubmitButton } from '../btn/btn';
import styles from "../form/Form.module.css";
import Input from "../form/Input";
import Select from "../form/Select";

export default function ProjectForm({ btnText }: any) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(data => {
            setCategories(data)
        }).catch((error) => console.error('Error:', error));
    }, [])


    return (
        <form className={styles.form}>

            <Input type="text" name="text" text="Nome do projeto:" placeholder="insira o nome do projeto" />

            <Input type="number" name="budget" text="Orçamento do projeto:" placeholder="insira o orçamento do projeto" />

            <Select name="category_id" text="Selecione" options={categories} />

            <SubmitButton text="Criar Projeto" />


        </form>
    )
}