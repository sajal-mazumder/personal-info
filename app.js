

const form = document.getElementById("inputForm")
const output = document.getElementById("output")


window.onload = () => {
    // document.write('hello this is onload form')
    // alert("hello")

    const savedData = JSON.parse(localStorage.getItem("formData"))

    if (savedData) {
        output.innerHTML = `
        <h3>ID : ${savedData.id}</h3>
        <h4>Name : ${savedData.name}</h4>
        <p>Email : ${savedData.email}</p>
        <p>Mobile Number : ${savedData.mobileNo}</p> 
        `
    }
    else{
         output.innerHTML = `<p> Data not found </p>`
    }

    form.addEventListener("submit", ()=> {
        alert("hello")
    })
}