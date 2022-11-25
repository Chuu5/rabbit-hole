import Image from "next/legacy/image"
import style from "./style.module.scss"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div style={{maxWidth: "1140px", marginInline: "auto"}}>
            <div className={style.bubbaCont}>
                <div className={style.bubba}>
                    <Image layout="fill" src={"/images/Ame174.png"} alt="Bubba" />
                </div>
            </div>
            {children}
        </div>
    )
}

export default Layout