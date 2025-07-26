const scroll = (id) => {
    // get the id
    const page = document.getElementById(id);

    // validate the id
    if(page){
        page.scrollIntoView({behavior: "smooth"})
    }
}

export default scroll