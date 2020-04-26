import * as React from 'react';
//Cleanupimports???  R9Ucb8jpc4H/+eilKnNm746rIS4dOKiN9FH8Mjdt3e4=
import { Grid, Button, Input } from 'semantic-ui-react';
import { Formik, Form, Field } from 'formik';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { UserList } from '../../store/Users/types';
import { logInUserFromSystem } from '../../store/session/actions';
import 'semantic-ui-css/semantic.min.css';
//import { Link } from 'react-router-dom';

export interface ILoginPageProps {
  userlist: UserList[];
  logInUserFromSystem: typeof logInUserFromSystem;
}

export interface ILoginPageState {
  isUserFormInvalid: boolean;
}

export interface UserNameAndPasswordCombo {
  username: string;
  password: string;
}

export class Login extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: ILoginPageProps) {
    super(props);

    this.state = {
      isUserFormInvalid: false
    }
  }

  private validateCredentials = (data: UserNameAndPasswordCombo) => {
    console.log("CALLED WITH DATA");
    console.log(data);
    let { logInUserFromSystem, userlist } = this.props;

    console.log("USERS DATA");
    console.log(userlist);

    let singleUser = userlist.filter(individualUser => {
      return (individualUser.password === data.password
        &&
        individualUser.username === data.username)
    })[0];

    if (singleUser) {
      logInUserFromSystem(singleUser.id);
      this.setState({
        isUserFormInvalid: false
      }); 
    } else {
      this.setState({
        isUserFormInvalid: true
      }); 
    }

  }

  public render() {
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row color="red">
            <h1>LOGIN</h1>
          </Grid.Row>
          <Grid.Row color="orange">
            <Formik
              initialValues={{
                username: "",
                password: ""
              }}
              onSubmit={
                (data: UserNameAndPasswordCombo) => {
                  this.validateCredentials(data);
                }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div>
                    <h3>Username:  &nbsp;
                    <Field
                      placeholder="username"
                      name="username"
                      type="input"
                      content="usernameContent"
                      as={Input}
                    /></h3>
                  </div>
                  <div>
                    {this.state.isUserFormInvalid &&
                    <h4>Not a Valid UserName!</h4>
                    }
                    <br></br>
                    <h3>Password:   &nbsp;
                    <Field
                      placeholder="password"
                      name="password"
                      content="passwordCtrlVCodeContent"
                      type="input"
                      as={Input}
                    /></h3>
                     {this.state.isUserFormInvalid &&
                    <h4>Not a Valid Password!</h4>
                    }
                  </div><br></br>
                  <div>
                    <Button type="submit" size="big" color="blue">LOGIN</Button>
                    
                  </div>
                </Form>
              )}
            </Formik>
          </Grid.Row>
          
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    userlist: state.userlist.userlist
  }
}

export default connect(
  mapStateToProps,
  { logInUserFromSystem }
)(Login);
