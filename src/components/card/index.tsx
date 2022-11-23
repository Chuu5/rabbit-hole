import Image from "next/image"
import style from "./style.module.scss"

type CardProps = {
    image: string;
    backColor: string;
}

const Card = ({image, backColor}: CardProps) => {
    return (
        <div style={{backgroundColor: backColor}} className={style.cardCont}>
            <Image objectFit="contain" layout="fill" src={image} alt="Card with the member image" />
        </div>
    )
}

export default Card