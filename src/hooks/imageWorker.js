self.onmessage = async function (e) {
    const { imageUrl, quality } = e.data;

    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        // console.log('Fetched Blob:', blob); // Log the fetched blob

        const imageBitmap = await createImageBitmap(blob);

        const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imageBitmap, 0, 0);

        const optimizedBlob = await canvas.convertToBlob({ type: 'image/avif', quality });
        // console.log('Optimized Blob:', optimizedBlob); // Log the optimized blob

        const optimizedUrl = URL.createObjectURL(optimizedBlob);
        // console.log('Optimized Blob URL:', optimizedUrl); // Log the Blob URL

        self.postMessage(optimizedUrl);
    } catch (error) {
        console.error('Error optimizing image:', error);
        self.postMessage(null);
    }
};
