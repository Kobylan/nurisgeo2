import React from "react"
import { Row, Col } from "reactstrap"
import "./App.css"
import SalesCard from "./SalesCard"
import SupportTracker from "./analytics/SupportTracker"
import ProductOrders from "./analytics/ProductOrders"
import SalesStat from "./analytics/Sales"
import "./assets/scss/pages/dashboard-analytics.scss"
import "./assets/scss/plugins/extensions/maps.scss"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"

import MapBasic from "./maps/MapsBasic";
import MapGif from "./maps/MapGif";

let $primary = "#7367F0",
    $danger = "#EA5455",
    $warning = "#FF9F43",
    $info = "#00cfe8",
    $primary_light = "#9c8cfc",
    $warning_light = "#FFC085",
    $danger_light = "#f29292",
    $info_light = "#1edec5",
    $stroke_color = "#e8e8e8",
    $label_color = "#e7eef7",
    $white = "#fff"


class AnalyticsDashboard extends React.Component {
  render() {


    return (

        <React.Fragment>
          <Row className="match-height">
            <Col md="12" sm="12">
              <SalesCard labelColor={$label_color} primary={$primary} />
            </Col>

          </Row>
          <Row className="match-height">
            <Col lg="4">
              <ProductOrders
                  primary={$primary}
                  warning={$warning}
                  danger={$danger}
                  primaryLight={$primary_light}
                  warningLight={$warning_light}
                  dangerLight={$danger_light}
              />
            </Col>
            <Col lg="3">
              <SalesStat
                  strokeColor={$stroke_color}
                  infoLight={$info_light}
                  primary={$primary}
                  info={$info}
              />
            </Col>
            <Col md="5" sm="12">
              <SupportTracker
                  primary={$primary}
                  danger={$danger}
                  white={$white}
              />
            </Col>

          </Row>

          <Row className="macth-height">
            <Col sm="12">
              <MapBasic />

            </Col>
            <Col sm="12">
              <MapGif />

            </Col>
          </Row>



        </React.Fragment>

    )
  }
}



export default AnalyticsDashboard
