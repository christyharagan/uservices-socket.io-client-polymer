Micro (u)Services - Polymer Custom Element for Socket.IO Client Proxies
==

Overview
--
A polymer custom element to easily consume remote proxies of [uServices](https://github.com/christyharagan/uservices) via socket.io.

Usage
--

Install:
```
npm install uservices-socket.io-client-polymer
```

Basic Usage: (see the uServices project for examples on how to create a uService spec)

```Html

<!-- Consume a method -->
<uservices-method service-name="{{serviceName}}" method-name="{{methdName}}" args="{{methodArgs}}" result="{{methodResults}}"></uservices-inject>
<uservices-event service-name="{{serviceName}}" method-name="{{eventName}}" args="{{eventArgs}}" result="{{eventUpdates}}"></uservices-inject>

```
