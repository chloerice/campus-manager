import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Thumbnail, Row, Col } from 'react-bootstrap'

// Rendered by SingleStudent
// Returns a div with student name, email and campus (<--linked) below the
// student's campus' logo

const Student = props => {
  const student = props.student
  const campus = student.campus || { name: '', image: '' }

  return (
    <Col xs={12} sm={12} md={6} lg={6} >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Thumbnail
            src={campus.image}
            alt={`${campus.name} campus logo`}>
            <h1>{student.name}</h1>
            <p>
              <Link
                to={`/campuses/${campus.id}`}>
                {student.campusName}
              </Link>
            </p>
            <p>{`email: ${student.email}`}</p>
          </Thumbnail>
        </Col>
      </Row>
    </Col>
  )
}

Student.propTypes = {
  student: PropTypes.object.isRequired
}

export default Student
