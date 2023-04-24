function FilterDogs(state) {
    return state.filter(dog => dog.present === true)
}

export default FilterDogs;