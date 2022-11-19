import React from 'react';
import logo from './logo.svg';
import log from './5.jpg';
import log2 from './images.jpg';
import log3 from './6.jpg';
import log4 from './7.jpg';

import logos from './1.png';
import logo3 from './2.png';
import logo4 from './3.jpg';

import './App.css';


const data = [
  {
    id: 1,
    count: 55,
    text: "High-minded or absent-minded? You decide",
    logo: logo,
    image: log

  },
  {
    id: 2,
    count: 45,
    text: "Jigh-minded or absent-minded? You decide",
    logo: logos,
    image: log2

    
    
  },
  {
    id: 3,
    count: 35,
    text: "Bigh-minded or absent-minded? You decide",
    logo: logo3,
    image: log

    
  },
  {
    id: 4,
    count: 25,
    text: "Qigh-minded or absent-minded? You decide",
    logo: logo4 ,
    image: log4

    
  },
  
]

class Product extends React.Component {
  updatestate = ()=>{
    this.props.stateLifting(this.props.id);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className='product'>
          <div class="img">
            <img src={this.props.logo} />
          </div>
          <div class="pro">
              <h1 class="counts"><i onClick={this.updatestate} class="fas fa-sort-up"></i>{this.props.count}</h1>
              <h1 class="text"></h1>
              {/* <h1 class="text_h1">{this.props.data}</h1> */}
              { <h1 class="text_h1">{this.props.text} </h1>   /* birinchisi  */}
            <span>Submited by: <img src={this.props.image} /></span>
          </div>
        </div>
        
        </header>
      </div>
  )
}
}


// state lifting // lifting up // js collback  
class ProductList extends React.Component{
  state = { 
    data: data
  }



  stateLifting = (id) =>{
    const products = this.state.data.map(item => {
      if(item.id === id){
        return Object.assign({}, item, { count: item.count + 1 })
      } else {
        return item
      }
    })

    this.setState({
      data: products
    })
  }


  // statelifting() and statelifting <= adress
  render() {
    const update = this.state.data.sort((a,b)=>{
      return b.count - a.count
    })
    

    return (
      <React.Fragment>
        {update.map(item=>{
        return (
          <Product id={item.id} count={item.count} text={item.text} image={item.image} logo={item.logo} stateLifting={this.stateLifting} key={item.id}/> // 3chisi ozgartirish
        )
        })}
      </React.Fragment>

    );

  }

}


export default ProductList;














