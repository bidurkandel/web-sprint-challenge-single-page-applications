import React, { useEffect, useState } from "react";
import { Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
import PizzaForm from './PizzaForm';
import schema from './validation/formSchema';
import * as yup from 'yup'; 

const initialFormValues = {
  name: "",
  size: "",
  mushrooms: false,
  blackOlives: false,
  pepperoni: false,
  extraCheese: false,
  specialInst: ""
}

const intialFormErrors = {
  name: "",
  size: ""
}

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(intialFormErrors);
  const [disabled, setDisabled] = useState(true);


  const postPizza = (pizza) => {
    axios
      .post("https://reqres.in/api/users",pizza)
      .then(res => {
        setPizzas([res.data, ...pizzas]);
        setFormValues(initialFormValues);
        console.log(res.data);
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(()=> {
        setFormErrors({...formErrors , [name]:""});
      })
      .catch((err)=>{
        setFormErrors({...formErrors, [name]:err.errors[0]});
      })
    setFormValues({...formValues, [name]:value});
  }

  const formSubmit = () => {
    const newPizza = {
      name : formValues.name.trim(),
      size : formValues.size.trim(),
      toppings:{
        mushrooms : formValues.mushrooms,
        blackOlives : formValues.blackOlives,
        pepperoni : formValues.pepperoni,
        extraCheese : formValues.extraCheese
      },
      specialInst: formValues.specialInst
    }
    postPizza(newPizza);
  }

  useEffect(()=>{
    schema
      .isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues]);

  return (
    <div>
      <header>
        <nav>
          <h1 className="header-text">Lambda Eats</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/pizza">Order Pizza</Link>
          </div>
        </nav>
      </header>

      <Switch>
        <Route path="/pizza">
          <PizzaForm
            change={inputChange}
            submit={formSubmit}
            values={formValues}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>

  );
};
export default App;
