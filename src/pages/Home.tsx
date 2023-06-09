import { MyInfo } from './MyInfo'
import { ProExperience } from './ProExperience'
import { Skill } from './Skill'
import { Other } from './Other'

const Home: React.FC = () => {
  return (
    <div flex justify-center p-y-20px>
      <section p-40px bg='#f6f6f6' shadow-xl rounded-sm>
        <MyInfo />
        <ProExperience />
        <Skill />
        <Other />
      </section>
    </div>
  )
}

export default Home
