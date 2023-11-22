import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer-ul">
                <li className="footer-li">
                    <LuFacebook size={23} />
                </li>
                <li className="footer-li">
                    <LuInstagram size={23} />
                </li>
                <li className="footer-li">
                    <LuLinkedin size={23} />
                </li>
            </ul>
            <p className="footer-li">
                <span>Costs</span> &copy; 2021
            </p>
        </div>)
}