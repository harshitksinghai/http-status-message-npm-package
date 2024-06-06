export const messages = {
    100: {
        "formal": "Continue: The server has received the request headers and the client should proceed to send the request body.",
        "informal": "We've received the initial request. You can now proceed to send the rest!",
        "straightforward": "Continue: You can continue with sending the request body.",
        "technical": "100 Continue: The server has received the request headers and the client should proceed to send the request body.",
        "funny": "Hold on! We're ready for more. It's like pressing play on your favorite show!",
        "empathetic": "Your request headers have been received. We're ready whenever you are.",
        "educational": "HTTP 100 Continue indicates that the server is ready to receive the request body after receiving the headers."
    },
    101: {
        "formal": "Switching Protocols: The server is switching protocols according to the Upgrade header.",
        "informal": "We're changing the way we talk. Time to switch it up!",
        "straightforward": "Switching Protocols: We're changing communication protocols.",
        "technical": "101 Switching Protocols: The server is switching protocols according to the Upgrade header.",
        "funny": "We're upgrading our communication! Time to speak a new language!",
        "empathetic": "We're transitioning to a different protocol. Change can be refreshing!",
        "educational": "HTTP 101 Switching Protocols indicates that the server is changing protocols as specified by the client via the Upgrade header."
    },
    102: {
        "formal": "Processing: The server has received and is processing the request, but no response is available yet.",
        "informal": "We're working on it! Your request is in progress.",
        "straightforward": "Processing: Request received, still being processed.",
        "technical": "102 Processing: The server has received and is processing the request, but no response is available yet.",
        "funny": "Our team is on it! Your request is in the oven, baking to perfection!",
        "empathetic": "Your request is being processed. We'll let you know when it's ready!",
        "educational": "HTTP 102 Processing indicates that the server has received and is processing the request, but no response is available yet."
    },
    103: {
        "formal": "Early Hints: Used to return some response headers before final HTTP message.",
        "informal": "Here's a little preview! More details coming soon.",
        "straightforward": "Early Hints: Returning some response headers early.",
        "technical": "103 Early Hints: Used to return some response headers before final HTTP message.",
        "funny": "Consider this a sneak peek! The full response is on its way!",
        "empathetic": "We're giving you a hint of what's to come. Patience is key!",
        "educational": "HTTP 103 Early Hints is used to return some response headers before the final HTTP message, allowing the client to start processing resources while the server is still preparing the response."
    },
    200: {
        "formal": "The request has succeeded.",
        "informal": "Everything's good!",
        "straightforward": "Success.",
        "technical": "200 OK: The request has succeeded.",
        "funny": "Hooray! It's all good, folks!",
        "empathetic": "We understand the importance of your request and are pleased to confirm its success.",
        "educational": "Status code 200 indicates that the request was successful and the server has responded as expected."
    },
    201: {
        "formal": "The request has been fulfilled and resulted in a new resource being created.",
        "informal": "Done! New resource created.",
        "straightforward": "Resource created.",
        "technical": "201 Created: The request has been fulfilled and resulted in a new resource being created.",
        "funny": "Ta-da! A new resource has magically appeared!",
        "empathetic": "Congratulations! Your request has been fulfilled, and a new resource has been created.",
        "educational": "Status code 201 indicates that the server has successfully fulfilled the request and created a new resource."
    },
    202: {
        "formal": "The request has been accepted for processing, but the processing has not been completed.",
        "informal": "Got it! Processing...",
        "straightforward": "Request accepted for processing.",
        "technical": "202 Accepted: The request has been accepted for processing, but the processing has not been completed.",
        "funny": "Hold your horses! Processing is underway, but not quite done yet!",
        "empathetic": "Your request has been acknowledged and is currently being processed. Please be patient.",
        "educational": "Status code 202 indicates that the server has accepted the request for processing, but the processing has not yet been completed."
    },
    203: {
        "formal": "The server successfully processed the request, but is returning information from another source.",
        "informal": "All good, but info's from elsewhere.",
        "straightforward": "Request processed, but data from another source.",
        "technical": "203 Non-Authoritative Information: The server successfully processed the request, but is returning information from another source.",
        "funny": "You asked, we delivered! But the info's from our buddy next door.",
        "empathetic": "Your request has been processed, but the information provided comes from another source.",
        "educational": "Status code 203 indicates that the server successfully processed the request, but the information returned is from a different source."
    },
    204: {
        "formal": "The server successfully processed the request, but is not returning any content.",
        "informal": "Got it, but no content to show.",
        "straightforward": "Request processed, no content returned.",
        "technical": "204 No Content: The server successfully processed the request, but is not returning any content.",
        "funny": "Request processed, but it's like a ghost town here - no content!",
        "empathetic": "Your request has been processed, but unfortunately, no content is available at this time.",
        "educational": "Status code 204 indicates that the server successfully processed the request, but there is no content to be returned."
    },
    205: {
        "formal": "The server successfully processed the request, but is not returning any content. The user agent should reset the document view.",
        "informal": "Got it, time to refresh!",
        "straightforward": "Content reset, refresh needed.",
        "technical": "205 Reset Content: The server successfully processed the request, but is not returning any content.",
        "funny": "Refresh! Like a breath of fresh air!",
        "empathetic": "Your request has been processed, and a refresh of the document view is required.",
        "educational": "Status code 205 indicates that the server successfully processed the request, but the user agent should reset the document view."
    },
    206: {
        "formal": "The server has fulfilled the partial GET request for the resource.",
        "informal": "Got some of it! Partial content received.",
        "straightforward": "Partial content received.",
        "technical": "206 Partial Content: The server has fulfilled the partial GET request for the resource.",
        "funny": "Halfway there! We've got some content, but not the full package.",
        "empathetic": "We've received some of the requested content. Please let us know if you need further assistance.",
        "educational": "Status code 206 indicates that the server has fulfilled the partial GET request for the resource."
    },
    207: {
        "formal": "The response from the server contains multiple status codes, each with its own set of headers and body.",
        "informal": "Multi-tasking! Response has multiple status codes.",
        "straightforward": "Multiple status codes in response.",
        "technical": "207 Multi-Status: The response from the server contains multiple status codes, each with its own set of headers and body.",
        "funny": "Whoa, it's like a party! Multiple status codes in the response - they've got lots to say!",
        "empathetic": "The response contains multiple status codes, each indicating a different state. Let us know if you need clarification.",
        "educational": "Status code 207 indicates that the response from the server contains multiple status codes, each with its own set of headers and body."
    },
    208: {
        "formal": "The server has encountered a previous condition and is applying it to this current request.",
        "informal": "Déjà vu! Previous condition applied.",
        "straightforward": "Previous condition applied.",
        "technical": "208 Already Reported: The server has encountered a previous condition and is applying it to this current request.",
        "funny": "History repeats itself! Previous condition applied - it's like déjà vu!",
        "empathetic": "We've encountered a previous condition, and it's being applied to your current request.",
        "educational": "Status code 208 indicates that the server has encountered a previous condition and is applying it to this current request."
    },
    226: {
        "formal": "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
        "informal": "Mission accomplished! Representation of resource with manipulations.",
        "straightforward": "Resource representation with manipulations.",
        "technical": "226 IM Used: The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
        "funny": "Ta-da! Here's your resource, with a little extra magic - instance manipulations included!",
        "empathetic": "Your request has been fulfilled, and the response includes a representation of the resource with manipulations applied.",
        "educational": "Status code 226 indicates that the server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
    },
    300: {
        "formal": "The server has multiple options for the requested resource.",
        "informal": "Choices, choices! Multiple options available.",
        "straightforward": "Multiple options available for the requested resource.",
        "technical": "300 Multiple Choices: The server has multiple options for the requested resource.",
        "funny": "Looks like the server's throwing a party! So many options, you might need a coin toss to decide.",
        "empathetic": "We understand the importance of having options. Here are multiple choices available for the requested resource.",
        "educational": "Status code 300 indicates that the server has multiple options for the requested resource."
    },
    301: {
        "formal": "The requested resource has been permanently moved to a new location.",
        "informal": "Moved permanently! Resource's got a new address.",
        "straightforward": "Resource permanently moved.",
        "technical": "301 Moved Permanently: The requested resource has been permanently moved to a new location.",
        "funny": "Time to update your address book! The resource has packed its bags and moved permanently.",
        "empathetic": "The requested resource has been permanently relocated. We apologize for any inconvenience.",
        "educational": "Status code 301 indicates that the requested resource has been permanently moved to a new location."
    },
    302: {
        "formal": "The requested resource has been found, but it has been temporarily moved to a different location.",
        "informal": "Found it, but it's taking a detour! Temporary move.",
        "straightforward": "Resource temporarily moved.",
        "technical": "302 Found: The requested resource has been found, but it has been temporarily moved to a different location.",
        "funny": "It's a temporary relocation! The resource will be back in its old spot before you know it.",
        "empathetic": "We've located the resource, but it's temporarily moved. Hang tight!",
        "educational": "Status code 302 indicates that the requested resource has been found, but it has been temporarily moved to a different location."
    },
    303: {
        "formal": "The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.",
        "informal": "Hey, look over there! Response's moved, go get it with GET.",
        "straightforward": "Response found elsewhere, retrieve with GET.",
        "technical": "303 See Other: The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.",
        "funny": "Follow the breadcrumbs! The response is hiding elsewhere, go fetch it with a GET method.",
        "empathetic": "The response to your request is available elsewhere. We recommend retrieving it using a GET method.",
        "educational": "Status code 303 indicates that the response to the request can be found under a different URI and should be retrieved using a GET method on that resource."
    },
    304: {
        "formal": "The requested resource has not been modified since the last request. It is still valid from the server's cache.",
        "informal": "No changes here! Resource's still good from cache.",
        "straightforward": "Resource not modified, still valid from cache.",
        "technical": "304 Not Modified: The requested resource has not been modified since the last request. It is still valid from the server's cache.",
        "funny": "Same old, same old! The resource hasn't changed since you last checked. It's still lounging in the server's cache.",
        "empathetic": "The requested resource remains unchanged since your last request. It is still valid from the server's cache.",
        "educational": "Status code 304 indicates that the requested resource has not been modified since the last request and is still valid from the server's cache."
    },
    305: {
        "formal": "The requested resource must be accessed through the proxy given by the Location field.",
        "informal": "Hold up, gotta go through the proxy! Use the proxy given in the Location field.",
        "straightforward": "Access resource through the proxy specified.",
        "technical": "305 Use Proxy: The requested resource must be accessed through the proxy given by the Location field.",
        "funny": "Proxy party! Access the resource through the designated proxy. Don't worry, it'll get you where you need to go!",
        "empathetic": "Access to the requested resource is available through the specified proxy. Follow the directions provided in the Location field.",
        "educational": "Status code 305 indicates that the requested resource must be accessed through the proxy given by the Location field."
    },
    307: {
        "formal": "The requested resource has been temporarily moved to a different location, and the client should continue to use the same method for future requests.",
        "informal": "Hold your horses! Temporary move, but keep using the same method.",
        "straightforward": "Resource temporarily moved, same method should be used.",
        "technical": "307 Temporary Redirect: The requested resource has been temporarily moved to a different location, and the client should continue to use the same method for future requests.",
        "funny": "Don't change a thing! The resource is just taking a temporary vacation elsewhere, but keep using the same method for future requests.",
        "empathetic": "The requested resource has been temporarily relocated. Please continue to use the same method for future requests.",
        "educational": "Status code 307 indicates that the requested resource has been temporarily moved to a different location, and the client should continue to use the same method for future requests."
    },
    308: {
        "formal": "The requested resource has been permanently moved to a different location, and the client should use the new URI for all future requests.",
        "informal": "Permanent move! Use the new URI for future requests.",
        "straightforward": "Resource permanently moved, use new URI for future requests.",
        "technical": "308 Permanent Redirect: The requested resource has been permanently moved to a different location, and the client should use the new URI for all future requests.",
        "funny": "New digs! The resource has moved permanently. Don't forget to update your address book with the new URI.",
        "empathetic": "The requested resource has been permanently relocated. Please use the new URI for all future requests.",
        "educational": "Status code 308 indicates that the requested resource has been permanently moved to a different location, and the client should use the new URI for all future requests."
    },
    400: {
        "formal": "The server could not understand the request due to invalid syntax.",
        "informal": "Uh-oh! Server didn't get that, check your request syntax.",
        "straightforward": "Bad request. Check request syntax.",
        "technical": "400 Bad Request: The server could not understand the request due to invalid syntax.",
        "funny": "Houston, we have a problem! Looks like the server's scratching its head over your request. Syntax error!",
        "empathetic": "We're sorry, but it seems there was an issue understanding your request due to invalid syntax.",
        "educational": "Status code 400 indicates that the server could not understand the request due to invalid syntax."
    },
    401: {
        "formal": "The request requires user authentication.",
        "informal": "Hold up! Authentication required for this request.",
        "straightforward": "Unauthorized. Authentication required.",
        "technical": "401 Unauthorized: The request requires user authentication.",
        "funny": "Who goes there? This request's got a bouncer! Looks like you need to show your ID - authentication required!",
        "empathetic": "Access denied! Authentication is required to fulfill this request.",
        "educational": "Status code 401 indicates that the request requires user authentication."
    },
    402: {
        "formal": "Payment is required to fulfill the request.",
        "informal": "Oops! You gotta pay up to proceed with this request.",
        "straightforward": "Payment required to fulfill the request.",
        "technical": "402 Payment Required: Payment is required to fulfill the request.",
        "funny": "No free rides, buddy! Looks like you need to break out the wallet - payment required!",
        "empathetic": "We apologize, but payment is required to fulfill this request.",
        "educational": "Status code 402 indicates that payment is required to fulfill the request."
    },
    403: {
        "formal": "Access to the requested resource is forbidden.",
        "informal": "Sorry, you're not allowed here! Access forbidden.",
        "straightforward": "Forbidden. Access to resource denied.",
        "technical": "403 Forbidden: Access to the requested resource is forbidden.",
        "funny": "Keep out! The server's got its hands on its hips - access forbidden!",
        "empathetic": "We're sorry, but you do not have permission to access the requested resource.",
        "educational": "Status code 403 indicates that access to the requested resource is forbidden."
    },
    404: {
        "formal": "The server could not find the requested resource.",
        "informal": "Oops! Looks like the server misplaced that one. Resource not found.",
        "straightforward": "Not found. Requested resource does not exist.",
        "technical": "404 Not Found: The server could not find the requested resource.",
        "funny": "404: Resource not found. It's like searching for a needle in a haystack - server's lost it!",
        "empathetic": "We're sorry, but the requested resource could not be found.",
        "educational": "Status code 404 indicates that the server could not find the requested resource."
    },
    405: {
        "formal": "The request method is not allowed for the requested resource.",
        "informal": "Whoopsie! Wrong move. Request method not allowed.",
        "straightforward": "Method not allowed for requested resource.",
        "technical": "405 Method Not Allowed: The request method is not allowed for the requested resource.",
        "funny": "Oops! Looks like the server's playing hard to get - request method not allowed!",
        "empathetic": "We apologize, but the requested method is not allowed for this resource.",
        "educational": "Status code 405 indicates that the request method is not allowed for the requested resource."
    },
    406: {
        "formal": "The server cannot generate content that is acceptable according to the Accept headers sent in the request.",
        "informal": "No dice! Server can't provide content that meets your request criteria.",
        "straightforward": "Content not acceptable according to request headers.",
        "technical": "406 Not Acceptable: The server cannot generate content that is acceptable according to the Accept headers sent in the request.",
        "funny": "Looks like the server's got stage fright! It can't provide content that meets your fancy - not acceptable!",
        "empathetic": "We're sorry, but the server cannot generate content that meets the criteria specified in your request headers.",
        "educational": "Status code 406 indicates that the server cannot generate content that is acceptable according to the Accept headers sent in the request."
    },
    407: {
        "formal": "Proxy authentication is required to access the requested resource.",
        "informal": "Hold on, gotta check with the proxy first! Proxy authentication required.",
        "straightforward": "Proxy authentication required.",
        "technical": "407 Proxy Authentication Required: Proxy authentication is required to access the requested resource.",
        "funny": "The server's playing middleman! Looks like you need to charm the proxy with your credentials - authentication required!",
        "empathetic": "Access to the requested resource requires proxy authentication.",
        "educational": "Status code 407 indicates that proxy authentication is required to access the requested resource."
    },
    408: {
        "formal": "The server timed out waiting for the request.",
        "informal": "Whoops! Server got tired of waiting. Request timed out.",
        "straightforward": "Request timeout. Server waited too long.",
        "technical": "408 Request Timeout: The server timed out waiting for the request.",
        "funny": "Looks like the server's playing the waiting game, but it got bored! Request timed out - it's taking a coffee break!",
        "empathetic": "We apologize, but the server timed out waiting for your request.",
        "educational": "Status code 408 indicates that the server timed out waiting for the request."
    },
    409: {
        "formal": "Conflict detected. The request could not be completed due to a conflict with the current state of the resource.",
        "informal": "Uh-oh! Looks like we've got a conflict here. Can't complete the request.",
        "straightforward": "Conflict. Request could not be completed due to resource state.",
        "technical": "409 Conflict: The request could not be completed due to a conflict with the current state of the resource.",
        "funny": "Hold your horses! Looks like there's a showdown at the resource corral - can't complete the request due to a conflict!",
        "empathetic": "We apologize, but the request could not be completed due to a conflict with the current state of the resource.",
        "educational": "Status code 409 indicates that the request could not be completed due to a conflict with the current state of the resource."
    },
    410: {
        "formal": "Gone. The requested resource is no longer available and will not be available again.",
        "informal": "Oops! Looks like the resource's gone for good. It won't be back.",
        "straightforward": "Gone. Requested resource no longer available.",
        "technical": "410 Gone: The requested resource is no longer available and will not be available again.",
        "funny": "Poof! The resource has disappeared into the abyss - it's gone for good! Don't wait up!",
        "empathetic": "We regret to inform you that the requested resource is no longer available and will not be returning.",
        "educational": "Status code 410 indicates that the requested resource is no longer available and will not be available again."
    },
    411: {
        "formal": "Length required. The server requires a Content-Length header to be included in the request.",
        "informal": "Hey, don't forget the length! Server needs a Content-Length header in the request.",
        "straightforward": "Length required. Content-Length header missing.",
        "technical": "411 Length Required: The server requires a Content-Length header to be included in the request.",
        "funny": "Size matters! The server's feeling a bit picky - it needs a Content-Length header in the request!",
        "empathetic": "We kindly ask that you include a Content-Length header in your request as required by the server.",
        "educational": "Status code 411 indicates that the server requires a Content-Length header to be included in the request."
    },
    412: {
        "formal": "Precondition failed. One or more conditions specified in the request headers evaluated to false when tested on the server.",
        "informal": "Oops! Looks like the conditions weren't met. Precondition failed.",
        "straightforward": "Precondition failed. Request conditions not met.",
        "technical": "412 Precondition Failed: One or more conditions specified in the request headers evaluated to false when tested on the server.",
        "funny": "Uh-oh! Looks like the server's a stickler for conditions - they weren't met! Precondition failed!",
        "empathetic": "We regret to inform you that the request could not be fulfilled as one or more conditions specified in the request headers were not met.",
        "educational": "Status code 412 indicates that one or more conditions specified in the request headers evaluated to false when tested on the server."
    },
    413: {
        "formal": "Payload too large. The server refuses to process the request because the payload is larger than the server is willing or able to process.",
        "informal": "Whoopsie! Server's saying 'nope' to that payload - it's too big!",
        "straightforward": "Payload too large. Server can't handle it.",
        "technical": "413 Payload Too Large: The server refuses to process the request because the payload is larger than the server is willing or able to process.",
        "funny": "Hold your horses! Looks like the server's on a diet - it can't handle that payload, it's too large!",
        "empathetic": "We apologize, but the server is unable to process the request as the payload exceeds the size limit.",
        "educational": "Status code 413 indicates that the server refuses to process the request because the payload is larger than the server is willing or able to process."
    },
    414: {
        "formal": "URI too long. The server refuses to process the request because the URI is longer than the server is willing to interpret.",
        "informal": "Oops! Looks like you've hit the URL jackpot, but the server can't handle it. URI too long.",
        "straightforward": "URI too long. Server can't handle it.",
        "technical": "414 URI Too Long: The server refuses to process the request because the URI is longer than the server is willing to interpret.",
        "funny": "Whoa there! Looks like you've wandered into the URL wilderness, but the server's saying 'nope' - URI too long!",
        "empathetic": "We're sorry, but the server is unable to process the request as the URI provided is longer than what it can interpret.",
        "educational": "Status code 414 indicates that the server refuses to process the request because the URI is longer than the server is willing to interpret."
    },
    415: {
        "formal": "Unsupported media type. The server refuses to process the request because the media type is not supported.",
        "informal": "Uh-oh! The server's scratching its head - it doesn't support that media type. Unsupported media type.",
        "straightforward": "Unsupported media type. Server can't handle it.",
        "technical": "415 Unsupported Media Type: The server refuses to process the request because the media type is not supported.",
        "funny": "Oops! The server's feeling picky today - it's rejecting that media type like a picky eater! Unsupported media type.",
        "empathetic": "We apologize, but the server is unable to process the request as the media type provided is not supported.",
        "educational": "Status code 415 indicates that the server refuses to process the request because the media type is not supported."
    },
    416: {
        "formal": "Range not satisfiable. The server cannot fulfill the request because the client has asked for a portion of the file that cannot be provided.",
        "informal": "Uh-oh! Looks like you're asking for something the server can't serve up - range not satisfiable.",
        "straightforward": "Range not satisfiable. Server can't fulfill request.",
        "technical": "416 Range Not Satisfiable: The server cannot fulfill the request because the client has asked for a portion of the file that cannot be provided.",
        "funny": "Uh-oh! Looks like you're trying to slice the server's cake, but it's saying 'nope' - range not satisfiable!",
        "empathetic": "We apologize, but the server is unable to fulfill the request as the client has asked for a portion of the file that cannot be provided.",
        "educational": "Status code 416 indicates that the server cannot fulfill the request because the client has asked for a portion of the file that cannot be provided."
    },
    417: {
        "formal": "Expectation failed. The server is unable to meet the requirements specified by the Expect request header field.",
        "informal": "Whoops! The server's not meeting expectations - expectation failed.",
        "straightforward": "Expectation failed. Server unable to meet requirements.",
        "technical": "417 Expectation Failed: The server is unable to meet the requirements specified by the Expect request header field.",
        "funny": "Oops! Looks like the server's not playing by the rules - expectation failed! Better luck next time!",
        "empathetic": "We regret to inform you that the server is unable to meet the requirements specified by the Expect request header field.",
        "educational": "Status code 417 indicates that the server is unable to meet the requirements specified by the Expect request header field."
    },
    418: {
        "formal": "I'm a teapot. The server refuses to brew coffee because it is, permanently and intentionally, a teapot.",
        "informal": "Hold up! The server's got a quirky side - it's a teapot and won't brew coffee. I'm a teapot.",
        "straightforward": "I'm a teapot. Server won't brew coffee.",
        "technical": "418 I'm a Teapot: The server refuses to brew coffee because it is, permanently and intentionally, a teapot.",
        "funny": "Oops! The server's got a case of mistaken identity - it's a teapot, not a coffee maker! I'm a teapot.",
        "empathetic": "We apologize, but the server refuses to brew coffee as it is, permanently and intentionally, a teapot.",
        "educational": "Status code 418 indicates that the server refuses to brew coffee because it is, permanently and intentionally, a teapot."
    },
    421: {
        "formal": "Misdirected request. The request was directed at a server that is not able to produce a response.",
        "informal": "Oops! Looks like the request got lost on the way. Misdirected request.",
        "straightforward": "Misdirected request. Server unable to respond.",
        "technical": "421 Misdirected Request: The request was directed at a server that is not able to produce a response.",
        "funny": "Looks like the request took a wrong turn! It ended up at the wrong server - misdirected request!",
        "empathetic": "We apologize, but the request was directed at a server that is not able to produce a response.",
        "educational": "Status code 421 indicates that the request was directed at a server that is not able to produce a response."
    },
    422: {
        "formal": "Unprocessable entity. The server understands the content type of the request entity but cannot process the contained instructions.",
        "informal": "Whoops! Looks like the server can't make sense of the request. Unprocessable entity.",
        "straightforward": "Unprocessable entity. Server unable to process request.",
        "technical": "422 Unprocessable Entity: The server understands the content type of the request entity but cannot process the contained instructions.",
        "funny": "Uh-oh! Looks like the server's scratching its head - it can't process the request. Unprocessable entity!",
        "empathetic": "We apologize, but the server is unable to process the request as it cannot understand the contained instructions.",
        "educational": "Status code 422 indicates that the server understands the content type of the request entity but cannot process the contained instructions."
    },
    423: {
        "formal": "Locked. The requested resource is locked and can only be accessed by the client that locked it.",
        "informal": "Sorry! Looks like someone's got a hold on the resource. Locked.",
        "straightforward": "Resource locked. Access restricted.",
        "technical": "423 Locked: The requested resource is locked and can only be accessed by the client that locked it.",
        "funny": "Oops! Looks like someone's put a 'Do Not Disturb' sign on the resource - it's locked!",
        "empathetic": "We apologize, but the requested resource is locked and can only be accessed by the client that locked it.",
        "educational": "Status code 423 indicates that the requested resource is locked and can only be accessed by the client that locked it."
    },
    424: {
        "formal": "Failed dependency. The request failed because it depended on another request and that request failed.",
        "informal": "Uh-oh! Looks like this request's fate was tied to another request that failed. Failed dependency.",
        "straightforward": "Failed dependency. Request dependent on another request.",
        "technical": "424 Failed Dependency: The request failed because it depended on another request and that request failed.",
        "funny": "Looks like this request's got a partner in crime - but their luck ran out! Failed dependency.",
        "empathetic": "We apologize, but the request failed because it depended on another request that also failed.",
        "educational": "Status code 424 indicates that the request failed because it depended on another request and that request failed."
    },
    425: {
        "formal": "Too early. The server is unwilling to risk processing a request that might be replayed.",
        "informal": "Hold your horses! Server's not ready yet - too early to process this request.",
        "straightforward": "Too early. Server not ready to process request.",
        "technical": "425 Too Early: The server is unwilling to risk processing a request that might be replayed.",
        "funny": "Oops! Looks like the server's not a fan of déjà vu - it's too early to process this request!",
        "empathetic": "We apologize, but the server is unwilling to risk processing a request that might be replayed at this time.",
        "educational": "Status code 425 indicates that the server is unwilling to risk processing a request that might be replayed."
    },
    426: {
        "formal": "Upgrade required. The client should switch to a different protocol.",
        "informal": "Hey there! Time to upgrade - switch to a different protocol.",
        "straightforward": "Upgrade required. Switch to different protocol.",
        "technical": "426 Upgrade Required: The client should switch to a different protocol.",
        "funny": "Looks like it's time for an upgrade! The server's handing out tech advice - switch to a different protocol.",
        "empathetic": "We recommend that the client switches to a different protocol as required by the server.",
        "educational": "Status code 426 indicates that the client should switch to a different protocol as required by the server."
    },
    428: {
        "formal": "Precondition required. The origin server requires the request to be conditional.",
        "informal": "Hold up! The server needs some conditions to be met before it can process this request. Precondition required.",
        "straightforward": "Precondition required. Server needs specific conditions.",
        "technical": "428 Precondition Required: The origin server requires the request to be conditional.",
        "funny": "Looks like the server's got a checklist - it needs some conditions to be met before processing this request. Precondition required!",
        "empathetic": "We apologize, but the origin server requires the request to be conditional before processing it.",
        "educational": "Status code 428 indicates that the origin server requires the request to be conditional."
    },
    429: {
        "formal": "Too many requests. The user has sent too many requests in a given amount of time.",
        "informal": "Whoa there! Slow down! You've sent too many requests too quickly. Too many requests.",
        "straightforward": "Too many requests. User exceeded request limit.",
        "technical": "429 Too Many Requests: The user has sent too many requests in a given amount of time.",
        "funny": "Oops! Looks like you're in a hurry! The server's got its hands full with your requests - too many requests!",
        "empathetic": "We apologize, but the user has sent too many requests in a given amount of time.",
        "educational": "Status code 429 indicates that the user has sent too many requests in a given amount of time."
    },
    431: {
        "formal": "Request header fields too large. The server is unwilling to process the request because its header fields are too large.",
        "informal": "Oops! Looks like the server's feeling overwhelmed by those header fields. Request header fields too large.",
        "straightforward": "Request header fields too large. Server can't handle them.",
        "technical": "431 Request Header Fields Too Large: The server is unwilling to process the request because its header fields are too large.",
        "funny": "Looks like the server's got a headache from those big header fields! It can't handle them - request header fields too large!",
        "empathetic": "We apologize, but the server is unwilling to process the request because its header fields are too large.",
        "educational": "Status code 431 indicates that the server is unwilling to process the request because its header fields are too large."
    },
    451: {
        "formal": "Unavailable for legal reasons. The server is denying access to the resource as a consequence of a legal demand.",
        "informal": "Sorry! Access to the resource is blocked due to legal reasons. Unavailable for legal reasons.",
        "straightforward": "Unavailable for legal reasons. Access blocked.",
        "technical": "451 Unavailable For Legal Reasons: The server is denying access to the resource as a consequence of a legal demand.",
        "funny": "Uh-oh! Looks like the server's tangled up in some legal red tape - access denied for legal reasons!",
        "empathetic": "We regret to inform you that access to the resource is blocked due to legal reasons.",
        "educational": "Status code 451 indicates that the server is denying access to the resource as a consequence of a legal demand."
    },
    500: {
        "formal": "Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request.",
        "informal": "Whoopsie! Something went wrong on the server. Internal Server Error.",
        "straightforward": "Internal Server Error. Server encountered unexpected condition.",
        "technical": "500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
        "funny": "Oops! Looks like the server's having a bad day - it encountered an unexpected condition. Internal Server Error!",
        "empathetic": "We apologize, but something unexpected occurred on the server, preventing it from fulfilling the request.",
        "educational": "Status code 500 indicates that the server encountered an unexpected condition that prevented it from fulfilling the request."
    },
    501: {
        "formal": "Not Implemented. The server does not support the functionality required to fulfill the request.",
        "informal": "Oops! The server can't do that. Not Implemented.",
        "straightforward": "Not Implemented. Server doesn't support functionality.",
        "technical": "501 Not Implemented: The server does not support the functionality required to fulfill the request.",
        "funny": "Uh-oh! Looks like the server missed the memo - it doesn't support that functionality. Not Implemented!",
        "empathetic": "We apologize, but the server does not support the functionality required to fulfill the request.",
        "educational": "Status code 501 indicates that the server does not support the functionality required to fulfill the request."
    },
    502: {
        "formal": "Bad Gateway. The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
        "informal": "Oops! The server's gateway got confused. Bad Gateway.",
        "straightforward": "Bad Gateway. Invalid response received.",
        "technical": "502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
        "funny": "Looks like the server's playing telephone, but it got a bad connection! Bad Gateway.",
        "empathetic": "We apologize, but the server received an invalid response from the upstream server while attempting to fulfill the request.",
        "educational": "Status code 502 indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request."
    },
    503: {
        "formal": "Service Unavailable. The server is currently unable to handle the request due to temporary overloading or maintenance of the server.",
        "informal": "Hold up! The server's taking a break. Service Unavailable.",
        "straightforward": "Service Unavailable. Server temporarily overloaded or under maintenance.",
        "technical": "503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.",
        "funny": "Looks like the server's on vacation! It's temporarily unavailable. Service Unavailable.",
        "empathetic": "We apologize, but the server is currently unable to handle the request due to temporary overloading or maintenance.",
        "educational": "Status code 503 indicates that the server is currently unable to handle the request due to temporary overloading or maintenance of the server."
    },
    504: {
        "formal": "Gateway Timeout. The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it accessed in attempting to fulfill the request.",
        "informal": "Uh-oh! The server's waiting for a response, but it's taking too long. Gateway Timeout.",
        "straightforward": "Gateway Timeout. Server didn't receive timely response.",
        "technical": "504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it accessed in attempting to fulfill the request.",
        "funny": "Looks like the server's playing the waiting game, but it's not very patient! Gateway Timeout.",
        "empathetic": "We apologize, but the server did not receive a timely response from the upstream server while attempting to fulfill the request.",
        "educational": "Status code 504 indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server it accessed in attempting to fulfill the request."
    },
    505: {
        "formal": "HTTP Version Not Supported. The server does not support the HTTP protocol version used in the request.",
        "informal": "Oops! Looks like the server's not up to date. HTTP Version Not Supported.",
        "straightforward": "HTTP Version Not Supported. Server doesn't support protocol version.",
        "technical": "505 HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.",
        "funny": "Looks like the server's stuck in the past! It doesn't support that HTTP version. HTTP Version Not Supported.",
        "empathetic": "We apologize, but the server does not support the HTTP protocol version used in the request.",
        "educational": "Status code 505 indicates that the server does not support the HTTP protocol version used in the request."
    },
    506: {
        "formal": "Variant Also Negotiates. Transparent content negotiation for the request results in a circular reference.",
        "informal": "Oops! Looks like we've got a negotiation problem. Variant Also Negotiates.",
        "straightforward": "Variant Also Negotiates. Negotiation issue detected.",
        "technical": "506 Variant Also Negotiates: Transparent content negotiation for the request results in a circular reference.",
        "funny": "Looks like the negotiation table's got a roundabout! Variant Also Negotiates.",
        "empathetic": "We apologize, but transparent content negotiation for the request resulted in a circular reference.",
        "educational": "Status code 506 indicates that transparent content negotiation for the request results in a circular reference."
    },
    507: {
        "formal": "Insufficient Storage. The server is unable to store the representation needed to complete the request.",
        "informal": "Oops! Looks like the server's running out of space. Insufficient Storage.",
        "straightforward": "Insufficient Storage. Server unable to store representation.",
        "technical": "507 Insufficient Storage: The server is unable to store the representation needed to complete the request.",
        "funny": "Looks like the server's storage closet is full! It can't store what you're asking for. Insufficient Storage.",
        "empathetic": "We apologize, but the server is unable to store the representation needed to complete the request.",
        "educational": "Status code 507 indicates that the server is unable to store the representation needed to complete the request."
    },
    508: {
        "formal": "Loop Detected. The server detected an infinite loop while processing the request.",
        "informal": "Uh-oh! The server's caught in a loop. Loop Detected.",
        "straightforward": "Loop Detected. Server detected infinite loop.",
        "technical": "508 Loop Detected: The server detected an infinite loop while processing the request.",
        "funny": "Looks like the server's stuck in a loop-de-loop! Loop Detected.",
        "empathetic": "We apologize, but the server detected an infinite loop while processing the request.",
        "educational": "Status code 508 indicates that the server detected an infinite loop while processing the request."
    },
    510: {
        "formal": "Not Extended. Further extensions to the request are required for the server to fulfill it.",
        "informal": "Hey there! The server needs more information to fulfill your request. Not Extended.",
        "straightforward": "Not Extended. Server needs further extensions.",
        "technical": "510 Not Extended: Further extensions to the request are required for the server to fulfill it.",
        "funny": "Looks like the server's saying 'give me more!' - it needs further extensions. Not Extended.",
        "empathetic": "We apologize, but further extensions to the request are required for the server to fulfill it.",
        "educational": "Status code 510 indicates that further extensions to the request are required for the server to fulfill it."
    },
    511: {
        "formal": "Network Authentication Required. The client needs to authenticate to gain network access.",
        "informal": "Hold up! You need to log in to access the network. Network Authentication Required.",
        "straightforward": "Network Authentication Required. Client needs to authenticate.",
        "technical": "511 Network Authentication Required: The client needs to authenticate to gain network access.",
        "funny": "Looks like the server's playing the gatekeeper! You need to authenticate to access the network. Network Authentication Required.",
        "empathetic": "We apologize, but the client needs to authenticate to gain network access.",
        "educational": "Status code 511 indicates that the client needs to authenticate to gain network access."
    }
};
