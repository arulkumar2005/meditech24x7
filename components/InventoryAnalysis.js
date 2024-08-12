// src/components/InventoryAnalysis.js
import React from 'react';
import { Pie, Bar, Line, Radar } from 'react-chartjs-2';
import { Table, Card, Col, Row } from 'react-bootstrap';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, LineElement, PointElement, RadarController, CategoryScale, LinearScale, RadialLinearScale } from 'chart.js';
import './InventoryAnalysis.css';
import Navbar from './Navbar';

// Register necessary components
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, LineElement, PointElement, RadarController, CategoryScale, LinearScale, RadialLinearScale);

const InventoryAnalysis = () => {
  // Sample data for pie chart
  const pieData = {
    labels: ['Visitors', 'Sales', 'Subscribers', 'Orders'],
    datasets: [
      {
        label: 'Overview',
        data: [3000, 1500, 800, 1200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Options for pie chart
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
  };

  // Sample data for bar chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [200, 300, 250, 400, 350, 500],
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: '#36A2EB',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  // Options for bar chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Sample data for line chart
  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Revenue',
        data: [1200, 1500, 1800, 2000],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF6384',
        borderWidth: 2,
        pointRadius: 5,
        tension: 0.1,
      },
    ],
  };

  // Options for line chart
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  // Sample data for radar chart
  const radarData = {
    labels: ['Quality', 'Price', 'Durability', 'Design', 'Support'],
    datasets: [
      {
        label: 'Customer Feedback',
        data: [4, 3.5, 4.5, 4, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: '#36A2EB',
        borderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // Options for radar chart
  const radarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      radar: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="inventory-analysis">
        <Navbar/>
      <h2 className="title">Analysis</h2>
      <div className="analysis-statement">
        <p>
          Our analysis provides a comprehensive view of the key metrics for your business. 
          The pie chart shows the distribution of various aspects such as visitors, sales, 
          subscribers, and orders. The bar chart illustrates sales performance over time, 
          while the line chart highlights weekly revenue trends. The radar chart captures 
          customer feedback across different criteria.
        </p>
      </div>
      <Row className="charts-container">
        <Col xs={12} sm={6} md={3} className="chart-col">
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Pie data={pieData} options={pieOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="chart-col">
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Sales Over Time</Card.Title>
              <Bar data={barData} options={barOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="chart-col">
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Weekly Revenue</Card.Title>
              <Line data={lineData} options={lineOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} className="chart-col">
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Customer Feedback</Card.Title>
              <Radar data={radarData} options={radarOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="details-container">
        <Col xs={12} sm={6} md={4} className="details-col">
          <Card className="details-card">
            <Card.Body>
              <Card.Title>Top Products</Card.Title>
              <Table striped bordered hover size="sm" className="details-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Sales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product A</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Product B</td>
                    <td>450</td>
                  </tr>
                  <tr>
                    <td>Product C</td>
                    <td>350</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="details-col">
          <Card className="details-card">
            <Card.Body>
              <Card.Title>Monthly Growth</Card.Title>
              <Table striped bordered hover size="sm" className="details-table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Growth (%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan</td>
                    <td>+10%</td>
                  </tr>
                  <tr>
                    <td>Feb</td>
                    <td>+8%</td>
                  </tr>
                  <tr>
                    <td>Mar</td>
                    <td>+12%</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} className="details-col">
          <Card className="details-card">
            <Card.Body>
              <Card.Title>Order Status</Card.Title>
              <Table striped bordered hover size="sm" className="details-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Completed</td>
                    <td>800</td>
                  </tr>
                  <tr>
                    <td>Pending</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Cancelled</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InventoryAnalysis;
