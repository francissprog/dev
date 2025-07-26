// handleChange function
const handleChange = (setter) => (event) => {
    const { name, value } = event.target;
    setter(value);
  };
  
  export default handleChange;
  