import styles from './Form.module.css'

type inputProps = {
    type?: string,
    text?: string,
    name?: string,
    value?: string,
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

}


export default function Select({ type, text, name, value, handleOnChange }: inputProps) {
    return (
        <div>
            <label className={styles.form_label} htmlFor={name}>{text}</label>
            <select className={styles.form_select} name={name} id={name}>
                <option>
                    Selecione uma opção
                </option>
            </select>
        </div>
    )
}