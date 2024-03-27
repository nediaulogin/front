import axios from "axios";
const URL = "https://65ecf85c0ddee626c9b10ef5.mockapi.io/projects"

async function getProjects() {
    const response = await axios.get(URL);
    return response.data;
}

async function getCategories() {
    const response = await axios.get("https://65ecf85c0ddee626c9b10ef5.mockapi.io/categories");
    return response.data;
}

async function getProject(id: string) {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
}

async function createProject(project: any) {
    const response = await axios.post(URL, project);
    return response.data;
}

async function deleteProject(id: string) {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
}

async function updateProject(project: any) {
    const response = await axios.put(`${URL}/${project.id}`, project);
    return response.data;
}

export const api = {
    createProject,
    deleteProject,
    getProject,
    getCategories,
    getProjects,
    updateProject
};

