import React from 'react';

export default class ErrorBoundary extends React.Component {

    state = {
        errorLength: false
    }
    
    componentDidCatch(error, info) {
        this.setState({errorLength: true});
    }

    render() {
        if (this.state.errorLength) return <div style={{color: "red"}}>The name is too long! It is incorrect..</div>
        return this.props.children
    }

}