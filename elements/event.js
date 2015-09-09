Polymer({
  is: 'uservices-event',
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
    },

    isCompleted: {
      type: Boolean,
      readOnly: true,
      notify: true
    }
  },

  observers: [
    'onArgs(args)',
    'onMethodName(methodName)',
    'onServiceName(serviceName)'
  ],
  onArgs: function(n, o) {
    this.call()
  },
  onMethodName: function(n, o) {
    this.call()
  },
  onServiceName: function(n, o) {
    this.call()
  },

  call: function() {
    var self = this
    if (this.socket && this.args && this.serviceName && this.methodName) {
      var name = this.serviceName + '/' + this.methodName
      this.socket.emit(name, this.args, function(id) {
        self.socket.on(name + id, function(v) {
          var value = v[0]
          var error = v[1]
          var completed = v[2]
          if (completed) {
            self.isCompleted = true
            self.notifyPath('isCompleted', true)
          } else if (error) {
            self.error = error
            self.notifyPath('error', error)
          } else {
            self.result = value
            self.notifyPath('result', value)
          }
        })
        self.socket.emit(name + id, true)
      })
    }
  },

  ready: function() {
    this.socket = io()
    this.call()
  },

  detatched: function() {
    this.socket.off()
  }
})
