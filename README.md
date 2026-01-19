# hello-js

A simple JavaScript/Node.js project with intentional defects for testing Coverity static analysis.

## Included Defects

| Defect Type | Description |
|-------------|-------------|
| SQLI | SQL injection vulnerability |
| COMMAND_INJECTION | Command injection via execSync |
| XSS | Cross-site scripting vulnerability |
| PATH_TRAVERSAL | Path traversal vulnerability |
| HARDCODED_CREDENTIALS | Hardcoded passwords |
| PROTOTYPE_POLLUTION | Unsafe object merge |
| CODE_INJECTION | Unsafe eval usage |
| RESOURCE_LEAK | File descriptor not closed |
| NULL_RETURNS | Undefined dereference |

## Run

```bash
node index.js
```

## Static Analysis

```bash
coverity scan --project-dir . --local ./output
```

## License

MIT
