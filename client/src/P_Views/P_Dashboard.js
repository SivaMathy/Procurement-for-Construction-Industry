import React, { useContext } from "react";
import { Card, Col, Row, Image, Button } from "antd";
import { Link} from "react-router-dom";
import img1 from "../assets/P_Images/img1.jpg";
import img2 from "../assets/P_Images/img2.jpg";
import img3 from "../assets/P_Images/img3.jpg";
import img4 from "../assets/P_Images/img4.jpg";
import img5 from "../assets/P_Images/img5.jpg";
import img6 from "../assets/P_Images/img6.jpg";
import { adddata, updatedata, deldata } from "./context/ContextProvider";
function Dashboard() {
  const { udata} = useContext(adddata);
  return (
    <>
      {udata ? (
        <>
          <div
            class="alert alert-success alert-dismissible fade show mt-3"
            role="alert"
          >
            <strong>Booked succesfully!</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="site-card-wrapper  mr-3 ml-3 mb-5 ">
        <p className="text-center font-bold text-5xl text-blue-800 hover:text-blue-700 text-opacity-100 hover:underline mt-2">
          Laboratory Testing Appointments
        </p>
        <Row gutter={12}>
          <Col span={8}>
            <div className="border-double border-4  rounded-lg shadow-xl">
              <Card hoverable={true} bordered={true}>
                <p className="text-center font-bold text-2xl text-blue-600">
                  Complete Blood Test
                </p>
                <Image width={300} src={img1} />

                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Pre Test Information
                  </p>
                  <p className="text-left text-lg ">
                    No special preparation is required for this test.
                  </p>
                </div>
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Report Delivery
                  </p>
                  <p className="text-left text-lg ">Will be assigned</p>
                </div>
                <p className="text-left text-lg font-bold">Rs.500</p>
                <Link to="/form">
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </Col>
          <Col span={8}>
            <div className="border-double border-4 rounded-lg shadow-xl">
              <Card hoverable={true} bordered={true}>
                <p className="text-center font-bold text-2xl text-blue-600">
                  Urine Test
                </p>
                <Image width={300} src={img2} />
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Pre Test Information
                  </p>
                  <p className="text-left text-lg ">
                    No special preparation is required for this test.
                  </p>
                </div>
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Report Delivery
                  </p>
                  <p className="text-left text-lg ">Will be assigned</p>
                </div>
                <p className="text-left text-lg font-bold">Rs.1500</p>
                <Link to="/form">
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </Col>
          <Col span={8}>
            <div className="border-double border-4 rounded-lg shadow-xl">
              <Card hoverable={true} bordered={true}>
                <p className="text-center font-bold text-2xl text-blue-600">
                  Liver Fuction Test
                </p>
                <Image width={290} src={img3} />
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Pre Test Information
                  </p>
                  <p className="text-left text-lg ">
                    No special preparation is required for this test.
                  </p>
                </div>
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Report Delivery
                  </p>
                  <p className="text-left text-lg ">Will be assigned</p>
                </div>
                <p className="text-left text-lg font-bold">Rs.2500</p>
                <Link to="/form">
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={12} className="mt-5">
          <Col span={8}>
            <div className="border-double border-4 rounded-lg shadow-xl">
              <Card hoverable={true} bordered={true}>
                <p className="text-center font-bold text-2xl text-blue-600">
                  ANTI THYROGLOBULIN ANTIBODY TEST
                </p>
                <Image width={300} src={img4} />
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Pre Test Information
                  </p>
                  <p className="text-left text-lg ">
                    No special preparation is required for this test.
                  </p>
                </div>
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Report Delivery
                  </p>
                  <p className="text-left text-lg ">Will be assigned</p>
                </div>
                <p className="text-left text-lg font-bold">Rs.1400</p>
                <Link to="/form">
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </Col>
          <Col span={8}>
            <div className="border-double border-4 rounded-lg shadow-xl">
              <Card hoverable={true} bordered={true}>
                <p className="text-center font-bold text-2xl text-blue-600">
                  BILIRUBIN, TOTAL - SERUM Test
                </p>
                <Image width={305} src={img5} />
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Pre Test Information
                  </p>
                  <p className="text-left text-lg ">
                    No special preparation is required for this test.
                  </p>
                </div>
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Report Delivery
                  </p>
                  <p className="text-left text-lg ">Will be assigned</p>
                </div>
                <p className="text-left text-lg font-bold">Rs.2800</p>
                <Link to="/form">
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </Col>
          <Col span={8}>
            <div className="border-double border-4 rounded-lg shadow-xl">
              <Card hoverable={true} bordered={true}>
                <p className="text-center font-bold text-2xl text-blue-600">
                  COVID-19 TEST
                </p>
                <Image width={340} src={img6} />
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Pre Test Information
                  </p>
                  <p className="text-left text-lg ">
                    No special preparation is required for this test.
                  </p>
                </div>
                <div className="flex flex-col -space-y-6 ...">
                  <p className="text-left text-lg font-semibold">
                    Report Delivery
                  </p>
                  <p className="text-left text-lg ">Will be assigned</p>
                </div>
                <p className="text-left text-lg font-bold">Rs.1800</p>
                <Link to="/form">
                  <Button type="primary" block>
                    Book Now
                  </Button>
                </Link>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
