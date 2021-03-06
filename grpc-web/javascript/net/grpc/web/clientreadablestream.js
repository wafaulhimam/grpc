/**
 *
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/**
 * @fileoverview gRPC web client Readable Stream
 *
 * This class is being returned after a gRPC streaming call has been
 * started. This class provides functionality for user to operates on
 * the stream, e.g. set onData callback, etc.
 *
 * This wraps the underlying goog.net.streams.NodeReadableStream
 *
 * @author stanleycheung@google.com (Stanley Cheung)
 */
goog.module('grpc.web.ClientReadableStream');

goog.module.declareLegacyNamespace();



/**
 * A stream that the client can read from. Used for calls that are streaming
 * from the server side.
 *
 * @template RESPONSE
 * @interface
 */
const ClientReadableStream = function() {};


/**
 * Register a callback to handle different stream events.
 *
 * Available event types for gRPC-Web:
 * 'data': The 'data' event is emitted when a new response message chunk is
 * received and successfully handled by gRPC-Web client.
 * 'status': the google RPC status of the response stream.
 * 'end': The 'end' event is emitted when all the data have been successfully
 * consumed from the stream.
 * 'error': typically, this may occur when an  underlying internal failure
 * happens, or a stream implementation attempts to push an invalid chunk of
 * data.
 * 'metadata': the response metadata. Response headers should be read via
 * 'metadata' callbacks.
 *
 * For server-streaming calls. the 'data' and 'status' callbacks (if exist)
 * will always precede 'metadata', 'error', or 'end' callbacks.
 *
 * @param {string} eventType The event type
 * @param {function(?)} callback The callback to handle the event with
 * an optional input object
 * @return {!ClientReadableStream} this object
 */
ClientReadableStream.prototype.on = goog.abstractMethod;



/**
 * Remove a particular callback.
 *
 * @param {string} eventType The event type
 * @param {function(?)} callback The callback to remove
 * @return {!ClientReadableStream} this object
 */
ClientReadableStream.prototype.removeListener = goog.abstractMethod;



/**
 * Close the stream.
 */
ClientReadableStream.prototype.cancel = goog.abstractMethod;



exports = ClientReadableStream;
