const comments = {
    name: "comments",
    namespaced: true,
    state: {
        comments: [], // nom du module
    },

    mutations: {
        setComments(state, list) {
            state.comments = list // etat + nom du module = ce qu'on veux pas de règle ex A b c pipo
        },
    },

    actions: {

        //ON FETCH LES COMMENTAIRES


// ecrire le nom de ce qu'on veux faire pas d'obligation non plus 

        async getComment(context) { 
            const res = await fetch("http://127.0.0.1:8000/api/commentaire/", {
                "method": "GET",
            })
            const data = await res.json();
            context.commit("setComments", data); // 1er argu nom de la mutation 
        },


        //ajout d'un commentaire dans une annonce 

        async addComments(context, posta) {
            const res = await fetch("http://127.0.0.1:8000/api/commentaire/", {
                method: "POST",
                body: JSON.stringify(posta),
                headers: {
                    "Content-type": "application/json",
                    "Authorization" : 'Bearer '+ localStorage.getItem('token')
                },
            });

            const data = await res.json();
            context.commit("setComments", data);
        },
         //Delete d'un post

         async deleteComments(context, _id){
            await fetch("http://127.0.0.1:8000/api/commentaire/" + _id, {
                "method": "DELETE",
            });
            
            const res = await fetch("http://127.0.0.1:8000/api/commentaire/")
            const data = await res.json();

            context.commit("setComments", data);
        }
    }
}

export default comments;