import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// This is a utility function to generate a PDF from HTML content
export const generatePDF = async (elementId: string, filename: string) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Element not found');
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${filename}.pdf`);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};

// Function to create a downloadable whitepaper PDF
export const createWhitepaperPDF = async () => {
  // This would be replaced with actual whitepaper content
  // For now, we'll create a simple PDF with placeholder text
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(24);
  doc.text('RISE OF TRASH WHITEPAPER', 105, 20, { align: 'center' });
  
  // Add subtitle
  doc.setFontSize(16);
  doc.text('Turning Scams Into Justice, Empowering Web3 Victims', 105, 30, { align: 'center' });
  
  // Add content
  doc.setFontSize(12);
  doc.text('This is a placeholder for the Rise of Trash whitepaper content.', 20, 50);
  doc.text('The full whitepaper will be available once the contract address is finalized.', 20, 60);
  
  // Save the PDF
  doc.save('rise-of-trash-whitepaper.pdf');
  return true;
};

const pdfUtils = {
  generatePDF,
  createWhitepaperPDF,
};

export default pdfUtils;
