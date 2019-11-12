import React from 'react';
import styles from '../../components/categorySearch/Search.css';


class Search extends React.Component {
  constructor(){
    super();

    this.state = {
      categorySelected: [],
      subCategorySelected: [],
      sortBy: null
    }

    this.addToCategories = this.addToCategories.bind(this);
    this.addToSubCategories = this.addToSubCategories.bind(this);
    this.addToSortBy = this.addToSortBy.bind(this);
  }

  addToCategories(e){
    if(e.target.value === 'categories'){
      return;
    }

    if(this.state.categorySelected.includes(e.target.value)){
      let index = this.state.categorySelected.indexOf(e.target.value)
      this.setState(prevState => ({
        categorySelected: prevState.categorySelected.filter((_, i) => i !== index)
      }));
    }else{
      let joined = this.state.categorySelected.concat(e.target.value);
      this.setState({
        categorySelected: joined
      })
    }
  }

  addToSubCategories(e){
    if(e.target.value === 'subCategories'){
      return;
    }

    if(this.state.subCategorySelected.includes(e.target.value)){
      let index = this.state.subCategorySelected.indexOf(e.target.value)
      this.setState(prevState => ({
        subCategorySelected: prevState.subCategorySelected.filter((_, i) => i !== index)
      }));
    }else{
      let joined = this.state.subCategorySelected.concat(e.target.value);
      this.setState({
        subCategorySelected: joined
      })
    }
  }

  addToSortBy(e){
    if(e.target.value === 'price'){
      this.props.sortByPrice();
    }else if(e.target.value === 'breed'){
      this.props.sortByBreed();
    }else if(e.target.value === 'name'){
      this.props.sortByName();
    }

    this.setState({
      sortBy: e.target.value
    })
  }

  resetState(){
    this.setState({
      categorySelected: [],
      subCategorySelected: [],
      sortBy: null
    })
  }

  render(){
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchBoxes}>
          <span>Dog</span>
          <span>Cat</span>
          <select onChange={this.addToCategories} name={`${this.props.subCategoriesNumber} Selected`}>
            <option value="categories">{`${this.state.categorySelected.length} categories selected`}</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="fish">Fish</option>
          </select>
          <select onChange={this.addToSubCategories} name={`${this.props.subCategoriesNumber} Selected`}>
            <option value="subCategories">{`${this.state.subCategorySelected.length} subcategories selected`}</option>
            <option value="young">Toung</option>
            <option value="mid">Mid</option>
            <option value="old">Old</option>
          </select>
          <select onChange={this.addToSortBy} name="Sort by">
            <option value="sort">Sort By</option>
            <option value="name">Name</option>
            <option value="breed">Breed</option>
            <option value="price">Price</option>
          </select>
          <div onClick={this.resetState} className={styles.resetButton}>Reset</div>
        </div>
        <div className={styles.allProducts}>
          {`${this.props.allProducts} products`}
        </div>
      </div>
    )
  }
}

export default Search;