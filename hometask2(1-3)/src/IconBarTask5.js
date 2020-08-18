class IconBar extends React.Component {
    state = {
        activeItemId: this.props.initialActiveItemId,
    };
    
    render() {
        return (
            <div> {this.props.items.map((item) => (
                <div class="icon-bar-vertical" className={item === this.state.activeItemId ? "active" : ""} key="item">
                    <a onClick={ () => this.setState({
                        activeItemId: item,
                    }) } href="#"><i class="fa fa-home"></i></a> 
                    <a onClick={ () => this.setState({
                        activeItemId: item,
                    }) } href="#"><i class="fa fa-search"></i></a> 
                    <a onClick={ () => this.setState({
                        activeItemId: item,
                    }) } href="#"><i class="fa fa-envelope"></i></a> 
                    <a onClick={ () => this.setState({
                        activeItemId: item,
                    }) } href="#"><i class="fa fa-globe"></i></a>
                    <a onClick={ () => this.setState({
                        activeItemId: item,
                    }) } href="#"><i class="fa fa-trash"></i></a> 
                </div>
                ))}
             </div>
        )
    }
}

export default IconBar