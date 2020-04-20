import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageDesign from '../components/imageDesign';
import * as actions from '../actions';

function mapStateToProps(state) {
    return {
        items:state.items
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getListFolder:(param)=>dispatch(actions.getListFolder(param)),
        clickNewTag:(param)=>dispatch(actions.clickNewTag(param)),
        propToDefault:()=>dispatch(actions.propToDefault())
        
        
    };
}

class HomeContainer extends Component {
    render() {
      
        
        return (
            <React.Fragment>
                <ImageDesign {...this.props}/>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(HomeContainer);