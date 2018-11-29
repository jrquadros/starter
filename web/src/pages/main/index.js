import React, { Component } from 'react';
import api from '../../services/api';


import {Container} from './styles';
    

export default class Main extends Component{

    state = {
        products: []
    };

    //funções do react sempre devem ser utilizadas no modelo de named functions
    componentDidMount(){
        this.loadProducts();
    };
    //funções próprias devem ser utilizadas no modelo de arrow functions
    loadProducts = async () =>{
        const response = await api.get('/products');
        
        //atribui response à ao estado do componente
        this.setState({products: response.data.docs});
        console.log(response.data.docs);

    };


    render(){
        //desestruturação *
        const { products } = this.state;

        return(
            <Container>
                {products.map(product => (
                    //sempre adicionar um id com "key" ao usar o map
                   <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="#">Acessar</a>
                   </article>
                ))}
            </Container>
        );
    };
};