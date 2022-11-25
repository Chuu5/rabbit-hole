import Image from "next/legacy/image";
import styles from '../../styles/Home.module.scss'
import Card from '../components/card'
import Layout from '../components/Layout'
import db from "../../db.json"

function Home() {

  const members = db.members

  return (
    <Layout>
      <div className={styles.homeCont}>
        <div className={styles.imageCont}>
          <Image priority objectFit='cover' layout='fill' src={"/images/HoloEn95.jpeg"} alt="HoloMyth"/>

          <div className={styles.imageText}>
            <h3>Welcome to the rabbit hole</h3>
          </div>
        </div>
        
        <div className={styles.members}>
          <h3>Members</h3>
        </div>

        <div className={styles.cards}>
            {members.map((member) => {
                return <Card id={member.id} key={member.id} name={member.name} image={member.image} backColor={member.color} />
            })}
        </div>

        <div className={styles.about}>
            <Image objectFit="cover" layout="fill" src={"/images/Gura3D.jpg"} alt="Gawr Gura Image"/>

            <div className={styles.aboutText}>
                <h2>About</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at iste quibusdam consequuntur eligendi debitis, atque nisi dolor, accusantium ea beatae facere obcaecati corrupti eum voluptas, rem nihil. Eius, exercitationem.</p>

                <button>See More</button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
