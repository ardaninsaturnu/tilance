import React, {Component} from 'react';
import './textheader.css';

class TextHeader extends Component {
    render() {
        return (
            <div className="title-header-container">
                <h1 className="title-header">Everything You<br />
                    need to track<br />
                    your business</h1>
                <p className="text-header">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Morbi egestas consectetur fermentum.<br />
                    Suspendisse mollis nunc semper odio suscipit, vitae pretium nisi efficitur.<br />
                    Morbi tristique purus nibh.
                </p>
            </div>
        );
    }
}

export default TextHeader;