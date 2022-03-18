

export const formateData = (responseData) => {
    let data=responseData||[];
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (i + 1 < data.length) {
            result = [...result, data.splice(i, i + 1)]
        } else {
            result = [...result, data.splice(i)]
        }
    }

    return result.reverse();
}