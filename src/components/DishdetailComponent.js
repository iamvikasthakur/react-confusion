import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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
        if(props.comments != null){
            return(
                <div>
                    <h4>Comments</h4>
                    {props.comments.map((comment) => 
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
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }



export default DishDetail;