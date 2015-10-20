Polymer({
    is: 'uservices-method',
    properties: {
        serviceName: String,
        methodName: String,
        args: Array,
        result: {
            type: Object,
            readOnly: true,
            notify: true
        },
        error: {
            type: Object,
            readOnly: true,
            notify: true
        }
    },
    observers: [
        'onArgs(args)',
        'onMethodName(methodName)',
        'onServiceName(serviceName)'
    ],
    onArgs: function (n, o) {
        this.call();
    },
    onMethodName: function (n, o) {
        this.call();
    },
    onServiceName: function (n, o) {
        this.call();
    },
    call: function () {
        var self = this;
        if (self.socket && self.args && self.serviceName && self.methodName) {
            var name = self.serviceName + '/' + self.methodName;
            self.socket.emit(name, self.args, function (result, error) {
                if (error) {
                    self.notifyPath('error', error);
                }
                else {
                    self.notifyPath('result', result);
                }
            });
        }
    },
    ready: function () {
        this.socket = io();
        this.call();
    },
    detatched: function () {
        this.socket.off();
    }
});
//# sourceMappingURL=method.js.map