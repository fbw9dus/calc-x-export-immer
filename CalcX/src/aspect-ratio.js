function calculateAspectRatio(originalWidth, originalHeight, newValues, target) {
    let resultWidth = newValues[0];
    let resultHeight = newValues[1];
  
    if ((originalWidth > 0) && (originalHeight > 0)) {
        newValues.forEach(newValue => {
            if ((newValue.classList.contains("height")) && newValue == target) {
                console.log("height changed", newValue.value)
                return resultWidth.value = ((originalWidth / originalHeight) * newValue.value).toFixed(2);
                
            } else if ((newValue.classList.contains("width")) && newValue == target) {
                console.log("width changed", newValue.value)
                newValue.style.outline = "pink";
                return resultHeight.value = ((originalHeight / originalWidth) * newValue.value).toFixed(2);
            }
        })
    }
}

export {calculateAspectRatio}