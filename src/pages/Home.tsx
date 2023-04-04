import { MyInfo } from './MyInfo'
import { EdExperience } from './EdExperience'
import { ProExperience } from './ProExperience'
import { Skill } from './Skill'
import { Recommend } from './Recommend'

const Home: React.FC = () => {
  return (
    <div flex justify-center h='100vh' p-y-20px>
      <section p-40px bg='#f6f6f6' shadow-xl rounded-sm>
        <MyInfo />
        <EdExperience />
        <ProExperience />
        <Skill />
        <Recommend />
      </section>
    </div>
  )
}

export default Home
