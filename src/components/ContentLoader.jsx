import ContentLoader from 'react-content-loader'

const MyLoader = props => (
  <ContentLoader
    style={{ margin: '40px auto', marginBottom: '80px' }}
    speed={2}
    width={210}
    height={260}
    viewBox='0 0 210 260'
    backgroundColor='#f2f2f2'
    foregroundColor='#f5f5f5'
    {...props}
  >
    <rect x='0' y='36' rx='10' ry='10' width='170' height='90' />
    <rect x='0' y='160' rx='3' ry='3' width='170' height='15' />
    <rect x='0' y='180' rx='3' ry='3' width='110' height='15' />
    <rect x='0' y='230' rx='8' ry='8' width='80' height='24' />
    <rect x='140' y='224' rx='8' ry='8' width='32' height='32' />
  </ContentLoader>
)

export default MyLoader
