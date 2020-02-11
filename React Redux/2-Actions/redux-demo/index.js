const BUY_CAKE = 'BUY_CAKE'

// action creator: a function returns an action
// action: a object contains a 'type' property

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

