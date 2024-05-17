
let students = []
const handleDeleteRow = (index) => {
    console.log(index);
    students.splice(index, 1);
    UiMaker()
}
const UiMaker = () => {
    document.getElementById("tbody").innerHTML = ""
    students.map((ele, i) => {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = ele.name
        let td2 = document.createElement('td')
        td2.innerHTML = ele.course
        let td3 = document.createElement('td')
        td3.innerHTML = ele.grid
        let td4 = document.createElement('td')
        td4.innerHTML = "Delete"
        td4.addEventListener("click", () => handleDeleteRow(i))
        tr.append(td1, td2, td3, td4)
        // document.getElementById('students').append("tbody")
        document.getElementById("tbody").append(tr)
    })
}
const handleStudentData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById('name').value,
        grid: document.getElementById('grid').value,
        course: document.getElementById('course').value,
        test: document.getElementById('test').value
    }
    console.log(data);
    students.push(data);
    UiMaker()

}

const HandleDelete = () => {
    document.getElementById("tbody").innerHTML = ""
    students = []
}
document.getElementById("studentData").addEventListener("submit", handleStudentData)
document.getElementById("deleteAll").addEventListener("click", HandleDelete)