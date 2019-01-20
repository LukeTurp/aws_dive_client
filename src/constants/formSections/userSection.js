import { checkPassword, checkEmail } from '../../utils/validationMethods';

export const userSection = {
    sectionName : "Sign up to participate",
    sectionProps : [
    {
        id: 1,
        placeholder: "Please choose a username",
        autoComplete: "username",
        name: "userName",
        errorMessage: "Only alphanumeric characters and underscores allowed",
        label: "Username"
    },
    {
        id: 2,
        type: "password",
        placeholder: "Please enter your password",
        autoComplete: "password",
        name: "password",
        label: "Password",
        errorMessage: "Password must contain one uppercase, lowercase, number, and be at least 5 characters in length.",
        validate: checkPassword
    },
    {
        id: 3,
        placeholder: "Please enter your email",
        autoComplete: "email",
        name: "email",
        label: "E-Mail",
        errorMessage: "Email is not in valid format.",
        validate: checkEmail
    }
    ]
}
    

