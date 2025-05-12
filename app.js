

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
    // else{
    //      output.innerHTML = `<p> Data not found </p>`
    // } // no need this line 

    form.addEventListener("submit", (event)=> {
        // alert("hello")

        event.preventDefault() // to stop reload only usage
        // console.log(event);

        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;       ;
        const mobile = document.getElementById("mobileNo").value;

        // console.log(name.value);

        const formData = {
            id : id, 
            name : name,
            email : email,
            mobileNo : mobile 
        }

        localStorage.setItem("formData", JSON.stringify(formData)) // const formData and getItem formData should be same spelling.

        output.innerHTML = `
        <h3>ID : ${id}</h3>
        <h4>Name : ${name}</h4>
        <p>Email : ${email}</p>
        <p>Mobile Number : ${mobile}</p>  
        ` // these code for instant load of data
        
        form.reset()
    })
}