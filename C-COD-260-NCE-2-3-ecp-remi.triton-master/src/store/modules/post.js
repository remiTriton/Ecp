const posts = {
    name: "post",
    namespaced: true,
    state: {
        posts: [],

        post:{}
    },

    mutations: {
        setpost(state, list) {
            state.posts = list;
        },
        

    },

    actions: {
        //ON RECUPERE LES POSTS

        async fetchPost(context) {
            const res = await fetch("http://127.0.0.1:8000/api/post/", {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setpost", data);
        },

        //Print d'un post

        async findOnePost(context, _id) {
            const res = await fetch("http://127.0.0.1:8000/api/post/" + _id, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setpost", data);
        },
        //On cherche un post 

        async searchPost(context, query) {
            const res = await fetch("http://127.0.0.1:8000/api/post?s=" + query, {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setpost", data);
        },


        
        async deletePost(context, _id) {
            await fetch("http://127.0.0.1:8000/api/post/" + _id, {
                "method": "DELETE",
            });


            context.commit("setpost");
        },
        async addPost(context, body) {
            const res = await fetch("http://127.0.0.1:8000/api/post/", {
                "method": "POST", 
                headers: {
                    "Content-type": "application/json",
                    "Authorization" : 'Bearer ' + localStorage.getItem('token')
                },

                body: JSON.stringify(body)
            })
            const data = await res.json();
            context.commit('setpost')
        }


    }

}
export default posts;
