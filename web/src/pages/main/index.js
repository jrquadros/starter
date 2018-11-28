import React, { Component } from 'react';
import api from '../../services/api';

    

export default class Main extends Component{
    //funções do react sempre devem ser utilizadas no modelo de named functions
    componentDidMount(){
        this.loadProducts();
    };
    //funções próprias devem ser utilizadas no modelo de arrow functions
    loadProducts = async () =>{
        const response = await api.get('/products');

        console.log(response.data.docs);

    };


    render(){
        return(
            <h1>Hello World</h1>
        );
    };
};