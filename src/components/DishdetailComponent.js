import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish(props) {
        if (props.dish != null)
            return(
                <Card>
                    <CardImg top src={props.dish.image} alt={props.dish.name} />
                    <CardBody>
                      <CardTitle>{props.dish.name}</CardTitle>
                      <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    function RenderComments(props){
        if(props.dish != null){
            return(
                <div>
                    <h4>Comments</h4>
                    {props.dish.comments.map((comment) => 
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

    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {RenderComments(props)}
                    </div>
                </div>
            </div>
        )
    }



export default DishDetail;