const AJV = require('ajv');
var ajv = new AJV(); // options can be passed, e.g. {allErrors: true}

const dialogsSchema = require('./schemas/Dialogs.json');
const dialogSchema = require('./schemas/Dialog.json');
const messageSchema = require('./schemas/Message.json');
const choiceSchema = require('./schemas/Choice.json');
const evaluationSchema = require('./schemas/Evaluation.json');

ajv.addSchema(dialogsSchema);
ajv.addSchema(dialogSchema);
ajv.addSchema(messageSchema);
ajv.addSchema(choiceSchema);
ajv.addSchema(evaluationSchema);

export function validateChoiceObject() {
  let validate = ajv.compile(choiceSchema);
  let choiceObject = { textId: "abc", outcomes: [{ nextId: "something" }], displayCondition: "a>x" };
  let valid = validate(choiceObject);
  if (valid) console.log('Valid!');
  else console.log('Invalid: ' + ajv.errorsText(validate.errors));
  return;
}

export function validateObject(object, schemaName) {
  let validationSchema = ajv.getSchema(schemaName);
  if (validationSchema) {
    let validate = ajv.compile(validationSchema);
    if (validate(object)) {
      console.log('Valid!');
      return;
    }
    console.log('Invalid: ' + ajv.errorsText(validate.errors));
  }
}
