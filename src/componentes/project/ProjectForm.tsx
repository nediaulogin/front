import { SubmitButton } from '../btn/btn';
import styles from "../form/Form.module.css";
import Input from "../form/Input";
import Select from "../form/Select";

export default function ProjectForm() {
    return (
        <form className={styles.form}>

            <Input type="text" name="text" text="Nome do projeto:" placeholder="insira o nome do projeto" />

            <Input type="number" name="budget" text="Orçamento do projeto:" placeholder="insira o orçamento do projeto" />

            <Select name="status" text="Status do projeto:" />

            <SubmitButton text="Criar Projeto" />


        </form>
    )
}