export const checkPassword = inputValue => {
    let regexCheck = "^(?=.*[A-Za-z])(?=.*)[A-Za-z]{5,}$";
    return regexCheck.test(inputValue);
}

export const checkEmail = inputValue => {
    let regexCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexCheck.test(inputValue.toLowerCase());
}