#### Problem Statement - Chat bot for payment & transaction related query

### Tech Stack

- Frontend - Angular,
- Backend - Node js
- NLP - Node js
- Caching - Redis
- DB - Postgresql

```plaintext
                                +--------------------------+
                                |     Client (Browser)     |
                                +--------------------------+
                                          |
                                          | Angular Frontend
                                          |
                                +--------------------------+
                                |  Chat Component          |
                                |                          |
                                | - Display FAQs           |
                                | - Capture User Input     |
                                | - Display Chat History   |
                                +--------------------------+
                                          |
                                          | HTTP Requests (GET/POST)
                                          |
                            +-------------------------------+
                            |  Chat Service                 |
                            |                               |
                            | - Fetch FAQs                  |
                            | - Send User Queries           |
                            | - Fetch FAQ Answers           |
                            +-------------------------------+
                                          |
                                          | HTTP Requests (GET/POST)
                                          |
                          +-----------------------------------+
                          |          Node.js Server           |
                          +-----------------------------------+
                          |  Endpoints:                       |
                          |  - /faqs (GET)                    |
                          |  - /faq-answer (POST)             |
                          |  - /chat (POST)                   |
                          +-----------------------------------+
                                          |
                                          | LangChain API
                                          |
                         +------------------------------+
                         |         LangChain            |
                         +------------------------------+
                         | - Manage Prompts             |
                         | - Generate Responses         |
                         +------------------------------+
```
