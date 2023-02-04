export class RequestHandler {
    static async getData( params ){
        const URLParams = new URLSearchParams({
            x: params.get('x'),
            y: params.get('y'),
            r: params.get('r')
        });
        return fetch( "controller?" + URLParams).then( response => {
            if (response.ok) return response.json()} );
    }
}