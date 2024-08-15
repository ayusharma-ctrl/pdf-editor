const loadButton = document.getElementById('load-btn');
const saveButton = document.getElementById('save-btn');
const pdfContainer = document.getElementById('pdf-container');
let pdfDoc;

// fetch pdf file from backend server and render it on page
loadButton.addEventListener('click', async () => {
    try {
        // GET Api Request to get the file
        const response = await fetch('http://localhost:3004/v1/pdf', {
            method: 'GET',
            headers: {
                'x-app-secret': 'APP510N56M'
            }
        });

        const pdfBytes = await response.arrayBuffer(); // convert file data to buffer
        pdfDoc = await PDFLib.PDFDocument.load(pdfBytes); // pdf-lib method to create pdf document
        const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true }); // we need url to pass in src
        const embed = `<embed src="${pdfDataUri}" type="application/pdf" width="100%" height="600px"/>`; // embed element to render pdf
        pdfContainer.innerHTML = embed; // insert embed element to div
    } catch (error) {
        console.log(error);
    }
});

// track the changes made in pdf file and save
saveButton.addEventListener('click', async () => {
    try {
        const pdfBytes = await pdfDoc.save(); // save the modified PDF after user interaction
        const formData = new FormData(); // create form instance
        formData.append('file', new Blob([pdfBytes], { type: 'application/pdf' })); // append pdf data to form

        // POST Api call to backend server
        await fetch('http://localhost:3004/v1/pdf/save', {
            method: 'POST',
            headers: {
                'x-app-secret': 'APP510N56M'
            },
            body: formData,
        });

        alert('Note: Could not find any opensource library to track what users type directly into the form fields of the PDF. We can manually modify the text-fields, however do not have direct access to the typed content.');
    } catch (error) {
        console.log(error);
    }
});
