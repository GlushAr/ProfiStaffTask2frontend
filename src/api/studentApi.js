export const getAllStudents = () =>
    fetch(`http://localhost:8080/api/students`, {
        method: "GET",
    })
    .then(response => response.json())
    .then(students => students || [])

export const addStudent = (name, surname, patronymic, birthDate, group) =>
    fetch(`http://localhost:8080/api/add?name=${name}&surname=${surname}&patronymic=${patronymic}&birthDate=${birthDate}&group=${group}`, {
        method: "GET",
    })
    .then(response => alert(response.status))

export const deleteStudentById = (id) =>
    fetch(`http://localhost:8080/api/delete?id=${id}`, {
        method: "GET",
    })
    .then(response => alert(response.status))