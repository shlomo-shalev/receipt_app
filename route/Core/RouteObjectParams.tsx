export default interface RouteObjectParams {
    name?: string;
    prefix?: string;
    path?: string;
    method?: 'GET' | 'POST' | 'PATH' | 'PUT' | 'DELETE';
    component?: (props: Object) => JSX.Element;
}