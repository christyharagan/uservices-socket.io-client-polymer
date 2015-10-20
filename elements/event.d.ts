export interface Event extends polymer.Base {
    serviceName: string;
    methodName: string;
    args: any[];
    socket: SocketIOClient.Socket;
    isCompleted: boolean;
    result: any;
    error: any;
}
