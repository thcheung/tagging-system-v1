import React, { Component, Fragment } from 'react'
import Form from './Form'
import ProjectList from './ProjectList'

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form />
                <ProjectList />
            </Fragment>
        )
    }
}

export default Dashboard
