# Exception Manager for TypeScript with Express.js
## USE


### Middlewares
```typescript
import {
  customErrorMiddleware,
  errorMiddlleware,
  getLogErrorMiddleware,
} from "bokchalhandler";

//code express
//last middleware
app.use(getLogErrorMiddleware());
app.use(customErrorMiddleware);
app.use(errorMiddlleware);
```

### Class Exception for throw error
```typescript
import { CustomError } from "bokchalhandler/dist/CustomError";

function testException() {
  throw CustomError.notDataFound("No systems found");
}
```