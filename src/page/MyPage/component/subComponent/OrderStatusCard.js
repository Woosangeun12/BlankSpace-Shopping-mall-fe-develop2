import React from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { badgeBg } from "../../../../constants/order.constants";
import { currencyFormat } from "../../../../utils/number";

const OrderStatusCard = ({ orderItem }) => {
  return (
    <div>
      <Row className="status-card">
        <Col xs={2}>
          <img
            src={orderItem.items[0]?.productId?.image}
            alt={orderItem.items[0]?.productId?.image}
            height={96}
          />
        </Col>
        <Col xs={8} className="order-info">
          <div>
            <strong>주문번호: {orderItem.orderNum}</strong>
          </div>

          <div className="text-12">{orderItem.createdAt.slice(0, 10)}</div>

          <div>
            {orderItem.items[0].productId.name}
            {orderItem.items.length > 1 && `외 ${orderItem.items.length - 1}개`}
          </div>
          <div>₩ {currencyFormat(orderItem.totalPrice)}</div>
        </Col>
        <Col md={2} className="vertical-middle">
          <div className="text-align-center text-12">주문상태</div>
          <Badge bg={badgeBg[orderItem.status]}>{orderItem.status}</Badge>

          <div className="mt-1 text-align-center">
            {orderItem.status === "delivered" ? (
              <Link to={`/write-review/${orderItem.items[0]?.productId?._id}`}>
                <Button variant="primary" size="sm" style={{ width: "97px" }}>
                  리뷰 작성
                </Button>
              </Link>
            ) : (
              <div className="text-danger text-12"></div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderStatusCard;