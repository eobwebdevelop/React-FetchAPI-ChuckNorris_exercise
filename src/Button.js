import React, {Component} from 'react';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
          on: this.props.on
        };
    
      }

      handleClick = () => {
        this.setState({ on: !this.state.on });
        let img = document.getElementById("show");
        if(this.state.on){

            img.classList.add('effect');

        } else {
            img.classList.remove('effect');
        }
      };;

      render() {
            const AppLogo = this.state.on? "Working" : "Taking a break";
            return(
                <div className="Button">
                <button
                    onClick={this.handleClick}
                    className={AppLogo}
                >

                    {/* {this.state.AppLogo ? 'off' : 'working/break'} */}
                    {AppLogo.toUpperCase()}
                </button>
             </div>
             
            )

      };

}



export default Button;

