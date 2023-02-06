import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import { projects } from '../constants/constants'

import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <h2>Projects</h2>
                <p>Check my Portfolio</p>

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
