import React, { Component } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';

import {Container, Actions} from './styles';
    

export default class Main extends Component{

    state = {
        products: [],
        productTotal:{},
        productPage: [],
        productPages:[],
        
    };

    //funções do react sempre devem ser utilizadas no modelo de named functions
    componentDidMount(){
        this.loadProducts();        
    };


    //funções próprias devem ser utilizadas no modelo de arrow functions
    loadProducts = async (pageNumber = 1) =>{

        const response = await api.get(`/products?page=${pageNumber}`);

        const docs = response.data.docs;
        const total = response.data.total;
        //const limit = response.data.limit;
        const page = response.data.page;
        const pages = response.data.pages;

        this.setState({ products: docs });
        this.setState({ productTotal: total });
        this.setState({ productPage: Number(page)});
        this.setState({ productPages: Number(pages)});
    };

    prevPage = () =>{
        const { productPage } = this.state;
        if(productPage === 1){
            return;
        }else{
            this.loadProducts(productPage -1);
        }

 
    };

    nextPage = () =>{
        const { productPage, productPages } = this.state;

        if(productPage === productPages){
            return;
        }else{
            this.loadProducts(productPage + 1);
        }



    };


    render(){
        //desestruturação *
        const { products,
                productPage,
                productPages
            } = this.state;
        

        return(
            <div>
                <h1>
                  Página atual: {productPage}
                  <p/>
                  Páginas: {productPages}

                </h1>
            <Container>
                {products.map(product => (
                    //sempre adicionar um id com "key" ao usar o map
                   <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>Acessar</Link>
                   </article>
                ))}
            </Container>

            <Actions>
                <button onClick={this.prevPage} disabled={this.state.productPage ===1}>Anterior</button> 
                <button onClick={this.nextPage} disabled={this.state.productPage === this.state.productPages}>Próxima</button>       
            </Actions>
            </div>
        );
    };
};