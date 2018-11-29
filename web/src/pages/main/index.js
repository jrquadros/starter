import React, { Component } from 'react';
import api from '../../services/api';

    

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
        return(
            <div className="product-list">
                {this.state.products.map(product => (
                    //sempre adicionar um id com "key" ao usar o map
                    <h2 key={product._id}>
                        {product.title}
                        <p/>
                        {product._id}
                    </h2>
                ))}
            </div>
        );
    };
};