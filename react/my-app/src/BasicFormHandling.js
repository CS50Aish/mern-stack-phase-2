import React, {useState} from 'react';

function BasicFormHandling(){
    const[formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const[errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        let formValid = true;
        const errorCopy = { ...errors};
        for(const field in formValues){
            if(!formValues[field]){
                formValid = false;
                errorCopy[field] = true;
            }
        }
        setErrors(errorCopy);
        if(formValid){
            console.log("Form Submitted with values: ", formValues);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={formValues.name} onChange={handleChange}></input>
                {error.name && <div className='error'>Please enter your name</div>}
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='text' id='name' name='name' value={formValues.name} onChange={handleChange}></input>
                {error.name && <div className='error'>Please enter your email</div>}
            </div>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' value={formValues.name} onChange={handleChange}></input>
                {error.name && <div className='error'>Please enter your name</div>}
            </div>
        </form>
    )
}