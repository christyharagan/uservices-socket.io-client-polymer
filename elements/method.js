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
  onArgs(n, o) {
    this.call()
  },
  onMethodName(n, o) {
    this.call()
  },
  onServiceName(n, o) {
    this.call()
  },

  call() {
    var self = this
    if (this.socket && this.args && this.serviceName && this.methodName) {
      var name = this.serviceName + '/' + this.methodName
      this.socket.emit(name, this.args, function(result, error) {
        if (error) {
          self.notifyPath('error', error)
        } else {
          self.notifyPath('result', result)
        }
      })
    }
  },

  ready() {
    this.socket = io()
    this.call()
  },

  detatched() {
    this.socket.off()
  }
})
