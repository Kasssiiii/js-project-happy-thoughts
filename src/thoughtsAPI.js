// original Technigo API without user authentication
//const APIUri = "https://happy-thoughts-api-4ful.onrender.com";

// my API with user authentication
//const APIUri = "https://js-project-api-vj6h.onrender.com";
const APIUri = "http://localhost:8080";

const getResponse = async (path, params, body, response) => {
  try {
    if (body) {
      params.body = JSON.stringify(body);
      params.headers = {
        "Content-Type": "application/json",
      };
    }
    const resp = await fetch(`${APIUri}/${path}`, params);
    if (resp.ok) {
      const data = await resp.json();
      response(200, data);
    } else {
      const data = await resp.json();
      response(resp.status, { error: data });
    }
  } catch (error) {
    response(500, { error: error });
  }
};

export const getLatest = (response) => {
  getResponse("thoughts", {}, null, response);
};

export const sendPost = (text, response) => {
  const body = {
    message: text,
  };
  const params = {
    method: "POST",
  };
  getResponse("thoughts", params, body, response);
};

export const likePost = (id, response) => {
  const params = {
    method: "POST",
  };
  getResponse(`thoughts/${id}/like`, params, null, response);
};
