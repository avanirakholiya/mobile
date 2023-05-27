import React from 'react';
import {Link} from 'react-router-dom'
import './home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

 export default function Header() { 
    return (
        <>
        <div idName="topline">
			<div className="row g-0">
				<div className="col">
					<div className="one">
					</div>
				</div>
				<div className="col">
					<div className="two">
					</div>
				</div>
				<div className="col">
					<div className="three">
					</div>
				</div>
				<div className="col">
					<div className="four">
					</div>
				</div>
				<div className="col">
					<div className="five">
					</div>
				</div>
				<div className="col">
					<div className="six">
					</div>
				</div>
			</div>
		</div>
        <div className="logoarea">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-md-1">
						<a href="#" className="logo">
							<img src="images/mob.jpg" alt="" height="150px" />
						</a>
					</div>
					<div className="col-md-7">
						<div className="row contactdetails">
							<div className="col-md-6 d-flex">
								<div className="icon">
                                <i class="bi bi-phone"></i>
								</div>
								<div className="content">
									<h2>+91 88665 56688</h2>
									<p>CALL US TODAY</p>
								</div>
							</div>
							<div className="col-md-6 d-flex">
								<div className="icon">
                                <i class="bi bi-envelope"></i>
								</div>
								<div className="content">
									<h2>Mobileclub9@gmail.com</h2>
									<p>GET IN TOUCH WITH EMAIL</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
            <div className='menu'>
                <div className='container'>
                    <ul>
                        <li>
                            <Link to='/home'>Home </Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/product'>Product</Link>
                        </li>
                        <li>
                            <Link to='/contactus'>ContactUs</Link>
                        </li>
                        <li>
                            <Link to='/'>Login</Link>
                        </li>
						<li style={{paddingLeft:"550px"}}>
						<Link to='/'>Logout</Link>
						</li>
                    </ul>
					
                </div>
            </div>
        </>
      )
     }
