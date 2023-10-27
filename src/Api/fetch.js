const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = response;
    //  error.error = response;
    throw error;
};

const parseContent = (response, options) => {
    const { requestId, payload, ...headers } = options;


    let json;

    if (headers["Content-Type"] === "blob") {
        return response.blob();
    }

    if (headers["Content-Type"] === "text/plain") {
        return response.text();
    }

    try {
        json = response.json();
    } catch (e) {
        throw new Error(e);
    }
    return json;
};

const afterFetchHandlers = {
    checkStatus,
    parseContent
}
export default afterFetchHandlers;