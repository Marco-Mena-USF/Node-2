What is a JWT?

JWT stands for JSON Web Token. It's like a digital passport that securely carries information between parties. It's commonly used for authentication and information exchange in web development.
What is the signature portion of the JWT? What does it do?

The signature is like a seal on the passport. It ensures that the information in the JWT hasn't been tampered with. It's created using a secret key and helps verify the authenticity of the token.
If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, the payload in a JWT is base64-encoded, not encrypted. If intercepted, anyone can decode and read the information. That's why sensitive information should be encrypted before putting it in the payload.
How can you implement authentication with a JWT? Describe how it works at a high level.

When a user logs in, the server creates a JWT containing the user's ID and some information. This JWT is sent to the user. For subsequent requests, the user includes this token in the request header. The server verifies the token's signature to ensure it's valid and extracts the user information from the payload to authenticate the user.
Compare and contrast unit, integration, and end-to-end tests.

Unit tests check small, isolated parts of the code. Integration tests check if those parts work together correctly. End-to-end tests ensure the entire application works as expected, simulating real user scenarios.
What is a mock? What are some things you would mock?

A mock is like a stand-in actor for testing. It mimics the behavior of a real component but isn't the real thing. You'd mock things like external APIs, databases, or services to test how your code interacts with them.
What is continuous integration?

Continuous Integration (CI) is a practice where developers frequently merge their code into a shared repository. Automated tests run to catch issues early. It ensures that changes don't break existing code and maintains a healthy, continuously evolving codebase.
What is an environment variable, and what are they used for?

An environment variable is like a setting for your program stored outside the code. It contains information like database URLs or API keys. Using environment variables keeps sensitive information secure and allows easy configuration.
What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a process where tests are written before writing the actual code. Benefits include catching bugs early, improved design, and confidence in code changes. Drawbacks might include more time spent in the beginning and the challenge of writing tests for complex systems.
What is the value of using JSONSchema for validation?

JSONSchema defines the structure of JSON data. Using it for validation ensures that the data your program receives or sends follows a specific format. This helps prevent unexpected errors due to incorrect data.
What are some ways to decide which code to test?
Test critical and complex parts of your code, especially where errors could have severe consequences. Also, focus on functions that handle external input or output, ensuring they work correctly.
What does RETURNING do in SQL? When would you use it?
RETURNING is used after an SQL statement (like INSERT, UPDATE, or `DELETE) to return the updated or inserted data. You'd use it when you want to see or work with the data that was just modified.
What are some differences between Web Sockets and HTTP?
HTTP is a request-response protocol, while Web Sockets allow for full-duplex communication. Web Sockets are more suitable for real-time applications like chat or live updates, whereas HTTP is better for traditional web requests.
Did you prefer using Flask over Express? Why or why not?
There's no right answer here. It depends on personal preference and project requirements. Flask is lightweight and great for small projects, while Express is robust and widely used in the JavaScript ecosystem. Your choice might depend on your familiarity with the language or the features each framework provides.