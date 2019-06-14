import React from "react";

class Viewer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mainImage: props.phone.images[0]
        };
        this.selectImage = (imageUrl) => {
            this.setState({
                mainImage: imageUrl
            })
        }
    }

    render() {
    <div>
        <img className="phone" 
        alt="Large"
        src={this.state.mainImage}/>
        <button onClick={this.props.onBack}>Back</button>
        <button>Add to basket</button>

        <h1>{props.phone.name}</h1>
        <p>{props.phone.description}</p>

        <ul className="phone-thumbs">
            {props.phone.images.map(imageUrl => (
                <li key={imageUrl}>
                    <img 
                    src={imageUrl}
                    onClick={() => {
                        this.selectImage(imageUrl);
                    }}
                    alt={imageUrl}
                    />
                </li>
            )) }
        </ul>
    </div>
    }
};

export default Viewer