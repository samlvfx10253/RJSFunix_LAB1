import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Fade
} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }
    renderDetail(dish) {
        return (
            <Card>
                <CardImg top src={dish.image}
                    alt={dish.name} />
                <CardBody>
                    <CardTitle tag='h6'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    renderComment(comments) {
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <div key={comment.id}>
                                    <li>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                                            { year: 'numeric', month: 'short', day: '2-digit' }).
                                            format(new Date(Date.parse(comment.date)))}</p>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else {
            return (<></>)
        }
    }
    render() {
        if (this.props.dish != null) {
            return (
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDetail(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComment(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (<></>)
        }
    }
}
export default Dishdetail;