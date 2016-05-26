import React from 'react';
import ReactDOM from 'react-dom';



//ES6
class Mytest extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {  //es6的state需要写在构造函数里面，es7才是可以写静态变量的。
        name:'sdlkjsklfj'
      };
    }
    componentWillMount(){
      alert('sdflksdjflkj')
    }
    render() {
        return (
           <div>{this.props.name}</div>
        );
    } // 注意这里既没有分号也没有逗号
}
Mytest.defaultProps = {  //es6的props需要这么写，写在外面
  name:'6464654654'
}

export {Mytest};

