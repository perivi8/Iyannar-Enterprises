interface QuoteData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  vehicleType: string;
  pickupLocation: string;
  deliveryLocation: string;
  pickupDate: string;
  deliveryDate: string;
  cargoType: string;
  weight: string;
  dimensions: string;
  value: string;
  insurance: boolean;
  packaging: boolean;
  loading: boolean;
  tracking: boolean;
  specialRequirements: string;
  urgency: string;
  quoteId: string;
  submittedAt: string;
}

export const generateQuotePDF = (quoteData: QuoteData) => {
  // Calculate estimated cost
  const calculateEstimatedCost = () => {
    let baseCost = 5000;
    
    const vehicleMultipliers: { [key: string]: number } = {
      'mini-truck': 1,
      'medium-truck': 1.5,
      'heavy-truck': 2.5,
      'trailer': 4,
      'container': 3.5,
      'refrigerated': 3
    };
    
    const urgencyMultipliers: { [key: string]: number } = {
      'standard': 1,
      'express': 1.5,
      'urgent': 2
    };
    
    baseCost *= vehicleMultipliers[quoteData.vehicleType] || 1;
    baseCost *= urgencyMultipliers[quoteData.urgency] || 1;
    
    if (quoteData.insurance) baseCost += 1000;
    if (quoteData.packaging) baseCost += 500;
    if (quoteData.loading) baseCost += 800;
    if (quoteData.tracking) baseCost += 300;
    
    return baseCost.toLocaleString('en-IN');
  };

  const formatFieldName = (field: string) => {
    return field.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Create HTML content for PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Quote Receipt - ${quoteData.quoteId}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #1e40af;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .company-name {
          font-size: 28px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 5px;
        }
        .company-tagline {
          color: #666;
          font-size: 14px;
        }
        .quote-info {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          border-left: 4px solid #10b981;
        }
        .quote-id {
          font-size: 24px;
          font-weight: bold;
          color: #10b981;
          margin-bottom: 10px;
        }
        .section {
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 18px;
          font-weight: bold;
          color: #1e40af;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 10px;
          margin-bottom: 15px;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 20px;
        }
        .info-item {
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
          color: #374151;
          margin-bottom: 5px;
        }
        .value {
          color: #6b7280;
        }
        .cost-section {
          background: #ecfdf5;
          padding: 20px;
          border-radius: 8px;
          border: 2px solid #10b981;
          text-align: center;
        }
        .estimated-cost {
          font-size: 32px;
          font-weight: bold;
          color: #059669;
          margin-bottom: 10px;
        }
        .cost-note {
          color: #6b7280;
          font-size: 12px;
        }
        .services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .service-badge {
          background: #dbeafe;
          color: #1e40af;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 12px;
        }
        .contact-info {
          margin-top: 20px;
        }
        .status-badge {
          background: #fef3c7;
          color: #92400e;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
        }
        @media print {
          body { margin: 0; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company-name">Iyannar Enterprises</div>
        <div class="company-tagline">Professional Transport & Logistics Services</div>
        <div class="company-tagline">Salem, Tamil Nadu | +91 98765 43210</div>
      </div>

      <div class="quote-info">
        <div class="quote-id">Quote ID: ${quoteData.quoteId}</div>
        <div>Generated: ${quoteData.submittedAt}</div>
        <div style="margin-top: 10px;">
          <span class="status-badge">Status: Under Review</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="label">Name:</div>
            <div class="value">${quoteData.name}</div>
          </div>
          <div class="info-item">
            <div class="label">Email:</div>
            <div class="value">${quoteData.email}</div>
          </div>
          <div class="info-item">
            <div class="label">Phone:</div>
            <div class="value">${quoteData.phone}</div>
          </div>
          ${quoteData.company ? `
          <div class="info-item">
            <div class="label">Company:</div>
            <div class="value">${quoteData.company}</div>
          </div>
          ` : ''}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Service Details</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="label">Service Type:</div>
            <div class="value">${formatFieldName(quoteData.serviceType)}</div>
          </div>
          <div class="info-item">
            <div class="label">Vehicle Type:</div>
            <div class="value">${formatFieldName(quoteData.vehicleType)}</div>
          </div>
          <div class="info-item">
            <div class="label">Cargo Type:</div>
            <div class="value">${formatFieldName(quoteData.cargoType)}</div>
          </div>
          <div class="info-item">
            <div class="label">Urgency:</div>
            <div class="value">${formatFieldName(quoteData.urgency)}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Shipment Details</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="label">Pickup Location:</div>
            <div class="value">${quoteData.pickupLocation}</div>
          </div>
          <div class="info-item">
            <div class="label">Delivery Location:</div>
            <div class="value">${quoteData.deliveryLocation}</div>
          </div>
          <div class="info-item">
            <div class="label">Pickup Date:</div>
            <div class="value">${quoteData.pickupDate}</div>
          </div>
          ${quoteData.deliveryDate ? `
          <div class="info-item">
            <div class="label">Delivery Date:</div>
            <div class="value">${quoteData.deliveryDate}</div>
          </div>
          ` : ''}
        </div>
        
        ${quoteData.weight || quoteData.dimensions || quoteData.value ? `
        <div class="info-grid">
          ${quoteData.weight ? `
          <div class="info-item">
            <div class="label">Weight:</div>
            <div class="value">${quoteData.weight} kg</div>
          </div>
          ` : ''}
          ${quoteData.dimensions ? `
          <div class="info-item">
            <div class="label">Dimensions:</div>
            <div class="value">${quoteData.dimensions} cm</div>
          </div>
          ` : ''}
          ${quoteData.value ? `
          <div class="info-item">
            <div class="label">Cargo Value:</div>
            <div class="value">₹${quoteData.value}</div>
          </div>
          ` : ''}
        </div>
        ` : ''}
      </div>

      ${(quoteData.insurance || quoteData.packaging || quoteData.loading || quoteData.tracking) ? `
      <div class="section">
        <div class="section-title">Additional Services</div>
        <div class="services-list">
          ${quoteData.insurance ? '<span class="service-badge">Cargo Insurance</span>' : ''}
          ${quoteData.packaging ? '<span class="service-badge">Packaging Services</span>' : ''}
          ${quoteData.loading ? '<span class="service-badge">Loading/Unloading</span>' : ''}
          ${quoteData.tracking ? '<span class="service-badge">Real-time Tracking</span>' : ''}
        </div>
      </div>
      ` : ''}

      ${quoteData.specialRequirements ? `
      <div class="section">
        <div class="section-title">Special Requirements</div>
        <div class="value">${quoteData.specialRequirements}</div>
      </div>
      ` : ''}

      <div class="section">
        <div class="section-title">Estimated Cost</div>
        <div class="cost-section">
          <div class="estimated-cost">₹${calculateEstimatedCost()}</div>
          <div class="cost-note">*This is a preliminary estimate. Final quote will be provided by our team within 24 hours.</div>
        </div>
      </div>

      <div class="footer">
        <div><strong>Next Steps:</strong></div>
        <div>1. Our team will review your request within 2 hours</div>
        <div>2. You'll receive a detailed quotation within 24 hours</div>
        <div>3. Approve the quote and schedule your service</div>
        
        <div class="contact-info">
          <div><strong>Contact Us:</strong></div>
          <div>Phone: +91 98765 43210 | Email: quotes@iyannar.com</div>
          <div>Address: Salem, Tamil Nadu, India</div>
        </div>
        
        <div style="margin-top: 20px;">
          <div>© 2024 Iyannar Enterprises. All rights reserved.</div>
          <div>Professional Transport & Logistics Services</div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Create a new window and print
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };
  } else {
    // Fallback: create a blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Quote-${quoteData.quoteId}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};
