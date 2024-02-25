import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";

export const ErrorPage = () => {
    const error = useRouteError() as Error;
    console.error(error);

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
        <>
            <h1>
                This my error page
            </h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    )
};