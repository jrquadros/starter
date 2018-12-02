import React, { Component } from 'react';
import api from '../../services/api';


import {Container, Actions} from './styles';
    

export default class Main extends Component{

    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    //funções do react sempre devem ser utilizadas no modelo de named functions
    componentDidMount(){
        this.loadProducts();
    };
    //funções próprias devem ser utilizadas no modelo de arrow functions
    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({ products: docs, productInfo});

        //console.log(docs, productInfo);

    };

    prevPage = () =>{

    };

    nextPage = () =>{
        var {page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);


    };


    render(){
        //desestruturação *
        const { products } = this.state;

        return(
            <div>
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

            <Actions>
                <button onClick={this.prevPage}>Anterior</button> 
                <button onClick={this.nextPage}>Próxima</button>       
            </Actions>
            </div>
        );
    };
};