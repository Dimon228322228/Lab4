import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query"
import {API_BASE_PATH} from "../util/constants";

const baseQuery = fetchBaseQuery(
    {baseUrl: API_BASE_PATH}
);

const baseQueryWithAuthError = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption);
    if (result.error && result.error.status === 401) window.location.replace("/login");
    return result;
};

export const api = createApi({
    baseQuery: baseQueryWithAuthError,
    tagTypes: ["HitResults", "Auth"],
    endpoints: (build) => ({})
})
