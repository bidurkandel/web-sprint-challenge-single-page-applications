import React from 'react';
import styled from 'styled-components';

export default function PizzaForm({values, change, submit, disabled, errors}){

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    
    return(
        <form className="form container" onSubmit={onSubmit}>
            <div>
                <div className="errors">
                    <div className="error">{errors.name}</div>
                    <div className="error">{errors.size}</div>
                </div>
                <FormContainer>
                    <label>
                        Name<br/>
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name="name"
                            type="text"
                            />
                    </label>
                    <label>
                        Size
                        <select onChange={onChange} value={values.size} name="size">
                            <option value="">- Select an option -</option>
                            <option value="10'">10'</option>
                            <option value="12'">12'</option>
                            <option value="14'">14'</option>
                            <option value="18'">18'</option>
                        </select>
                    </label>
                    <label>
                        Mushrooms
                        <input
                            type="checkbox"
                            name="mushrooms"
                            checked={values.mushrooms}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Black Olives
                        <input
                            type="checkbox"
                            name="blackOlives"
                            checked={values.blackOlives}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Extra Cheese
                        <input
                            type="checkbox"
                            name="extraCheese"
                            checked={values.extraCheese}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Special Instructions<br/>
                        <input 
                            value={values.specialInst}
                            onChange={onChange}
                            name="specialInst"
                            type="text"
                            />
                    </label>
                    <button id="submitButton" disabled={disabled}>Submit</button>
                </FormContainer>
            </div>
        </form>
    )
}

const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    label{
        margin: 5px;
    }
`;