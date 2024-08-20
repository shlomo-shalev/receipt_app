const prepareData = ({ data }: {data: object}): FormData|string => {
    const files = {};
    const details = {};
    const body = new FormData();
    
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const item = data[key];
            
            if(item instanceof Blob) {
                files[key] = item;
                delete data[key];
            }
            else details[key] = item;
        }
    }

    if (Object.keys(files).length > 0) {
        for (const key in files) {
            if (Object.prototype.hasOwnProperty.call(files, key)) {
                const file = files[key];
                body.append(key, file);
            }
        }
    }

    body.append('data',  JSON.stringify(data));

    return body;
}

const sendRequest = async ({ url, data, method = 'GET' }) => {
    const request = await fetch(url, {
        method,
        body: prepareData({ data }),
    });

    const headers = {};
    request.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const status = request.status;
    const requestData = await request.json();

    return {
        status,
        headers,
        data: requestData,
    }
}

export const prepareFile = async ({ url }: {url: string}) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return blob;
};

// export const get = async () => {

// };

export const post = async ({ url, data = {} }) => {
    const request = await sendRequest({
        url, 
        method: 'POST',
        data,
    });

    return request;
};

export default {
    // get,
    post,
    prepareFile,
}