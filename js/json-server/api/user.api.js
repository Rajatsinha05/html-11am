
export const deleteUser = async (id) => {
    let req = await fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE",
    })
}


const isExists = async (email) => {
    let req = await fetch(` http://localhost:3000/user?email=${email}`);
    let res = await req.json()

    if (res.length > 0) {
        return true
    }
    else {
        return false
    }

}


export const createUser = async (user) => {

    if (await isExists(user.email)) {
        alert("User already exists");
    }
    else {
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)

        })
            .then((req) => req.json())
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // try {
    //     let req = await fetch("http://localhost:3000/user", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(user)
    //     })
    //     let res = await req.json();
    //     console.log(res);
    // } catch (error) {
    //     console.log(error);
    // }

}


export const getUser = () => {

    fetch("http://localhost:3000/user")
        .then((req) => req.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

export const login = async (user) => {
    let req = await fetch(` http://localhost:3000/user?email=${user.email}`);
    let res = await req.json()

    if (res.length == 0) {
        alert("User not found");
    }
    else {
        if (res[0].password == user.password) {
            alert("logged in");
        }
        else {
            alert("password is incorrect");
        }
    }
}