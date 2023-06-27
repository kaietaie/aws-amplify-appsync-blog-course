const users = [
    {id: '1', name: 'John Doe', age: 33, profession: "Data Science" },
    {id: '2', name: 'Alise Karan', age: 26 , profession: "Programmer"},
    {id: '3', name: 'Peter Griffin', age: 50, profession: "Project Manager" },
    {id: '4', name: 'John Swonson', age: 50, profession: "Front End" },
    {id: '5', name: 'Robbert de Niro', age: 80, profession: "Actor" },
]
const hobbies = [
    { id: '1', title: "Gitar", description: "play gitar after work"},
    { id: '2', title: "Football", description: "Play football on weekands"},
    { id: '3', title: "Constuct", description: "Make some thing from some stuff"},
]
const posts = [
    { id: '1', title: "Gitar as elevator", text: "play gitar after work", user: '1'},
    { id: '2', title: "The best football fans", text: "Play football on weekands", user: '2'},
    { id: '3', title: "Constucting in your mind", text: "Make some thing from some stuff", user: '1'},
]
const comments = [
    { id: '1', comment: "Gitar as elevator", user: '3', post: '1'},
    { id: '2', comment: "The best football fans", user: '4', post: '2'},
    { id: '3', comment: "Constucting in your mind", user: '5', post: '2'},
    { id: '3', comment: "The best tenis fans", user: '5', post: '1'},
]

const db = {
    users,
    hobbies,
    posts,
    comments
}
export default db