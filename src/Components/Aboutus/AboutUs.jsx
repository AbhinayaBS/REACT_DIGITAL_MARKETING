// AboutUs.js

import React from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import "./Aboutus.css"

const AboutUs = () => {
  return (
    <div id="about">
    <Container className="about-us-container">
      <Card className="card">
        <CardContent className="card-content">
          <Typography variant="h2" gutterBottom className="digix-text">
            Digix
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Digix, your partner in digital marketing success. We are dedicated to helping businesses thrive in the digital landscape by providing innovative and effective marketing solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to empower businesses with the tools and strategies needed to navigate and excel in the online world.
          </Typography>
          <Typography variant="body1" paragraph>
            Connect with us on social media to stay updated and engaged:
          </Typography>
          <div className="social-icons">
            <Button component="a" href="https://www.facebook.com/digix" target="_blank" rel="noopener noreferrer">
              <Facebook fontSize="large" />
            </Button>
            <Button component="a" href="https://www.twitter.com/digix" target="_blank" rel="noopener noreferrer">
              <Twitter fontSize="large" />
            </Button>
            <Button component="a" href="https://www.instagram.com/digix" target="_blank" rel="noopener noreferrer">
              <Instagram fontSize="large" />
            </Button>
            <Button component="a" href="https://www.linkedin.com/company/digix" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="large" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
    </div>
  );
};

export default AboutUs;
