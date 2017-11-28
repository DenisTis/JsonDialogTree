import { validateChoiceObject } from './src/SchemaValidator';

export { validateChoiceObject }
from './src/SchemaValidator.js';

validateChoiceObject();
// const AJV = require('ajv');
// var ajv = new AJV(); // options can be passed, e.g. {allErrors: true}

// //First test with own schema:
// //Consider if using IDs in schema will solve this problem of additional uploading
// const choiceSchema = require('./src/schemas/Choice.json');
// const choiceOutcomeSchema = require('./src/schemas/ChoiceOutcome.json');
// ajv.addSchema(choiceOutcomeSchema);
// //ajv.addSchema(choiceOutcomeSchema, "ChoiceOutcome.json");
// var validate = ajv.compile(choiceSchema);

// let choiceObject = { textId: "abc", outcomes: [{ nextId: "something" }], displayCondition: "a>x" };
// test(choiceObject, "Choice object");

// function test(data, name) {
//     var valid = validate(data);
//     if (!name) {
//         if (valid) console.log('Valid!');
//         else console.log('Invalid: ' + ajv.errorsText(validate.errors));
//         return;
//     }
//     if (valid) console.log(name + ' Valid!');
//     else console.log(name + ' Invalid: ' + ajv.errorsText(validate.errors));

// }