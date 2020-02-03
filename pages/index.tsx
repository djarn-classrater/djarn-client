import { NextPage } from 'next'
import Button from '~/components/Button'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <>
    <h1>Hello world! = user agent: {userAgent}</h1>
    <Button text="Hello world"/>
  </>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home