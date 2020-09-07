import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    // constructor(props){
    //     super(props);
    // }
    renderComments(comments){
        
        if (comments != null){
            const comment = comments.map((comm)=>{  
                return(
                    <li>
                        <p>{comm.comment}</p>
                        <p>{comm.author}, {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(comm.date))}
                        </p>
                    </li>
                );        
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comment}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

            
    }
    renderdish(dish){
        return(    
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody> 
            </Card>
        );
    };

    render(){
        const dish = this.props.dish;
        
        if (dish != null)
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderdish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
                
            );            
        else 
            return(
                <div></div>
            );
        
    }
        
}
export default DishDetail;