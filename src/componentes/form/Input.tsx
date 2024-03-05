import styles from './Form.module.css'

type inputProps = {
    type?: string,
    text?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

}


export default function Input({ type, text, name, placeholder, value, handleOnChange }: inputProps) {
    return (
        <div>
            <label className={styles.form_label} htmlFor={name}>{text}</label>
            <input className={styles.form_input}
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value} />
        </div>
    )
}