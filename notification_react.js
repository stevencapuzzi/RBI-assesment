let React = require('react');

const Notification = props => (
            <div className={ props.bootstrap }>
            { props.message}
             </div>
)

class App extends React.Component {
  
    render(){
        
     if(isEmpty(this.props.notification)){
        console.log(this.props)
      return (
          <div id="app">
          </div>
      )
     }else{
       console.log(this.props)
            let type;
            switch(this.props.notification.type) {
            case 'success':
              type = 'alert alert-success';
              break;
            case 'message':
                type = 'alert alert-info';
              break;
            case 'caution':
                type = 'alert alert-warning';
              break;
            case 'error':
                type = 'alert alert-danger';
              break;
            default:
              type = 'alert alert-info';
          }
         console.log(type)
       return (
       <div id="app">
         <Notification message={this.props.notification.message}
                       bootstrap={type} />
       </div>
      )
     }
   }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
