import Image from "next/legacy/image"
import Link from "next/link";
import { useState } from "react";
import style from "./style.module.scss"

type CardProps = {
    image: string;
    backColor: string;
    name: string;
    id: number;
}

const Card = ({name, image, backColor, id}: CardProps) => {

    const [hover, setHover] = useState(false);

    return (
        <div 
        style={{backgroundColor: backColor}} 
        className={style.cardCont}
        onMouseOver={() => setHover(true)} 
        onMouseOut={() => setHover(false)}>
            <Image priority objectFit="contain" layout="fill" src={image} alt="Card with the member image" />

            <div style={{display: hover ? "flex" : "none"}} className={style.details}>
                <h3 style={{color: backColor}}>{name}</h3>

                <Link href={`/member/${id}`}>
                    <button>See More</button>
                </Link>
            </div>
        </div>
    )
}

export default Card