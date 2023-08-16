

export const state  = {
    dialogPage: {
        dialogs: [
            {id : '1', name : 'Andrei'},
            {id : '2', name : 'Dennis'},
            {id : '3', name : 'Smith'},
            {id : '4', name : 'Alex'},
            {id : '5', name : 'Jonathan'}
        ],
        messages: [
            {id : '1', message : 'Hey, how\'s it going?'},
            {id : '2', message : 'Pretty good, thanks for asking! How about you?'},
            {id : '3', message : 'I\'m doing okay, just a bit stressed with work. How was your weekend?'},
            {id : '4', message : 'It was really nice, I went camping with some friends. How about you?'},
            {id : '5', message: 'I didn\'t do much, just stayed home and watched TV.'}

        ]
    },
    profilePage: {
        posts: [
            {id : '1',message:'Hello, how are you?', likes: 5},
            {id : '2',message:'I\'m fine.', likes: 10},
            {id : '3',message:'Bye', likes: 15},
        ]
    }
}
export const addPost = (postMessage:string) => {
    const newPost = {
        id : '4',
        message : postMessage,
        likes: 5
    }
    state.profilePage.posts.push(newPost)
    console.log(state.profilePage.posts)
}

