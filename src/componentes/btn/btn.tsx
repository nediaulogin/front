import Link from "next/link"
import styles from './btn.module.css'

type propsType = {
    to: string,
    text: string
}

export function LinkButton({ to, text }: propsType) {
    return (
        <Link href={to} className={styles.button}>{text}</Link>)

}

export function SubmitButton({ text }: Partial<propsType>) {
    return (
        <button className={styles.submit_button} >{text}</button>
    )
}
