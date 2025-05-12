function downloadCV() {
    // Sample CV file URL (replace this with your actual file path)
    const cvFile = 'https://www.sample-videos.com/pdf/Sample-PDF-5mb.pdf'; 
    
    // Create a link element
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Peter_Adelekan_CV.pdf'; // The name the CV will have when downloaded
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Remove the link after triggering the download
    document.body.removeChild(link);
}
