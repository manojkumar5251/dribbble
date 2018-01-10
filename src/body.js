import React, { Component } from "react";
import { Grid, Row, Col, Panel, ProgressBar } from "react-bootstrap";

class Body extends React.Component {
	state = { height: "300px", width: "400px" };
	zoom() {
		if (this.state.height === "300px") {
			this.setState({ height: "600px", width: "800px" });
		}
		if (this.state.height === "600px") {
			this.setState({ height: "300px", width: "400px" });
		}
	}
	render() {
		return (
			<div className="container body">
				<Grid>
					<Row style={{ paddingTop: "25px" }}>
						<Col lg={2} md={2} />
						<Col
							lg={5}
							md={5}
							style={{
								position: "relative",
								marginBottom: "30px",
								paddingLeft: "60px",
								minHeight: "48px",
							}}>
							<img
								style={{
									position: "absolute",
									top: "0px",
									left: "0",
									width: "48px",
									height: "48px",
								}}
								src="https://cdn.dribbble.com/users/834691/avatars/small/9006fd85d117c7d3bc8a9e949dc01fcb.png?1430481893"
							/>
							<h1
								style={{
									margin: 0,
									padding: 0,
									fontSize: "20px",
									fontWeight: "500",
									lineHeight: "1.5",
								}}>
								Animation Cryptocurrency Marketplace (Light)
							</h1>
							<h2 style={{ fontSize: "14px", marginTop: "2px", color: "#999" }}>
								<span>
									<span>
										by <a href="#">Ron Design</a>
									</span>
								</span>
								<span>
									{" "}
									on{" "}
									<a style={{ color: "#999" }} href="#">
										Nov 28, 2017
									</a>
								</span>
							</h2>
						</Col>
					</Row>

					<Row className="main">
						<Col lg={2} md={2} />
						<Col lg={5} md={5}>
							<div className="image-div">
								<img
									style={{
										maxWidth: this.state.width,
										maxHeight: this.state.height,
									}}
									onClick={this.zoom.bind(this)}
									src="https://cdn.dribbble.com/users/834691/screenshots/3978177/crypto_dashboard.gif"
								/>
							</div>
							<div>
								<p style={{ fontSize: "17px" }}>
									It’s a platform destined for keeping up-to-date information
									about all your accounts on other crypto platforms and managing
									them.
								</p>

								<p style={{ fontSize: "17px" }}>
									<strong>We're available for new projects</strong> - <a />
									<a href="#">ron.e@rondesignlab.com</a>
								</p>
							</div>

							<div className="response">
								<h2 style={{ fontSize: "19px", marginBottom: "-20px" }}>
									7 Responses
								</h2>
								<div className="timing">
									<a href="#">oldest</a>
									<a href="#">newest</a>
									<a href="#">liked</a>
								</div>

								<ul style={{ marginTop: "30px" }}>
									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/1256118/avatars/small/2c8e4297c8b557a67df3e57e2c908d8c.jpg?1505983286"
												/>
												Gray
											</a>
										</h2>

										<div>
											<p>Well done! Come to check my works if you want ✌🏻</p>
										</div>

										<span>
											<a className="like" href="#">
												1
											</a>
											<span>likes</span>
										</span>

										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>

									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/1998175/avatars/small/60949d14e713cce13f445e4e94432c47.jpg?1512579655"
												/>
												Taras Migulko
											</a>
										</h2>
										<div>
											<p>
												Great colors and idea on your dashboard. Really love it!
												Thanks for publishing it
											</p>
										</div>
										<span>
											<a className="like" href="#">
												1
											</a>
											<span>likes</span>
										</span>
										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>

									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/25514/avatars/small/070810be04e642201206c8fbdffcbf8a.png?1455536235"
												/>
												Ramotion
											</a>
										</h2>
										<div>
											<p>
												Looks cool, love how clean it is, prototype overall is
												also nicely done and executed. Good job{" "}
												<a href="#">@Ron Design</a>{" "}
											</p>
										</div>
										<span>
											<a className="like" href="#">
												1
											</a>
											<span>likes</span>
										</span>
										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>

									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/32742/avatars/small/1442487eec674feb1b3ca30a8984eb4e.png?1446548820"
												/>
												Epic Coders 🚀
											</a>
										</h2>
										<div>
											<p>
												<a href="#">@Ron Design</a>
												well executed. Is this being developed by someone or is
												it just a concept?
											</p>
										</div>
										<span />
										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>

									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/589030/avatars/small/f28e9ceb03843b534035380076a24107.png?1515390876"
												/>
												Med Badr Chemmaoui
											</a>
										</h2>
										<div>
											<p>amazing work my friend!</p>
										</div>
										<span />
										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>

									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/1751027/avatars/small/adc62518b5f62703e4971fcff15a0eb4.jpg?1506574140"
												/>
												Rasika Warnasuriya
											</a>
										</h2>
										<div>
											<p>Nice work.!</p>
										</div>
										<span />
										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>

									<li className="list">
										<h2>
											<a href="#">
												<img
													className="thumb-image"
													src="https://cdn.dribbble.com/users/1333064/avatars/small/7660c95c80ce9f341df7f7db574bb24c.png?1488144609"
												/>{" "}
												Dimitris Chronopoulos
											</a>
										</h2>
										<div>
											<p>Love it!</p>
										</div>
										<span />
										<p>
											<a className="post" href="#">
												about 1 month ago
											</a>
										</p>
									</li>
								</ul>
							</div>
						</Col>
						<Col lg={3} md={3}>
							<div
								style={{ paddingBottom: 5, borderBottom: "1px solid #9d9d9d" }}>
								<h5 className="tag">
									<i style={{ paddingRight: "5px" }} className="fa fa-heart" />Like
									<span className="pull-right">233 likes</span>{" "}
								</h5>
							</div>
							<div
								style={{
									paddingBottom: 5,
									borderBottom: "1px solid #9d9d9d",
									marginBottom: 10,
								}}>
								<h5 className="tag">
									<i style={{ paddingRight: "5px" }} className="fa fa-share" />
									Like
									<span className="pull-right">233 likes</span>{" "}
								</h5>
							</div>

							<div className="row">
								<i
									style={{ paddingLeft: 15, fontSize: "20px" }}
									className="fa fa-tint tag"
								/>
								<div
									className="pull-right"
									style={{ width: "80%", paddingTop: 5 }}>
									<ProgressBar>
										<ProgressBar striped bsStyle="success" now={35} key={1} />
										<ProgressBar bsStyle="warning" now={20} key={2} />
										<ProgressBar active bsStyle="danger" now={20} key={3} />
										<ProgressBar active bsStyle="warning" now={25} key={3} />
									</ProgressBar>
								</div>
							</div>

							<div>
								<h4>
									More from Ron Design{" "}
									<span
										style={{
											border: "1px solid #ddd",
											padding: "0 3px",
											background: "#ddd",
										}}
										className="pull-right tag">
										&#43;
									</span>
								</h4>
							</div>

							<div className="">
								<Col xs={6}>
									<img
										style={{ paddingBottom: "18px" }}
										className="img-responsive"
										src="https://cdn.dribbble.com/users/834691/screenshots/4078298/app_workflow_teaser.gif"
									/>
								</Col>
								<Col xs={6}>
									<img
										style={{ paddingBottom: "18px" }}
										className="img-responsive"
										src="https://cdn.dribbble.com/users/1129214/screenshots/4048229/comp_13_teaser.gif"
									/>
								</Col>
								<Col xs={6}>
									<img
										style={{ paddingBottom: "18px" }}
										className="img-responsive"
										src="https://cdn.dribbble.com/users/77531/screenshots/4004391/preview_8_teaser.gif"
									/>
								</Col>
								<Col xs={6}>
									<img
										style={{ paddingBottom: "18px" }}
										className="img-responsive"
										src="https://cdn.dribbble.com/users/834691/screenshots/3916216/furniture_shop_teaser.gif"
									/>
								</Col>
							</div>

							<h4>Tags</h4>
							<h5>
								<span className="tag">bitcoin,</span>
								<span className="tag">blockchain,</span>
								<span className="tag">crypto</span>
							</h5>
							<h5>
								<span className="tag">cryptocurrency,</span>
								<span className="tag">data,</span>
								<span className="tag">ico</span>
							</h5>
							<h5>
								<span className="tag">bitcoin,</span>
								<span className="tag">blockchain</span>
								<span className="tag">crypto</span>
							</h5>
						</Col>
					</Row>
					<Row>
						<center className="keyboard">
							<p>
								keyboard shortcuts:
								<span>
									<strong>L</strong> or <strong>F</strong> like
								</span>
								<span>
									<strong>Z</strong> toggle zoom
								</span>
							</p>
						</center>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Body;
