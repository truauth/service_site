export const validateUsername = (username) => {
    if (typeof password === 'undefined') {
        return false
    }
    // check that it isnt taken
    // TODO: make api call for this.
    return true;
}

export const validatePassword = (password) => {
    if (typeof password === 'undefined') {
        return false
    }

    const containsSymbol = /[~`!#$%\^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(password)
    const containsNum = /\d/.test(password);

    return password.length >= 8 && password.length <= 16 && containsNum && containsSymbol;
}

export const validateEmail = (email) => {
    return !!email && email.includes('@') && email.length > 0
}