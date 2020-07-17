import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(props) {
        if (this.props.dish != null)
            return(
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(props){
        if(this.props.dish != null){
            return(
                <div>
                    <h4>Comments</h4>
                    {this.props.dish.comments.map((comment) => 
                        (
                            <div className="list-unstyled">
                                <li>{comment.comment}</li><br/>
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li><br/>
                            </div>
                        )
                    )}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props)}
                    </div>
                </div>
            </div>
        )
    }

}

export default DishDetail;