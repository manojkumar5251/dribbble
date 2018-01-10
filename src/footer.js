import React from "react";
import { Col, Row } from "react-bootstrap";

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div
					style={{
						backgroundColor: "rgba(255,255,255,0.85)",
						paddingBottom: "25px",
					}}>
					<div className="">
						<div className="row-eq-height" style={{ paddingLeft: "15px" }}>
							<Col lg={3}>
								<img src="./img/footer.png" width={80} height={20} />
								<h1
									style={{
										fontSize: "14px",
										fontWeight: "900",
										color: "#999",
									}}>
									Show and tell for designers
								</h1>
								<p
									style={{
										color: "#999",
									}}>
									What are you working on? Dribbble is a community of designers
									sharing screenshots of their work, process, and projects.
								</p>
								<br />
								<br />
								<div className="row-eq-height">
									<Col lg={2} style={{ paddingRight: "35px" }}>
										<img
											src="./img/a.png"
											style={{ opacity: "0.3" }}
											width={24}
											height={24}
										/>
									</Col>
									<Col lg={2} style={{ paddingRight: "35px" }}>
										<img
											src="./img/b.png"
											style={{ opacity: "0.3" }}
											width={24}
											height={24}
										/>
									</Col>
									<Col lg={2} style={{ paddingRight: "35px" }}>
										<img
											src="./img/c.png"
											style={{ opacity: "0.3" }}
											width={24}
											height={24}
										/>
									</Col>
									<Col lg={2} style={{ paddingRight: "35px" }}>
										<img
											src="./img/d.png"
											style={{ opacity: "0.3" }}
											width={24}
											height={24}
										/>
									</Col>
									<Col lg={2} style={{ paddingRight: "35px" }}>
										<img
											src="./img/e.png"
											style={{ opacity: "0.3" }}
											width={24}
											height={24}
										/>
									</Col>
								</div>
							</Col>
							<div>
								<div className="row-eq-height">
									<Col lg={1}>
										<h5
											style={{
												fontWeight: "900",
												color: "#999",
											}}>
											Dribbble
										</h5>

										<p style={{ color: "#999" }}>About</p>
										<p style={{ color: "#999" }}>Help</p>
										<p style={{ color: "#999" }}>Contact</p>
										<p style={{ color: "#999" }}>Careers</p>
										<p style={{ color: "#999" }}>Terms</p>
										<p style={{ color: "#999" }}>Guidelines</p>
										<p style={{ color: "#999" }}>Privacy</p>
									</Col>
									<Col lg={1} style={{ marginTop: "35px" }}>
										<p style={{ color: "#999" }}>Shop</p>
										<p style={{ color: "#999" }}>Testimonials</p>
										<p style={{ color: "#999" }}>Brands</p>
										<p style={{ color: "#999" }}>Advertise</p>
										<p style={{ color: "#999" }}>API</p>
										<p style={{ color: "#999" }}>Integrations</p>
										<p style={{ color: "#999" }}>IOS app</p>
									</Col>
								</div>
							</div>
							<Col lg={2}>
								<h5
									style={{
										fontWeight: "900",
										color: "#999",
									}}>
									Hiring at Dribbble
								</h5>
								<p style={{ color: "#999" }}>Post a job</p>
								<p style={{ color: "#999" }}>Scout designers</p>
								<p style={{ color: "#999" }}>Add your team</p>
								<p style={{ color: "#999" }}>
									<img src="./img/ico.png" height={15} width={15} />
									<span style={{ paddingLeft: "5px" }}>
										Crew: Hire freelancers
									</span>
								</p>
							</Col>
							<Col lg={2}>
								<h5
									style={{
										fontWeight: "900",
										color: "#999",
									}}>
									Jobs for Designers
								</h5>
								<div className="">
									{" "}
									<Col lg={2} style={{ paddingTop: "10px" }}>
										<img src="./img/1.png" height={30} width={30} />
									</Col>
									<Col lg={10}>
										<h4
											style={{
												fontSize: "15px",
												color: "#3a8bbb",
												fontWeight: "900",
												paddingLeft: "10px",
											}}>
											Loco2
										</h4>
										<h5
											style={{
												fontSize: "12px",
												paddingLeft: "10px",
												color: "#999",
											}}>
											Product/UX designer
										</h5>
									</Col>
								</div>
								<div className="">
									{" "}
									<Col lg={2}>
										{" "}
										<img
											style={{ borderRadius: "15px", paddingTop: "10px" }}
											src="./img/2.png"
											height={30}
											width={30}
										/>
									</Col>
									<Col lg={10}>
										<h4
											style={{
												fontSize: "15px",
												color: "#3a8bbb",
												fontWeight: "900",
												paddingLeft: "10px",
											}}>
											ueno
										</h4>
										<h5
											style={{
												fontSize: "12px",
												paddingLeft: "10px",
												color: "#999",
											}}>
											Art Director
										</h5>
									</Col>
								</div>
								<div className="">
									{" "}
									<Col lg={2}>
										{" "}
										<img
											style={{ borderRadius: "15px", paddingTop: "10px" }}
											src="./img/3.png"
											height={30}
											width={30}
										/>
									</Col>
									<Col lg={10}>
										<h4
											style={{
												fontSize: "15px",
												color: "#3a8bbb",
												fontWeight: "900",
												paddingLeft: "10px",
											}}>
											Oxygen
										</h4>
										<h5
											style={{
												fontSize: "12px",
												paddingLeft: "10px",
												color: "#999",
											}}>
											OxygenApp.com Website , Redesign
										</h5>
									</Col>
								</div>
							</Col>
							<Col lg={3}>
								<Col lg={2}>
									{" "}
									<img src="./img/5.png" style={{}} />
								</Col>
								<Col lg={10}>
									<h4
										style={{
											fontSize: "20px",
											color: "#333",
											fontWeight: "930",
											paddingLeft: "8px",
										}}>
										906,277,183,134
									</h4>
									<h5
										style={{
											fontSize: "15px",
											paddingLeft: "8px",
											color: "#999",
											fontWeight: "900",
										}}>
										pixels dribbbled
									</h5>
								</Col>
							</Col>
							<hr style={{ width: "100%", borderColor: "#fff" }} />
							<Col lg={12}>
								<p
									style={{
										fontSize: "13px",
										fontWeight: "100",
										color: "#999",
									}}>
									We’re Tiny along with{" "}
									<a
										style={{
											color: "#999",
											textDecoration: "none",
											fontWeight: "900",
											cursor: "pointer",
										}}>
										Designer News
									</a>,<a
										style={{
											color: "#999",
											textDecoration: "none",
											fontWeight: "900",
											cursor: "pointer",
										}}>
										{" "}
										Crew
									</a>,<a
										style={{
											color: "#999",
											textDecoration: "none",
											fontWeight: "900",
											cursor: "pointer",
										}}>
										{" "}
										MetaLab
									</a>,<a
										style={{
											color: "#999",
											textDecoration: "none",
											fontWeight: "900",
											cursor: "pointer",
										}}>
										{" "}
										Flow
									</a>,<a
										style={{
											color: "#999",
											textDecoration: "none",
											fontWeight: "900",
											cursor: "pointer",
										}}>
										{" "}
										Pixel Union
									</a>,<a
										style={{
											color: "#999",
											textDecoration: "none",
											fontWeight: "900",
											cursor: "pointer",
										}}>
										{" "}
										We Work Remotely
									</a>{" "}
									and more. © 2018 Dribbble. All rights reserved.
								</p>
							</Col>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Footer;
