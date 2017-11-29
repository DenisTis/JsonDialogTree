const AJV = require('ajv');
var ajv = new AJV(); // options can be passed, e.g. {allErrors: true}

const dialogSchema = require('./schemas/Dialog.json');
const dialogItemSchema = require('./schemas/DialogItem.json');
const participantItemSchema = require('./schemas/ParticipantItem.json');
const choiceSchema = require('./schemas/Choice.json');
const choiceOutcomeSchema = require('./schemas/ChoiceOutcome.json');

ajv.addSchema(dialogItemSchema);
ajv.addSchema(participantItemSchema);
ajv.addSchema(choiceSchema);
ajv.addSchema(choiceOutcomeSchema);

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
