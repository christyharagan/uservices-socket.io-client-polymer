export interface Method extends polymer.Base {
    serviceName: string;
    methodName: string;
    args: any[];
    socket: SocketIOClient.Socket;
    result: any;
    error: any;
}
