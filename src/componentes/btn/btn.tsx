import Link from "next/link"
import styles from './btn.module.css'

type propsType = {
    to: string,
    text: string

}

export default function LinkButton({ to, text }: propsType) {
    return (
        <Link href={to} className={styles.button}>{text}</Link>)

}
