# Network Class Documentation

-- Ipv4Addr
-- IpEndpoint
-- TcpSocket



# Ipv4Addr Class Documentation

The `Ipv4Addr` class represents an IPv4 address consisting of four octets.

## Public Constructors

### new

Initializes a new instance of the `Ipv4Addr` class with the specified octets.

#### Syntax

```vein
auto ipAddr = new Ipv4Addr(a1, a2, a3, a4);
```

#### Parameters

- `a1` (u8): The first octet of the IPv4 address.
- `a2` (u8): The second octet of the IPv4 address.
- `a3` (u8): The third octet of the IPv4 address.
- `a4` (u8): The fourth octet of the IPv4 address.

#### Example

```vein
auto ipAddr = new Ipv4Addr(192, 168, 1, 1);
```

# IpEndpoint Class Documentation

The `IpEndpoint` class represents an endpoint in a network which consists of an IP address and a port number.

## Public Constructors

### new

Initializes a new instance of the `IpEndpoint` class with the specified address and port.

#### Syntax

```vein
auto endpoint = new IpEndpoint(addr, port);
```

#### Parameters

- `addr` (Ipv4Addr): The IP address of the endpoint.
- `port` (u16): The port number of the endpoint.

#### Example

```vein
auto ipAddr = new Ipv4Addr(192, 168, 1, 1);
auto endpoint = new IpEndpoint(ipAddr, 8080);
```

# TcpSocket Class Documentation

The `TcpSocket` class provides methods for creating, binding, listening, accepting, and managing TCP sockets.

## Public Static Methods

### Create

Creates a new `TcpSocket` for the specified endpoint.

#### Syntax

```vein
auto socket = TcpSocket.Create(endpoint);
```

#### Parameters

- `endpoint` (IpEndpoint): The endpoint to create the socket for.

#### Returns

- `TcpSocket`: The created TCP socket.

#### Example

```vein
auto ipAddr = new Ipv4Addr(192, 168, 1, 1);
auto endpoint = new IpEndpoint(ipAddr, 8080);
auto socket = TcpSocket.Create(endpoint);
```

## Public Methods

### bind

Binds the socket to the specified endpoint.

#### Syntax

```vein
auto success = socket.bind();
```

#### Returns

- `boolean`: `true` if the socket is successfully bound, otherwise `false`.

#### Example

```vein
auto success = socket.bind();
```

### listen

Listens for incoming connections on the socket with a specified backlog.

#### Syntax

```vein
auto success = socket.listen(backlog, fn);
```

#### Parameters

- `backlog` (i32): The maximum length of the queue of pending connections.
- `fn` (Function): The callback function to execute when a connection is accepted.

#### Returns

- `boolean`: `true` if the socket starts listening successfully, otherwise `false`.

#### Example

```vein
auto success = socket.listen(10, () => {
    // handle incoming connection
});
```

### accept

Accepts a connection on the specified handle and assigns read and write functions.

#### Syntax

```vein
socket.accept(handle, read, write);
```

#### Parameters

- `handle` (raw): The handle of the connection.
- `read` (Function): The function to read from the connection.
- `write` (Function): The function to write to the connection.

#### Example

```vein
socket.accept(handle, (data) => {
    // handle read data
}, (data) => {
    // handle write data
});
```

### write

Writes data to the specified handle.

#### Syntax

```vein
socket.write(handle, req, cb);
```

#### Parameters

- `handle` (raw): The handle of the connection.
- `req` (raw): The data to write.
- `cb` (Function): The callback function to execute after the write operation.

#### Example

```vein
socket.write(handle, requestData, () => {
    // handle write callback
});
```

### read

Reads data from the specified handle.

#### Syntax

```vein
socket.read(handle, resp, cb);
```

#### Parameters

- `handle` (raw): The handle of the connection.
- `resp` (raw): The buffer to store the read data.
- `cb` (Function): The callback function to execute after the read operation.

#### Example

```vein
socket.read(handle, responseData, () => {
    // handle read callback
});
```

### keepAlive

Configures keep-alive packets for the socket.

#### Syntax

```vein
socket.keepAlive(enable, delay);
```

#### Parameters

- `enable` (bool): `true` to enable keep-alive packets, otherwise `false`.
- `delay` (u32): The interval, in milliseconds, between keep-alive packets.

#### Example

```vein
socket.keepAlive(true, 10000); // Enable keep-alive with a 10-second delay
```

### isReadable

Checks if the specified handle is readable.

#### Syntax

```vein
auto readable = socket.isReadable(handle);
```

#### Parameters

- `handle` (raw): The handle of the connection.

#### Returns

- `boolean`: `true` if the handle is readable, otherwise `false`.

#### Example

```vein
auto readable = socket.isReadable(handle);
```

### isWritable

Checks if the specified handle is writable.

#### Syntax

```vein
auto writable = socket.isWritable(handle);
```

#### Parameters

- `handle` (raw): The handle of the connection.

#### Returns

- `boolean`: `true` if the handle is writable, otherwise `false`.

#### Example

```vein
auto writable = socket.isWritable(handle);
```

### isClosing

Checks if the specified handle is closing.

#### Syntax

```vein
auto closing = socket.isClosing(handle);
```

#### Parameters

- `handle` (raw): The handle of the connection.

#### Returns

- `boolean`: `true` if the handle is closing, otherwise `false`.

#### Example

```vein
auto closing = socket.isClosing(handle);
```

## Examples

### Basic Usage

#### Creating and Binding a TCP Socket

```vein
auto ipAddr = new Ipv4Addr(192, 168, 1, 1);
auto endpoint = new IpEndpoint(ipAddr, 8080);
auto socket = TcpSocket.Create(endpoint);

if (socket.bind()) {
    console.log("Socket successfully bound.");
} else {
    console.log("Failed to bind socket.");
}
```

#### Listening for Incoming Connections

```vein
if (socket.listen(10, () => {
    console.log("Connection accepted.");
})) {
    console.log("Socket is listening for connections.");
} else {
    console.log("Failed to listen on socket.");
}
```

#### Accepting, Reading, and Writing Data

```vein
socket.accept(handle, (data) => {
    console.log("Received data: " + data);
}, (data) => {
    console.log("Sending data: " + data);
    socket.write(handle, data, () => {
        console.log("Data sent.");
    });
});
```

## Conclusion

The `TcpSocket` class provides a comprehensive interface for working with TCP sockets, enabling you to create, bind, listen, accept, read, write, and manage network connections. By utilizing its methods, you can handle TCP communications effectively in your applications.