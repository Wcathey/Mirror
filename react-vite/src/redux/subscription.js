const SET_SUBSCRIPTION = 'subscription/setSubscription';
const REMOVE_SUBSCRIPTION = 'subscription/removeSubscription';
const UPDATE_SUBSCRIPTION = 'subscription/updateSubscription';

const setSubscription = (subscription) => ({
    type: SET_SUBSCRIPTION,
    tier
});

const removeSubscription = () => ({
    type: REMOVE_SUBSCRIPTION
});

const updateSubscription = (subscriptionId) => ({
    type: UPDATE_SUBSCRIPTION,
    tier
})


const initialState = {};

function subscriptionReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SUBSCRIPTION: {
            const newState = {...state, ...action.tier}
            return newState;
        }
        case UPDATE_SUBSCRIPTION: {
            const newState = {...state, ...action.tier}
            return newState;
        }
        case REMOVE_SUBSCRIPTION: {
            const canceledSubscription = action.subscriptionId
            const newState = {...state, canceledSubscription}
            delete newState.canceledSubscription
            return newState
        }
    }
}
