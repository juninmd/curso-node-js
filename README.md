# curso-node-js

## Description

Course material for Node.js: lesson notes and example code, from JavaScript basics to a small Express + MySQL REST API.

## Structure

| Folder | Contents |
|---|---|
| `aula-01/` | Lesson 1 notes (`AULA1.md`): JavaScript fundamentals. No runnable code. |
| `aula-02/aula-2/` | Lesson 2 dependencies (`package.json`, Express, mysql, nodemailer). No runnable code yet. |
| `aula-03/exemplos/` | Plain Node.js examples: callbacks, promises and async/await (`node <file>.js`). |
| `aula-03/api/` | Express API (health check, bodyParser, CORS). Has its own `package.json`. |
| `aula-04/` | Express API for `funcionario` (employees) backed by MySQL. Has its own `package.json`. |

## Installation

1.  Clone the repository: `git clone https://github.com/juninmd/curso-node-js.git`
2.  Navigate to the project directory: `cd curso-node-js`
3.  There is no root `package.json`. Install dependencies inside the folder you want to run, using `npm install` or `yarn install`. For example, `cd aula-04 && npm install`.

## Usage

Examples in `aula-03/exemplos/` run directly with Node.js:

```bash
node aula-03/exemplos/callback.js
node aula-03/exemplos/promisse.js
node aula-03/exemplos/async.js
```

### Running the APIs

The API folders start an Express server on port `3500`. `aula-04` reads the port from the `PORT` environment variable (default `3500`); `aula-03/api` hardcodes it.

```bash
cd aula-03/api     # or: cd aula-04
npm install
node app.js
```

### `aula-04` requirements

`aula-04/config.js` connects to MySQL at `localhost:3306` with database `nodejs`, user `root` and password `root`. Edit that file for your environment. The `funcionario` table must exist before the API can read or write data.

Endpoints:

| Method | Path | Description |
|---|---|---|
| `GET` | `/funcionario` | List employees; optional `nome` filter (`cargo` is applied only together with `nome`) |
| `GET` | `/funcionario/:id` | Get one employee |
| `POST` | `/funcionario` | Create an employee (JSON body) |
| `PUT` | `/funcionario/:id` | Update an employee (JSON body) and return it |
| `DELETE` | `/funcionario/:id` | Delete an employee |

> Note: the `aula-04` repository builds SQL by string concatenation, so it is not safe for untrusted input. It is kept this way for teaching purposes.

## Contributing

Feel free to contribute by creating new files or issues within the project's structure.
