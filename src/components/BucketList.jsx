import React from "react";
import BucketItem from "./BucketItem";
import "../styles/bucketList.css";

function BucketList(props) {
  const buckets = props.bucketListData.map((bucket) => (
    <BucketItem bucketData={bucket} />
  ));
  return <div className="card-columns">{buckets}</div>;
}

export default BucketList;
