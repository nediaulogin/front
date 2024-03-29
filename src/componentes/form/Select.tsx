import styles from './Form.module.css'

type inputProps = {
    type?: string,
    text?: string,
    name?: string,
    value?: string,
    options?: any,
    handleOnChange?: any

}


export default function Select({ type, text, name, value, handleOnChange, options }: inputProps) {
    return (
        <div>
            <label className={styles.form_label} htmlFor={name}>{text}</label>
            <select className={styles.form_select}
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}
            >
                <option>Selecione uma opção</option>
                {options && options.map((option: any) => (
                    <option key={option.id} value={option.id}>{option.infra}</option>

                ))}
            </select>
        </div>
    )
}