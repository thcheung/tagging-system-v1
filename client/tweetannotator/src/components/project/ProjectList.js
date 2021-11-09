import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteProject, getProjects } from '../../actions/projects';

export class ProjectList extends Component {
    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getProjects();
        console.log("mounted")
        console.log(this.props.projects)
    }
    render() {
        return (
            <Fragment>
                <h2>Projects</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.name}
                                    </td>
                                    <td><button className="btn btn-danger" onClick={this.props.deleteProject.bind(this, project.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects.projects
})
const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => {
            dispatch(getProjects());
        },
        deleteProject: (id) => {
            dispatch(deleteProject(id));
        }
    };
};





export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
