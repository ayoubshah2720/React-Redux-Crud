import axios from "axios";
import * as types from "./actionType";

const getProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products
})

const singleProduct = (product) => ({
    type: types.GET_SINGLE_PRODUCT,
    payload: product
})

const productUpdated = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products
})

const productDeleted = () => ({
    type: types.DELETE_PRODUCT
})

const productAdded = () => ({
    type: types.DELETE_PRODUCT
})

export const loadProducts = () => {
    return function (dispatch) {
        axios.get('http://localhost:5000/products/').then((res) => {
            console.log('response data', res.data)
            dispatch(getProducts(res.data))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const getSingleProduct = (id) => {
    return function (dispatch) {
        axios.get('http://localhost:5000/products/'+ id).then((res) => {
            console.log('response data', res.data)
            dispatch(singleProduct(res.data))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const deleteProduct = (id) => {
    return function (dispatch) {
        axios.delete('http://localhost:5000/products/'+ id).then((res) => {
            console.log('response data', res.data)
            dispatch(productDeleted())
            dispatch(loadProducts())
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const addProduct = (product) => {
    return function (dispatch) {
        axios.post('http://localhost:5000/products/', product).then((res) => {
            console.log('response data', res.data)
            dispatch(productAdded())
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const updateProduct = (product,id) => {
    return function (dispatch) {
        axios.put('http://localhost:5000/products/'+ id,product).then((res) => {
            console.log('response data', res.data)
            dispatch(productUpdated())
            dispatch(loadProducts())
        }).catch((error) => {
            console.log(error)
        })
    }
}