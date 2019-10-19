import React, {Component} from 'react';
import {Formik, Field,ErrorMessage} from "formik";
import * as Yup from "yup";


class App extends Component {

  onSubmit = (values) => {
    console.log(values);
  }

  form = (props) => {
    return <form onSubmit={props.handleSubmit}>
      <label>Name</label><br/>
      <Field name="name" /> <br/>
      <ErrorMessage name="name" /><br/>
      <label>Email</label> <br/>
      <Field name="email" type="email" /> <br/>
      <ErrorMessage name="email" /><br/>

      <Field name="type" component="select">
        <option value="1">One</option>
        <option value="2">Tow</option>
      
      </Field>
      <ErrorMessage name="type" /><br/>

      <br/>
      <label>Active</label> <br/>
      <Field name="active" type="checkbox" /> <br/>
      <br/>
      <label>Categoris</label> <br/>
      <Field name="categories" type="radio" value="1"/> 1<br/>
      <Field name="categories" type="radio" value="2"/> 2<br/>
      <ErrorMessage name="categories" /><br/>



      <button type="submit">send</button>
    </form>
  }



  schema = () => {
    const schema = Yup.object().shape({
      name:Yup.string().required(),
      type:Yup.string().required(),
      email:Yup.string().required()
      .email('Invalid email'),
      categories:Yup.string().required()

    });
    return schema;
  }

  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{name:"", email:"", type:"",active: false,categories:""}}
          onSubmit={this.onSubmit}
          render={this.form}
          validationSchema={this.schema()}

        />
      </div>
    );

  }
 
}

export default App;
