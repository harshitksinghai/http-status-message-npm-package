# status-quotes

status-quotes is an npm package that provides a collection of status code messages tailored for various tones, suitable for displaying in web applications, APIs, or any other software that communicates HTTP status codes to users.

## Installation

You can install status-quotes using npm:

npm install status-quotes

## Usage

```javascript
const { getStatusMessage } = require('status-quotes');
// or
import { getStatusMessage } from 'status-quotes'; // ES6 import syntax

// Get a formal message for status code 404
const message = getStatusMessage(404, 'formal');
console.log(message);
```

## API

### `getStatusMessage(statusCode, messageTone)`

Returns a message string corresponding to the given HTTP status code and tone.

- `statusCode` (number): The HTTP status code (e.g., 200, 404, 500).
- `messageTone` (string): The tone of the message. Available options: `formal`, `informal`, `straightforward`, `technical`, `funny`, `empathetic`, `educational`.

### Available Message Tones
// all lower case
- **formal**: Polite and professional tone suitable for official communication.
- **informal**: Casual and friendly tone for a more relaxed atmosphere.
- **straightforward**: Direct and clear tone without any frills.
- **technical**: Tone tailored for technical audiences with precise language.
- **funny**: Humorous tone to lighten the mood and engage users.
- **empathetic**: Compassionate and understanding tone for delicate situations.
- **educational**: Informative tone providing explanations and guidance.

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or encounter any issues, please [open an issue](https://github.com/harshitksinghai/status-quotes-npm-package/issues) or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
