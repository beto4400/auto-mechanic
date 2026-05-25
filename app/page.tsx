'use client';

import { Phone, MapPin, Clock, CheckCircle, Star, Wrench, Zap, Shield } from 'lucide-react';

export default function AutoFixPro() {
  return (
    <div style={{ background: '#f8f9fa' }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        background: 'white',
        borderBottom: '1px solid #e0e0e0',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#c41e3a' }}>AutoFix Pro</h1>
        <a href="tel:6085559876" style={{
          background: '#c41e3a',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontWeight: 600,
          fontSize: '0.95rem'
        }}>Call Now</a>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem' }}>
          Expert Auto Repair You Can Trust
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2rem' }}>
          ASE-certified technicians. Honest pricing. Fast, reliable service for all makes and models.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:6085559876" style={{
            background: '#c41e3a',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem'
          }}>Schedule Appointment</a>
          <a href="#services" style={{
            border: '2px solid white',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '1rem'
          }}>Our Services</a>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        padding: '2rem',
        background: 'white',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Shield style={{ width: '2.5rem', height: '2.5rem', color: '#c41e3a', margin: '0 auto 0.5rem' }} />
          <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>ASE Certified</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Master technicians</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Wrench style={{ width: '2.5rem', height: '2.5rem', color: '#c41e3a', margin: '0 auto 0.5rem' }} />
          <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>State-of-the-Art</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Modern diagnostics</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <CheckCircle style={{ width: '2.5rem', height: '2.5rem', color: '#c41e3a', margin: '0 auto 0.5rem' }} />
          <h3 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Warranty Honored</h3>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>All parts & labor</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          Comprehensive Auto Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Engine & Transmission', desc: 'Diagnostics, repair, rebuild. All major systems covered.' },
            { title: 'Brake Service', desc: 'Pads, rotors, fluid, ABS systems. Safety first.' },
            { title: 'Oil & Filter Changes', desc: 'Regular maintenance. Keep your engine running clean.' },
            { title: 'Battery & Electrical', desc: 'Starting, charging, lighting. Complete electrical service.' },
            { title: 'Suspension & Steering', desc: 'Alignments, springs, shocks. Smooth rides guaranteed.' },
            { title: 'Air Conditioning', desc: 'Service, recharge, repair. Stay cool year-round.' }
          ].map((service, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0e0e0'
            }}>
              <Wrench style={{ width: '1.5rem', height: '1.5rem', color: '#c41e3a', marginBottom: '0.5rem' }} />
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{service.title}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '3rem 2rem', background: 'white', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          Competitive Rates
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Oil Change', price: '$39', desc: '5-quart synthetic + filter' },
            { name: 'Tire Rotation', price: '$45', desc: 'All 4 wheels balanced' },
            { name: 'Brake Pads', price: '$149', desc: 'Per axle, parts & labor' },
            { name: 'Engine Diagnostic', price: '$89', desc: 'Full computer scan' },
            { name: 'Alignment', price: '$99', desc: '4-wheel alignment' },
            { name: 'Battery', price: '$159+', desc: 'Installation included' }
          ].map((pkg, i) => (
            <div key={i} style={{
              background: '#f8f9fa',
              padding: '2rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0e0e0',
              textAlign: 'center'
            }}>
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>{pkg.name}</h3>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#c41e3a', marginBottom: '0.5rem' }}>{pkg.price}</div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>{pkg.desc}</p>
              <button style={{
                background: '#c41e3a',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%'
              }}>Get Service</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          Happy Customers
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Tom R.', text: 'Honest, knowledgeable, and fair pricing. Been going to AutoFix for 5 years. Highly recommended.' },
            { name: 'Lisa C.', text: 'They found the problem my other mechanic missed. Professional service. Will definitely return.' },
            { name: 'Carlos M.', text: 'Fast turnaround on my engine work. They explained everything clearly. Great experience.' }
          ].map((testimonial, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '0.5rem',
              border: '1px solid #e0e0e0'
            }}>
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} style={{ width: '1rem', height: '1rem', fill: '#ffd700', color: '#ffd700' }} />
                ))}
              </div>
              <p style={{ marginBottom: '1rem', color: '#333' }}>&ldquo;{testimonial.text}&rdquo;</p>
              <p style={{ fontWeight: 600, color: '#c41e3a' }}>— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)',
        color: 'white',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Drive with Confidence
        </h2>
        <p style={{ fontSize: '1.05rem', marginBottom: '2rem', opacity: 0.95 }}>
          ASE-certified service. Transparent pricing. Warranty on all work.
        </p>
        <a href="tel:6085559876" style={{
          background: '#c41e3a',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          fontWeight: 700,
          textDecoration: 'none',
          fontSize: '1.05rem',
          display: 'inline-block'
        }}>Call (608) 555-9876 Today</a>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a',
        color: 'white',
        padding: '2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
          maxWidth: '900px',
          margin: '0 auto 2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Phone style={{ width: '1.2rem', height: '1.2rem' }} />
              <span style={{ fontWeight: 600 }}>(608) 555-9876</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Monday–Saturday, 7 AM–6 PM</p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <MapPin style={{ width: '1.2rem', height: '1.2rem' }} />
              <span style={{ fontWeight: 600 }}>Madison, WI</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>2847 Atwood Ave</p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <CheckCircle style={{ width: '1.2rem', height: '1.2rem' }} />
              <span style={{ fontWeight: 600 }}>ASE Certified</span>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>All makes & models</p>
          </div>
        </div>
        <p style={{ borderTop: '1px solid #333', paddingTop: '2rem', fontSize: '0.9rem', opacity: 0.7, textAlign: 'center' }}>
          © 2026 AutoFix Pro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
