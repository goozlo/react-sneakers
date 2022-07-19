import ContentLoader from 'react-content-loader'
import styles from './Card'

const MyLoader = props => (
  <ContentLoader
    className={styles.contentLoader}
    speed={2}
    width={250}
    height={326}
    viewBox='0 0 220 326'
    backgroundColor='#f2f2f2'
    foregroundColor='#f5f5f5'
    {...props}
  >
    <rect x='10' y='80' rx='10' ry='10' width='168' height='90' />
    <rect x='10' y='204' rx='3' ry='3' width='168' height='15' />
    <rect x='9' y='224' rx='3' ry='3' width='110' height='15' />
    <rect x='9' y='254' rx='8' ry='8' width='90' height='36' />
    <rect x='147' y='260' rx='8' ry='8' width='32' height='32' />
  </ContentLoader>
)

export default MyLoader
