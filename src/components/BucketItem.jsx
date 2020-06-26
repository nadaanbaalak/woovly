import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "../styles/bucketItem.css";
import { Link } from "react-router-dom";

function BucketItem(props) {
  const { bkt_name, bkt_image, link_user, bkt_id } = props.bucketData;
  return (
    <div>
      <Card className="bucketItem m-2">
        <CardImg
          top
          width="100%"
          src={require(`../assets/images/${bkt_image}`)}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{bkt_name}</CardTitle>
          <CardText>{`On Bucket List of ${link_user} users`}</CardText>
          <Link to={`/bucket/${bkt_id}`} className="btn btn-info">
            View
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

export default BucketItem;
