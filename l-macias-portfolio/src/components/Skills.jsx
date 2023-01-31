import 'react-multi-carousel/lib/styles.css'
import SkillList from './SkillList'
import { frontEndSkills, backEndSkills } from '../constants/constants'

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Front-End</h2>
                        <h4>SKILLS</h4>
                        <SkillList choice={frontEndSkills} />
                        <br/>
                        <h2 className='mt-3'>Back-End</h2>
                        <h4>SKILLS</h4>
                        <SkillList choice={backEndSkills}/>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
