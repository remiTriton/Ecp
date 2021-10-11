const auth = {
    name: "auth",
    namespaced: true,
    state: {
        users:[],
        user: {},
        token: null
    },
    
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token)
        },
        logout(state, token) {
            state.token = token;
            state.user = null;
            localStorage.removeItem("token");
        },
        setUsers(state, users) {
            state.users = users;
        },
    },

    actions: {
        //On se connecte pour récupérer le token // 
        async login(context, email, password) {
            const res = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",

                },
                body: JSON.stringify(email, password)
            });
            const data = await res.json();
            const token = data.token;
            console.log(data.token);
            context.commit('setToken', token);
            const rex = await fetch('http://127.0.0.1:8000/api/profile', {
                headers: {
                    authorization: "Bearer " + token
                }
            })
            const dato = await rex.json();
            context.commit('setUser', dato)


        },
        async profile(context, token) {

            const rex = await fetch('http://127.0.0.1:8000/api/profile', {
                headers: {
                    authorization: "Bearer " + token
                }
            })
            const dato = await rex.json();
            context.commit('setUser', dato)
        },
        
    
        async register(context, body) {
            const res = await fetch('http://127.0.0.1:8000/api/user', {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify(body),
            })
            const data = await res.json();
            context.commit('setUser', data.user);
            context.commit('setToken', data.token)

        },

        logout(context) {
            let token = null;
            context.commit("logout", token);
        },
        


        //DEBUT DE LA CRUD USER //



        //On recupère tous les utilsiateurs

        async fetchUser(context) { 
            const res = await fetch("http://127.0.0.1:8000/api/user/", {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setUsers", data); // 1er argu nom de la mutation 
        },


        //On va get un user pour l'update !!!!!!!!!!!!!!!!

        async getOneUser(context, id){
            const res = await fetch("http://127.0.0.1:8000/api/user/" + id, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setUser", data); // 1er argu nom de la mutation 
        },
        

        // On supprime qqn
        async deleteUser(context, _id){
            await fetch("http://127.0.0.1:8000/api/user/" + _id, {
                "method": "DELETE",
            });
            
            const res = await fetch("http://127.0.0.1:8000/api/user/")
            const data = await res.json();

            context.commit("setUsers", data);
        },

        //On va chercher qqn

        async searchUser(context, query) {
            const res = await fetch("http://127.0.0.1:8000/api/user?s=" + query, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setUsers", data);
        },

    }}
export default auth;
