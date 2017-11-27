const AJV = require('ajv');
var ajv = new AJV(); // options can be passed, e.g. {allErrors: true}

// var schema = {
//     "properties": {
//         "foo": { "type": "string" },
//         "bar": { "type": "number", "maximum": 3 }
//     }
// };

//var validate = ajv.compile(schema);

// test({ "foo": "abc", "bar": 2 });
// test({ "foo": 2, "bar": 4 });

//First test with own schema:
const choiceSchema = require('./src/schemas/Choice.json');
var validate = ajv.compile(choiceSchema);

let choiceObject = { textId: "abc", outcomes: [], displayCondition: "a=x" };
test(choiceObject, "Choice object");

function test(data, name) {
    var valid = validate(data);
    if (!name) {
        if (valid) console.log('Valid!');
        else console.log('Invalid: ' + ajv.errorsText(validate.errors));
        return;
    }
    if (valid) console.log(name + ' Valid!');
    else console.log(name + ' Invalid: ' + ajv.errorsText(validate.errors));

}