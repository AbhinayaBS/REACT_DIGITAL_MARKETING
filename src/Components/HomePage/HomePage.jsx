// HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <section className="about-us">
        <Card className="about-card">
          <CardContent>
            
            <div className="text">
              <Typography variant="h2">Welcome</Typography>
              <Typography variant="h4">India's Most-loved</Typography>
              <Typography variant="h4">Digital Marketing App</Typography>
              <Typography variant="body1">
                Recharge & pay bills, book flights & movie tickets,
                open a savings account, invest in stocks & mutual funds, and do a lot more.
              </Typography>
              <div className="data">
                <Typography>
                  <b>Hey not yet joined</b>
                </Typography>
                <Button variant="contained" className="hire">
                  <Link className="SigninForm" to={'/SigninForm'}><b>GET STARTED ⫸</b></Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <Link to="#" className="social-icon">
            <Facebook />
          </Link>
          <Link to="#" className="social-icon">
            <Twitter />
          </Link>
          <Link to="#" className="social-icon">
            <Instagram />
          </Link>
          <Link to="#" className="social-icon">
            <LinkedIn />
          </Link>
        </div>
        <p>&copy; 2023 Digix. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
