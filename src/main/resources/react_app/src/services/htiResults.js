import {api} from "./api";

export const hitResultApi = api.injectEndpoints({
    endpoints: build => ({
        shoot: build.mutation({
            query: (choice) => ({
                url: "/areacheck/shoot",
                method: "POST",
                body: choice
            }),
            invalidatesTags: ["HitResult"]
        }),
        clear: build.mutation({
            query: (userId) => ({
                url: `/users/id/${userId}/hitResults/clear`,
                method: "POST"
            }),
            invalidatesTags: ["HitResults"]
        }),
        hitResults: build.query({
            query: (userId) => ({
                url: `/users/id/${userId}/hitResults`,
                responseHandler: (response) => {
                    return response.text().then(value => {
                        const userHitResultsDtoList = JSON.parse(value);
                        return userHitResultsDtoList._embedded.userHitResultDtoList;
                    })
                }
            }),
            providesTags: ["HitResults"]
        }),
        hitResultPage: build.query({
            query: ({userId, page, size}) => ({
                url: `/users/id/${userId}/hitResults/page/${page}/${size}`
            }),
            providesTags: ['HitResults']
        })
    })
});

export const {useShootMutation, useClearMutation, useHitResultsQuery, useHitResultPageQuery} = hitResultApi