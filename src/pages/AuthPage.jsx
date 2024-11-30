import { styled } from "styled-components"
import { Form, Field, Formik, ErrorMessage } from "formik"
import Header from "../components/Header"
import * as yup from "yup"

const AuthContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    font-family: "Roboto";
    margin-top: 150px;
`

const AuthContent = styled.div`
    padding: 50px 40px 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background-color: #63DB93;
    border: 1px solid #228A4C;
    border-radius: 5px;
`

const Title = styled.h1`
    padding: 0;
    margin: 0;
    font-family: "Roboto";
    font-size: 48px;
`

const SendButton = styled.button`
    padding: 5px 10px 5px 10px;
    background-color: #009B95;
    border: 1px solid #006561;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5em;
    margin: auto;
`

const FormContent = styled(Form)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 0;
`


const FieldName = styled.p`
    font-size: 2em;
`

const FieldInput = styled(Field)`
    width: 100%;
    padding-left: 5px;
    font-size: 2em;
    box-sizing: border-box;
    border-radius: 5px;
    text-decoration: none;
`
const ErrorText = styled.p`
    color: red
`

function AuthPage()
{
    const validSchema = yup.object().shape({
        email: yup.string().email("Неправильно введена почта").required("Обязательно к заполнению!"),
        password: yup.string().required("Обязательно к заполнению!")
    })

    return(
        <>
            <Header/>
            <AuthContainer>
                <AuthContent>
                    <Title>
                        Аутентификация
                    </Title>
                    <Formik
                        initialValues={{
                            email:"",
                            password:""
                        }}
                        validationSchema={validSchema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {({errors, touched, setTouched }) => (
                            <FormContent>
                                <FieldName>Почта</FieldName>
                                <FieldInput name="email" type="text" placeholder="Введите почту"/>
                                {errors.email && touched.email ? (
                                    <ErrorText>{errors.email}</ErrorText>
                                ) : null}
                                <FieldName>Пароль</FieldName>
                                <FieldInput name="password" type="text" placeholder="Введите пароль"/>
                                {errors.password && touched.password ? (
                                    <ErrorText>{errors.password}</ErrorText>
                                ) : null}
                                <SendButton type="submit" onSubmit={() => {
                                                        setTouched({
                                                            email: true,
                                                            password: true,
                                                        });
                                                        }}>Отправить</SendButton>
                            </FormContent>
                        )}
                    </Formik>
                </AuthContent>
            </AuthContainer>
        </>
    )
}

export default AuthPage