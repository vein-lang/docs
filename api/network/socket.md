# SocketServer and SocketClient <Badge type="warning" text="experimental" /> 

## Abstract Class: `SocketServer`

The `SocketServer` class provides the foundation for creating TCP socket servers. The `SocketClient` class handles interactions with connected clients.     
Implement the `onConnected` and `onRead` methods in derived classes to handle client connections and data reads.    

### Properties

#### `server_handle`

```vein
private server_handle: raw;
```

**Description:**

The handle to the server socket.

#### `_endpoint`

```vein
private _endpoint: IpEndpoint;
```

**Description:**

The endpoint on which the server is bound.

### Methods

#### `start`

```vein
start(endpoint: IpEndpoint): void
```

**Description:**

Starts the server on the given IP endpoint.

**Parameters:**

- `endpoint` (_IpEndpoint_): The IP endpoint to bind the server to.

**Example:**

```vein
server.start(new IpEndpoint("127.0.0.1", 8080));
```

### Abstract Methods

#### `onConnected`

```vein
abstract onConnected(client: SocketClient): void;
```

**Description:**

Called when a client connects to the server. Must be implemented in derived classes.

#### `onRead`

```vein
abstract onRead(client: SocketClient, writer: StreamWriter, reader: StreamReader): void;
```

**Description:**

Called when data is read from a client. Must be implemented in derived classes.

### Private Methods

#### `_internal_onConnection`

```vein
private _internal_onConnection(sr: raw, status: i32): void
```

**Description:**

Internal method for handling new connections. Not intended for public use.

### Native Methods

#### `init_server_handle`

```vein
[native("__internal__", "socket_init_server_handle")]
private static extern init_server_handle(): raw;
```

**Description:**

Initializes the server handle. Not intended for public use.

#### `tcp_bind_handle`

```vein
[native("__internal__", "socket_tcp_bind_handle")]
private static extern tcp_bind_handle(server: raw, endpoint: IpEndpoint): void;
```

**Description:**

Binds the server to the given IP endpoint. Not intended for public use.

#### `tcp_listen_handle`

```vein
[native("__internal__", "socket_tcp_bind_handle")]
private static extern tcp_listen_handle(server: raw, nap: i32, fn: rawOnServerConnection): void;
```

**Description:**

Listens for new connections. Not intended for public use.

## Alias: `rawOnServerConnection`

```vein
alias rawOnServerConnection <| (sr: raw, status: i32): void;
```

**Description:**

Alias for the connection callback function.

## Class: `SocketClient`

The `SocketClient` class provides functionality for interacting with connected clients from the server.

### Properties

#### `_handle`

```vein
private _handle: raw;
```

**Description:**

The handle to the client socket.

#### `_server`

```vein
private _server: SocketServer;
```

**Description:**

The server that the client is connected to.

### Constructor

#### `new`

```vein
new(server: SocketServer)
```

**Description:**

Constructs a new `SocketClient` object and associates it with a `SocketServer`.

**Parameters:**

- `server` (_SocketServer_): The server to associate with the client.

### Methods

#### `accept`

```vein
public accept(server: SocketServer): bool
```

**Description:**

Accepts a connection from the server.

**Parameters:**

- `server` (_SocketServer_): The server accepting the connection.

**Returns:**

- (_bool_): `true` if the connection was successful, `false` otherwise.

**Example:**

```vein
if (client.accept(server)) {
    // Connection successful
}
```

### Private Methods

#### `_internal_onRead`

```vein
private _internal_onRead(stream: raw, nread: i32, buf: raw): void
```

**Description:**

Internal method called when data is read from the client. Not intended for public use.

### Native Methods

#### `tcp_init_handle`

```vein
[native("__internal__", "socket_tcp_init_handle")]
private static extern tcp_init_handle(): raw;
```

**Description:**

Initializes the client handle. Not intended for public use.

#### `socket_accept_handle`

```vein
[native("__internal__", "socket_accept_handle")]
private static extern socket_accept_handle(client: raw, server: raw): i32;
```

**Description:**

Accepts a connection. Not intended for public use.

#### `socket_read_start`

```vein
[native("__internal__", "socket_read_start")]
private static extern socket_read_start(client: raw, callback: rawOnReadStart): i32;
```

**Description:**

Starts reading from the socket. Not intended for public use.

#### `socket_create_stream_reader`

```vein
[native("__internal__", "socket_create_stream_reader")]
private static extern socket_create_stream_reader(nread: i32, buf: raw): StreamReader;
```

**Description:**

Creates a stream reader. Not intended for public use.

#### `socket_create_network_stream_writer`

```vein
[native("__internal__", "socket_create_network_stream_writer")]
private static extern socket_create_network_stream_writer(stream: raw): StreamWriter;
```

**Description:**

Creates a network stream writer. Not intended for public use.

## Alias: `rawOnReadStart`

```vein
alias rawOnReadStart <| (stream: raw, nread: i32, buf: raw): void;
```

**Description:**

Alias for the read start callback function.

## Example Usage

### Implementing a Custom SocketServer

```vein
public class MySocketServer : SocketServer {
    override onConnected(client: SocketClient): void {
        Out.println("Client connected!");
        // Initialize client
    }

    override onRead(client: SocketClient, writer: StreamWriter, reader: StreamReader): void {
        // Handle client data
        auto data = reader.read();
        Out.println("Received data: " + data);
        writer.write("Response boba");
    }
}

auto server = new MySocketServer();
server.start(new IpEndpoint("127.0.0.1", 8080));
```

### Using SocketClient

```vein
auto client = new SocketClient(server);
if (client.accept(server)) {
    Out.println("Client accepted connection");
}
```