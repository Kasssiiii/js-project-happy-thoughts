// original Technigo API without user authentication
//const APIUri = "https://happy-thoughts-api-4ful.onrender.com";

// my API with user authentication
//const APIUri = "https://js-project-api-vj6h.onrender.com";
const APIUri = "http://localhost:8080";

const getResponse = async (path, params, body, authorization, response) => {
  try {
    params.headers = {};
    if (body) {
      params.body = JSON.stringify(body);
      params.headers["Content-Type"] = "application/json";
    }
    if (authorization) {
      params.headers.Authorization = authorization;
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
  getResponse("thoughts", {}, null, null, response);
};

export const sendPost = (text, token, response) => {
  const body = {
    message: text,
  };
  const params = {
    method: "POST",
  };
  getResponse("thoughts", params, body, token, response);
};

export const likePost = (id, response) => {
  const params = {
    method: "POST",
  };
  getResponse(`thoughts/${id}/like`, params, null, null, response);
};

export const loginUser = (username, password, response) => {
  const body = {
    userName: username,
    password: password,
  };
  const params = {
    method: "POST",
  };
  getResponse(`users/${username}`, params, body, null, response);
};

export const registerUser = (username, password, response) => {
  const body = {
    user: username,
    password: password,
  };
  const params = {
    method: "POST",
  };
  getResponse(`users`, params, body, null, response);
};

export const deletePost = (id, token, response) => {
  console.log("Delete post, token:", token);
  const params = {
    method: "DELETE",
  };
  getResponse(`thoughts/${id}`, params, null, token, response);
};

export const editPost = (id, text, token, response) => {
  // todo check working
};
