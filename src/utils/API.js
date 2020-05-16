import axios from "axios";

// const BASE_URL = "https://joes-baseball-stats-api.herokuapp.com"
const BASE_URL = "http://localhost:8080"
const API = {
    login:function(userData){
        return axios.get(`${BASE_URL}/login`,userData)
    },
    createUser:function(userData){
        return axios.post(`${BASE_URL}/userSignup`,userData,{withCredentials:true})
    },
    createStudentPost:function(userData){
        return axios.post(`${BASE_URL}/posts`,userData,{withCredentials:true})
    },
    createTeacherPost:function(userData){
        return axios.post(`${BASE_URL}/signup/teacher`,userData,{withCredentials:true})
    },
    getSkillResult:function(search){
        return axios.get(`${BASE_URL}/api/searchresult`, search)
    },

}
export default API


/*
getTeacherResult:function(search){
    return axios.get(`${BASE_URL}/api/searchresult`)
},
potsTeacherReview:function(id){
    return axios.post(`${BASE_URL}/api/review/`)
},
getTeacherReview:function(id){
    return axios.get(`${BASE_URL}/api/review/${id}`)
},
deleteTeacherReview:function(id){
    return axios.delete(`${BASE_URL}/api/review/${id}`, {withCredentials:true})
},
updatePlayerById:function(id,playerData) {
    return axios.put(`${BASE_URL}/api/players/${id}`,playerData, {withCredentials:true},)
},
*/