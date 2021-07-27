export const saveMarkers = async (newMarkers) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Save markers successfully', newMarkers);
      resolve();
    }, 50);
  });
};
