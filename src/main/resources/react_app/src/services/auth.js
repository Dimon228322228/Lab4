import {api} from "./api";
export const authApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation({
            query: (credentials) => ({
                url: "auth/login",
                method: "POST",
                body: credentials
            }),
            invalidatesTags: (result, error) => error ? [] : ["Auth"]
        }),
        register: build.mutation({
            query: (request) => ({
                url: "/auth/register",
                method: "POST",
                body: request
            })
        }),
        logout: build.mutation({
            query: (userId) => ({
                url: `/user/id/${userId}/logout`,
                method: "POST"
            }),
            invalidatesTags: ["Auth"]
        }),
        usernameExists: build.query({
            query: username => ({
                url: `/auth/exists/${username}`
            })
        }),
        getCurrentUser: build.query({
            query: () => ({
                url: "/users/current",
                validateStatus: (response, result) => response.status==200
            }),
            providesTags: ["Auth"]
        })
    })
});

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUsernameExistQuery, useGetCurrentUserQuery} = authApi