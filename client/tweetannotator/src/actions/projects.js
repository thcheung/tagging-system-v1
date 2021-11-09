import axios from 'axios';

import { GET_PROJECTS, DELETE_PROJECT } from './types';

export const getProjects = () => dispatch => {
    axios.get('/projects/').then(res => {
        dispatch({
            type: GET_PROJECTS,
            payload: res.data.results
        });
    }).catch(err => console.log(err))
}

export const deleteProject = (id) => dispatch => {
    axios.delete(`/projects/${id}`).then(res => {
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        });
    }).catch(err => console.log(err))
}