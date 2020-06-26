import React from "react";
import "../styles/bucket.css";

function Bucket(props) {
  const id = parseInt(props.match.params.bucketId);
  const data = props.bucketData.find((ele) => ele.bkt_id === id);
  return (
    <div>
      {data ? (
        <div>
          <div className="bucket-image m-3">
            <img
              src={require(`../assets/images/${data.bkt_image}`)}
              height="600px"
              width="600px"
            />
          </div>
          <div>
            <p>{`Bucket Name : ${data.bkt_name}`}</p>
          </div>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.history.goBack();
            }}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Bucket;
/*
      <div>
        <img src={require(`../assets/images/${data.bkt_image}`)} />
      </div>
      */
