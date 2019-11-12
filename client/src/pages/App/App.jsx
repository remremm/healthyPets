import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Banner from '../../components/banner/Banner.jsx';
import Search from '../../components/categorySearch/Search.jsx';
import Products from '../../components/products/Products.jsx';
import styles from './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      categoriesNumber: 0,
      subCategoriesNumber: 0,
      allProducts: 0,
      previousProducts: [],
      searchedItem: '',
      sortedByPrice: false,
      products: []
    }

    this.searchForPets = this.searchForPets.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortByBreed = this.sortByBreed.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  componentDidMount(){
    fetch('/fakeData')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let reducedData = data.filter(item => {return item.id <= 20});
      this.setState({
        products: reducedData
      })
    })
    .catch(err => {
      throw err;
    })
  }

  searchForPets(e){
    this.setState({
      searchedItem: e.target.value
    })
  }

  sortByPrice(){
    let sortedState = this.state.products.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : -1)

    this.setState({
      products: sortedState
    })
  }

  sortByBreed(){
    let sortedState = this.state.products.sort((a, b) => (a.breed > b.breed) ? 1 : -1)

    this.setState({
      products: sortedState
    })
  }

  sortByName(){
    let sortedState = this.state.products.sort((a, b) => (a.name > b.name) ? 1 : -1)

    this.setState({
      products: sortedState
    })
  }

  render(){
    return(
      <div>
        <div>
          <Navbar searchForPets={this.searchForPets}/>
        </div>
        <div>
          <Banner />
        </div>
        <div className={styles.appSearchContainer}>
          <Search sortByName={this.sortByName} sortByBreed={this.sortByBreed} sortByPrice={this.sortByPrice} categoriesNumber={this.state.categoriesNumber} subCategoriesNumber={this.state.subCategoriesNumber} allProducts={this.state.allProducts}/>
        </div>
        <div className={styles.appProductsContainer}>
          <Products searchedItem={this.state.searchedItem} products={this.state.products}/>
        </div>
      </div>
    )
  }
}

export default App;