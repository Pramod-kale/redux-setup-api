//auth api's

const authApis = {

}

const DashboardApi = {

}

const testApi = {
    fetchTodos: (id) => `https://jsonplaceholder.typicode.com/todos/${id}`,
}

const path = {
    ...authApis,
    ...DashboardApi,
    ...testApi
}

export default path;
