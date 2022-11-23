import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import Card from '../components/card'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <div className={styles.homeCont}>
        <div className={styles.imageCont}>
          <Image objectFit='cover' layout='fill' src={"/images/HoloEn95.jpeg"} alt="HoloMyth"/>

          <div className={styles.imageText}>
            <h3>Welcome to the rabbit hole</h3>
          </div>
        </div>
        
        <div className={styles.members}>
          <h3>Members</h3>
        </div>

        <div className={styles.cards}>
            <Card backColor="#F8DB92" image="/images/Ame186.webp" />
            <Card backColor="#5D81C7" image="/images/Gura.webp" />
        </div>
      </div>
    </Layout>
  )
}

export default Home
