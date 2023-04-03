import { MyInfo } from './MyInfo'
import { EdExperience } from './EdExperience'
import { ProExperience } from './ProExperience'
import { Skill } from './Skill'
import { Recommend } from './Recommend'

const Home: React.FC = () => {
  return (
    <>
      <MyInfo />
      <EdExperience />
      <ProExperience />
      <Skill />
      <Recommend />
    </>
  )
}

export default Home
