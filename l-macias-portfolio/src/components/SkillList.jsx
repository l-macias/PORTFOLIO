/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import responsive from '../config/carousel'

export default function SkillList (props) {
  return (
    <Carousel focusOnSelect={true} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
    {props.choice.map((skill, index) => {
      return (
            <div key={index} className="item">
            <img src={skill.img} className="skill-img" alt="Image" />
            <h5>{skill.title}</h5>
            </div>
      )
    })
    }</Carousel>)
}
