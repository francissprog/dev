const handleChange = setter => event => {
    const {name, value} = event.target;

    setter(prevState => ({
        ...prevState, [name]: value
    }))
}
export default handleChange

