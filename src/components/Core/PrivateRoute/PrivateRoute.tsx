import React, {useState, useEffect, ReactNode} from "react"
// @ts-ignore
import {Redirect, Route, RouteComponentProps, RouteProps} from "react-router-dom";
import {Auth} from 'aws-amplify';
import routes from "../../../config/routes";

type RouteComponent = React.FunctionComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

export const PrivateRoute: React.FunctionComponent<RouteProps> = ({component, ...rest}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    useEffect(() => {
        (async () => {
            let user = null;

            try {
                user = await Auth.currentAuthenticatedUser()
                setIsAuthenticated(!!user);
            } catch (e) {
                setIsAuthenticated(false);
            }
        })();
    }, []);
    const renderFn = (Component?: RouteComponent | any) => (props: RouteProps) => {
        if (!Component) {
            return null
        }

        if (isAuthenticated) {
            return <Component {...props} />
        }

        const redirectProps = {
            to: {
                pathname: routes.AUTH.path,
                state: {from: props.location},
            },
        }

        return <Redirect {...redirectProps} />
    }

    return <Route {...rest} render={renderFn(component)}/>
}