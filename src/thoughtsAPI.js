const APIUri = "https://happy-thoughts-api-4ful.onrender.com";

const getResponse = async (path, data, response) => {
  try {
    const resp = await fetch(`${APIUri}/${path}`, data ? { body: data } : {});
    if (resp.ok) {
      data = await resp.json();
      response(200, data);
    } else {
      response(resp.status, { error: "Server error" });
    }
  } catch (error) {
    response(500, { error: error });
  }
};

export const getLatest = (response) => {
  getResponse("thoughts", null, response);
};
