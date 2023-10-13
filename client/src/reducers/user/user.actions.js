export const setUser = async payload => dispatch => {
    console.log(payload)
    // const { data } = axios.post("http://localhost:3001/uploadmulterimages", { payload })
    dispatch({
        type: "SET_USER",
        payload
    })
}