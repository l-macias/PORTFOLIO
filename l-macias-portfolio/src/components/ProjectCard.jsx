/* eslint-disable react/prop-types */
import { Col } from 'react-bootstrap'
import githubIcon from '../assets/img/github-icon.png'
import websiteIcon from '../assets/img/browse.png'
export const ProjectCard = ({ title, description, imgUrl, link, github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className='proj-img' src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='d-flex justify-content-center gap-5 p-5'>
          <a className='proj-links' href={link} target={'_blank'}><img className={'w-50 '} src={websiteIcon} alt="Visit Website"/></a>
          <a className='proj-links' href={github} target={'_blank'}><img className={'w-50 '} src={githubIcon} alt="Github Icon"/></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
