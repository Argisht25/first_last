function first_last(text) {
    if (text.length <= 1) {
        return text
    }
    last_chaild = text.substring(1, text.length - 1)
    return (text.charAt(text.length - 1)) + last_chaild + text.charAt(0)
}
console.log(first_last("Java Script"))