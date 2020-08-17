import React from 'react';


// function IconBar(props) {
//     if (props.orientatiton === 'horizontal') {
//         return (
//         <div className="icon-bar-horizontal">
//             <a className="active" href="#"><i class="fa fa-home"></i></a> 
//             <a href="#"><i class="fa fa-search"></i></a> 
//             <a href="#"><i class="fa fa-envelope"></i></a> 
//             <a href="#"><i class="fa fa-globe"></i></a>
//             <a href="#"><i class="fa fa-trash"></i></a> 
//         </div>
//         )
//     } else {
//         return (
//         <div className="icon-bar-vertical">
//             <a  href="#"><i class="fa fa-home"></i></a> 
//             <a className="active" href="#"><i class="fa fa-search"></i></a> 
//             <a href="#"><i class="fa fa-envelope"></i></a> 
//             <a href="#"><i class="fa fa-globe"></i></a>
//             <a href="#"><i class="fa fa-trash"></i></a> 
//         </div>
//         )
//     }
// }

class IconBar extends React.Component {
    state = {
        activeItemId: this.props.initialActiveItemId,
    };

    render() {
        return (
            <div className="icon-bar-vertical">
            <a  href="#"><i class="fa fa-home"></i></a> 
            <a className="active" href="#"><i class="fa fa-search"></i></a> 
            <a href="#"><i class="fa fa-envelope"></i></a> 
            <a href="#"><i class="fa fa-globe"></i></a>
            <a href="#"><i class="fa fa-trash"></i></a> 
        </div>
        )
    }
}

export default IconBar