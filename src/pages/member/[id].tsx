import { useRouter } from "next/router"
import style from "./style.module.scss"

const Member = () => {
    const router = useRouter()
    const {id} = router.query
    
    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default Member