import {combineReducers, createStore} from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
};

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: ""
};

/**
 * in redux, it is advisable to return the initial state from the default case
 */
function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "accounts/deposit":
            return {...state, balance: state.balance + action.payload};
        case "accounts/withdraw":
            return {...state, balance: state.balance - action.payload};
        case "accounts/requestLoan":
            if (state.loan > 0) {
                return state;
            } else {
                return {
                    ...state,
                    loan: action.payload.amount,
                    loanPurpose: action.payload.purpose,
                    balance: state.balance + action.payload.amount
                };
            }
        case "accounts/payLoan":
            return {...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan};
        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case "customer/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            };
        case "customer/updateName":
            return {...state, fullName: action.fullName};
        default:
            return state;
    }
}

// combine all the reducers into one root reducer
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(rootReducer);

/*
store.dispatch({type: "accounts/deposit", payload: 500});
console.log(store.getState());
store.dispatch({type: "accounts/withdraw", payload: 200});
console.log(store.getState());

store.dispatch({type: "accounts/requestLoan", payload: {amount: 1000, purpose: "Buy a car"}});
console.log(store.getState());

store.dispatch({type: "accounts/payLoan"});
console.log(store.getState());
 */

// creating an action creator
function deposit(amount) {
    return {type: "accounts/deposit", payload: amount};
}

function withdraw(amount) {
    return {type: "accounts/withdraw", payload: amount};
}

function requestLoan(amount, purpose) {
    return {type: "accounts/requestLoan", payload: {amount, purpose}};
}

function payLoan() {
    return {type: "accounts/payLoan"};
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
// console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a cheap car"));
// console.log(store.getState());

store.dispatch(payLoan());
// console.log(store.getState());

function createCustomer(fullName, nationalID) {
    return {type: "customer/createCustomer", payload: {fullName, nationalID, createdAt: new Date().toISOString()}};
}

function updateName(fullName) {
    return {type: "customer/updateName", payload: fullName};
}

store.dispatch(createCustomer("Rupinder Pal Singh", "234343434"));
// console.log(store.getState());